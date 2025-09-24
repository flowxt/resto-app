// Menus de planches prédéfinies pour le click & collect
export const planches = [
  {
    id: 'decouverte',
    name: 'Planche Découverte',
    description: 'Une sélection de 4 fromages pour découvrir nos spécialités savoyardes',
    price: 25.90,
    image: '/images/planche.jpg',
    fromages: [
      'Reblochon AOP fermier',
      'Beaufort d\'été 18 mois',
      'Tomme de Savoie',
      'Chèvre frais aux herbes'
    ],
    accompaniments: [
      'Pain de campagne artisanal',
      'Confiture de figues',
      'Noix de Grenoble',
      'Salade verte'
    ],
    serves: '2-3 personnes',
    allergenes: ['Lait', 'Gluten', 'Fruits à coque'],
    available: true
  },
  {
    id: 'tradition',
    name: 'Planche Tradition',
    description: 'Les grands classiques savoyards dans une sélection généreuse',
    price: 35.90,
    image: '/images/planche.jpg',
    fromages: [
      'Beaufort AOP d\'alpage',
      'Comté 24 mois d\'affinage',
      'Reblochon fermier du Val d\'Arly',
      'Tomme des Bauges IGP',
      'Bleu de Termignon',
      'Chevrotin des Aravis'
    ],
    accompaniments: [
      'Pain aux noix artisanal',
      'Miel de montagne',
      'Confiture d\'abricots de Savoie',
      'Cornichons',
      'Salade mesclun',
      'Raisins de saison'
    ],
    serves: '4-5 personnes',
    allergenes: ['Lait', 'Gluten', 'Fruits à coque'],
    available: true
  },
  {
    id: 'prestige',
    name: 'Planche Prestige',
    description: 'Notre sélection premium des meilleurs fromages d\'exception',
    price: 49.90,
    image: '/images/planche.jpg',
    fromages: [
      'Beaufort d\'alpage AOP (réserve)',
      'Comté extra-vieux 36 mois',
      'Reblochon fermier médaillé',
      'Persillé de Tignes',
      'Tomme de Belledonne affinée grotte',
      'Sérac de montagne',
      'Roquefort Papillon',
      'Crottin de Chavignol AOP'
    ],
    accompaniments: [
      'Pain aux figues artisanal',
      'Miel de rhododendron',
      'Confiture de cerises noires',
      'Gelée de coing',
      'Fruits secs premium',
      'Salade d\'herbes fraîches',
      'Raisin chasselas'
    ],
    serves: '6-8 personnes',
    allergenes: ['Lait', 'Gluten', 'Fruits à coque'],
    available: true
  },
  {
    id: 'vegetarienne',
    name: 'Planche Végétarienne',
    description: 'Sélection de fromages au lait cru et accompagnements veggie',
    price: 28.90,
    image: '/images/planche.jpg',
    fromages: [
      'Comté AOP 18 mois',
      'Tomme de chèvre cendrée',
      'Beaufort d\'été',
      'Reblochon blanc',
      'Fromage blanc aux herbes'
    ],
    accompaniments: [
      'Pain complet bio',
      'Houmous de pois chiches',
      'Tapenade d\'olives',
      'Légumes croquants',
      'Graines de tournesol',
      'Fruits de saison'
    ],
    serves: '3-4 personnes',
    allergenes: ['Lait', 'Gluten', 'Sésame'],
    available: true
  },
  {
    id: 'duo',
    name: 'Planche Duo Romantique',
    description: 'Parfaite pour un moment à deux avec une sélection raffinée',
    price: 22.90,
    image: '/images/planche.jpg',
    fromages: [
      'Coeur de Neufchâtel',
      'Camembert de Normandie',
      'Chèvre frais aux herbes',
      'Mini Beaufort'
    ],
    accompaniments: [
      'Pain brioché',
      'Confiture de pétales de roses',
      'Chocolat noir',
      'Fraises (selon saison)',
      'Champagne offert (1 flûte par personne)'
    ],
    serves: '2 personnes',
    allergenes: ['Lait', 'Gluten', 'Œufs'],
    available: true,
    special: 'Champagne offert !'
  }
];

// Créneaux de récupération pour le click & collect
export const creneauxCollecte = [
  { id: '11h', label: '11h00 - 11h30' },
  { id: '11h30', label: '11h30 - 12h00' },
  { id: '12h', label: '12h00 - 12h30' },
  { id: '12h30', label: '12h30 - 13h00' },
  { id: '14h', label: '14h00 - 14h30' },
  { id: '14h30', label: '14h30 - 15h00' },
  { id: '15h', label: '15h00 - 15h30' },
  { id: '15h30', label: '15h30 - 16h00' },
  { id: '16h', label: '16h00 - 16h30' },
  { id: '16h30', label: '16h30 - 17h00' },
  { id: '17h', label: '17h00 - 17h30' },
  { id: '17h30', label: '17h30 - 18h00' }
];

// Jours de fermeture (dimanche et lundi)
export const joursFermeture = [0, 1]; // Dimanche = 0, Lundi = 1
