import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact - Restaurant & Bar à Fromage Savoie",
  description:
    "Contactez-nous pour toute question, réservation ou information. Restaurant et bar à fromage en Savoie.",
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-chalet-wood to-nude-700 text-nude-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="font-body text-xl max-w-3xl mx-auto">
            Une question ? Une réservation ? Une privatisation ? Nous sommes là
            pour vous aider !
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-chalet-wood"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Adresse
                    </h3>
                    <p className="text-gray-600">
                      123 Rue de la Montagne
                      <br />
                      73000 Chambéry, Savoie
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-chalet-wood"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Téléphone
                    </h3>
                    <p className="text-gray-600">04 79 XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-chalet-wood"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      contact@restaurant-fromage.fr
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-chalet-wood"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Horaires
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>
                        <strong>Déjeuner :</strong> 11h30 - 14h30
                      </p>
                      <p>
                        <strong>Dîner :</strong> 18h30 - 22h30
                      </p>
                      <p className="text-red-600">
                        <strong>Fermé le lundi</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services disponibles */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Nos services
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Restaurant</h4>
                    <p className="text-sm text-gray-600">
                      40 places - Spécialités savoyardes
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">
                      Bar à Fromage
                    </h4>
                    <p className="text-sm text-gray-600">
                      Click & Collect - Planches préparées
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Boutique</h4>
                    <p className="text-sm text-gray-600">
                      Livraison France - Fromages d&apos;exception
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-gray-900">
                      🏠 Privatisation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Événements privés - Devis sur mesure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Envoyez-nous un message
              </h2>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
