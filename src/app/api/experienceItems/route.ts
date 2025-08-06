import { NextResponse } from 'next/server';
import { getDataByType } from '../../../lib/api-utils';

export async function GET() {
  try {
    const projects = await getDataByType<'experienceItems'>('experienceItems');
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error loading experience items:', error);
    return NextResponse.json(
      { error: 'Failed to load experience items' },
      { status: 500 },
    );
  }
}
