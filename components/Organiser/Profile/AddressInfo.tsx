import { AddressProps, ProfileContent } from "../../../pages/organiser/profile";
import { CheckBadgeIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import React, { ReactNode, useEffect, useState } from "react";

import { AddressTabListStore } from "@store/organiser-profile-store";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const AddressInfo = ({
	Addresses,
	SetAddress,
}: {
	Addresses: AddressProps[];
	SetAddress: (addresses: AddressProps[]) => void;
}) => {
	return (
		<Wrapper Addresses={Addresses}>
			{Addresses.map((address, idx) => (
				<Tab.Panel
					key={`tab-panel-${idx}`}
					className={clsx("rounded-xl bg-transparent p-3")}
				>
					<ProfileContent
						lookUp={address.id}
						name="name"
						label="Address"
						value={address.name}
						link="update-organiser-address/"
					/>
					<ProfileContent
						lookUp={address.id}
						name="land_mark"
						label="Landmark"
						value={address.land_mark}
						link="update-organiser-address/"
					/>
					<ProfileContent
						lookUp={address.id}
						name="pin_code"
						label="Pin"
						value={address.pin_code}
						link="update-organiser-address/"
					/>
					{!address.default&&
						<button
					  type="button"
					//   onClick={(e)=>MarkDefault(e, detail.id, detail.default)}
					  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
					>
					  <PlayCircleIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
					  Mark as default
					</button>}
				</Tab.Panel>
			))}
		</Wrapper>
	);
};

export default AddressInfo;

const Wrapper = ({
	children,
	Addresses
}: // Addresses,
{
	children: ReactNode;
	Addresses: AddressProps[];
}) => {
	const { addressTabList } = AddressTabListStore();

	return (
		<div className="w-full max-w-full px-2 py-4 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-transparent p-1">
					{Addresses.map((address, index) => (
						<Tab
							key={`address_tab${index}`}
							className={({ selected }) =>
								clsx(
									"w-full py-2.5 text-sm font-medium leading-5 text-gray-50",
									"ring-white focus:outline-none",
									selected
										? "border-b-2 border-b-blue-400 border-white  shadow"
										: "text-gray-700 hover:bg-white/[0.12] border-b-2 border-b-white",
								)
							}
						>
							<span className="flex text-xl justify-center gap-x-2 text-black">
								{address.name}{" "}
								{address.default && (
									<CheckBadgeIcon className="h-7 w-7 text-green-500 font-bold" />
								)}
							</span>
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">{children}</Tab.Panels>
			</Tab.Group>
		</div>
	);
};
