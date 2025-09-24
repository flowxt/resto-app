"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { planches, creneauxCollecte, joursFermeture } from '@/data/planches';

function CommandeFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plancheId = searchParams?.get('planche');
  
  const [selectedPlanche, setSelectedPlanche] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateRecuperation: '',
    creneauRecuperation: '',
    allergies: '',
    commentaires: '',
    quantite: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Charger la planche sélectionnée
  useEffect(() => {
    if (plancheId) {
      const planche = planches.find(p => p.id === plancheId);
      if (planche) {
        setSelectedPlanche(planche);
      } else {
        router.push('/bar-fromage');
      }
    } else {
      router.push('/bar-fromage');
    }
  }, [plancheId, router]);

  // Générer les dates disponibles (exclut dimanche et lundi)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Exclure dimanche (0) et lundi (1)
      if (!joursFermeture.includes(date.getDay())) {
        // Si c'est aujourd'hui, vérifier qu'il reste au moins 2h
        if (i === 0) {
          const now = new Date();
          const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);
          if (twoHoursLater.getHours() >= 18) {
            continue; // Trop tard pour aujourd'hui
          }
        }
        
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          })
        });
      }
    }
    
    return dates;
  };

  // Gérer les changements du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur si elle existe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Valider le formulaire
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    if (!formData.dateRecuperation) newErrors.dateRecuperation = 'La date est requise';
    if (!formData.creneauRecuperation) newErrors.creneauRecuperation = 'Le créneau est requis';
    if (formData.quantite < 1) newErrors.quantite = 'La quantité doit être au moins 1';
    
    // Valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    // Valider le téléphone (format français basique)
    const phoneRegex = /^(\+33|0)[1-9](\d{8})$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumettre la commande
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const commandeData = {
        ...formData,
        planche: selectedPlanche,
        total: selectedPlanche.price * formData.quantite,
        status: 'PENDING',
        createdAt: new Date().toISOString()
      };
      
      const response = await fetch('/api/planches/commande', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commandeData),
      });
      
      if (response.ok) {
        const result = await response.json();
        router.push(`/bar-fromage/confirmation?id=${result.id}`);
      } else {
        throw new Error('Erreur lors de la commande');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la commande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedPlanche) {
    return (
      <div className="min-h-screen bg-chalet-brown-900 flex items-center justify-center">
        <div className="text-center text-chalet-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chalet-gold mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  const availableDates = getAvailableDates();
  const totalPrice = selectedPlanche.price * formData.quantite;

  return (
    <main className="min-h-screen bg-chalet-brown-900 text-chalet-white">
      {/* Navbar avec espacement */}
      <div className="h-20"></div>
      
      {/* Header */}
      <section className="bg-gradient-to-r from-chalet-wood to-nude-700 text-nude-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-white/80 hover:text-white mb-4 font-ui"
          >
            ← Retour aux planches
          </button>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Commander votre planche
          </h1>
          <p className="font-body text-lg">
            Finalisez votre commande de click &amp; collect
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Résumé de la planche */}
          <div className="card-dark">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedPlanche.image}
                alt={selectedPlanche.name}
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="font-heading text-2xl font-bold text-chalet-white mb-2">
              {selectedPlanche.name}
            </h2>
            <p className="text-chalet-cream mb-4">
              {selectedPlanche.description}
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-ui font-semibold text-chalet-gold mb-2">
                  🧀 Fromages inclus
                </h3>
                <ul className="text-sm text-chalet-cream space-y-1">
                  {selectedPlanche.fromages.map((fromage, index) => (
                    <li key={index}>• {fromage}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-ui font-semibold text-chalet-gold mb-2">
                  🥖 Accompagnements
                </h3>
                <ul className="text-sm text-chalet-cream space-y-1">
                  {selectedPlanche.accompaniments.map((accomp, index) => (
                    <li key={index}>• {accomp}</li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-amber-100/10 border border-amber-400/30 rounded-lg">
                <h3 className="font-ui font-semibold text-amber-400 mb-2">
                  ⚠️ Allergènes présents
                </h3>
                <p className="text-amber-200 text-sm">
                  {selectedPlanche.allergenes.join(', ')}
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire de commande */}
          <div className="card-dark">
            <h2 className="font-heading text-xl font-bold text-chalet-white mb-6">
              Informations de commande
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Quantité */}
              <div>
                <label className="block text-chalet-gold font-ui font-semibold mb-2">
                  Quantité
                </label>
                <select
                  name="quantite"
                  value={formData.quantite}
                  onChange={handleChange}
                  className="w-full bg-chalet-brown-700 border border-chalet-brown-600 rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>
                      {num} planche{num > 1 ? 's' : ''} - {(selectedPlanche.price * num).toFixed(2)}€
                    </option>
                  ))}
                </select>
              </div>

              {/* Informations personnelles */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-chalet-gold font-ui font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-chalet-brown-700 border rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold ${
                      errors.name ? 'border-red-500' : 'border-chalet-brown-600'
                    }`}
                    placeholder="Votre nom et prénom"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-chalet-gold font-ui font-semibold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-chalet-brown-700 border rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold ${
                      errors.phone ? 'border-red-500' : 'border-chalet-brown-600'
                    }`}
                    placeholder="06 12 34 56 78"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-chalet-gold font-ui font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-chalet-brown-700 border rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold ${
                    errors.email ? 'border-red-500' : 'border-chalet-brown-600'
                  }`}
                  placeholder="votre@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Date et créneau de récupération */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-chalet-gold font-ui font-semibold mb-2">
                    Date de récupération *
                  </label>
                  <select
                    name="dateRecuperation"
                    value={formData.dateRecuperation}
                    onChange={handleChange}
                    className={`w-full bg-chalet-brown-700 border rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold ${
                      errors.dateRecuperation ? 'border-red-500' : 'border-chalet-brown-600'
                    }`}
                  >
                    <option value="">Choisir une date</option>
                    {availableDates.map(date => (
                      <option key={date.value} value={date.value}>
                        {date.label}
                      </option>
                    ))}
                  </select>
                  {errors.dateRecuperation && <p className="text-red-400 text-sm mt-1">{errors.dateRecuperation}</p>}
                </div>
                
                <div>
                  <label className="block text-chalet-gold font-ui font-semibold mb-2">
                    Créneau horaire *
                  </label>
                  <select
                    name="creneauRecuperation"
                    value={formData.creneauRecuperation}
                    onChange={handleChange}
                    className={`w-full bg-chalet-brown-700 border rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold ${
                      errors.creneauRecuperation ? 'border-red-500' : 'border-chalet-brown-600'
                    }`}
                    disabled={!formData.dateRecuperation}
                  >
                    <option value="">Choisir un créneau</option>
                    {creneauxCollecte.map(creneau => (
                      <option key={creneau.id} value={creneau.id}>
                        {creneau.label}
                      </option>
                    ))}
                  </select>
                  {errors.creneauRecuperation && <p className="text-red-400 text-sm mt-1">{errors.creneauRecuperation}</p>}
                </div>
              </div>

              {/* Allergies */}
              <div>
                <label className="block text-chalet-gold font-ui font-semibold mb-2">
                  Allergies ou intolérances
                </label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-chalet-brown-700 border border-chalet-brown-600 rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold resize-none"
                  placeholder="Précisez vos allergies ou intolérances alimentaires..."
                />
                <p className="text-chalet-cream text-sm mt-1">
                  ⚠️ Cette planche contient déjà : {selectedPlanche.allergenes.join(', ')}
                </p>
              </div>

              {/* Commentaires */}
              <div>
                <label className="block text-chalet-gold font-ui font-semibold mb-2">
                  Commentaires (optionnel)
                </label>
                <textarea
                  name="commentaires"
                  value={formData.commentaires}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-chalet-brown-700 border border-chalet-brown-600 rounded-lg px-4 py-3 text-chalet-white font-ui focus:outline-none focus:border-chalet-gold resize-none"
                  placeholder="Demandes particulières, questions..."
                />
              </div>

              {/* Récapitulatif et soumission */}
              <div className="border-t border-chalet-brown-600 pt-6">
                <div className="bg-chalet-brown-700 p-4 rounded-lg mb-6">
                  <h3 className="font-ui font-semibold text-chalet-gold mb-2">
                    Récapitulatif de la commande
                  </h3>
                  <div className="space-y-2 text-chalet-cream">
                    <div className="flex justify-between">
                      <span>{selectedPlanche.name} × {formData.quantite}</span>
                      <span>{totalPrice.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between font-bold text-chalet-white text-lg">
                      <span>Total TTC</span>
                      <span>{totalPrice.toFixed(2)}€</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary font-ui text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-chalet-brown-900 mr-2"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    `Commander maintenant - ${totalPrice.toFixed(2)}€`
                  )}
                </button>
                
                <p className="text-chalet-cream text-sm text-center mt-4">
                  Paiement à la récupération • Commande confirmée par email
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CommandePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-chalet-brown-900 flex items-center justify-center">
        <div className="text-center text-chalet-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chalet-gold mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    }>
      <CommandeFormContent />
    </Suspense>
  );
}
