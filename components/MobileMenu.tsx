'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LeadButton } from '@/components/LeadButton';
import { NAV, SITE } from '@/lib/site';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Открыть меню"
        aria-expanded={open}
        className="flex items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-neutral-100"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 right-0 h-full w-[82%] max-w-xs bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <span className="font-bold text-lg">Меню</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Закрыть меню"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col p-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-teal-50 hover:text-teal-700"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto p-4 border-t border-neutral-200 space-y-3">
              <LeadButton className="btn btn-primary w-full justify-center">Оставить заявку</LeadButton>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="block text-center text-sm font-semibold text-teal-700"
              >
                {SITE.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
