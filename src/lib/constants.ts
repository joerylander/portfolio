import { ApiEndpointKeys } from '@/types/types';

export const API_BASE_URL = '/api';

export const ApiEndpoints: ApiEndpointKeys = {
  services: `${API_BASE_URL}/services`,
  projectItems: `${API_BASE_URL}/projectItems`,
  testimonials: `${API_BASE_URL}/testimonials`,
  experienceItems: `${API_BASE_URL}/experienceItems`,
} as const;
