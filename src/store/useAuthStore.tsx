import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useSessionStore = create(
  // persist(
  (set) => ({
    session: null,
    login: (session: any) => set({ session }),
    logout: () => set({ session: null }),
  }),
  // {
  //   name: "session", // name of the item in the storage (must be unique)
  //   storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  // }
  // )
);