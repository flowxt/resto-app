"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const isPrivatisation = searchParams?.get("privatisation") === "true";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: isPrivatisation ? "privatisation" : "general",
    message: isPrivatisation
      ? "Bonjour, je souhaiterais obtenir des informations concernant la privatisation du restaurant pour un événement privé.\n\nDétails de mon événement :\n- Date souhaitée :\n- Nombre de personnes :\n- Type d&apos;événement :\n- Budget estimé :\n\nMerci pour votre retour."
      : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const subjects = [
    { value: "general", label: "📧 Question générale" },
    { value: "reservation", label: "🍽️ Réservation" },
    { value: "privatisation", label: "🏠 Privatisation" },
    { value: "menu", label: "📋 Question sur le menu" },
    { value: "allergie", label: "⚠️ Allergies/Régimes" },
    { value: "groupe", label: "👥 Réservation groupe" },
    { value: "autre", label: "💬 Autre" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulation d&apos;envoi (à remplacer par votre API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulation
      setSubmitStatus({
        type: "success",
        message:
          formData.subject === "privatisation"
            ? "Votre demande de privatisation a été envoyée ! Nous vous recontacterons dans les 24h avec un devis personnalisé."
            : "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Erreur lors de l&apos;envoi. Veuillez réessayer ou nous appeler directement.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 border">
      {isPrivatisation && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">🏠</span>
            <h3 className="font-heading text-lg font-bold text-yellow-800">
              Demande de Privatisation
            </h3>
          </div>
          <p className="text-yellow-700 font-body text-sm">
            Vous souhaitez privatiser notre restaurant ? Parfait ! Remplissez le
            formulaire ci-dessous et nous vous proposerons un devis personnalisé
            dans les 24h.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 font-ui"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood text-nude-900"
              placeholder="Votre nom et prénom"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1 font-ui"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood text-nude-900"
              placeholder="06 XX XX XX XX"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1 font-ui"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood text-nude-900"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1 font-ui"
          >
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood text-nude-900"
          >
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1 font-ui"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-chalet-wood focus:border-chalet-wood text-nude-900"
            placeholder={
              formData.subject === "privatisation"
                ? "Décrivez votre événement : date, nombre de personnes, type d&apos;événement, budget..."
                : "Décrivez votre demande en détail..."
            }
          ></textarea>
        </div>

        {formData.subject === "privatisation" && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-ui font-semibold text-blue-900 mb-2">
              💡 Informations utiles pour votre devis
            </h4>
            <ul className="text-sm text-blue-800 font-body space-y-1">
              <li>• Date et horaires souhaités</li>
              <li>• Nombre exact de convives</li>
              <li>• Type d&apos;événement (anniversaire, mariage, entreprise...)</li>
              <li>• Préférences menu (fondue, raclette, buffet...)</li>
              <li>• Budget approximatif par personne</li>
              <li>• Services souhaités (animation, décoration...)</li>
            </ul>
          </div>
        )}

        {submitStatus && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            <div className="flex items-center">
              <span className="mr-2">
                {submitStatus.type === "success" ? "✅" : "❌"}
              </span>
              <span className="font-ui">{submitStatus.message}</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-md font-ui font-semibold transition-all duration-300 ${
            isSubmitting
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : formData.subject === "privatisation"
              ? "bg-chalet-gold hover:bg-chalet-gold-dark text-nude-900 shadow-lg hover:shadow-xl"
              : "bg-chalet-wood hover:bg-nude-800 text-nude-50 shadow-lg hover:shadow-xl"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Envoi en cours...
            </div>
          ) : formData.subject === "privatisation" ? (
            "🏠 Demander un devis de privatisation"
          ) : (
            "📧 Envoyer le message"
          )}
        </button>
      </form>
    </div>
  );
}
