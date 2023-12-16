import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbArrowRight } from "react-icons/tb";

const ActionHero = () => {
	return (
		<section className="bg-gradient-to-b from-blue-500/20 to-lime-500/0 via-emerald-500/20 py-6 lg:py-24">
			<div className="mx-auto max-w-screen-2xl px-4 py-2 sm:px-6 lg:px-8">
				<div className="flex-1 py-8 md:py-10 sm:mx-auto sm:text-center lg:text-left">
					<h3 className="text-3xl max-w-lg sm:max-w-screen-sm text-gray-800 font-semibold md:text-4xl">
						Need Funds to Pay For a{" "}
						<span className="text-emerald-600">
							Social Cause or Medical Emergencies?
						</span>
					</h3>
					<p className="text-gray-500 mt-3">
						0% Platform Fees. Raise maximum funds for the cause you care about
						and manage all the transactions.
					</p>
					{/* <Link
            className='mt-6 px-6 py-3 text-slate-50 font-semibold text-base bg-black rounded-full inline-flex items-center gap-2'
            href='#!'
          >
            Start a fundraiser for free
            <TbArrowRight className='h-5 w-5' />
          </Link> */}
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="bg-gradient-to-br from-black to-slate-900 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:px-16 lg:py-24">
						<div className="mx-auto max-w-xl text-center">
							<h2 className="text-xl font-bold text-white md:text-3xl">
								Free fundraising for all. Raise money with full transparency.
							</h2>

							<p className="hidden text-white/90 sm:mt-4 sm:block">
								0% Platform Fees. Raise maximum funds for the cause you care
								about and manage all the transactions.
							</p>

							<div className="mt-6 md:mt-12">
								<a
									href="#!"
									className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-black font-semibold transition hover:bg-slate-100"
								>
									Start helping now
									<TbArrowRight className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
						<Image
							alt="Student"
							width={200}
							height={200}
							priority
							src="/images/donation.jpg"
							className="h-44 w-full rounded-3xl object-cover sm:h-56 md:h-full"
						/>

						<Image
							alt="Hospitalized"
							width={200}
							height={200}
							src="/images/hospitalized.jpg"
							priority
							className="h-44 w-full rounded-3xl object-cover sm:h-56 md:h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ActionHero;
