import {
  AddressProps,
  BankDetailProps,
  OrganiserProfileProps,
} from "../pages/organiser/profile";

import { create } from "zustand";

const orgProfile: OrganiserProfileProps = {
  id: "",
  name: "",
  email: "",
  logo: "",
  phone: "",
  organisation_name: "",
  organiser_type: "",
  created_at: "",
  updated_at: "",
  user: 0,
  user_id: "",
  status: false,
  description: "",
};

const addresses: AddressProps[] = [
  {
    id: "",
    name: "",
    pin_code: "",
    land_mark: "",
    google_map: "",
    organiser: "",
    huskbee_user: "",
    default: false,
  },
];
const bankAccounts: BankDetailProps[] = [
  {
    id: "",
    acc_number: "",
    ifsc: "",
    acc_name: "",
    branch: "",
    upi_id: "",
    phone_number: "",
    organiser: "",
    default: false,
  },
];

interface OrganiserProfileStoreProps {
  org_logo: string;
  setOrgLogo: (org_logo: string) => void;
  orgProfile: OrganiserProfileProps;
  setOrgProfile: (orgProfile: OrganiserProfileProps) => void;
  addresses: AddressProps[];
  setAddresses: (address: AddressProps[]) => void;
  bankAccounts: BankDetailProps[];
  setBankAccounts: (bankDetail: BankDetailProps[]) => void;
}

export const OrganiserProfileStore = create<OrganiserProfileStoreProps>(
  (set, get) => ({
    org_logo: "",
    setOrgLogo: (org_logo) => set({ org_logo: org_logo }),
    orgProfile: orgProfile,
    setOrgProfile: (profile) => set({ orgProfile: profile }),
    addresses: addresses,
    setAddresses: (addresses) => set({ addresses: addresses }),
    bankAccounts: bankAccounts,
    setBankAccounts: (bankAccounts) => set({ bankAccounts: bankAccounts }),
  })
);

export type AddressTabListType = {
  name: string;
  default: Boolean;
};

interface AddressTabListStoreProps {
  addressTabList: AddressTabListType[];
  setAddressTabList: (list: AddressTabListType[]) => void;
}

export const AddressTabListStore = create<AddressTabListStoreProps>(
  (set, get) => ({
    addressTabList: [],
    setAddressTabList: (list) => set({ addressTabList: list }),
  })
);
