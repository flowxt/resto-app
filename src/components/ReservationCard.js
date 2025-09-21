"use client";

import { useState } from "react";

export default function ReservationCard({
  reservation,
  onStatusUpdate,
  getStatusColor,
  getStatusText,
}) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    await onStatusUpdate(reservation.id, newStatus);
    setIsUpdating(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    return timeString.slice(0, 5); // Afficher seulement HH:MM
  };

  return (
    <div className="bg-white rounded-lg border border-nude-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* En-tête avec statut */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="font-ui font-semibold text-nude-900">
            {formatTime(reservation.time)}
          </span>
          <span className="text-nude-600">•</span>
          <span className="font-body text-nude-700">
            {reservation.guests}{" "}
            {reservation.guests > 1 ? "personnes" : "personne"}
          </span>
        </div>

        <span
          className={`px-2 py-1 rounded-full text-xs font-ui font-medium ${getStatusColor(
            reservation.status
          )}`}
        >
          {getStatusText(reservation.status)}
        </span>
      </div>

      {/* Informations client */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-nude-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="font-ui font-medium text-nude-900">
            {reservation.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-nude-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="font-body text-nude-700">{reservation.phone}</span>
        </div>

        {reservation.email && (
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-nude-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-body text-nude-700 text-sm">
              {reservation.email}
            </span>
          </div>
        )}

        {reservation.message && (
          <div className="mt-2 p-2 bg-nude-50 rounded text-sm font-body text-nude-700">
            <span className="font-medium">Message :</span> {reservation.message}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        {reservation.status === "PENDING" && (
          <>
            <button
              onClick={() => handleStatusChange("CONFIRMED")}
              disabled={isUpdating}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors disabled:opacity-50"
            >
              {isUpdating ? "..." : "Confirmer"}
            </button>
            <button
              onClick={() => handleStatusChange("CANCELLED")}
              disabled={isUpdating}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors disabled:opacity-50"
            >
              {isUpdating ? "..." : "Annuler"}
            </button>
          </>
        )}

        {reservation.status === "CONFIRMED" && (
          <>
            <button
              onClick={() => handleStatusChange("COMPLETED")}
              disabled={isUpdating}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors disabled:opacity-50"
            >
              {isUpdating ? "..." : "Terminé"}
            </button>
            <button
              onClick={() => handleStatusChange("CANCELLED")}
              disabled={isUpdating}
              className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-ui font-medium transition-colors disabled:opacity-50"
            >
              {isUpdating ? "..." : "Annuler"}
            </button>
          </>
        )}

        {reservation.status === "LATE" && (
          <>
            <button
              onClick={() => handleStatusChange("CONFIRMED")}
              disabled={isUpdating}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-ui font-medium transition-colors disabled:opacity-50"
            >
              {isUpdating ? "..." : "✅ Arrivé"}
            </button>
            <button
              onClick={() => handleStatusChange("CANCELLED")}
              disabled={isUpdating}
              className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-sm font-ui font-medium transition-colors disabled:opacity-50"
            >
              {isUpdating ? "..." : "🔄 Réattribuer"}
            </button>
          </>
        )}

        {(reservation.status === "CANCELLED" ||
          reservation.status === "COMPLETED") && (
          <div className="flex-1 text-center py-2 text-sm font-body text-nude-500">
            {reservation.status === "CANCELLED"
              ? "Réservation annulée"
              : "Service terminé"}
          </div>
        )}
      </div>

      {/* Heure de création */}
      <div className="mt-3 pt-3 border-t border-nude-100">
        <span className="text-xs font-body text-nude-500">
          Créée le {formatDate(reservation.createdAt)} à{" "}
          {new Date(reservation.createdAt).toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
