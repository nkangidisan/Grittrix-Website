
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
  dataAiHint?: string; // Added for team member specific hints if they remain placeholders
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
  imageHint?: string; // Optional if actual image path is used
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
  imageHint?: string; // Optional if actual image path is used
  features: string[];
}

export interface MerchandiseItem {
  id: string;
  name: string;
  price?: string; 
  imageUrl: string;
  imageHint?: string; // Optional for placeholders
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
  imageHint?: string; // Optional if actual image path is used
  category: string;
}
