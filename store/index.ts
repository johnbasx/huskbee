// import { EventDetailProps } from "@components/eventDetail/EventDetail";

import {
  EventDetailProps,
  EventPartnersProps,
  TicketVariantProps,
} from "../pages/event-detail/[eventId]";

import { AddressFormValues } from "@components/organiser/registration/AddressForm";
import { BankDetailFormValues } from "@components/organiser/registration/BankDetailForm";
import { EventsProps } from "../pages/organiser/events";
import { FundraiserEventProps } from "../pages/organiser/fundraisers";
import { OrgDetailFormValues } from "@components/organiser/registration/OrganisationDetail";
import { create } from "zustand";

interface TokenProps {
  user_token: string;
  setUserToken: (token: string) => void;
  token: string;
  setOrgToken: (token: string) => void;
  office_admin_token: string;
  setOfficeAdminToken: (token: string) => void;
}
export const orgTokenStore = create<TokenProps>((set, get) => ({
  user_token: "",
  setUserToken: (user_token) => set({user_token:user_token}),
  token: "",
  setOrgToken: (token) => set({ token: token }),
  office_admin_token: "",
  setOfficeAdminToken: (token) => set({ office_admin_token: token }),
}));

export interface authStatusProps {
  status: boolean | null;
  setAuthStatus: (status: boolean) => void;
}

export const authStatus = create<authStatusProps>((set, get) => ({
  status: null,
  setAuthStatus: (status) => set({ status: status }),
}));

// EVENT PARTNER STORE
export interface EventPartnerStoreProps {
  partners: EventPartnersProps[] | null;

  setPartners: (partners: EventPartnersProps[]) => void;
}

export const eventPartnersStore = create<EventPartnerStoreProps>(
  (set, get) => ({
    partners: null,
    setPartners: (partners) => set({ partners: partners }),
  })
);

export interface notEventPartnerStoreProps {
  notEventPartners: EventPartnersProps[] | null;
  setNotEventPartners: (partners: EventPartnersProps[]) => void;
}

export const notEventPartnersStore = create<notEventPartnerStoreProps>(
  (set, get) => ({
    notEventPartners: null,
    setNotEventPartners: (partners) => set({ notEventPartners: partners }),
  })
);

export interface OrgPartnersProp {
  orgPartners: EventPartnersProps[] | null;
  setOrgPartners: (partners: EventPartnersProps[]) => void;
}

export const OrgPartnersStore = create<OrgPartnersProp>((set, get) => ({
  orgPartners: null,
  setOrgPartners: (partners) => set({ orgPartners: partners }),
}));

export interface UpcomingEventsProps {
  events: EventDetailProps[] | null;
  setUpcomingEvents: (events: EventDetailProps[]) => void;
}

export const upcomingEvents = create<UpcomingEventsProps>((set, get) => ({
  events: null,
  setUpcomingEvents: (events) => set({ events: events }),
}));

interface RegistrationStepsProps {
  orgDetailFormStatus: boolean;
  setOrgDetailFormStatus: (status: boolean) => void;
  addressFormStatus: boolean;
  setAddressFormStatus: (status: boolean) => void;
  orgBankDetailFormStatus: boolean;
  setBankDetailFormStatus: (status: boolean) => void;
}

export const RegistrationFormsStore = create<RegistrationStepsProps>(
  (set, get) => ({
    orgDetailFormStatus: true,
    setOrgDetailFormStatus: (status) => set({ orgDetailFormStatus: status }),
    addressFormStatus: false,
    setAddressFormStatus: (status) => set({ addressFormStatus: status }),
    orgBankDetailFormStatus: false,
    setBankDetailFormStatus: (status) =>
      set({ orgBankDetailFormStatus: status }),
  })
);

const org_detail: OrgDetailFormValues = {
  username: "",
  name: "",
  organisation_name: "",
  email: "",
  phone: "",
  logo: "",
  description: "",
  organiser_type: "",
};

const org_address: AddressFormValues = {
  name: "",
  pin_code: "",
  land_mark: "",
  google_map: "",
};

const org_bankDetail: BankDetailFormValues = {
  acc_number: "",
  ifsc: "",
  acc_name: "",
  branch: "",
  upi_id: "",
  phone_number: "",
  bank_name: "",
};
interface RegistrationFormDataProps {
  mainDetail: OrgDetailFormValues;
  setMainDetail: (mainDetail: OrgDetailFormValues) => void;
  address: AddressFormValues;
  setAddress: (address: AddressFormValues) => void;
  bankDetail: BankDetailFormValues;
  setBankDetail: (bankDetail: BankDetailFormValues) => void;
}

export const RegistrationFormDataStore = create<RegistrationFormDataProps>(
  (set, get) => ({
    mainDetail: org_detail,
    setMainDetail: (formValues) => set({ mainDetail: formValues }),
    address: org_address,
    setAddress: (formValues) => set({ address: formValues }),
    bankDetail: org_bankDetail,
    setBankDetail: (formValues) => set({ bankDetail: formValues }),
  })
);

export interface EventTicketProp {
  eventTickets: TicketVariantProps[] | null;
  setEventTickets: (tickets: TicketVariantProps[]) => void;
}

export const EventTicketStore = create<EventTicketProp>((set, get) => ({
  eventTickets: null,
  setEventTickets: (tickets) => set({ eventTickets: tickets }),
}));

export interface FundraiserProps {
  fundraisers: FundraiserEventProps[] | null;
  setFundraisers: (events: FundraiserEventProps[]) => void;
}

export const FundraiserStore = create<FundraiserProps>((set, get) => ({
  fundraisers: null,
  setFundraisers: (events) => set({ fundraisers: events }),
}));

interface EventNameProps {
  eventName: string;
  setEventName: (name: string) => void;
}
export const EventNameStore = create<EventNameProps>((set, get) => ({
  eventName: "",
  setEventName: (name) => set({ eventName: name }),
}));

// interface EventListStoreProp {
//   eventList: EventDetailProps[] | [];
//   setEventList: (list: EventDetailProps[]) => void;
// }
// export const EventListStore = create<EventListStoreProp>((set, get) => ({
//   eventList: [],
//   setEventList: (list) => set({ eventList: list }),
// }));

interface EventListStoreProp {
  eventsObj: EventsProps | null;
  setEventObj: (obj: EventsProps) => void;
}
export const EventListStore = create<EventListStoreProp>((set, get) => ({
  eventsObj: null,
  setEventObj: (obj) => set({ eventsObj: obj }),
}));

interface PaymentAmountStoreProp {
  amt: number;
  setAmt: (amt: number) => void;
}

export const PaymentAmountStore = create<PaymentAmountStoreProp>(
  (set, get) => ({
    amt: 0,
    setAmt: (amt) => set({ amt: amt }),
  })
);
