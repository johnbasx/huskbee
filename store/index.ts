import { create } from "zustand";

export interface authStatusProps {
  status: boolean | null;
  setAuthStatus: (status: boolean) => void;
}

export const authStatus = create<authStatusProps>((set, get) => ({
  status: null,
  setAuthStatus: (status) => set({ status: status }),
}));
