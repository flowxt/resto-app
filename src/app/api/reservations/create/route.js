import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// 📝 API pour créer une nouvelle réservation
export async function POST(request) {
  try {
    const { date, time, guests, name, phone, email, message } = await request.json()
    
    // 📋 Validation des données obligatoires
    if (!date || !time || !guests || !name || !phone) {
      return NextResponse.json(
        { error: 'Données manquantes: date, heure, nombre de personnes, nom et téléphone requis' }, 
        { status: 400 }
      )
    }

    // 🔍 Vérifier à nouveau la disponibilité (sécurité)
    const timeSlot = await prisma.timeSlot.findFirst({
      where: { 
        time: time,
        isActive: true 
      }
    })

    if (!timeSlot) {
      return NextResponse.json(
        { error: 'Créneau horaire non valide' }, 
        { status: 400 }
      )
    }

    // 📊 Compter les réservations existantes
    const existingReservations = await prisma.reservation.count({
      where: {
        date: {
          gte: new Date(date),
          lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1))
        },
        time: time,
        status: {
          in: ['PENDING', 'CONFIRMED']
        }
      }
    })

    // 🚫 Vérifier s'il reste de la place
    if (existingReservations >= timeSlot.maxTables) {
      return NextResponse.json(
        { error: 'Plus de place disponible pour ce créneau' }, 
        { status: 409 } // 409 = Conflict
      )
    }

    // ✅ Créer la réservation
    const reservation = await prisma.reservation.create({
      data: {
        date: new Date(date),
        time: time,
        guests: parseInt(guests),
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        message: message?.trim() || null,
        status: 'PENDING' // En attente de confirmation par le restaurant
      }
    })

    // 🎉 Réservation créée avec succès
    return NextResponse.json({
      success: true,
      reservation: {
        id: reservation.id,
        date: reservation.date.toLocaleDateString('fr-FR'),
        time: reservation.time,
        guests: reservation.guests,
        name: reservation.name,
        status: reservation.status
      },
      message: 'Réservation créée avec succès ! Nous vous rappelons dans les 2h pour confirmation.'
    })

  } catch (error) {
    console.error('❌ Erreur API create reservation:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de la réservation' }, 
      { status: 500 }
    )
  }
}
