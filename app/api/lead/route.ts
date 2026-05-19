import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const phone = (body?.phone ?? '').toString().trim();
    if (!phone) {
      return NextResponse.json({ ok: false, error: 'phone required' }, { status: 400 });
    }
    const payload = {
      ts: new Date().toISOString(),
      name: (body?.name ?? '').toString().trim() || null,
      phone,
      comment: (body?.comment ?? '').toString().trim() || null,
    };
    // TODO: подключить email/CRM. Пока — лог на сервер Vercel.
    console.log('[lead]', JSON.stringify(payload));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'bad request' }, { status: 400 });
  }
}
