import { create } from 'zustand';

interface TenantState {
  currentTenantId: string | null;
  setCurrentTenantId: (id: string | null) => void;
}

export const useTenantStore = create<TenantState>((set) => ({
  currentTenantId: null,
  setCurrentTenantId: (id) => set({ currentTenantId: id }),
}));
