import {
	ArchiveBoxIcon,
	Bars4Icon,
	ClockIcon,
	HomeIcon,
	ListBulletIcon,
	RectangleGroupIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";

import { MdEventAvailable } from "react-icons/Md";

export const OrganiserTypes = [
	{
		id: 1,
		name: "Charity",
	},
	{
		id: 2,
		name: "Type 2",
	},
	{
		id: 3,
		name: "Type 3",
	},
];

export const off_admin_table_col_names = [
	{
		name: "Title",
	},
	{
		name: "Goal",
	},
	{
		name: "Approved Status",
	},
	{
		name: "Open Status",
	},
	{
		name: "Created on",
	},
	{
		name: "Organiser",
	},
	{
		name: "Action",
	},
];

export const donations_table_col_names = [
	{
		name: "Title",
	},
	{
		name: "Organise by",
	},
	{
		name: "Donor",
	},
	{
		name: "Donated on",
	},
	{
		name: "Donated amount",
	},
];

export const fundraiser_filter = [
	{ name: "All", value: "ALL" },
	{ name: "Approved", value: "A_P" },
	{ name: "Reject", value: "R_E" },
	{ name: "Pending", value: "P_N" },
	{ name: "Ongoing", value: "O_N" },
	{ name: "Finished", value: "F_I" },
];

export const donors_filter = [
	{ name: "Recent", value: "ALL" },
	{ name: "Highest amount", value: "H_A" },
	{ name: "Lowest amount", value: "L_A" },
];

// SIDE NAV LIST

export const navigation = [
	{ name: "Home", href: "/admin/home", icon: HomeIcon, current: true },
	{
		name: "Organiser List",
		href: "/admin/organiser-list",
		icon: Bars4Icon,
		current: false,
	},
	{
		name: "Huskbee Users",
		href: "/admin/users",
		icon: UsersIcon,
		current: false,
	},
	{
		name: "Recent activity",
		href: "/admin/rcent-activity",
		icon: ClockIcon,
		current: false,
	},
];

export const crowd_funding = [
	{
		name: "Fundraiser List",
		href: "/admin/fundraiser-list",
		bgColorClass: "bg-indigo-500",
	},
	{ name: "Donors", href: "/admin/donor-list", bgColorClass: "bg-green-500" },
	{
		name: "All donations",
		href: "/admin/all-donations",
		bgColorClass: "bg-red-500",
	},
	{
		name: "Issues and Report",
		href: "#!",
		bgColorClass: "bg-yellow-500",
	},
	{
		name: "Analytics",
		href: "/admin/analytics",
		bgColorClass: "bg-blue-700",
	},
];

export const org_dropdown_list = [
	{
		name: "Your Profile",
		href: "/organiser/profile",
	},
	{
		name: "Settings",
		href: "/organiser/settings",
	},
];

export const off_admin_dropdown_list = [
	{
		name: "Your Profile",
		href: "/admin/profile",
	},
	{
		name: "Settings",
		href: "/admin/settings",
	},
];

// SIDE NAV LIST FOR ORGANISER DASHBOARD
export const org_navigation = [
	{ name: "Home", href: "/organiser/home", icon: HomeIcon, current: true },
	{
		name: "My Events",
		href: "/organiser/events",
		icon: ListBulletIcon,
		current: false,
	},
	{
		name: "My Partners",
		href: "/organiser/partners",
		icon: RectangleGroupIcon,
		current: false,
	},
	{
		name: "Upcoming Events",
		href: "/organiser/upcoming-events",
		icon: ClockIcon,
		current: false,
	},
	{
		name: "Finished Events",
		href: "/organiser/finished-events",
		icon: ArchiveBoxIcon,
		current: false,
	},
	{
		name: "Create Event",
		href: "/organiser/create-event",
		icon: MdEventAvailable,
		current: false,
	},
];

export const org_crowd_funding = [
	{
		name: "Fundraisers",
		href: "/organiser/fundraisers",
		bgColorClass: "bg-indigo-500",
	},
	{
		name: "Create Fundraiser",
		href: "/organiser/create-fundraiser",
		bgColorClass: "bg-red-500",
	},
	// { name: "Donors", href: "/admin/donor-list", bgColorClass: "bg-green-500" },
	{
		name: "Donations",
		href: "/organiser/donations",
		bgColorClass: "bg-orange-500",
	},
	// { name: "Issues and Report", href: "#!", bgColorClass: "bg-yellow-500" },
	// {
	//   name: "Analytics",
	//   href: "/admin/analytics",
	//   bgColorClass: "bg-blue-700",
	// },
];
