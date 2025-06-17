
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string; // e.g., /media/team-member-name.jpg
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
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
  imageUrl: string; // e.g., /media/industry-name.jpg
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string; // e.g., /media/product-name.jpg
  features: string[];
}

export interface MerchandiseItem {
  id: string;
  name: string;
  price?: string;
  imageUrl: string; // e.g., /media/merch-item-name.jpg
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
  imageUrl: string; // e.g., /media/blog-slug-name.jpg
  category: string;
}

