import React, { useState } from "react";
import MoreMenu from "./MoreMenu";
import SideMenu from "./SideMenu";
import SearchButton from "./SearchButton";
import TestHead from "./TestHead";
import Image from "next/image";

const MainNav = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [moreIsOpen, setMoreIsOpen] = useState(false);
	const [searchIsOpen, setSearchIsOpen] = useState(false);

	const testValue = true;
	const handleSearchClick = () => {
		setSearchIsOpen(!searchIsOpen);
		console.log("TODO: handleSearchClick");
	};

	return (
		<>
			<div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-black/10 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-black/10 lg:z-50 lg:border-b lg:border-slate-900/10">
				<div className="mx-auto max-w-14xl">
					<div className="mx-4 flex border-b border-slate-900/10 py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
						<a href="#!" className="relative flex justify-center items-center">
							<span className="mr-2 w-[2.0625rem] flex-none overflow-hidden md:w-auto">
								<span className="sr-only">Axewhy home page</span>
								<div className="h-10 w-auto relative">
									<Image
										src="/logo/axewhy-colorful-logo.png"
										alt="Axewhy logo"
										width={100}
										height={100}
										// sizes="100vw"
										className="h-8 w-auto"
									/>
								</div>
							</span>
							<h1 className="h-10 text-3xl text-center font-extrabold w-auto">
								Exocrowd
							</h1>
						</a>

						<a
							className="ml-3 hidden items-center rounded-full bg-purple-400/10 py-1 px-3 text-xs font-medium leading-5 text-purple-600 hover:bg-purple-400/20 dark:text-purple-400 xl:flex"
							href="#!"
						>
							<strong className="font-semibold">
								Have a look at our upcoming projects
							</strong>
							<svg
								width="2"
								height="2"
								fill="currentColor"
								aria-hidden="true"
								className="ml-2 text-purple-600 dark:text-purple-400/70"
							>
								<circle cx="1" cy="1" r="1" />
							</svg>
							<span className="ml-2">Click to see</span>
							<svg
								width="3"
								height="6"
								className="ml-3 overflow-visible text-purple-300 dark:text-purple-400"
								aria-hidden="true"
							>
								<path
									d="M0 0L3 3L0 6"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
						<div className="relative ml-auto hidden items-center lg:flex">
							<nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-100">
								<ul className="flex space-x-8">
									<li>
										<SearchButton
											hidden={false}
											handleSearchClick={() => handleSearchClick}
										/>
									</li>
									<li>
										<a
											className="hover:text-purple-500 dark:hover:text-purple-400"
											href="/docs/installation"
										>
											Docs
										</a>
									</li>
									<li>
										<a
											href="https://tailwindui.com"
											className="hover:text-purple-500 dark:hover:text-purple-400"
										>
											Components
										</a>
									</li>
									<li>
										<a
											className="hover:text-purple-500 dark:hover:text-purple-400"
											href="/blog"
										>
											Blog
										</a>
									</li>
								</ul>
							</nav>
							<div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
								<label className="sr-only" id="headlessui-listbox-label-3">
									Theme
								</label>
								<button
									type="button"
									id="headlessui-listbox-button-4"
									aria-haspopup="true"
									aria-expanded="false"
									aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-undefined"
								>
									<span className="dark:hidden">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-6 w-6"
										>
											<title>Listbox button SVG</title>
											<path
												d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
												className="stroke-slate-400 dark:stroke-slate-500"
											/>
											<path
												d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
												className="stroke-slate-400 dark:stroke-slate-500"
											/>
										</svg>
									</span>
									<span className="hidden dark:inline">
										<svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
											<title>Listbox button SVG</title>

											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
												className="fill-transparent"
											/>
											<path
												d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
												className="fill-slate-400 dark:fill-slate-500"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
												className="fill-slate-400 dark:fill-slate-500"
											/>
										</svg>
									</span>
								</button>
								<a
									href="https://github.com/tailwindlabs/tailwindcss"
									className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
								>
									<span className="sr-only">Exocrowd on Github</span>
									<svg
										viewBox="0 0 16 16"
										className="h-5 w-5"
										fill="currentColor"
										aria-hidden="true"
									>
										<title>Exocrowd github button SVG</title>

										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
									</svg>
								</a>
							</div>
						</div>
						<SearchButton hidden handleSearchClick={handleSearchClick} />

						<div className="-my-1 ml-2 lg:hidden">
							<button
								type="button"
								className="flex h-8 w-8 items-center justify-center text-slate-100 hover:text-slate-300"
								onClick={() => setMoreIsOpen(true)}
							>
								<span className="sr-only">Navigation</span>
								<svg width="24" height="24" fill="none" aria-hidden="true">
									<title>Navigation SVG</title>

									<path
										d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden">
					<button
						type="button"
						className="text-slate-100 hover:text-slate-300"
						onClick={() => setMenuIsOpen(!menuIsOpen)}
					>
						<span className="sr-only">Navigation</span>
						<svg width="24" height="24">
							<title>Navigation SVG</title>

							<path
								d="M5 6h14M5 12h14M5 18h14"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
					<ol className="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
						<li className="truncate font-semibold text-slate-900 dark:text-slate-200">
							Resources
						</li>
					</ol>
				</div>
			</div>

			{menuIsOpen ? (
				<SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			) : null}
			{moreIsOpen ? (
				<MoreMenu moreIsOpen={moreIsOpen} setMoreIsOpen={setMoreIsOpen} />
			) : null}
			{searchIsOpen ? <TestHead testValue={true} /> : null}
		</>
	);
};

export default MainNav;
