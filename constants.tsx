
import { NavItem, Service, Plan, Trainer, Transformation, FitnessClass, Facility } from './types';

export const COLORS = {
  primary: '#ffce00', // Gymland Yellow
  secondary: '#ffaa00', // Amber
  tertiary: '#d4af37', // Metallic Gold
  background: '#020202',
};

export const GRADIENTS = {
  hero: 'linear-gradient(135deg, #ffffff 0%, #ffce00 50%, #ff8c00 100%)',
  brand: 'linear-gradient(135deg, #ffce00, #ff8c00)',
};

export const LOGO_URL = "/assets/logo-v2.png";
export const LOGO_V2_URL = "/assets/logo-v2.png";

export const NAV_ITEMS: NavItem[] = [
  { label: 'MONARCHY', path: '/' },
  { label: 'DNA', path: '/about' },
  { label: 'ECOSYSTEM', path: '/services' },
  { label: 'ACCESS', path: '/membership' },
  { label: 'COMMANDERS', path: '/trainers' },
  { label: 'EVOLUTION', path: '/transformations' },
  { label: 'TRANSMIT', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'kinetic',
    title: 'KINETIC',
    subtitle: 'ENGINE',
    description: 'High-precision physical conditioning using superior biomechanical technology.',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'neuro',
    title: 'NEURO',
    subtitle: 'FLOW',
    description: 'Optimize mind-muscle connection with expert-led cognitive-athletic exercises.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'metabolic',
    title: 'HYPER',
    subtitle: 'POWER',
    description: 'Advanced metabolic conditioning to push your limits and incinerate fat.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800'
  }
];

export const WOMEN_ZONE_DATA = {
  title: 'TITANESS SANCTUARY',
  subtitle: 'WOMEN-ONLY ZONE',
  description: 'A dedicated private space exclusively for women. Featuring bespoke changing rooms, luxury amenities, and full workout access in a secure, high-performance environment.',
  image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1200'
};

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'nutrition',
    title: 'Refuel Station',
    description: 'Homemade pre and post-workout nutrition options, designed for optimal biological recovery.',
    icon: 'fa-apple-whole'
  },
  {
    id: 'intel',
    title: 'Intel Hub',
    description: 'A versatile learning space for reading, seminars, educational sessions, or deep-focus work.',
    icon: 'fa-book-open'
  },
  {
    id: 'safety',
    title: 'Hygiene Protocol',
    description: 'Rigorous equipment disinfection and COVID-19 safety measures to ensure total member protection.',
    icon: 'fa-shield-virus'
  }
];

export const REPUTATION_STATS = {
  rating: 5.0,
  reviews: "Elite Member Satisfaction",
  source: "Verified Local Rankings"
};

export const COMPARISON_DATA = {
  typical: [
    { label: 'Spatial Density', value: 'High Crowding' },
    { label: 'Equipment Volume', value: 'Limited Equipment' },
    { label: 'Environment', value: 'Standard Layout' },
    { label: 'Coaching', value: 'Basic Supervision' }
  ],
  gymland: [
    { label: 'Spatial Density', value: '1,600M² Elite Flow' },
    { label: 'Equipment Volume', value: '120+ Pro Machines' },
    { label: 'Environment', value: 'Multi-Zone Ecosystem' },
    { label: 'Coaching', value: 'Elite Commanders' }
  ]
};

