'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FromageGrid() {
  const [selectedCategory, setSelectedCategory] = useState('tous')
  
  // Simuler différents fromages avec la même image
  const fromages = [
    {
      id: 1,
      name: "Comté AOP 24 mois",
      category: "pate-dure",
      price: 28.50,
      weight: "250g",
      description: "Fromage au lait cru de vache, affiné 24 mois en cave",
      origin: "Franche-Comté",
      image: "/images/fromage.jpg"
    },
    {
      id: 2,
      name: "Reblochon de Savoie AOP",
      category: "pate-molle",
      price: 12.90,
      weight: "450g",
      description: "Fromage au lait cru de vache, pâte molle à croûte lavée",
      origin: "Savoie",
      image: "/images/fromage.jpg"
    },
    {
      id: 3,
      name: "Roquefort AOP Papillon",
      category: "pate-persille",
      price: 19.80,
      weight: "200g",
      description: "Fromage au lait cru de brebis, pâte persillée",
      origin: "Aveyron",
      image: "/images/fromage.jpg"
    },
    {
      id: 4,
      name: "Camembert de Normandie AOP",
      category: "pate-molle",
      price: 8.50,
      weight: "250g",
      description: "Fromage au lait cru de vache, pâte molle à croûte fleurie",
      origin: "Normandie",
      image: "/images/fromage.jpg"
    },
    {
      id: 5,
      name: "Beaufort AOP d'Été",
      category: "pate-dure",
      price: 32.00,
      weight: "300g",
      description: "Fromage au lait cru de vache, pâte pressée cuite",
      origin: "Savoie",
      image: "/images/fromage.jpg"
    },
    {
      id: 6,
      name: "Chèvre frais aux herbes",
      category: "chevre",
      price: 7.20,
      weight: "150g",
      description: "Fromage de chèvre frais aux fines herbes",
      origin: "Loire",
      image: "/images/fromage.jpg"
    },
    {
      id: 7,
      name: "Munster AOP",
      category: "pate-molle",
      price: 11.40,
      weight: "200g",
      description: "Fromage au lait cru de vache, pâte molle à croûte lavée",
      origin: "Alsace",
      image: "/images/fromage.jpg"
    },
    {
      id: 8,
      name: "Crottin de Chavignol AOP",
      category: "chevre",
      price: 4.80,
      weight: "60g",
      description: "Petit fromage de chèvre à pâte molle",
      origin: "Loire",
      image: "/images/fromage.jpg"
    },
    {
      id: 9,
      name: "Bleu d'Auvergne AOP",
      category: "pate-persille",
      price: 14.50,
      weight: "250g",
      description: "Fromage au lait de vache, pâte persillée",
      origin: "Auvergne",
      image: "/images/fromage.jpg"
    }
  ]

  const categories = [
    { id: 'tous', name: 'Tous les fromages' },
    { id: 'pate-molle', name: 'Pâtes molles' },
    { id: 'pate-dure', name: 'Pâtes dures' },
    { id: 'pate-persille', name: 'Pâtes persillées' },
    { id: 'chevre', name: 'Fromages de chèvre' }
  ]

  const filteredFromages = selectedCategory === 'tous' 
    ? fromages 
    : fromages.filter(fromage => fromage.category === selectedCategory)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-ui font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-chalet-wood text-nude-50 shadow-md'
                  : 'bg-nude-200 text-nude-800 hover:bg-nude-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille des fromages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFromages.map((fromage) => (
            <div key={fromage.id} className="bg-nude-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-nude-200">
              <div className="relative h-48">
                <Image
                  src={fromage.image}
                  alt={fromage.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-chalet-wood text-nude-50 px-2 py-1 rounded text-xs font-ui font-medium">
                  {fromage.weight}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg font-bold text-nude-900">{fromage.name}</h3>
                  <span className="text-xl font-bold text-chalet-wood">{fromage.price}€</span>
                </div>
                
                <p className="text-sm text-nude-600 mb-2 font-body">{fromage.origin}</p>
                <p className="text-nude-700 mb-4 text-sm font-body">{fromage.description}</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-chalet-wood hover:bg-nude-800 text-nude-50 px-4 py-2 rounded-md font-ui font-medium transition-colors shadow-md">
                    Ajouter au panier
                  </button>
                  <button className="bg-nude-200 hover:bg-nude-300 text-nude-700 px-3 py-2 rounded-md transition-colors">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Shopify */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              🚧 Boutique en préparation
            </h3>
            <p className="text-yellow-700">
              Notre boutique en ligne sera bientôt intégrée avec Shopify pour vous offrir 
              une expérience d'achat optimale avec paiement sécurisé et suivi de commande.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
