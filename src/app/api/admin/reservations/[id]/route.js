import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// PATCH - Mettre à jour le statut d'une réservation
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();

    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID et statut requis.' }, { status: 400 });
    }

    // Vérifier que le statut est valide
    const validStatuses = ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ success: false, error: 'Statut invalide.' }, { status: 400 });
    }

    // Mettre à jour la réservation
    const updatedReservation = await prisma.reservation.update({
      where: { id },
      data: { 
        status,
        updatedAt: new Date()
      },
    });

    // Log pour audit (optionnel)
    console.log(`Réservation ${id} mise à jour vers ${status} à ${new Date().toISOString()}`);

    return NextResponse.json({ 
      success: true, 
      message: `Réservation ${getStatusText(status).toLowerCase()}`,
      reservation: updatedReservation 
    }, { status: 200 });

  } catch (error) {
    console.error('Erreur mise à jour réservation:', error);
    
    // Gestion d'erreur spécifique si la réservation n'existe pas
    if (error.code === 'P2025') {
      return NextResponse.json({ success: false, error: 'Réservation introuvable.' }, { status: 404 });
    }
    
    return NextResponse.json({ success: false, error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}

// DELETE - Supprimer une réservation
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID requis.' }, { status: 400 });
    }

    // Supprimer la réservation
    const deletedReservation = await prisma.reservation.delete({
      where: { id },
    });

    // Log pour audit
    console.log(`Réservation ${id} supprimée à ${new Date().toISOString()}`);

    return NextResponse.json({ 
      success: true, 
      message: 'Réservation supprimée avec succès',
      reservation: deletedReservation 
    }, { status: 200 });

  } catch (error) {
    console.error('Erreur suppression réservation:', error);
    
    // Gestion d'erreur spécifique si la réservation n'existe pas
    if (error.code === 'P2025') {
      return NextResponse.json({ success: false, error: 'Réservation introuvable.' }, { status: 404 });
    }
    
    return NextResponse.json({ success: false, error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}

// GET - Récupérer une réservation spécifique
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID requis.' }, { status: 400 });
    }

    const reservation = await prisma.reservation.findUnique({
      where: { id },
    });

    if (!reservation) {
      return NextResponse.json({ success: false, error: 'Réservation introuvable.' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      reservation 
    }, { status: 200 });

  } catch (error) {
    console.error('Erreur récupération réservation:', error);
    return NextResponse.json({ success: false, error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}

// Fonction utilitaire pour les messages de statut
function getStatusText(status) {
  switch (status) {
    case 'PENDING': return 'En attente'
    case 'CONFIRMED': return 'Confirmée'
    case 'CANCELLED': return 'Annulée'
    case 'COMPLETED': return 'Terminée'
    default: return status
  }
}
