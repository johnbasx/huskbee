// import { EventDetailProps } from "@components/eventDetail/EventDetail";

import { EventDetailProps } from "../pages/event-detail/[eventId]";
import { create } from "zustand";

export interface authStatusProps {
  status: boolean | null;
  setAuthStatus: (status: boolean) => void;
}

export const authStatus = create<authStatusProps>((set, get) => ({
  status: null,
  setAuthStatus: (status) => set({ status: status }),
}));

export interface UpcomingEventsProps {
  events: EventDetailProps[] | null;
  setUpcomingEvents: (events: EventDetailProps[]) => void;
}

export const upcomingEvents = create<UpcomingEventsProps>((set, get) => ({
  events: null,
  setUpcomingEvents: (events) => set({ events: events }),
}));
