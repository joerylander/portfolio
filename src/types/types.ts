export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  img_src: string;
  img_alt: string;
  external_link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  img_src: string;
}

export interface ExperienceItem {
  id: number;
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string;
}

export type ContentType =
  | 'services'
  | 'projects'
  | 'testimonials'
  | 'experienceItems';

export type ApiEndpointKeys = {
  [K in ContentType]: `/api/${K}`;
};
