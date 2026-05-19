'use client';
import { useEffect, useRef, useState } from 'react';
import { useLeadModal } from './LeadModalContext';
import { SITE } from '@/lib/site';

export function LeadModal() {
  const { open, closeModal } = useLeadModal();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open, closeModal]);

  useEffect(() => {
    if (!open) {
      setDone(false);
      setErr(null);
      setSending(false);
    }
  }, [open]);

  if (!open) return null;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) {
      setErr('Укажите телефон');
      return;
    }
    setSending(true);
    setErr(null);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, comment }),
      });
      if (!res.ok) throw new Error('bad');
      setDone(true);
      setName('');
      setPhone('');
      setComment('');
    } catch {
      setErr('Не удалось отправить. Позвоните по телефону.');
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Оставить заявку"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-md w-full p-7 relative shadow-2xl max-h-[92vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Закрыть"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition"
        >
          ✕
        </button>

        {done ? (
          <div className="py-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-3xl mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-bold">Спасибо!</h3>
            <p className="mt-3 text-neutral-700">Заявка принята. Перезвоним в течение 15 минут.</p>
            <button type="button" onClick={closeModal} className="btn btn-primary mt-6">
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="eyebrow">Заявка</div>
            <h3 className="text-2xl font-bold mt-2">Оставить заявку</h3>
            <p className="text-sm text-neutral-600 mt-2">
              Перезвоним в течение 15 минут в рабочее время.
            </p>

            <form onSubmit={submit} className="mt-5 space-y-3">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Имя</label>
                <input
                  ref={firstFieldRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как обращаться"
                  className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:border-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Телефон *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:border-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Комментарий</label>
                <textarea
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Адрес, тип объекта, бюджет — что считаете важным"
                  className="w-full border border-neutral-300 rounded-xl px-4 py-3 focus:border-teal-500 focus:outline-none"
                />
              </div>
              {err && <div className="text-sm text-red-600">{err}</div>}
              <button type="submit" disabled={sending} className="btn btn-primary w-full justify-center">
                {sending ? 'Отправляю…' : 'Отправить заявку'}
              </button>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Нажимая «Отправить», вы соглашаетесь с{' '}
                <a href="/privacy" className="underline">политикой конфиденциальности</a>.
              </p>
            </form>

            <div className="mt-6 pt-5 border-t border-neutral-200 text-sm text-neutral-700 space-y-1">
              <div>
                Или позвоните:{' '}
                <a href={`tel:${SITE.phoneTel}`} className="font-semibold text-teal-700">
                  {SITE.phone}
                </a>
              </div>
              <div className="text-neutral-500">
                {SITE.email} · {SITE.address}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
