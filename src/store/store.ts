import { create } from "zustand";
/* Zustand 전역 상태 타입 정의 */
export type GlobalState = ReturnType<typeof useStore>;

/* example code */
export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));
