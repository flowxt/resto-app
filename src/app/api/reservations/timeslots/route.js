import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// 📋 API pour récupérer tous les créneaux horaires
export async function GET() {
  try {
    const timeSlots = await prisma.timeSlot.findMany({
      where: { isActive: true },
      orderBy: { time: 'asc' }
    })

    // 🍽️ Organiser les créneaux par service
    const organizedSlots = {
      midi: timeSlots.filter(slot => {
        const hour = parseInt(slot.time.split(':')[0])
        return hour >= 11 && hour <= 14
      }),
      soir1: timeSlots.filter(slot => {
        const hour = parseInt(slot.time.split(':')[0])
        return hour >= 19 && hour <= 20
      }),
      soir2: timeSlots.filter(slot => {
        const hour = parseInt(slot.time.split(':')[0])
        return hour >= 20 && hour <= 22
      })
    }

    return NextResponse.json({
      success: true,
      timeSlots: organizedSlots,
      all: timeSlots
    })

  } catch (error) {
    console.error('❌ Erreur API timeslots:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des créneaux' }, 
      { status: 500 }
    )
  }
}
