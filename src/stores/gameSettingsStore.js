import { create } from "zustand";

const initialState = {
  mode: null,
  duration: 15,
  security: true,
};

export const useGameSettingsStore = create((set) => ({
  ...initialState,
  setMode: (value) => {
    set(() => ({ mode: value }));
  },
  setDuration: (value) => {
    set(() => ({ duration: value }));
  },
  toggleSecurity: () => {
    set((state) => ({ security: !state.security }));
  },
}));
