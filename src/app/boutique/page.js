import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FromageGrid from "@/components/FromageGrid";

export const metadata = {
  title: "Boutique de Fromages - Livraison France | Restaurant & Bar à Fromage",
  description:
    "Découvrez notre sélection de fromages d&apos;exception. Livraison partout en France. Fromages artisanaux de Savoie et spécialités fromagères.",
};

export default function Boutique() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header de la boutique */}
      <section className="bg-gradient-to-r from-chalet-wood to-nude-700 text-nude-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Boutique de Fromages d&apos;Exception
          </h1>
          <p className="font-body text-xl mb-6 max-w-3xl mx-auto">
            Découvrez notre sélection de fromages artisanaux avec nouvelle
            tarification :
            <strong>
              {" "}
              500g et 1kg pour les fromages, entière/demi/quart pour les tommes
            </strong>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full font-ui">
              🚚 Livraison gratuite dès 80€
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full font-ui">
              🧀 Fromages artisanaux
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full font-ui">
              📦 Emballage isotherme
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full font-ui">
              🔄 Ruptures de stock en temps réel
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full font-ui">
              📅 Produits saisonniers
            </span>
          </div>
        </div>
      </section>

      {/* Grille des fromages */}
      <FromageGrid />

      {/* Section livraison */}
      <section className="bg-nude-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">
              Livraison & Conservation
            </h2>
            <p className="font-body text-xl text-nude-700">
              Nos fromages voyagent dans les meilleures conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-chalet-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-nude-900">
                Emballage Réfrigéré
              </h3>
              <p className="font-body text-nude-700">
                Emballage isotherme avec pains de glace pour maintenir la chaîne
                du froid
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chalet-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Livraison Express</h3>
              <p className="text-gray-600">
                Livraison 24-48h partout en France métropolitaine
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chalet-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraîcheur Garantie</h3>
              <p className="text-gray-600">
                Satisfaction garantie ou remboursé. Fromages sélectionnés à
                maturité
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
