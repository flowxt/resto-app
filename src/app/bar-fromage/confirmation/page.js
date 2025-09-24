"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const commandeId = searchParams?.get('id');
  const [commande, setCommande] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (commandeId) {
      // Pour l'instant, on va simuler les données
      // Plus tard, on pourra récupérer via l'API
      setCommande({
        id: commandeId,
        name: 'Simulé',
        plancheName: 'Planche commandée',
        total: 0,
        dateRecuperation: new Date(),
        creneauRecuperation: '12h'
      });
      setLoading(false);
    }
  }, [commandeId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-chalet-brown-900 flex items-center justify-center">
        <div className="text-center text-chalet-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chalet-gold mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-chalet-brown-900 text-chalet-white">
      {/* Navbar avec espacement */}
      <div className="h-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Confirmation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-chalet-white mb-4">
            Commande confirmée !
          </h1>
          
          <p className="font-body text-xl text-chalet-cream mb-8">
            Votre commande de planche a été enregistrée avec succès.
          </p>
        </div>

        {/* Détails de la commande */}
        <div className="card-dark max-w-2xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h2 className="font-heading text-xl font-bold text-chalet-white mb-2">
              Récapitulatif de votre commande
            </h2>
            <p className="text-chalet-cream text-sm">
              Numéro de commande : <span className="font-mono text-chalet-gold">#{commandeId}</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-chalet-brown-600">
              <span className="text-chalet-cream">Planche commandée</span>
              <span className="text-chalet-white font-semibold">
                {commande?.plancheName || 'Planche sélectionnée'}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-chalet-brown-600">
              <span className="text-chalet-cream">Date de récupération</span>
              <span className="text-chalet-white font-semibold">
                {commande?.dateRecuperation?.toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long'
                }) || 'Date sélectionnée'}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-chalet-brown-600">
              <span className="text-chalet-cream">Créneau horaire</span>
              <span className="text-chalet-white font-semibold">
                {commande?.creneauRecuperation || 'Créneau sélectionné'}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3 text-lg">
              <span className="text-chalet-gold font-semibold">Total</span>
              <span className="text-chalet-gold font-bold">
                {commande?.total?.toFixed(2) || '0.00'}€
              </span>
            </div>
          </div>
        </div>

        {/* Informations importantes */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-100/10 border border-blue-400/30 rounded-lg p-6">
            <h3 className="font-ui font-bold text-blue-400 mb-3 flex items-center">
              <span className="text-2xl mr-2">📧</span>
              Email de confirmation
            </h3>
            <p className="text-blue-200 text-sm">
              Un email de confirmation a été envoyé à votre adresse. 
              Vous y retrouverez tous les détails de votre commande.
            </p>
          </div>
          
          <div className="bg-amber-100/10 border border-amber-400/30 rounded-lg p-6">
            <h3 className="font-ui font-bold text-amber-400 mb-3 flex items-center">
              <span className="text-2xl mr-2">💳</span>
              Paiement sur place
            </h3>
            <p className="text-amber-200 text-sm">
              Le paiement s&apos;effectue lors de la récupération. 
              Cartes bancaires et espèces acceptées.
            </p>
          </div>
        </div>

        {/* Instructions de récupération */}
        <div className="card-dark mb-8">
          <h3 className="font-heading text-xl font-bold text-chalet-white mb-4">
            Instructions de récupération
          </h3>
          
          <div className="space-y-4 text-chalet-cream">
            <div className="flex items-start">
              <span className="text-chalet-gold text-xl mr-3 mt-1">1.</span>
              <div>
                <p className="font-semibold text-chalet-white mb-1">Présentez-vous à l&apos;heure</p>
                <p className="text-sm">
                  Arrivez dans votre créneau horaire pour récupérer votre planche fraîchement préparée.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-chalet-gold text-xl mr-3 mt-1">2.</span>
              <div>
                <p className="font-semibold text-chalet-white mb-1">Donnez votre nom</p>
                <p className="text-sm">
                  Indiquez simplement votre nom à l&apos;accueil pour récupérer votre commande.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-chalet-gold text-xl mr-3 mt-1">3.</span>
              <div>
                <p className="font-semibold text-chalet-white mb-1">Payez et dégustez</p>
                <p className="text-sm">
                  Effectuez le paiement et savourez votre sélection de fromages d&apos;exception !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adresse et contact */}
        <div className="bg-chalet-brown-700 rounded-lg p-6 mb-8">
          <h3 className="font-heading text-lg font-bold text-chalet-white mb-4">
            📍 Lieu de récupération
          </h3>
          <div className="text-chalet-cream">
            <p className="font-semibold text-chalet-white">Restaurant & Bar à Fromage</p>
            <p>123 Route des Alpes</p>
            <p>73000 Savoie</p>
            <p className="mt-3">
              <span className="font-semibold">Téléphone :</span> 04 79 XX XX XX
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <Link 
            href="/bar-fromage"
            className="btn-primary inline-block font-ui"
          >
            Commander une autre planche
          </Link>
          
          <div>
            <Link 
              href="/"
              className="text-chalet-cream hover:text-chalet-gold transition-colors font-ui"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-chalet-brown-900 flex items-center justify-center">
        <div className="text-center text-chalet-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chalet-gold mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
