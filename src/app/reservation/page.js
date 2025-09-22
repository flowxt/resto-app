import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";

export const metadata = {
  title:
    "Réservation Restaurant - Spécialités Savoyardes | Restaurant & Bar à Fromage",
  description:
    "Réservez votre table dans notre restaurant savoyard. 40 places, spécialités fondue et raclette. Ambiance chaleureuse en Savoie.",
};

export default function Reservation() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-chalet-wood to-nude-700 text-nude-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Réservation Restaurant
          </h1>
          <p className="font-body text-xl mb-6 max-w-2xl mx-auto">
            Réservez votre table pour découvrir nos spécialités savoyardes dans
            une ambiance chaleureuse
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <span className="bg-nude-50/20 px-3 py-1 rounded-full font-ui">
              🍽️ 40 places
            </span>
            <span className="bg-nude-50/20 px-3 py-1 rounded-full font-ui">
              🧀 Spécialités savoyardes
            </span>
            <span className="bg-nude-50/20 px-3 py-1 rounded-full font-ui">
              🔥 Ambiance chaleureuse
            </span>
          </div>
        </div>
      </section>

      {/* Informations restaurant */}
      <section className="py-16 bg-nude-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">
              Notre Restaurant
            </h2>
            <p className="font-body text-xl text-nude-700">
              Une expérience gastronomique authentique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-chalet-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-nude-900">
                Capacité
              </h3>
              <p className="font-body text-nude-700">
                40 places assises dans un cadre chaleureux et authentique
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chalet-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧀</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-nude-900">
                Spécialités
              </h3>
              <p className="font-body text-nude-700">
                Fondue, raclette, tartiflette et autres plats savoyards
                traditionnels
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chalet-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍷</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-nude-900">
                Carte des vins
              </h3>
              <p className="font-body text-nude-700">
                Sélection de vins de Savoie et accompagnements parfaits
              </p>
            </div>
          </div>

          {/* Aperçu de notre carte */}
          <div className="bg-nude-50 rounded-lg p-8 shadow-sm border border-nude-200">
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-nude-900 mb-2">
                Notre Carte - Aperçu
              </h3>
              <p className="font-body text-nude-600 text-sm">
                Découvrez quelques-unes de nos spécialités
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🥗</div>
                <h4 className="font-heading font-semibold text-nude-900 text-sm">
                  SALADES
                </h4>
                <p className="text-xs text-nude-600 font-body">
                  Chèvre chaud, César, Burrata
                </p>
                <p className="text-xs font-ui text-chalet-wood font-semibold mt-1">
                  dès 10€
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-2">🫕</div>
                <h4 className="font-heading font-semibold text-nude-900 text-sm">
                  FONDUES
                </h4>
                <p className="text-xs text-nude-600 font-body">
                  Moitié/Moitié, Échalotte, Karnotzet
                </p>
                <p className="text-xs font-ui text-chalet-wood font-semibold mt-1">
                  dès 26€
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-2">🧀</div>
                <h4 className="font-heading font-semibold text-nude-900 text-sm">
                  RACLETTES
                </h4>
                <p className="text-xs text-nude-600 font-body">
                  Nature, Fumé, Ail des ours
                </p>
                <p className="text-xs font-ui text-chalet-wood font-semibold mt-1">
                  dès 24€
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-2">🍽️</div>
                <h4 className="font-heading font-semibold text-nude-900 text-sm">
                  SPÉCIALITÉS
                </h4>
                <p className="text-xs text-nude-600 font-body">
                  Tartiflette, Croziflette, Morbiflette
                </p>
                <p className="text-xs font-ui text-chalet-wood font-semibold mt-1">
                  dès 21€
                </p>
              </div>
            </div>

            <div className="text-center mt-6">
              <a
                href="/restaurant"
                className="bg-chalet-wood hover:bg-nude-800 text-nude-50 px-6 py-2 rounded-lg font-ui text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>📋</span>
                Voir la carte complète
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de réservation */}
      <ReservationForm />

      {/* Informations pratiques */}
      <section className="bg-chalet-warm/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">
              Informations Pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
              <div className="text-chalet-wood text-2xl mb-3">⏰</div>
              <h3 className="font-heading font-semibold mb-2 text-nude-900">
                Horaires Service
              </h3>
              <p className="text-sm text-nude-600 font-body">
                <strong>Déjeuner :</strong> 11h30-14h30
                <br />
                <strong>Dîner :</strong> 18h30-22h30
                <br />
                <span className="text-chalet-wood">Fermé le lundi</span>
              </p>
            </div>

            <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
              <div className="text-chalet-wood text-2xl mb-3">💳</div>
              <h3 className="font-heading font-semibold mb-2 text-nude-900">
                Moyens de paiement
              </h3>
              <p className="text-sm text-nude-600 font-body">
                CB, Espèces, Chèques
                <br />
                Tickets restaurant acceptés
              </p>
            </div>

            <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
              <div className="text-chalet-wood text-2xl mb-3">🚗</div>
              <h3 className="font-heading font-semibold mb-2 text-nude-900">
                Parking
              </h3>
              <p className="text-sm text-nude-600 font-body">
                Parking gratuit à proximité
                <br />
                Accès transports en commun
              </p>
            </div>

            <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
              <div className="text-chalet-wood text-2xl mb-3">👥</div>
              <h3 className="font-heading font-semibold mb-2 text-nude-900">
                Groupes
              </h3>
              <p className="text-sm text-nude-600 font-body">
                Privatisation possible
                <br />
                Devis sur demande
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-nude-700 font-body">
              <strong>Réservation conseillée</strong> - Nous vous rappelons dans
              les 2h pour confirmer votre réservation
            </p>
          </div>
        </div>
      </section>

      {/* Politique de ponctualité */}
      <section className="py-12 bg-amber-50 border-t-4 border-amber-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="text-4xl mr-3">⏰</span>
              <h2 className="font-heading text-2xl font-bold text-amber-800">
                Politique de Ponctualité
              </h2>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-amber-200">
              <p className="font-body text-lg text-amber-800 mb-4">
                <strong>Attention :</strong> Vos tables seront automatiquement
                réattribuées si vous n&apos;êtes pas présents dans les{" "}
                <strong>20 minutes</strong> suivant l&apos;heure de votre
                réservation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-700">
                <div className="flex items-center">
                  <span className="text-lg mr-2">✅</span>
                  <span>Prévenez-nous en cas de retard imprévu</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">📞</span>
                  <span>Contact : 04 79 XX XX XX</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🕐</span>
                  <span>Soyez ponctuel pour garantir votre table</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-2">🤝</span>
                  <span>Merci de votre compréhension</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
