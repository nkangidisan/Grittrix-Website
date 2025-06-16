
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
  // dataAiHint removed as actual images are used
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
  detailsUrl?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  icon: React.ElementType;
  imageUrl: string;
  // imageHint removed as actual images are used
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
  imageHint?: string; // Kept for CORE product which is still placeholder
  features: string[];
}

export interface MerchandiseItem {
  id: string;
  name: string;
  price?: string; 
  imageUrl: string;
  imageHint?: string; // Kept as these are placeholders
  description?: string;
}

export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  applyUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; 
  imageUrl: string;
  // imageHint removed as actual images are used
  category: string;
}
