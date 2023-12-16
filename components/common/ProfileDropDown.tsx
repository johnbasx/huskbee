import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { TbLogout } from "react-icons/tb";
import clsx from "clsx";

type DropDownListItemsType = {
	name: string;
	href: string;
};
type ProfileDropDownType = {
	image: string;
	content: string | null;
	handleSignOut: () => void;
	listItems: DropDownListItemsType[];
};
export const ProfileDropDown = ({
	image,
	content,
	handleSignOut,
	listItems,
}: ProfileDropDownType) => {
	return (
		<Menu as="div" className="ml-3 relative">
			<div>
				<Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-xs focus:outline-none lg:p-2 lg:rounded-lg border">
					<Image
						height={30}
						width={30}
						className="h-5 w-5 object-contain rounded-full"
						src={image}
						alt="Company logo"
					/>
					<span className="hidden ml-2 mr-1 text-gray-700 line-clamp-1 text-xs font-semibold lg:block capitalize">
						<span className="sr-only">Open user menu for </span>
						{content && content}
					</span>
					<ChevronDownIcon
						className="hidden flex-shrink-0 h-4 w-4 text-gray-600 lg:block"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10 bg-white ring-1 overflow-hidden ring-black ring-opacity-5 focus:outline-none ">
					{listItems.map((item) => (
						<Menu.Item key={item.name}>
							{({ active }) => (
								<Link
									href={item.href}
									className={clsx(
										active ? "bg-gray-100 text-blue-600" : "text-gray-700",
										"block px-4 py-1.5 line-clamp-1 font-medium hover:text-gray-700 text-xs cursor-pointer",
									)}
								>
									{item.name}
								</Link>
							)}
						</Menu.Item>
					))}

					<Menu.Item>
						{({ active }) => (
							<button
								type="button"
								onClick={() => handleSignOut()}
								className={clsx(
									active ? "bg-gray-100 text-blue-600" : "text-rose-600",
									"inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold hover:text-rose-600 cursor-pointer w-full text-left",
								)}
							>
								Logout
								<TbLogout />
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default ProfileDropDown;
