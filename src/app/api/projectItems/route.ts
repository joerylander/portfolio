import { NextResponse } from 'next/server';
import { getDataByType } from '@/lib/api-utils';

export async function GET() {
  try {
    const projects = await getDataByType<'projectItems'>('projectItems');
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error loading projects:', error);
    return NextResponse.json(
      { error: 'Failed to load projects' },
      { status: 500 },
    );
  }
}
