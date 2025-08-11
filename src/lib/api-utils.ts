import path from 'path';
import { promises as fs } from 'fs';
import {
  ContentType,
  ExperienceItem,
  ProjectItem,
  Service,
  Testimonial,
} from '@/types/types';

interface DataStructure {
  services: Service[];
  projectItems: ProjectItem[];
  testimonials: Testimonial[];
  experienceItems: ExperienceItem[];
}

export async function getDataByType<T extends ContentType>(
  contentType: ContentType,
): Promise<DataStructure[T]> {
  try {
    const jsonDirectory = path.join(process.cwd(), 'db');
    const fileContents = await fs.readFile(
      jsonDirectory + '/data.json',
      'utf8',
    );
    const data: DataStructure = JSON.parse(fileContents);
    return data[contentType] as DataStructure[T];
  } catch (error) {
    console.error(`Error reading ${contentType} data:`, error);
    throw new Error(`Failed to load ${contentType} data`);
  }
}
