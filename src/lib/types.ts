
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string; // Will be local path e.g., /media/team-member-name.jpg
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
  imageUrl: string; // Will be local path e.g., /media/industry-name.jpg
  imageHint?: string; // Kept for cases where it might still be useful for alt text, but not for placeholder hints
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string; // Will be local path e.g., /media/product-name.jpg
  imageHint?: string; // For alt text enhancement
  features: string[];
}

export interface MerchandiseItem {
  id: string;
  name: string;
  price?: string;
  imageUrl: string; // Will be local path e.g., /media/merch-item-name.jpg
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
  imageUrl: string; // Will be local path e.g., /media/blog-slug-name.jpg
  category: string;
}
