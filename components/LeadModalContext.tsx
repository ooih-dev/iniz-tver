'use client';
import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type LeadModalCtx = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const Ctx = createContext<LeadModalCtx>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export function useLeadModal() {
  return useContext(Ctx);
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  return <Ctx.Provider value={{ open, openModal, closeModal }}>{children}</Ctx.Provider>;
}
