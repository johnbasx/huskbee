import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

export type FundCardProps = {
	title: string;
	organisation: string;
	tags: Array<string>;
	totalSupporters: number;
	totalMoneyRaised: number;
	targetAmount: number;
	taxBenefits: boolean;
	mainImage: ImageProps;
};

const FundCard = ({
	title = "In support of relief camp for displaced people",
	organisation = "By CAS Organisation Group",
	tags = ["trending", "emergency"],
	totalSupporters = 5014,
	totalMoneyRaised = 1478950,
	targetAmount = 2000000,
	taxBenefits = true,
}: Partial<FundCardProps>) => {
	return (
		<Link
			href="#!"
			className="relative block overflow-hidden w-[17rem] md:[20rem] rounded-3xl border border-gray-200 bg-white p-4 mr-3"
		>
			<Image
				alt="Home"
				height={500}
				width={500}
				quality={100}
				src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				className="rounded-xl object-cover"
			/>

			<div className="mt-2 sm:flex sm:justify-between sm:gap-4">
				<h3 className="line-clamp-2 text-lg font-bold text-gray-950 sm:text-xl">
					In support of relief camp for displaced people
				</h3>

				<p className="mt-1 line-clamp-1 text-xs font-medium text-gray-600">
					By CAS Organisation Group
				</p>
			</div>

			{/* Tags */}
			<div className="mt-2 space-x-1">
				<span className="whitespace-nowrap rounded-full bg-rose-100 px-2.5 py-0.5 text-[0.6rem] font-medium text-rose-700">
					emergency
				</span>
				<span className="whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.6rem] font-medium text-emerald-700">
					trending
				</span>
			</div>

			<div className="mt-2 text-sm ">
				<div className="my-2">
					<span className="font-bold">
						5104{" "}
						<span className="text-xs font-normal text-gray-500">
							Amazing supporters
						</span>
					</span>
				</div>
				<div className="my-2">
					<span className="font-bold">
						₹14,90,760{" "}
						<span className="text-xs font-normal text-gray-500">
							money raised
						</span>
					</span>
				</div>
				<div>
					{/* <span id='ProgressLabel' className='sr-only'>
            Loading
          </span> */}

					<span
						// aria-role='progressbar'
						aria-labelledby="ProgressLabel"
						aria-valuenow={75}
						className="block rounded-full bg-gray-200"
					>
						<span
							className="block h-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
							style={{ width: "75%" }}
						/>
					</span>
				</div>
			</div>

			{/* Small Details */}
			<div className="mt-2">
				<span className="text-xs text-gray-500">Latest activities</span>
				<div className="flex flex-row-reverse justify-end px-3">
					<div className="relative m-1 ml-0 mr-1 flex h-10 w-auto items-center justify-center rounded-full text-[0.6rem] md:text-xs text-gray-500">
						+5100 others
					</div>
					<div className="relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white">
						<Image
							height={20}
							width={20}
							className="rounded-full object-cover h-10 w-10"
							alt="A"
							src="https://randomuser.me/api/portraits/men/20.jpg"
						/>
					</div>
					<div className="relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white">
						<Image
							height={20}
							width={20}
							className="rounded-full object-cover h-10 w-10"
							alt="B"
							src="https://randomuser.me/api/portraits/women/68.jpg"
						/>
					</div>
					<div className="relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white">
						<Image
							height={20}
							width={20}
							className="rounded-full object-cover h-10 w-10"
							alt="C"
							src="https://randomuser.me/api/portraits/women/8.jpg"
						/>
					</div>
					<div className="relative m-1 -ml-3 mr-1 flex h-10 w-10 items-center justify-center rounded-full border-r-2 border-white">
						<Image
							height={20}
							width={20}
							className="rounded-full object-cover h-10 w-10"
							alt="D"
							src="https://randomuser.me/api/portraits/men/10.jpg"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default FundCard;
