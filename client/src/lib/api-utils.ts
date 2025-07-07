import path from 'path';
import { promises as fs } from 'fs';
import { Project, Service, Testimonial } from '@/types/types';

type ContentType = 'services' | 'projects' | 'testimonials';

interface DataStructure {
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
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
