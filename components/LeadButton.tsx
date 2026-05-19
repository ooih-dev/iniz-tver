'use client';
import type { ReactNode } from 'react';
import { useLeadModal } from './LeadModalContext';

export function LeadButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openModal } = useLeadModal();
  return (
    <button type="button" onClick={openModal} className={className ?? 'btn btn-primary'}>
      {children}
    </button>
  );
}
