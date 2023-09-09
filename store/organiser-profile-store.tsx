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
const bankDetail: BankDetailProps[] = [
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
  orgProfile: OrganiserProfileProps;
  setOrgProfile: (orgProfile: OrganiserProfileProps) => void;
  addresses: AddressProps[];
  setAddresses: (address: AddressProps[]) => void;
  bankDetail: BankDetailProps[];
  setBankDetail: (bankDetail: BankDetailProps[]) => void;
}

export const OrganiserProfileStore = create<OrganiserProfileStoreProps>(
  (set, get) => ({
    orgProfile: orgProfile,
    setOrgProfile: (profile) => set({ orgProfile: profile }),
    addresses: addresses,
    setAddresses: (addresses) => set({ addresses: addresses }),
    bankDetail: bankDetail,
    setBankDetail: (bankDetail) => set({ bankDetail: bankDetail }),
  })
);
