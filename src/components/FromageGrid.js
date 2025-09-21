"use client";

import { useState } from "react";
import Image from "next/image";

export default function FromageGrid() {
  const [selectedCategory, setSelectedCategory] = useState("tous");

  // Nouveaux fromages avec tarification 500g/1kg et tommes entière/demi/quart
  const fromages = [
    {
      id: 1,
      name: "Comté AOP 24 mois",
      category: "pate-dure",
      type: "fromage", // fromage ou tomme
      prices: {
        "500g": 28.5,
        "1kg": 54.0,
      },
      description: "Fromage au lait cru de vache, affiné 24 mois en cave",
      origin: "Franche-Comté",
      image: "/images/fromage.jpg",
      inStock: true,
      seasonal: null,
    },
    {
      id: 2,
      name: "Reblochon de Savoie AOP",
      category: "pate-molle",
      type: "fromage",
      prices: {
        "500g": 15.9,
        "1kg": 29.8,
      },
      description: "Fromage au lait cru de vache, pâte molle à croûte lavée",
      origin: "Savoie",
      image: "/images/fromage.jpg",
      inStock: true,
      seasonal: null,
    },
    {
      id: 3,
      name: "Roquefort AOP Papillon",
      category: "pate-persille",
      type: "fromage",
      prices: {
        "500g": 24.5,
        "1kg": 46.0,
      },
      description: "Fromage au lait cru de brebis, pâte persillée",
      origin: "Aveyron",
      image: "/images/fromage.jpg",
      inStock: false, // Rupture de stock
      seasonal: null,
    },
    {
      id: 4,
      name: "Tomme de Savoie IGP",
      category: "tomme",
      type: "tomme",
      prices: {
        entière: 45.0,
        demi: 24.0,
        quart: 13.5,
      },
      description: "Tomme traditionnelle de Savoie au lait de vache",
      origin: "Savoie",
      image: "/images/fromage.jpg",
      inStock: true,
      seasonal: null,
    },
    {
      id: 5,
      name: "Beaufort d'Alpage AOP",
      category: "pate-dure",
      type: "fromage",
      prices: {
        "500g": 32.0,
        "1kg": 60.0,
      },
      description: "Fromage d'alpage au lait cru de vache, production estivale",
      origin: "Savoie",
      image: "/images/fromage.jpg",
      inStock: true,
      seasonal: "Juin à Septembre", // Saisonnier
    },
    {
      id: 6,
      name: "Tomme des Bauges AOP",
      category: "tomme",
      type: "tomme",
      prices: {
        entière: 38.0,
        demi: 20.5,
        quart: 11.0,
      },
      description: "Tomme AOP du Parc des Bauges, au lait cru de vache",
      origin: "Massif des Bauges",
      image: "/images/fromage.jpg",
      inStock: true,
      seasonal: null,
    },
    {
      id: 7,
      name: "Époisses AOP",
      category: "pate-molle",
      type: "fromage",
      prices: {
        "500g": 22.5,
        "1kg": 42.0,
      },
      description: "Fromage à pâte molle et croûte lavée au Marc de Bourgogne",
      origin: "Bourgogne",
      image: "/images/fromage.jpg",
      inStock: false, // Rupture de stock
      seasonal: null,
    },
    {
      id: 8,
      name: "Crottin de Chavignol AOP",
      category: "chevre",
      type: "fromage",
      prices: {
        "500g": 26.0,
        "1kg": 48.0,
      },
      description: "Fromage de chèvre AOP de la Loire, pâte ferme",
      origin: "Loire",
      image: "/images/fromage.jpg",
      inStock: true,
      seasonal: "Mars à Novembre", // Saisonnier
    },
  ];

  const categories = [
    { id: "tous", name: "Tous les fromages", icon: "🧀" },
    { id: "pate-dure", name: "Pâte dure", icon: "🟡" },
    { id: "pate-molle", name: "Pâte molle", icon: "🟠" },
    { id: "pate-persille", name: "Pâte persillée", icon: "🔵" },
    { id: "tomme", name: "Tommes", icon: "🟤" },
    { id: "chevre", name: "Chèvre", icon: "🐐" },
  ];

  const filteredFromages =
    selectedCategory === "tous"
      ? fromages
      : fromages.filter((fromage) => fromage.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-nude-100 to-nude-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-nude-900 mb-4">
            Boutique Fromages d'Exception
          </h2>
          <p className="font-body text-xl text-nude-700 max-w-2xl mx-auto">
            Découvrez notre sélection de fromages artisanaux avec livraison
            partout en France
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-ui font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-chalet-wood text-nude-50 shadow-md"
                  : "bg-nude-50 text-chalet-wood hover:bg-chalet-wood/10 border border-nude-300"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Grille des fromages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFromages.map((fromage) => (
            <div
              key={fromage.id}
              className="bg-nude-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-nude-200 relative"
            >
              {/* Badges d'état */}
              <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                {!fromage.inStock && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-ui font-semibold">
                    Rupture de stock
                  </span>
                )}
                {fromage.seasonal && (
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-ui font-semibold">
                    {fromage.seasonal}
                  </span>
                )}
              </div>

              <div className="relative h-48">
                <Image
                  src={fromage.image}
                  alt={fromage.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <h3 className="font-heading text-lg font-bold text-nude-900 mb-1">
                    {fromage.name}
                  </h3>
                  <p className="text-sm text-chalet-wood font-ui">
                    📍 {fromage.origin}
                  </p>
                </div>

                <p className="text-sm text-gray-600 font-body mb-4 line-clamp-2">
                  {fromage.description}
                </p>

                {/* Options de tarification */}
                <div className="mb-4">
                  <h4 className="font-ui font-semibold text-nude-900 mb-2 text-sm">
                    {fromage.type === "tomme"
                      ? "Formats disponibles :"
                      : "Poids disponibles :"}
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(fromage.prices).map(([format, price]) => (
                      <div
                        key={format}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm font-ui text-gray-700 capitalize">
                          {format}
                        </span>
                        <span className="font-heading font-bold text-chalet-wood">
                          {price.toFixed(2)}€
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="space-y-2">
                  {fromage.inStock ? (
                    <>
                      <button className="w-full bg-chalet-wood hover:bg-nude-800 text-nude-50 px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors shadow-md">
                        Ajouter au panier
                      </button>
                      <button className="w-full border border-chalet-wood text-chalet-wood hover:bg-chalet-wood/10 px-4 py-2 rounded-md text-sm font-ui font-medium transition-colors">
                        ❤️ Ajouter aux favoris
                      </button>
                    </>
                  ) : (
                    <button
                      className="w-full bg-gray-400 text-gray-600 px-4 py-2 rounded-md text-sm font-ui font-medium cursor-not-allowed"
                      disabled
                    >
                      Produit indisponible
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note importante */}
        <div className="mt-12 p-6 bg-nude-50 rounded-lg border border-nude-200 text-center">
          <h3 className="font-heading text-xl font-bold text-nude-900 mb-3">
            🚚 Livraison partout en France
          </h3>
          <p className="font-body text-nude-700 mb-4">
            Nos fromages sont expédiés en emballage isotherme pour préserver
            leur qualité. Livraison sous 24-48h par transporteur spécialisé.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">📦</div>
              <strong>Emballage isotherme</strong>
              <br />
              Conservation optimale
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🚛</div>
              <strong>Livraison 24-48h</strong>
              <br />
              Transporteur spécialisé
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">❄️</div>
              <strong>Chaîne du froid</strong>
              <br />
              Respect des températures
            </div>
          </div>
        </div>

        {/* Note système e-commerce */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <h3 className="font-heading text-xl font-bold text-blue-900 mb-3">
            💡 Boutique en développement
          </h3>
          <p className="font-body text-blue-700">
            Notre boutique en ligne sera bientôt intégrée avec Shopify pour une
            expérience d'achat optimale. En attendant, contactez-nous pour
            passer commande par téléphone.
          </p>
        </div>
      </div>
    </section>
  );
}
