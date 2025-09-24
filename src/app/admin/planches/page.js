"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/AdminLayout";

export default function AdminPlanches() {
  const [commandes, setCommandes] = useState([]);
  const [stats, setStats] = useState({
    today: {
      total: 0,
      pending: 0,
      ready: 0,
      completed: 0,
      cancelled: 0,
      revenue: 0,
    },
  });
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem("adminLoggedIn")
    ) {
      router.push("/admin");
      return;
    }

    fetchCommandes();
  }, [selectedDate, router]);

  const fetchCommandes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/planches/commande?date=${selectedDate}`
      );

      if (!response.ok) {
        throw new Error("Erreur lors du chargement");
      }

      const data = await response.json();
      setCommandes(data.commandes || []);
      setStats(data.stats || stats);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateCommandeStatus = async (commandeId, newStatus) => {
    try {
      const response = await fetch(`/api/planches/commande/${commandeId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchCommandes(); // Recharger les données
      } else {
        throw new Error("Erreur lors de la mise à jour");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la mise à jour du statut");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-orange-100 text-orange-800";
      case "READY":
        return "bg-blue-100 text-blue-800";
      case "COMPLETED":
        return "bg-green-100 text-green-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "PENDING":
        return "⏳ En préparation";
      case "READY":
        return "✅ Prête";
      case "COMPLETED":
        return "🎉 Récupérée";
      case "CANCELLED":
        return "❌ Annulée";
      default:
        return status;
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-nude-900">
              Commandes de Planches
            </h1>
            <p className="text-nude-600 font-body">
              Gérez les commandes click & collect
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-nude-300 rounded-lg font-ui focus:outline-none focus:border-chalet-wood"
            />
            <button
              onClick={fetchCommandes}
              className="bg-chalet-wood hover:bg-nude-800 text-nude-50 px-4 py-2 rounded-lg font-ui font-medium transition-colors"
            >
              Actualiser
            </button>
          </div>
        </div>

        {/* Statistiques du jour */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
            <div className="text-2xl font-bold text-nude-900">
              {stats.today.total}
            </div>
            <div className="text-nude-600 font-ui">Total</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg shadow-sm border border-orange-200">
            <div className="text-2xl font-bold text-orange-800">
              {stats.today.pending}
            </div>
            <div className="text-orange-600 font-ui">En préparation</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200">
            <div className="text-2xl font-bold text-blue-800">
              {stats.today.ready}
            </div>
            <div className="text-blue-600 font-ui">Prêtes</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-200">
            <div className="text-2xl font-bold text-green-800">
              {stats.today.completed}
            </div>
            <div className="text-green-600 font-ui">Récupérées</div>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-red-200">
            <div className="text-2xl font-bold text-red-800">
              {stats.today.cancelled}
            </div>
            <div className="text-red-600 font-ui">Annulées</div>
          </div>
          <div className="bg-chalet-warm/10 p-6 rounded-lg shadow-sm border border-chalet-warm/30">
            <div className="text-2xl font-bold text-chalet-wood">
              {stats.today.revenue.toFixed(2)}€
            </div>
            <div className="text-chalet-wood font-ui">Revenus</div>
          </div>
        </div>

        {/* Liste des commandes */}
        <div className="bg-nude-50 rounded-lg shadow-sm border border-nude-200">
          <div className="p-6 border-b border-nude-200">
            <h2 className="text-xl font-heading font-semibold text-nude-900">
              Commandes du{" "}
              {new Date(selectedDate + "T00:00:00").toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h2>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-chalet-wood mx-auto mb-4"></div>
                <p className="text-nude-600 font-body">Chargement...</p>
              </div>
            ) : commandes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-nude-600 font-body">
                  Aucune commande pour cette date
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {commandes.map((commande) => (
                  <div
                    key={commande.id}
                    className="bg-white p-6 rounded-lg border border-nude-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-nude-900">
                          {commande.name}
                        </h3>
                        <p className="text-nude-600 font-body text-sm">
                          {commande.email} • {commande.phone}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-ui font-medium ${getStatusColor(
                          commande.status
                        )}`}
                      >
                        {getStatusText(commande.status)}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-ui font-semibold text-nude-800 mb-2">
                          📦 Commande
                        </h4>
                        <p className="text-nude-700 font-body">
                          <strong>{commande.plancheName}</strong> × {commande.quantite}
                        </p>
                        <p className="text-chalet-wood font-bold">
                          {commande.total.toFixed(2)}€
                        </p>
                      </div>

                      <div>
                        <h4 className="font-ui font-semibold text-nude-800 mb-2">
                          🕐 Récupération
                        </h4>
                        <p className="text-nude-700 font-body">
                          {new Date(commande.dateRecuperation).toLocaleDateString("fr-FR", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                          })}
                        </p>
                        <p className="text-nude-700 font-body">
                          Créneau: {commande.creneauRecuperation}
                        </p>
                      </div>
                    </div>

                    {/* Allergies et commentaires */}
                    {(commande.allergies || commande.commentaires) && (
                      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        {commande.allergies && (
                          <div className="mb-2">
                            <span className="font-ui font-semibold text-amber-800">
                              🚨 Allergies:
                            </span>
                            <span className="text-amber-700 ml-2 font-body">
                              {commande.allergies}
                            </span>
                          </div>
                        )}
                        {commande.commentaires && (
                          <div>
                            <span className="font-ui font-semibold text-amber-800">
                              💬 Commentaires:
                            </span>
                            <span className="text-amber-700 ml-2 font-body">
                              {commande.commentaires}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Actions selon le statut */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {commande.status === "PENDING" && (
                        <>
                          <button
                            onClick={() =>
                              updateCommandeStatus(commande.id, "READY")
                            }
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors"
                          >
                            ✅ Marquer prête
                          </button>
                          <button
                            onClick={() =>
                              updateCommandeStatus(commande.id, "CANCELLED")
                            }
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors"
                          >
                            ❌ Annuler
                          </button>
                        </>
                      )}
                      {commande.status === "READY" && (
                        <>
                          <button
                            onClick={() =>
                              updateCommandeStatus(commande.id, "COMPLETED")
                            }
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors"
                          >
                            🎉 Marquer récupérée
                          </button>
                          <button
                            onClick={() =>
                              updateCommandeStatus(commande.id, "PENDING")
                            }
                            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors"
                          >
                            ⏳ Remettre en préparation
                          </button>
                        </>
                      )}
                      {(commande.status === "COMPLETED" ||
                        commande.status === "CANCELLED") && (
                        <button
                          onClick={() =>
                            updateCommandeStatus(commande.id, "PENDING")
                          }
                          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors"
                        >
                          🔄 Réactiver
                        </button>
                      )}
                    </div>

                    <div className="mt-3 text-xs text-nude-500 font-body">
                      Commandé le{" "}
                      {new Date(commande.createdAt).toLocaleDateString("fr-FR")}{" "}
                      à {new Date(commande.createdAt).toLocaleTimeString("fr-FR")}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
