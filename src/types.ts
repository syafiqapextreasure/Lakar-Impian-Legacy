export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'cabinet' | 'installation';
  badge?: string;
  features?: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  items: string[];
  recommendedFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Kitchen' | 'Cabinet' | 'TV / Feature Wall' | 'Installation' | 'Drill & Hanging' | 'Interior';
  categoryKey: 'all' | 'kitchen' | 'cabinet' | 'tv' | 'installation' | 'drill' | 'interior';
  image: string;
  description: string;
  tag: string;
}

export interface WorkerHighlight {
  id: string;
  caption: string;
  detail: string;
  image: string;
  tag: string;
}
