import { FundraisersObjType } from "../pages/admin/fundraiser-list";
import { create } from "zustand";

interface EventListStoreProp {
  fundraisersIns: FundraisersObjType | null;
  setFundraisersIns: (obj: FundraisersObjType) => void;
}
export const FundraiserObjStore = create<EventListStoreProp>((set, get) => ({
  fundraisersIns: null,
  setFundraisersIns: (obj) => set({ fundraisersIns: obj }),
}));

interface TableProps {
  pageNumberList: number[];
  setPageNumberList: (pageNumberList: number[]) => void;
}
export const TableStore = create<TableProps>((set, get) => ({
  pageNumberList: [],
  setPageNumberList: (pageNumbers) => set({ pageNumberList: pageNumbers }),
}));
