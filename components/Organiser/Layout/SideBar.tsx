import {
	ArchiveBoxIcon,
	BanknotesIcon,
	ClockIcon,
	HomeIcon,
	ListBulletIcon,
	RectangleGroupIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment } from "react";
import { org_crowd_funding, org_navigation } from "@constants/list-items";

import Link from "next/link";
import { MdEventAvailable } from "react-icons/Md";
import { useRouter } from "next/router";
import clsx from "clsx";
import Image from "next/image";

const settings = [{ id: 1, name: "Profile", href: "#" }];

const SideBar = ({
	sidebarOpen,
	setSidebarOpen,
}: {
	sidebarOpen: boolean;
	setSidebarOpen: Dispatch<boolean>;
}) => {
	const router = useRouter();

	return (
		<>
			{/* Mobile SideNav */}
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 flex z-40 lg:hidden"
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-300"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										type="button"
										className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
										onClick={() => setSidebarOpen(false)}
									>
										<span className="sr-only">Close sidebar</span>
										<XMarkIcon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</button>
								</div>
							</Transition.Child>
							<div className="flex-shrink-0 flex items-center px-4 gap-x-4">
								<Image
									height={20}
									width={250}
									className="h-8 w-auto object-contain"
									src="/logo/axewhy-colorful-logo.png"
									alt="HuskBee"
								/>
								<span className="font-base text-2xl">HuskBee</span>
							</div>
							<div className="mt-5 flex-1 h-0 overflow-y-auto">
								<nav className="px-2">
									<div className="space-y-1">
										{org_navigation.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												className={clsx(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"group flex items-center px-2 py-2 text-base font-medium rounded-md",
												)}
												aria-current={item.current ? "page" : undefined}
											>
												<item.icon
													className={clsx(
														item.current
															? "text-gray-300"
															: "text-gray-400 group-hover:text-gray-300",
														"mr-4 flex-shrink-0 h-6 w-6",
													)}
													aria-hidden="true"
												/>
												{item.name}
											</Link>
										))}
									</div>
									<div className="mt-10">
										<p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
											Settings
										</p>
										<div className="mt-2 space-y-1">
											{settings.map((item) => (
												<a
													key={item.id}
													href={item.href}
													className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 text-base font-medium rounded-md"
												>
													<span className="truncate">{item.name}</span>
												</a>
											))}
										</div>
									</div>
								</nav>
							</div>
						</div>
					</Transition.Child>
					<div className="flex-shrink-0 w-14" aria-hidden="true">
						{/* Dummy element to force sidebar to shrink to fit close icon */}
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-white">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="items-center flex-shrink-0 px-6">
					<div className="flex gap-x-2">
						<Image
							height={50}
							width={150}
							className="h-8 w-auto object-contain"
							src="/logo/axewhy-colorful-logo.png"
							alt="HuskBee"
						/>
						<span className="text-gray-800 text-3xl font-bold uppercase">
							huskbee
						</span>
					</div>
					<span className="items-center text-sm ml-14 text-blue-700">
						(For organiser)
					</span>
				</div>
				<div className="mt-1 h-0 flex-1 flex flex-col overflow-y-auto">
					<nav className="flex-1 px-2 py-4">
						<div className="space-y-1">
							{org_navigation.map((item) => (
								<Link key={item.name} href={item.href}>
									<span
										className={clsx(
											router.pathname === item.href
												? "bg-gray-200 text-gray-900"
												: "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
											"group flex items-center px-2 py-2 text-sm font-medium rounded-md",
										)}
										// className={clsx(
										//   item.current
										//     ? "bg-gray-900 text-white"
										//     : "text-gray-300 hover:bg-gray-700 hover:text-white",
										//   "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
										// )}
										aria-current={item.current ? "page" : undefined}
									>
										<item.icon
											className={clsx(
												router.pathname === item.href
													? "text-gray-500"
													: "text-gray-400 group-hover:text-gray-500",
												"mr-3 flex-shrink-0 h-6 w-6",
											)}
											aria-hidden="true"
										/>
										{item.name}
									</span>
								</Link>
							))}
						</div>

						<div className="mt-8">
							{/* Secondary navigation */}
							<h3
								className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
								id="desktop-teams-headline"
							>
								Crowd Funding
							</h3>
							<div
								className="mt-1 space-y-1"
								role="group"
								aria-labelledby="desktop-teams-headline"
							>
								{org_crowd_funding.map((content) => (
									<Link key={content.name} href={content.href}>
										<span
											className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 ${
												router.pathname === content.href
													? "bg-gray-200 text-gray-900"
													: "text-gray-700 hover:text-gray-900 "
											}`}
										>
											<span
												className={clsx(
													content.bgColorClass,
													"w-2.5 h-2.5 mr-4 rounded-full",
												)}
												aria-hidden="true"
											/>
											<span className="truncate">{content.name}</span>
										</span>
									</Link>
								))}
							</div>
						</div>

						<div className="mt-10">
							<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
								Settings
							</p>
							<div className="mt-2 space-y-1">
								{settings.map((item) => (
									<a
										key={item.id}
										href={item.href}
										className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
									>
										<span className="truncate">{item.name}</span>
									</a>
								))}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default SideBar;
