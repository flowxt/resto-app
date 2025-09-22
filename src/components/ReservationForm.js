"use client";

import { useState, useEffect } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [timeSlots, setTimeSlots] = useState({
    midi: [],
    soir1: [],
    soir2: [],
  });
  const [availability, setAvailability] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // 📅 Charger les créneaux au montage du composant
  useEffect(() => {
    fetchTimeSlots();
  }, []);

  // 🔍 Vérifier disponibilité quand date/heure change
  useEffect(() => {
    if (formData.date && formData.time) {
      checkAvailability(formData.date, formData.time);
    }
  }, [formData.date, formData.time]);

  const fetchTimeSlots = async () => {
    try {
      const response = await fetch("/api/reservations/timeslots");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      const data = JSON.parse(text);

      if (data.success) {
        setTimeSlots(data.timeSlots);
      }
    } catch (error) {
      console.error("Erreur chargement créneaux:", error);
      setTimeSlots({ midi: [], soir1: [], soir2: [] }); // Fallback
    }
  };

  const checkAvailability = async (date, time) => {
    try {
      const response = await fetch("/api/reservations/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, time }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      console.log("Response text:", text); // Debug
      const data = JSON.parse(text);

      setAvailability({ [time]: data });
    } catch (error) {
      console.error("Erreur vérification disponibilité:", error);
      setAvailability({
        [time]: {
          available: false,
          message: "Erreur de vérification",
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/reservations/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();
      console.log("Submit response text:", text); // Debug
      const data = JSON.parse(text);

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        });
        // Réinitialiser le formulaire
        setFormData({
          date: "",
          time: "",
          guests: "2",
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Erreur lors de la réservation",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erreur de connexion. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Date minimum (aujourd&apos;hui)
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">
            Réserver une table
          </h2>
          <p className="font-body text-xl text-nude-700">
            Remplissez le formulaire ci-dessous pour réserver votre table
          </p>
        </div>

        <div className="bg-nude-50 rounded-lg shadow-lg p-8 border border-nude-200">
          {/* ⏰ RÈGLE DES 20 MINUTES */}
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-2xl">⏰</span>
              </div>
              <div className="ml-3">
                <h3 className="font-ui font-semibold text-amber-800 mb-1">
                  Politique de Ponctualité
                </h3>
                <p className="text-sm text-amber-700 font-body">
                  <strong>Attention :</strong> Les tables seront automatiquement
                  réattribuées si vous n&apos;êtes pas présents dans les{" "}
                  <strong>20 minutes</strong> suivant l&apos;heure de votre
                  réservation. Merci de nous prévenir en cas de retard !
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date et heure */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-nude-700 mb-1 font-ui"
                >
                  Date souhaitée *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white text-nude-900"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-nude-700 mb-1 font-ui"
                >
                  Heure souhaitée *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white text-nude-900"
                >
                  <option value="">Choisir une heure</option>
                  <optgroup label="🍽️ DÉJEUNER (11h30-14h) - 80 places">
                    {timeSlots.midi.map((slot) => (
                      <option key={slot.id} value={slot.time}>
                        {slot.time} - {slot.maxTables} tables max
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="🌙 DÎNER 1er Service (19h-20h15) - 40 places">
                    {timeSlots.soir1.map((slot) => (
                      <option key={slot.id} value={slot.time}>
                        {slot.time} - {slot.maxTables} tables max
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="🌃 DÎNER 2e Service (20h30-22h) - 40 places">
                    {timeSlots.soir2.map((slot) => (
                      <option key={slot.id} value={slot.time}>
                        {slot.time} - {slot.maxTables} tables max
                      </option>
                    ))}
                  </optgroup>
                </select>

                {/* 🔍 Affichage disponibilité en temps réel */}
                {formData.time && availability[formData.time] && (
                  <div
                    className={`mt-2 p-3 rounded-lg text-sm font-ui ${
                      availability[formData.time].available
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">
                        {availability[formData.time].available ? "✅" : "❌"}
                      </span>
                      <span className="font-semibold">
                        {availability[formData.time].message}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-nude-700 mb-1 font-ui"
                >
                  Nombre de personnes *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white text-nude-900"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} personne{i > 0 ? "s" : ""}
                    </option>
                  ))}
                  <option value="13+">Plus de 12 personnes</option>
                </select>
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-nude-700 mb-1 font-ui"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white text-nude-900"
                  placeholder="Votre nom et prénom"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-nude-700 mb-1 font-ui"
                >
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white text-nude-900"
                  placeholder="06 XX XX XX XX"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-nude-700 mb-1 font-ui"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white"
                placeholder="votre@email.fr"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-nude-700 mb-1 font-ui"
              >
                Message ou demandes particulières
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-nude-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood bg-white"
                placeholder="Allergies, régimes particuliers, occasion spéciale..."
              ></textarea>
            </div>

            {/* Informations importantes */}
            <div className="bg-chalet-warm/10 border border-chalet-warm/30 rounded-lg p-4">
              <h3 className="font-heading font-semibold text-nude-900 mb-2">
                📋 Informations importantes
              </h3>
              <ul className="text-sm text-nude-800 font-body space-y-1">
                <li>
                  • Réservation confirmée après notre appel de confirmation
                </li>
                <li>• Annulation gratuite jusqu&apos;à 2h avant le service</li>
                <li>
                  • Pour les groupes de plus de 8 personnes, merci de nous
                  appeler
                </li>
                <li>
                  • En cas d&apos;allergie, merci de nous prévenir lors de la
                  réservation
                </li>
              </ul>
            </div>

            {/* 📢 Messages de succès/erreur */}
            {submitStatus && (
              <div
                className={`p-4 rounded-lg font-ui ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    {submitStatus.type === "success" ? "🎉" : "❌"}
                  </span>
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={
                loading ||
                (formData.time &&
                  availability[formData.time] &&
                  !availability[formData.time].available)
              }
              className={`w-full px-6 py-3 rounded-md font-ui font-medium transition-colors text-lg shadow-md hover:shadow-lg ${
                loading ||
                (formData.time &&
                  availability[formData.time] &&
                  !availability[formData.time].available)
                  ? "bg-nude-400 text-nude-600 cursor-not-allowed"
                  : "bg-chalet-wood hover:bg-nude-800 text-nude-50"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-nude-50 mr-2"></div>
                  Réservation en cours...
                </div>
              ) : (
                "Envoyer ma demande de réservation"
              )}
            </button>

            <p className="text-sm text-nude-600 text-center font-body">
              * Champs obligatoires. Nous vous rappelons dans les 2h pour
              confirmer votre réservation.
            </p>
          </form>
        </div>

        {/* Note système de réservation */}
        <div className="mt-8 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              🔧 Système de réservation en développement
            </h3>
            <p className="text-yellow-700">
              Notre système de réservation en ligne sera bientôt intégré avec
              gestion automatique des disponibilités et confirmation
              instantanée. En attendant, nous vous rappelons pour confirmer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
