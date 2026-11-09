import { create } from 'zustand';

interface PermissionState {
  permissions: string[];
  setPermissions: (permissions: string[]) => void;
  hasPermission: (perm: string) => boolean;
}

export const usePermissionStore = create<PermissionState>((set, get) => ({
  permissions: [],
  setPermissions: (permissions) => set({ permissions }),
  hasPermission: (perm) => get().permissions.includes(perm),
}));
