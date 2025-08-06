import { ApiEndpointKeys } from '@/types/types';

export const ApiEndpoints: ApiEndpointKeys = {
  services: '/api/services',
  projects: '/api/projects',
  testimonials: '/api/testimonials',
  experienceItems: '/api/experienceItems',
} as const;
