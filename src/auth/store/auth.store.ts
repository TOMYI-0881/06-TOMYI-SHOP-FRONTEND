// import { useState } from "react";
import { create } from "zustand";

interface Store {
  count: number;
  hola: number;
  bb: number;
  inc: () => void;
  incD: (v: number) => void;
}

// const [variable, setVariable] = useState();

// setVariable((prev) => {
//   return prev;
// });

export const useStore = create<Store>()((set) => ({
  count: 1,
  hola: 1,
  bb: 2,
  // inc: () => set((state) => ({ count: state.count + 1 })),
  inc: () => set((state) => ({ count: state.count + 1 })),
  incD: (cantidad: number) =>
    set((state) => ({ count: state.count - cantidad })),
}));
