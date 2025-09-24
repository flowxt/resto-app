import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH - Mettre à jour le statut d'une commande
export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();

    // Validation des données
    if (!status) {
      return NextResponse.json(
        { error: "Statut requis" },
        { status: 400 }
      );
    }

    // Vérifier que le statut est valide
    const validStatuses = ["PENDING", "READY", "COMPLETED", "CANCELLED"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Statut invalide" },
        { status: 400 }
      );
    }

    // Mettre à jour la commande
    const updatedCommande = await prisma.commandePlanche.update({
      where: { id },
      data: { 
        status,
        updatedAt: new Date()
      },
    });

    return NextResponse.json({
      success: true,
      commande: updatedCommande,
      message: "Statut mis à jour avec succès",
    }, { status: 200 });

  } catch (error) {
    console.error("Erreur mise à jour commande:", error);
    
    // Si la commande n'existe pas
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: "Commande non trouvée" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// GET - Récupérer une commande spécifique
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const commande = await prisma.commandePlanche.findUnique({
      where: { id },
    });

    if (!commande) {
      return NextResponse.json(
        { error: "Commande non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json({ commande }, { status: 200 });

  } catch (error) {
    console.error("Erreur récupération commande:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
