import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imgAlt: string;
  imgSrc: string; // relative path or CDN URL
  externalLink?: string | null;
  repoLink?: string | null;
  techStack: string[];
  startYear: number;
  endYear?: number | string | null;
  type?: 'client' | 'template' | 'corporate' | 'personal' | string;
  featured?: boolean;
  relatedExperience?: string[]; // ids matching your Experience timeline entries
  tags?: string[];
  impact?: string | null;
  public?: boolean; // default true
  slug?: string; // optional: '/projects/napparaten'
  updatedAt?: string; // ISO date
}

export interface Testimonial {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  testimonial: string;
  imgSrc: string;
}

export interface ExperienceItem {
  id: number;
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string;
}

export interface MenuItem {
  link: string;
  text: string;
  icon?: LucideIcon;
  download?: boolean;
}

export type ContentType =
  | 'services'
  | 'projectItems'
  | 'testimonials'
  | 'experienceItems';

export type ApiEndpointKeys = {
  [K in ContentType]: `/api/${K}`;
};
