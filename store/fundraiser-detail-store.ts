import { create } from "zustand";

interface ShareCountStoreProp {
    count: number;
    setCount: (amt: number) => void;
  }
  
  export const ShareCountStore = create<ShareCountStoreProp>(
    (set, get) => ({
      count: 0,
      setCount: (count) => set({ count: count }),
    })
  );
  