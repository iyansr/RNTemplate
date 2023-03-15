import mmkv from '@modules/lib/mmkv';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface JWTState {
  jwt: string | null;
  setJwt: (newJwt: string) => void;
  clearJwt: () => void;
  isLoading?: boolean;
}

export const useJwtStore = create<JWTState>()(
  persist(
    set => ({
      jwt: null,
      setJwt: jwt => set({ jwt }),
      clearJwt: () => set({ jwt: null }),
      isLoading: true,
    }),
    {
      name: 'TOKEN',
      storage: createJSONStorage(() => mmkv),
      onRehydrateStorage: () => state => {
        if (state) {
          state.isLoading = false;
        }
      },
    },
  ),
);
