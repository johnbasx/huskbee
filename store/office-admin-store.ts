import { DonationObjType } from "../pages/admin/all-donations";
import { FundraisersObjType } from "../pages/admin/fundraiser-list";
import { HuskbeeUserObjProp } from "../pages/admin/users";
import { create } from "zustand";

interface EventListStoreProp {
  fundraisersIns: FundraisersObjType | null;
  setFundraisersIns: (obj: FundraisersObjType) => void;
}
export const FundraiserObjStore = create<EventListStoreProp>((set, get) => ({
  fundraisersIns: null,
  setFundraisersIns: (obj) => set({ fundraisersIns: obj }),
}));

interface DonationListStoreProp {
  donationIns: DonationObjType | null;
  setDonationIns: (obj: DonationObjType) => void;
}
export const DonationObjStore = create<DonationListStoreProp>((set, get) => ({
  donationIns: null,
  setDonationIns: (obj) => set({ donationIns: obj }),
}));

interface TableProps {
  pageNumberList: number[];
  setPageNumberList: (pageNumberList: number[]) => void;
}
export const TableStore = create<TableProps>((set, get) => ({
  pageNumberList: [],
  setPageNumberList: (pageNumbers) => set({ pageNumberList: pageNumbers }),
}));

interface FundraiserDetailprop {
  status: string;
  setStatus: (status: string) => void;
}

export const FundraiserDetailStore = create<FundraiserDetailprop>(
  (set, get) => ({
    status: "",
    setStatus: (status) => set({ status: status }),
  })
);

interface usersProp {
  usersObj: HuskbeeUserObjProp | null;
  setUserObj: (obj: HuskbeeUserObjProp) => void;
}
export const usersStore = create<usersProp>((set, get) => ({
  usersObj: null,
  setUserObj: (obj) => set({ usersObj: obj }),
}));
