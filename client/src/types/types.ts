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
