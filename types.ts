
export interface Project {
  id: number;
  title: string;
  location: string;
  capacity: string;
  description: string;
  imageUrl: string;
  category: 'Residential' | 'Commercial';
  detailedInfo?: string[];
}

export interface SavingsTier {
  size: string;
  target: string;
  savingsRange: string;
  roi: string;
  breakdown: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface FeatureDetail {
  title: string;
  desc: string;
  icon: string;
  longDesc: string;
}
