export interface Destination {
  slug: string;
  name: string;
  resortName: string;
  location: string;
  country: string;
  badge: string;
  heroImage: string;
  description: string;
  highlights: string[];
  accommodations: Accommodation[];
  activities: Activity[];
  gallery: string[];
}

export interface Accommodation {
  name: string;
  capacity: string;
  description: string;
  amenities: string[];
  image: string;
}

export interface Activity {
  name: string;
  image?: string;
}

export interface RetreatTheme {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  forText: string;
  color: string;
  arc: string[];
  days: DaySchedule[];
}

export interface DaySchedule {
  day: number;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: number;
  originalPrice?: number;
  savings?: string;
  perPerson: boolean;
  note: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
}

export interface AddOn {
  category: string;
  items: AddOnItem[];
}

export interface AddOnItem {
  name: string;
  description?: string;
  price: number;
  unit?: string;
}

export interface AddOnPackage {
  name: string;
  items: string;
  price: number;
  savings: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
