import Image from 'next/image'

export default function PlanchesGrid() {
  const planches = [
    {
      id: 1,
      name: "Planche Découverte",
      price: 18.50,
      persons: "2-3 personnes",
      description: "Sélection de 3 fromages et charcuterie fine, pain artisanal, confiture",
      items: ["Comté 12 mois", "Reblochon", "Chèvre cendré", "Jambon de Savoie", "Saucisson aux noix"],
      image: "/images/planche.jpg",
      popular: false
    },
    {
      id: 2,
      name: "Planche Tradition",
      price: 28.90,
      persons: "4-5 personnes",
      description: "Notre sélection signature avec fromages AOP et charcuterie artisanale",
      items: ["Beaufort AOP", "Reblochon AOP", "Tomme de Savoie", "Bresaola", "Coppa", "Noix & Figues"],
      image: "/images/planche.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Planche Prestige",
      price: 42.00,
      persons: "6-8 personnes",
      description: "La planche d'exception avec les plus grands crus de notre sélection",
      items: ["Comté 36 mois", "Roquefort AOP", "Époisses AOP", "Jambon pata negra", "Truffe d'été", "Miel de montagne"],
      image: "/images/planche.jpg",
      popular: false
    },
    {
      id: 4,
      name: "Planche Végétarienne",
      price: 22.50,
      persons: "3-4 personnes",
      description: "Sélection de fromages au lait cru et accompagnements végétaux",
      items: ["Fromages de chèvre", "Cheddar fermier", "Houmous maison", "Légumes croquants", "Tapenade olive"],
      image: "/images/planche.jpg",
      popular: false
    },
    {
      id: 5,
      name: "Planche Apéro",
      price: 15.90,
      persons: "2 personnes",
      description: "Parfaite pour l'apéritif, format compact et savoureux",
      items: ["2 fromages au choix", "Rillettes maison", "Cornichons", "Pain grillé"],
      image: "/images/planche.jpg",
      popular: false
    },
    {
      id: 6,
      name: "Planche Familiale",
      price: 38.00,
      persons: "8-10 personnes",
      description: "Idéale pour les grandes tablées et événements familiaux",
      items: ["5 fromages variés", "3 charcuteries", "Fruits secs", "Confitures", "Pain de campagne"],
      image: "/images/planche.jpg",
      popular: false
    }
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-nude-900 mb-4">Nos Planches</h2>
          <p className="font-body text-xl text-nude-700">Toutes nos planches sont préparées avec des produits frais et artisanaux</p>
          <div className="mt-4 bg-chalet-warm/10 border border-chalet-warm/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="font-body text-nude-800">
              🍽️ <strong>40 places disponibles</strong> pour déguster sur place ou 📦 <strong>Click & Collect</strong> à emporter
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planches.map((planche) => (
            <div key={planche.id} className="bg-nude-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-nude-200 relative">
              {planche.popular && (
                <div className="absolute top-4 left-4 z-10 bg-chalet-wood text-nude-50 px-3 py-1 rounded-full text-sm font-ui font-medium">
                  Populaire
                </div>
              )}
              
              <div className="relative h-48">
                <Image
                  src={planche.image}
                  alt={planche.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nude-900/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-nude-950/70 text-nude-100 px-2 py-1 rounded text-sm font-ui">
                  {planche.persons}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-bold text-nude-900">{planche.name}</h3>
                  <span className="text-2xl font-bold text-chalet-wood">{planche.price}€</span>
                </div>
                
                <p className="font-body text-nude-700 mb-4">{planche.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-nude-900 mb-2">Composition :</h4>
                  <ul className="text-sm text-nude-700 font-body space-y-1">
                    {planche.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-chalet-gold rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-chalet-wood hover:bg-nude-800 text-nude-50 px-4 py-3 rounded-md font-ui font-medium transition-colors shadow-md">
                    Commander par téléphone
                  </button>
                  <button className="w-full border border-chalet-wood text-chalet-wood hover:bg-chalet-wood/10 px-4 py-2 rounded-md font-ui font-medium transition-colors">
                    Personnaliser la planche
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note système de commande */}
        <div className="mt-12 text-center">
          <div className="bg-chalet-warm/10 border border-chalet-warm/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-heading text-lg font-semibold text-nude-900 mb-2">
              📱 Système de commande en développement
            </h3>
            <p className="font-body text-nude-800">
              Notre système de commande en ligne sera bientôt intégré pour vous permettre de commander 
              et payer directement sur le site. En attendant, contactez-nous au 04 79 XX XX XX.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
