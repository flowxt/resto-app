"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { planches } from '@/data/planches';

export default function PlanchesGrid() {
  const [selectedPlanche, setSelectedPlanche] = useState(null);

  return (
    <>
      {/* Grille des planches */}
      <section className="py-16 bg-chalet-brown-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-chalet-white mb-4">
              Nos Planches Click & Collect
            </h2>
            <p className="font-body text-xl text-chalet-cream mb-6 max-w-3xl mx-auto">
              Commandez votre planche prédéfinie et récupérez-la sur place selon vos créneaux disponibles
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full font-ui text-chalet-white">
                🕐 Commande 2h à l&apos;avance minimum
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full font-ui text-chalet-white">
                🧀 Fromages d&apos;exception
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full font-ui text-chalet-white">
                📍 Récupération sur place
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planches.map((planche) => (
              <div 
                key={planche.id} 
                className="card-dark hover-lift cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedPlanche(planche)}
              >
                {/* Badge spécial */}
                {planche.special && (
                  <div className="absolute top-4 right-4 bg-chalet-gold text-chalet-brown-900 px-3 py-1 rounded-full text-xs font-ui font-bold z-10">
                    {planche.special}
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 mb-4">
                  <Image
                    src={planche.image}
                    alt={planche.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-xl font-bold text-white mb-1">
                      {planche.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {planche.serves}
                    </p>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <p className="font-body text-chalet-cream text-sm mb-4 line-clamp-2">
                    {planche.description}
                  </p>

                  {/* Fromages */}
                  <div className="mb-4">
                    <h4 className="font-ui font-semibold text-chalet-gold text-sm mb-2">
                      🧀 Fromages inclus ({planche.fromages.length})
                    </h4>
                    <ul className="text-xs text-chalet-cream space-y-1">
                      {planche.fromages.slice(0, 3).map((fromage, index) => (
                        <li key={index}>• {fromage}</li>
                      ))}
                      {planche.fromages.length > 3 && (
                        <li className="text-chalet-gold">
                          + {planche.fromages.length - 3} autres...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Prix et CTA */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-chalet-gold">
                        {planche.price.toFixed(2)}€
                      </span>
                      <span className="text-xs text-chalet-cream ml-1">TTC</span>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2">
                      Commander
                    </button>
                  </div>

                  {/* Allergènes */}
                  <div className="mt-3 pt-3 border-t border-chalet-brown-600">
                    <p className="text-xs text-chalet-cream">
                      <span className="font-semibold">Allergènes :</span> {planche.allergenes.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal détail planche */}
      {selectedPlanche && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-chalet-brown-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header modal */}
            <div className="sticky top-0 bg-chalet-brown-700 p-6 border-b border-chalet-brown-600">
              <div className="flex justify-between items-center">
                <h2 className="font-heading text-2xl font-bold text-chalet-white">
                  {selectedPlanche.name}
                </h2>
                <button 
                  onClick={() => setSelectedPlanche(null)}
                  className="text-chalet-cream hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Contenu modal */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image et infos principales */}
                <div>
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={selectedPlanche.image}
                      alt={selectedPlanche.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-body text-chalet-cream mb-4">
                    {selectedPlanche.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-chalet-gold">
                    <span>👥 {selectedPlanche.serves}</span>
                    <span>💰 {selectedPlanche.price.toFixed(2)}€</span>
                  </div>
                </div>

                {/* Détails composition */}
                <div>
                  {/* Fromages */}
                  <div className="mb-6">
                    <h3 className="font-ui font-bold text-chalet-gold mb-3">
                      🧀 Fromages de la planche
                    </h3>
                    <ul className="space-y-2">
                      {selectedPlanche.fromages.map((fromage, index) => (
                        <li key={index} className="text-chalet-cream flex items-start">
                          <span className="text-chalet-gold mr-2">•</span>
                          {fromage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Accompagnements */}
                  <div className="mb-6">
                    <h3 className="font-ui font-bold text-chalet-gold mb-3">
                      🥖 Accompagnements inclus
                    </h3>
                    <ul className="space-y-2">
                      {selectedPlanche.accompaniments.map((accomp, index) => (
                        <li key={index} className="text-chalet-cream flex items-start">
                          <span className="text-chalet-gold mr-2">•</span>
                          {accomp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Allergènes */}
                  <div className="mb-6 p-4 bg-amber-100/10 border border-amber-400/30 rounded-lg">
                    <h3 className="font-ui font-bold text-amber-400 mb-2">
                      ⚠️ Allergènes présents
                    </h3>
                    <p className="text-amber-200 text-sm">
                      {selectedPlanche.allergenes.join(', ')}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={`/bar-fromage/commande?planche=${selectedPlanche.id}`}
                    className="btn-primary w-full text-center block font-ui text-lg"
                  >
                    Commander cette planche - {selectedPlanche.price.toFixed(2)}€
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
