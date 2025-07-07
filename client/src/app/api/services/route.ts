import { NextResponse } from 'next/server';
import { getDataByType } from '../../../lib/api-utils';

export async function GET() {
  try {
    const services = await getDataByType<'services'>('services');
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load services' },
      { status: 500 },
    );
  }
}
