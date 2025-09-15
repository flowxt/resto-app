import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: "Restaurant Savoyard - Spécialités Alpines | Restaurant & Bar à Fromage",
  description: "Découvrez notre restaurant savoyard authentique. 40 places, fondue, raclette, tartiflette dans un cadre chalet alpin. Ambiance chaleureuse en Savoie.",
};

export default function Restaurant() {
  const specialites = [
    {
      icon: "🫕",
      name: "Fondue Savoyarde",
      description: "Notre spécialité emblématique avec Beaufort, Comté et Gruyère AOP dans la plus pure tradition",
      price: "28€",
      popular: true
    },
    {
      icon: "🥔",
      name: "Raclette Traditionnelle",
      description: "Fromage à raclette AOP fondu à la perfection, pommes de terre grenaille et charcuterie fine",
      price: "26€",
      popular: true
    },
    {
      icon: "🥘",
      name: "Tartiflette",
      description: "Le fameux gratin savoyard au Reblochon AOP, lardons fumés et oignons confits",
      price: "22€",
      popular: false
    },
    {
      icon: "🥩",
      name: "Diots au Vin Blanc",
      description: "Saucisses traditionnelles de Savoie mijotées au vin blanc avec oignons caramélisés",
      price: "19€",
      popular: false
    },
    {
      icon: "🐟",
      name: "Filets de Perche",
      description: "Poissons nobles du lac du Bourget, préparés meunière avec beurre noisette",
      price: "24€",
      popular: false
    },
    {
      icon: "🍮",
      name: "Desserts Maison",
      description: "Tarte aux myrtilles des Alpes, bavarois au génépi ou sorbet artisanal",
      price: "8€",
      popular: false
    }
  ];

  const ambiances = [
    {
      icon: "🏔️",
      title: "Ambiance Montagne",
      description: "Décor authentique bois et pierre dans l'esprit vieux chalet alpin"
    },
    {
      icon: "🔥",
      title: "Cheminée Centrale",
      description: "Feu de bois crépitant pour une atmosphère chaleureuse et conviviale"
    },
    {
      icon: "🍷",
      title: "Cave à Vins",
      description: "Sélection de crus de Savoie et vins d'altitude pour accompagner vos plats"
    },
    {
      icon: "👨‍🍳",
      title: "Cuisine Ouverte",
      description: "Regardez nos chefs préparer vos spécialités dans notre cuisine visible"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header avec chalet */}
      <section className="relative h-[70vh] bg-gradient-to-br from-nude-900 via-chalet-wood to-nude-800">
        <div className="absolute inset-0">
          <Image
            src="/images/chalet.jpeg"
            alt="Restaurant chalet authentique"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-nude-950/60 via-nude-900/30 to-nude-800/20"></div>
        
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-nude-50 mb-6 leading-tight">
              Restaurant Savoyard
            </h1>
            <p className="font-body text-xl md:text-2xl text-nude-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dans l'authenticité de notre chalet, nous vous attendons avec plaisir pour partager 
              les vraies saveurs de la Savoie autour de nos spécialités traditionnelles
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-nude-50/20 px-6 py-3 rounded-lg font-ui">
                🍽️ <strong>40 places</strong> dans un cadre chaleureux
              </div>
              <div className="bg-nude-50/20 px-6 py-3 rounded-lg font-ui">
                🏔️ <strong>Ambiance authentique</strong> vieux chalet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message d'accueil chaleureux */}
      <section className="py-16 bg-nude-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-nude-50 rounded-lg p-8 border border-nude-200 shadow-lg">
            <div className="text-6xl mb-6">🤗</div>
            <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">
              Nous vous attendons avec plaisir !
            </h2>
            <p className="font-body text-xl text-nude-700 mb-6 leading-relaxed">
              Dans notre restaurant, chaque repas est une célébration des traditions savoyardes. 
              Notre équipe passionnée vous accueille dans la chaleur d'un véritable chalet 
              pour vous faire découvrir les authentiques saveurs de nos montagnes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="font-heading font-semibold text-nude-900">Accueil Chaleureux</h3>
                <p className="text-sm text-nude-600 font-body">Service attentionné dans la convivialité montagnarde</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌟</div>
                <h3 className="font-heading font-semibold text-nude-900">Produits d'Exception</h3>
                <p className="text-sm text-nude-600 font-body">Fromages AOP et produits locaux sélectionnés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="font-heading font-semibold text-nude-900">Comme à la Maison</h3>
                <p className="text-sm text-nude-600 font-body">Ambiance familiale et détendue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos spécialités */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-nude-900 mb-4">
              Nos Spécialités Savoyardes
            </h2>
            <p className="font-body text-xl text-nude-700 max-w-2xl mx-auto">
              Découvrez nos plats traditionnels préparés avec passion selon les recettes d'antan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialites.map((plat, index) => (
              <div key={index} className="bg-nude-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-nude-200 relative">
                {plat.popular && (
                  <div className="absolute top-4 right-4 bg-chalet-gold text-nude-950 px-3 py-1 rounded-full text-xs font-ui font-semibold">
                    ⭐ Populaire
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{plat.icon}</div>
                  <h3 className="font-heading text-xl font-bold text-nude-900 mb-2">{plat.name}</h3>
                  <div className="text-2xl font-bold text-chalet-wood">{plat.price}</div>
                </div>
                
                <p className="font-body text-nude-700 text-center leading-relaxed">{plat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance du restaurant */}
      <section className="py-16 bg-chalet-warm/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">
              L'Ambiance de Notre Chalet
            </h2>
            <p className="font-body text-xl text-nude-700">
              Un cadre authentique pour des moments inoubliables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ambiances.map((ambiance, index) => (
              <div key={index} className="bg-nude-50 p-6 rounded-lg shadow-sm border border-nude-200 text-center">
                <div className="text-4xl mb-4">{ambiance.icon}</div>
                <h3 className="font-heading font-semibold text-nude-900 mb-2">{ambiance.title}</h3>
                <p className="font-body text-sm text-nude-600">{ambiance.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Horaires et infos */}
            <div className="bg-nude-50 rounded-lg p-8 border border-nude-200">
              <h3 className="font-heading text-2xl font-bold text-nude-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">📅</span>
                Informations Pratiques
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-nude-900 mb-1">Horaires</h4>
                    <div className="font-body text-nude-700 space-y-1">
                      <p><strong>Déjeuner :</strong> Mardi - Dimanche 11h30-14h30</p>
                      <p><strong>Dîner :</strong> Jeudi - Samedi 18h30-22h30</p>
                      <p className="text-chalet-wood"><strong>Fermé le lundi</strong></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-nude-900 mb-1">Capacité</h4>
                    <p className="font-body text-nude-700">40 places dans une ambiance chalet authentique</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-nude-900 mb-1">Paiement</h4>
                    <p className="font-body text-nude-700">CB, Espèces, Chèques, Tickets restaurant</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chalet-gold/20 p-3 rounded-lg mr-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-nude-900 mb-1">Groupes</h4>
                    <p className="font-body text-nude-700">Privatisation possible - Devis sur demande</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réservation */}
            <div className="bg-gradient-to-br from-chalet-wood to-nude-700 text-nude-50 rounded-lg p-8">
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">📞</span>
                Réservation Conseillée
              </h3>
              
              <p className="font-body text-lg mb-6 leading-relaxed">
                Pour vous garantir la meilleure table et éviter toute déception, 
                nous vous recommandons vivement de réserver, surtout le week-end !
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center bg-nude-50/20 p-3 rounded-lg">
                  <span className="text-2xl mr-3">📱</span>
                  <div>
                    <p className="font-ui font-semibold">Téléphone</p>
                    <p className="font-body">04 79 XX XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-nude-50/20 p-3 rounded-lg">
                  <span className="text-2xl mr-3">💻</span>
                  <div>
                    <p className="font-ui font-semibold">En ligne</p>
                    <p className="font-body">Réservation rapide et confirmée</p>
                  </div>
                </div>
              </div>

              <a 
                href="/reservation" 
                className="block w-full bg-chalet-gold hover:bg-chalet-warm text-nude-950 text-center py-4 rounded-lg font-ui font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Réserver ma table
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
