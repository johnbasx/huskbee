import { create } from "zustand";

interface TableProps {
  pageNumberList: number[];
  setPageNumberList: (pageNumberList: number[]) => void;
}
export const TableStore = create<TableProps>((set, get) => ({
  pageNumberList: [],
  setPageNumberList: (pageNumbers) => set({ pageNumberList: pageNumbers }),
}));

interface RootUrlProp {
  currentPage : number;
  setCurrentPage: (pagenumber:number) => void;
  rootUrl: string;
  setRootUrl: (url: string) => void;
}
export const RootUrlStore = create<RootUrlProp>((set, get) => ({
  rootUrl: "",
  setRootUrl: (url) => set({ rootUrl: url }),
  currentPage: 1,
  setCurrentPage: (pagenumber) => set({currentPage: pagenumber})
}));
