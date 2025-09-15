import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanchesGrid from "@/components/PlanchesGrid";

export const metadata = {
  title: "Bar à Fromage - Click & Collect | Restaurant & Bar à Fromage",
  description:
    "Commandez vos planches de charcuterie et fromages en click & collect. Produits artisanaux préparés par nos soins, prêts à récupérer.",
};

export default function BarFromage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-chalet-wood to-nude-800 text-nude-50 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Bar à Fromage
          </h1>
          <p className="font-body text-xl mb-6 max-w-3xl mx-auto">
            Concept unique : savourez nos planches sur place dans notre espace de 40 places 
            ou commandez en click & collect. Récupérez vos plateaux préparés par nos soins, 
            prêts à déguster !
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <span className="bg-nude-50/20 px-3 py-1 rounded-full font-ui">
              🍽️ 40 places sur place
            </span>
            <span className="bg-nude-50/20 px-3 py-1 rounded-full font-ui">
              📦 Click & Collect
            </span>
            <span className="bg-nude-50/20 px-3 py-1 rounded-full font-ui">
              🧀 Produits artisanaux
            </span>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-nude-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="font-body text-xl text-nude-700">
              Simple et efficace, en 3 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-chalet-wood text-nude-50 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-nude-900">
                Choisissez
              </h3>
              <p className="font-body text-nude-700">
                Sur place (40 places) ou à emporter. Sélectionnez votre planche 
                et passez commande par téléphone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chalet-wood text-nude-50 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-nude-900">On prépare</h3>
              <p className="font-body text-nude-700">
                Nos experts préparent votre planche avec soin, sélection des
                meilleurs produits
              </p>
            </div>

            <div className="text-center">
              <div className="bg-chalet-wood text-nude-50 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-nude-900">Récupérez</h3>
              <p className="font-body text-nude-700">
                Commande avant 12h → retrait le soir même<br/>
                Commande après 12h → retrait le lendemain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Espace Bar à Fromage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-nude-50 rounded-lg p-8 border border-nude-200 mb-16">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">Notre Espace Bar à Fromage</h2>
              <p className="font-body text-xl text-nude-700">Un lieu convivial pour savourer nos planches</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-nude-900 mb-4">🍽️ Dégustation sur place</h3>
                <ul className="space-y-3 font-body text-nude-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-gold rounded-full mr-3"></span>
                    <strong>40 places assises</strong> dans un cadre authentique chalet
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-gold rounded-full mr-3"></span>
                    Ambiance conviviale et chaleureuse
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-gold rounded-full mr-3"></span>
                    Service à table de nos planches fraîchement préparées
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-gold rounded-full mr-3"></span>
                    Sélection de vins de Savoie et boissons locales
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-2xl font-semibold text-nude-900 mb-4">📦 Click & Collect</h3>
                <ul className="space-y-3 font-body text-nude-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-wood rounded-full mr-3"></span>
                    Commande avant 12h → retrait le soir même
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-wood rounded-full mr-3"></span>
                    Commande après 12h → retrait le lendemain
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-wood rounded-full mr-3"></span>
                    Emballage soigné pour transport
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-chalet-wood rounded-full mr-3"></span>
                    Parfait pour pique-niques et événements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille des planches */}
      <PlanchesGrid />

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
              <h3 className="font-heading font-semibold mb-2 text-nude-900">Horaires Click & Collect</h3>
              <p className="text-sm text-nude-600 font-body">
                <strong>Commande avant 12h :</strong><br/>
                Retrait le soir même (18h-20h)<br/>
                <strong>Commande après 12h :</strong><br/>
                Retrait le lendemain (10h-20h)
              </p>
            </div>

            <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
              <div className="text-chalet-wood text-2xl mb-3">📍</div>
              <h3 className="font-heading font-semibold mb-2 text-nude-900">Point de retrait</h3>
              <p className="text-sm text-nude-600 font-body">
                123 Rue de la Montagne
                <br />
                73000 Chambéry
              </p>
            </div>

            <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
              <div className="text-chalet-wood text-2xl mb-3">💳</div>
              <h3 className="font-heading font-semibold mb-2 text-nude-900">Paiement</h3>
              <p className="text-sm text-nude-600 font-body">
                CB, Espèces
                <br />
                Paiement en ligne bientôt
              </p>
            </div>

            <div className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200">
              <div className="text-chalet-wood text-2xl mb-3">📱</div>
              <h3 className="font-heading font-semibold mb-2 text-nude-900">Commande</h3>
              <p className="text-sm text-nude-600 font-body">
                Téléphone : 04 79 XX XX XX
                <br />
                En ligne (bientôt)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
