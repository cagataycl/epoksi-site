import { connection } from 'next/server';

const PLACE_ID = 'ChIJ9eqABFGgnyERT-lza_fs1Bs';
const headers = { 'Cache-Control': 'no-store' };

export async function GET() {
  await connection();
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return Response.json({ available: false }, { status: 503, headers });
  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=tr`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri,attributions' },
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return Response.json({ available: false }, { status: 503, headers });
    return Response.json(await response.json(), { headers });
  } catch {
    return Response.json({ available: false }, { status: 503, headers });
  }
}
