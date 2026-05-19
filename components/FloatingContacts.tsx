'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLeadModal } from './LeadModalContext';
import { SITE } from '@/lib/site';

const IconPhone = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconSend = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);
const IconChat = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

function MiniLink({
  href,
  label,
  color,
  children,
}: {
  href: string;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition hover:scale-110"
      style={{ background: color }}
    >
      {children}
      <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs text-white opacity-0 transition group-hover:opacity-100 hidden sm:block">
        {label}
      </span>
    </a>
  );
}

export function FloatingContacts() {
  const pathname = usePathname();
  const { openModal } = useLeadModal();
  const [open, setOpen] = useState(false);
  const isContacts = pathname === '/kontakty';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div className={`${open ? 'flex' : 'hidden'} sm:flex flex-col items-end gap-3`}>
        <MiniLink href={`tel:${SITE.phoneTel}`} label={SITE.phone} color="#1d6e77">
          {IconPhone}
        </MiniLink>
        {SITE.socials.tg && (
          <MiniLink href={SITE.socials.tg} label="Telegram" color="#229ED9">
            {IconSend}
          </MiniLink>
        )}
      </div>

      {!isContacts && (
        <button
          type="button"
          onClick={openModal}
          aria-label="Оставить заявку"
          className="group relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-amber-400 text-[#1a0e00] shadow-xl transition hover:scale-110"
        >
          {IconChat}
          <span className="pointer-events-none absolute right-[72px] whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs text-white opacity-0 transition group-hover:opacity-100 hidden sm:block">
            Оставить заявку
          </span>
        </button>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Скрыть контакты' : 'Показать контакты'}
        aria-expanded={open}
        className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-teal-700 text-white shadow-lg"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          IconPhone
        )}
      </button>
    </div>
  );
}
