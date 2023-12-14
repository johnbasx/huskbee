import { TbArrowDown, TbArrowRight, TbCircleFilled } from "react-icons/tb";

import { HiStop } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// import { HiStopCircle } from "react-icons/hi2";

const AttractiveHero = () => {
	return (
		// <section className='relative bg-gradient-to-b from-sky-500/30 to-rose-400/0 via-emerald-400/20 py-6 md:pb-12 bg-transparent'>
		<section className="py-8 md:py-20 relative bg-transparent bg-heroImage bg-center bg-no-repeat bg-cover">
			<div className="bg-gradient-to-b isolate from-black/80 to-black via-black/30 absolute inset-0" />
			<div className="mx-auto relative max-w-screen-2xl px-4 py-2 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="flex-1 py-8 md:py-20 mx-auto justify-center text-left">
						<Image
							src="/exocrowd-iconw.svg"
							alt="Exocrowd icon"
							width={100}
							height={100}
							className="w-8 h-8"
						/>
						<h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight py-2 rounded-full drop-shadow">
							Making contributions better for everyone
						</h1>
						<p className="mt-2 md:mt-6 md:text-2xl text-white drop-shadow-sm">
							Exocrowd is supporting to help be the change you wish to see in
							Manipur. Empower impactful causes with your donations and make a
							difference today!
						</p>
					</div>
					<motion.div
						initial={{ opacity: 0, y: "80%" }}
						animate={{ y: "0%" }}
						transition={{ duration: 0.6 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="bg-white shadow-xl shadow-black/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 lg:px-8 lg:py-12"
					>
						<div className="mx-auto max-w-xl">
							<Image
								src="/exocrowd-logo.svg"
								alt="Exocrowd logo"
								width={100}
								height={100}
								className="h-4 md:h-6 w-auto"
							/>
							<div className="flex text-black mt-8 md:mt-20 mb-6 flex-wrap gap-1 md:gap-2">
								<span className="border border-black rounded-full px-6 py-2 text-2xl md:text-5xl font-medium tracking-tight">
									Create
								</span>

								<span className="border border-black rounded-full px-6 py-2 text-2xl md:text-5xl font-medium tracking-tight">
									Donate
								</span>
								<span className="bg-blue-500 flex text-center items-center justify-center text-white rounded-full px-3.5 md:px-2.5 py-2 text-2xl md:text-5xl font-medium tracking-tight">
									<TbArrowRight />
								</span>
								<span className="border border-black rounded-full px-6 py-2 text-2xl md:text-5xl font-medium tracking-tight">
									Help
								</span>
								<span className="border border-black rounded-full px-6 py-2 text-2xl md:text-5xl font-medium tracking-tight">
									Develop
								</span>
								<span className="border border-black rounded-full px-6 py-2 text-2xl md:text-5xl font-medium tracking-tight">
									Together
								</span>
							</div>
							<ul className="list-decimal flex flex-col text-slate-700 font-medium text-sm md:text-lg space-y-1">
								<li className="inline-flex items-center">
									Free fundraising for all. Raise money with full transparency.
								</li>
								<li className="inline-flex items-center">
									Support/Funding initiatives.
								</li>
								<li className="inline-flex items-center">
									Compounding Impact.
								</li>
							</ul>

							<div className="mt-6 md:mt-12 flex flex-wrap items-center gap-2">
								<Link
									href="#!"
									className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-black text-white font-semibold text-lg transition hover:bg-slate-800"
								>
									Start helping now
									<TbCircleFilled className="h-4 w-4 text-blue-300" />
								</Link>
								<Link
									href="#!"
									className="inline-flex items-center gap-2 rounded-full px-6 md:px-6 py-3 bg-transparent text-slate-700 font-semibold transition hover:text-slate-900"
								>
									Read more
									<TbArrowRight className="h-5 w-5" />
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AttractiveHero;
