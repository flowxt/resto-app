import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Récupérer les réservations pour une date donnée
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get('date');
    
    if (!dateParam) {
      return NextResponse.json({ success: false, error: 'Date requise.' }, { status: 400 });
    }

    const selectedDate = new Date(dateParam);
    selectedDate.setHours(0, 0, 0, 0);
    
    // Date de fin (même jour à 23:59:59)
    const endDate = new Date(selectedDate);
    endDate.setHours(23, 59, 59, 999);

    // Récupérer toutes les réservations du jour
    const reservations = await prisma.reservation.findMany({
      where: {
        date: {
          gte: selectedDate,
          lte: endDate,
        },
      },
      orderBy: [
        { time: 'asc' },
        { createdAt: 'asc' }
      ],
    });

    // Calculer les statistiques
    const stats = {
      today: {
        total: reservations.length,
        confirmed: reservations.filter(r => r.status === 'CONFIRMED').length,
        pending: reservations.filter(r => r.status === 'PENDING').length,
        cancelled: reservations.filter(r => r.status === 'CANCELLED').length,
        completed: reservations.filter(r => r.status === 'COMPLETED').length,
      }
    };

    // Grouper par service pour calculer l'occupation
    const groupByService = (reservations) => {
      const services = { midi: [], soir1: [], soir2: [] };
      
      reservations.forEach(reservation => {
        const [hours] = reservation.time.split(':').map(Number);
        
        if (hours >= 11 && hours <= 14) {
          services.midi.push(reservation);
        } else if (hours >= 19 && hours < 20.5) {
          services.soir1.push(reservation);
        } else if (hours >= 20.5 && hours <= 22) {
          services.soir2.push(reservation);
        }
      });
      
      return services;
    };

    const serviceGroups = groupByService(reservations);
    
    // Ajouter les stats par service
    stats.midi = {
      total: serviceGroups.midi.length,
      confirmed: serviceGroups.midi.filter(r => r.status === 'CONFIRMED').length,
      maxTables: 20 // 80 places ÷ 4 personnes par table
    };
    
    stats.soir1 = {
      total: serviceGroups.soir1.length,
      confirmed: serviceGroups.soir1.filter(r => r.status === 'CONFIRMED').length,
      maxTables: 10 // 40 places ÷ 4 personnes par table
    };
    
    stats.soir2 = {
      total: serviceGroups.soir2.length,
      confirmed: serviceGroups.soir2.filter(r => r.status === 'CONFIRMED').length,
      maxTables: 10 // 40 places ÷ 4 personnes par table
    };

    return NextResponse.json({ 
      success: true, 
      reservations,
      stats,
      date: dateParam 
    }, { status: 200 });

  } catch (error) {
    console.error('Erreur API admin reservations:', error);
    return NextResponse.json({ success: false, error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
