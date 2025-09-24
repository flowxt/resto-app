import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST - Créer une nouvelle commande de planche
export async function POST(request) {
  try {
    const data = await request.json();

    // Validation des données
    const {
      name,
      email,
      phone,
      dateRecuperation,
      creneauRecuperation,
      allergies,
      commentaires,
      quantite,
      planche,
      total,
    } = data;

    if (
      !name ||
      !email ||
      !phone ||
      !dateRecuperation ||
      !creneauRecuperation ||
      !planche
    ) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    // Créer la commande dans la base de données
    const commande = await prisma.commandePlanche.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        dateRecuperation: new Date(dateRecuperation),
        creneauRecuperation,
        allergies: allergies?.trim() || null,
        commentaires: commentaires?.trim() || null,
        quantite: parseInt(quantite),
        plancheId: planche.id,
        plancheName: planche.name,
        planchePrice: planche.price,
        total: parseFloat(total),
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        success: true,
        id: commande.id,
        message: "Commande créée avec succès",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur création commande planche:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// GET - Récupérer les commandes (pour l'admin)
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const status = searchParams.get("status");

    let whereClause = {};

    // Filtrer par date si spécifiée
    if (date) {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);

      whereClause.dateRecuperation = {
        gte: startDate,
        lt: endDate,
      };
    }

    // Filtrer par statut si spécifié
    if (status) {
      whereClause.status = status;
    }

    const commandes = await prisma.commandePlanche.findMany({
      where: whereClause,
      orderBy: [{ dateRecuperation: "asc" }, { creneauRecuperation: "asc" }],
    });

    // Statistiques pour aujourd'hui
    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0));
    const todayEnd = new Date(today.setHours(23, 59, 59, 999));

    const statsToday = await prisma.commandePlanche.findMany({
      where: {
        dateRecuperation: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });

    const stats = {
      today: {
        total: statsToday.length,
        pending: statsToday.filter((c) => c.status === "PENDING").length,
        ready: statsToday.filter((c) => c.status === "READY").length,
        completed: statsToday.filter((c) => c.status === "COMPLETED").length,
        cancelled: statsToday.filter((c) => c.status === "CANCELLED").length,
        revenue: statsToday
          .filter((c) => c.status === "COMPLETED")
          .reduce((sum, c) => sum + c.total, 0),
      },
    };

    return NextResponse.json(
      {
        commandes,
        stats,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur récupération commandes:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
