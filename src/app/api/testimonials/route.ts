import { NextResponse } from 'next/server';
import { getDataByType } from '../../../lib/api-utils';

export async function GET() {
  try {
    const testimonials = await getDataByType<'testimonials'>('testimonials');
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error loading testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to load testimonials' },
      { status: 500 },
    );
  }
}
