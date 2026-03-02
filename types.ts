
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface FitnessClass {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  socials: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface Transformation {
  id: string;
  name: string;
  timeframe: string;
  result: string;
  beforeImg: string;
  afterImg: string;
}