export const CLASSES_DATA: FitnessClass[] = [
  {
    id: 'circuit',
    title: 'Circuit Training',
    description: 'Full body conditioning and high-volume endurance protocols.',
    benefit: 'Systemic strength and metabolic resilience.',
    icon: 'fa-repeat'
  },
  {
    id: 'stretching',
    title: 'Stretching',
    description: 'Flexibility and precision recovery for sustainable athletic health.',
    benefit: 'Increased mobility and accelerated fiber repair.',
    icon: 'fa-child-reaching'
  },
  {
    id: 'pilates',
    title: 'Pilates',
    description: 'Core stability, postural alignment, and functional control.',
    benefit: 'Structural integrity and deep abdominal strength.',
    icon: 'fa-user-check'
  },
  {
    id: 'zumba',
    title: 'Zumba',
    description: 'High-energy rhythmic cardio optimized for caloric expenditure.',
    benefit: 'Dynamic fat burning and cardiovascular efficiency.',
    icon: 'fa-music'
  },
  {
    id: 'boxing',
    title: 'Boxing / Combat Training',
    description: 'Tactical coordination, explosive strength, and endurance.',
    benefit: 'Neural reflexes and high-level power.',
    icon: 'fa-hand-fist'
  },
  {
    id: 'hiit',
    title: 'HIIT',
    description: 'Maximal intensity intervals designed for maximal metabolic afterburn.',
    benefit: 'Maximum oxygen uptake and post-session energy combustion.',
    icon: 'fa-bolt-lightning'
  }
];

export const PLANS: Plan[] = [
  {
    id: 'core',
    name: 'FUNDAMENTAL ACCESS',
    price: '4,500',
    period: 'CREDITS/MONTH',
    features: ['Elite Equipment', 'Data Analytics', 'Digital Lockers', 'App Synchronization'],
  },
  {
    id: 'titan',
    name: 'ELITE TITAN',
    price: '7,500',
    period: 'CREDITS/MONTH',
    features: ['Unlimited Zones', 'Neuro-Conditioning', 'Guest Protocols', 'Nutrition Dashboard'],
    isPopular: true,
  },
  {
    id: 'apex',
    name: 'APEX MONARCH',
    price: '12,500',
    period: 'CREDITS/MONTH',
    features: ['Individual Strategy', 'Recovery Lab Access', 'Priority Reservations', 'Personalized Supplementation'],
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Bilell Benmehiriz',
    specialty: 'Strategy and Mechanics',
    image: '/assets/trainers/bilell.png',
    socials: { instagram: 'https://www.instagram.com/thegymland_dz/' }
  },
  {
    id: '2',
    name: 'Vance 02',
    specialty: 'Metabolic Optimization',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800',
    socials: { instagram: 'https://www.instagram.com/thegymland_dz/' }
  },
  {
    id: '3',
    name: 'Sato 03',
    specialty: 'Kinetic Mobility',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800',
    socials: { instagram: 'https://www.instagram.com/thegymland_dz/' }
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 't1',
    name: 'Alpha Protocol',
    timeframe: '180 Days',
    result: 'Total Body Reconstruction.',
    beforeImg: '/transformation0_before.jpg',
    afterImg: '/transformation0_after.jpg'
  },
  {
    id: 't2',
    name: 'Beta Protocol',
    timeframe: '90 Days',
    result: 'Force Threshold Expansion.',
    beforeImg: '/transformation1_before.png',
    afterImg: '/transformation1_after.png'
  }
];

export const EQUIPMENT_PARTNERS = [
  {
    id: 'panatta',
    name: 'Panatta Sport Equipment',
    logo: '/assets/partners/panatta.svg',
    description: 'Panatta is a market-oriented company, founded on principles of qualitative excellence, a reference point for technical innovation, style, and emotions.',
    tagline: 'PREMIUM EQUIPMENT'
  },
  {
    id: 'bodytone',
    name: 'Bodytone Equipment',
    logo: '/assets/partners/bodytone.svg',
    description: 'A player in the fitness market for over 20 years, this internationally renowned brand has distinguished itself through the quality of its products and their design.',
    tagline: 'PREMIUM EQUIPMENT'
  },
  {
    id: 'excellence',
    name: 'Panatta & Bodytone Excellence',
    logo: '/assets/partners/composite.svg', // Combined view
    description: 'To guarantee an ultimate training experience, we have selected the best of both worlds: the biomechanical precision of Panatta Sport combined with the innovative design of Bodytone. A unique synergy of excellence.',
    tagline: 'EXCELLENCE SYNERGY'
  }
];
