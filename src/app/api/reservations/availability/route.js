import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// 🔍 API pour vérifier les disponibilités d'un créneau
export async function POST(request) {
  try {
    const { date, time } = await request.json()
    
    // 📋 Validation des données
    if (!date || !time) {
      return NextResponse.json(
        { error: 'Date et heure requises' }, 
        { status: 400 }
      )
    }

    // 🗓️ Vérifier si la date n'est pas bloquée (ex: lundi fermé)
    const blockedDate = await prisma.blockedDate.findFirst({
      where: {
        date: {
          gte: new Date(date),
          lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
        }
      }
    })

    if (blockedDate) {
      return NextResponse.json({
        available: false,
        remaining: 0,
        message: `Restaurant fermé: ${blockedDate.reason || 'Jour de fermeture'}`
      })
    }

    // ⏰ Récupérer les infos du créneau horaire
    const timeSlot = await prisma.timeSlot.findFirst({
      where: { 
        time: time,
        isActive: true 
      }
    })

    if (!timeSlot) {
      return NextResponse.json({
        available: false,
        remaining: 0,
        message: 'Créneau horaire non disponible'
      })
    }

    // 📊 Compter les réservations existantes pour ce créneau
    const existingReservations = await prisma.reservation.count({
      where: {
        date: {
          gte: new Date(date),
          lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
        },
        time: time,
        status: {
          in: ['PENDING', 'CONFIRMED'] // On compte les réservations actives
        }
      }
    })

    // 🧮 Calculer les places restantes
    const tablesRestantes = timeSlot.maxTables - existingReservations
    const available = tablesRestantes > 0

    return NextResponse.json({
      available,
      remaining: tablesRestantes,
      maxTables: timeSlot.maxTables,
      message: available 
        ? `${tablesRestantes} table(s) disponible(s)` 
        : 'Complet pour ce créneau'
    })

  } catch (error) {
    console.error('❌ Erreur API availability:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' }, 
      { status: 500 }
    )
  }
}
