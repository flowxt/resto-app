import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // 🔍 Récupérer toutes les réservations confirmées d'aujourd'hui
    const todayReservations = await prisma.reservation.findMany({
      where: {
        date: {
          gte: today,
          lt: new Date(today.getTime() + 24 * 60 * 60 * 1000), // +1 jour
        },
        status: "CONFIRMED",
      },
    });

    let lateCount = 0;

    for (const reservation of todayReservations) {
      // 🕐 Construire la date/heure complète de la réservation
      const [hours, minutes] = reservation.time.split(":").map(Number);
      const reservationDateTime = new Date(reservation.date);
      reservationDateTime.setHours(hours, minutes, 0, 0);

      // ⏰ Calculer 20 minutes après l'heure de réservation
      const twentyMinutesLater = new Date(
        reservationDateTime.getTime() + 20 * 60 * 1000
      );

      // 🚨 Si on est plus de 20 minutes après et que la réservation n'est pas "LATE"
      if (now > twentyMinutesLater) {
        // ✅ Marquer comme "LATE"
        await prisma.reservation.update({
          where: { id: reservation.id },
          data: {
            status: "LATE",
            updatedAt: now,
          },
        });

        lateCount++;

        console.log(
          `🚨 Réservation ${reservation.id} (${
            reservation.name
          }) marquée en retard : ${
            reservation.time
          } -> ${now.toLocaleTimeString()}`
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: `Vérification terminée. ${lateCount} réservation(s) marquée(s) en retard.`,
      lateCount,
      checkedAt: now.toISOString(),
    });
  } catch (error) {
    console.error("❌ Erreur lors de la vérification des retards:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors de la vérification des retards",
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
