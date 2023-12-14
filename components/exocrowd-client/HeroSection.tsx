import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { TbArrowRight } from "react-icons/tb";

const HeroSection = () => {
	return (
		<>
			<section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
				<div className="absolute top-0 left-0 w-full h-full bg-white opacity-40" />
				<div className="relative z-10 gap-5 items-center lg:flex">
					<div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
						<h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
							Need Funds to Pay For a{" "}
							<span className="text-emerald-700">
								Social Cause or Medical Emergencies?
							</span>
						</h3>
						<p className="text-gray-500 leading-relaxed mt-3">
							0% Platform Fees. Raise maximum funds for the cause you care about
							and manage all the transactions.
						</p>
						<Link
							className="mt-10 px-6 py-3 text-slate-50 font-semibold text-lg bg-black rounded-full inline-flex items-center gap-2"
							href="#!"
						>
							Start a fundraiser for free
							<TbArrowRight className="h-5 w-5" />
						</Link>
					</div>
					<div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
						<Image
							src="/images/save-manipur.jpg"
							alt="hero image"
							width={1000}
							height={1000}
							quality={100}
							priority
							className="w-full rounded-3xl"
						/>
					</div>
				</div>
			</section>
			<section className="relative bg-heroImage bg-cover bg-center bg-no-repeat">
				<div className="absolute inset-0 sm:bg-transparent from-white via-white/70 to-white/20 sm:bg-gradient-to-r bg-gradient-to-b" />

				<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
					<div className="max-w-xl text-center sm:text-left">
						<div>
							<p className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
								Need Funds to Pay For a Social Cause or Medical Emergencies?
							</p>
							<p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
								0% Platform Fees. Raise maximum funds for the cause you care
								about and manage all the transactions.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-3 mt-16 lg:flex-row lg:justify-start">
							<a
								className="items-center justify-center font-semibold px-10 py-3 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-slate-900 hover:border-black focus:outline-none lg:w-auto focus-visible:outline-black text-lg focus-visible:ring-black"
								href="#!"
							>
								Start a fundraiser for free
							</a>
							<a
								className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900"
								href="#!"
							>
								<span> Learn more </span>→
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
