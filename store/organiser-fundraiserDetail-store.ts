import { DonorsObjType } from "../pages/organiser/fundraiser-detail/[fundraiserId]";
import { create } from "zustand";

interface DonorsObjStoreProp {
  donorsIns: DonorsObjType | null;
  setDonorsIns: (obj: DonorsObjType) => void;
}
export const DonorsObjStore = create<DonorsObjStoreProp>((set, get) => ({
  donorsIns: null,
  setDonorsIns: (obj) => set({ donorsIns: obj }),
}));
