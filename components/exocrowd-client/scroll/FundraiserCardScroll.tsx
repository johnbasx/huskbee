import React, { useState } from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

import { BASE_URL } from "@constants/api-urls";
import { FundraiserEventsProps } from "../../../pages/organiser/fundraiser-detail/[fundraiserId]";
import { GetPercentage, toIndianCurrency } from "@utils/index";
import Image from "next/image";
import Link from "next/link";
import { RecentDonorType } from "../../../pages/organiser/fundraisers";
import { useKeenSlider } from "keen-slider/react";

export const staticCardData = [
	{
		id: 1,
		title: "In support for displaced people in Manipur",
		description:
			"Join us in our mission to empower local communities through our Community Empowerment Campaign. Your donations will directly support education, healthcare, and sustainable development projects, creating a positive and lasting impact on the lives of individuals and families.",
		donated_amount: 1490760,
		required_amount: 2000000,
		cover_image: "https://picsum.photos/45/500",
		created_by: {
			profile_id: 202,
			name: "Meitei Lup",
			profile_image: "https://randomuser.me/api/portraits/women/95.jpg",
		},
	},
	{
		id: 2,
		title: "Please help my mother recover from lung cancer",
		description:
			"Help us cultivate a greener future! Contribute to our Green Initiatives Fundraiser, where every donation goes towards planting trees, promoting eco-friendly practices, and supporting initiatives that combat climate change. Let's work together to create a more sustainable and environmentally conscious world.",
		donated_amount: 526593,
		required_amount: 1000000,
		cover_image: "https://picsum.photos/278/500",
		created_by: {
			profile_id: 201,
			name: "K. Sanajaoba Singh",
			profile_image: "https://randomuser.me/api/portraits/men/25.jpg",
		},
	},
	{
		id: 3,
		title: "Provide ration to Senior Citizens",
		description:
			"Stand with us in times of crisis! Our Emergency Relief Drive aims to provide rapid and effective support to communities affected by natural disasters, conflicts, or public health emergencies. Your generous contributions will provide essential resources, shelter, and medical aid to those in urgent need.",
		donated_amount: 66895,
		required_amount: 330000,
		cover_image: "https://picsum.photos/235/500",
		created_by: {
			profile_id: 203,
			name: "ManipurDonates",
			profile_image: "https://randomuser.me/api/portraits/men/44.jpg",
		},
	},
	{
		id: 4,
		title:
			"Empowering Dreams: Tailoring a path to independence for young girls",
		description:
			"Nurture the arts and celebrate culture! Support our Arts and Culture Enrichment Fund, dedicated to fostering creativity, preserving cultural heritage, and providing access to artistic opportunities for all. Your donations will contribute to the vibrancy of our community's cultural landscape.",
		donated_amount: 40930,
		required_amount: 500000,
		cover_image: "https://picsum.photos/398/500",
		created_by: {
			profile_id: 204,
			name: "Service Manipur Initiative",
			profile_image: "https://randomuser.me/api/portraits/men/48.jpg",
		},
	},
	{
		id: 5,
		title: "Creating Sustainable Livelihood Opportunities for Displaced People",
		description:
			"Bridge the digital divide and enhance education! Our Educational Technology Initiative seeks to equip schools and learners with the latest technology, ensuring access to quality education for all. Your contributions will support the purchase of devices, software, and educational resources, empowering students for a brighter future.",
		donated_amount: 203985,
		required_amount: 1000000,
		cover_image: "https://picsum.photos/316/500",
		created_by: {
			profile_id: 205,
			name: "WomenUs Org.",
			profile_image: "https://randomuser.me/api/portraits/women/48.jpg",
		},
	},
	{
		id: 6,
		title: "Bringing 4000 children back to school from relief camps",
		description:
			"Give a voice to the voiceless! Join our Animal Welfare Drive to support the well-being of our furry friends. Donations will go towards rescue operations, veterinary care, and initiatives promoting animal rights. Let's create a compassionate and safe environment for all creatures, great and small.",
		donated_amount: 203985,
		required_amount: 1000000,
		cover_image: "https://picsum.photos/444/500",
		created_by: {
			profile_id: 206,
			name: "Meitei Lup",
			profile_image: "https://randomuser.me/api/portraits/men/67.jpg",
		},
	},
];

export default function FundraiserCardScroll({
	fundraisers,
}: {
	fundraisers: FundraiserEventsProps[];
}) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			loop: true,
			breakpoints: {
				"(min-width:300px)": {
					slides: {
						perView: window.innerWidth / 300,
						spacing: 12,
					},
				},
				"(min-width: 1000px)": {
					slides: { perView: 4, spacing: 18 },
				},
			},
			slides: {
				origin: "center",
				// perView:
				//   window.innerWidth >= 1200
				//     ? window.innerWidth / 400
				//     : window.innerWidth / 300,

				// spacing: window.innerWidth >= 1200 ? 18 : 12,
			},
			initial: 0,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
		},
		[
			(slider) => {
				let timeout: ReturnType<typeof setTimeout>;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 3000);
				}
				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			},
		],
	);

	return (
		<section className="max-w-screen-2xl mx-auto px-0 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
			<div className="navigation-wrapper relative">
				<div ref={sliderRef} className="keen-slider py-12 px-6 lg:px-0">
					{fundraisers.reverse().map((data, index) => (
						<DisplayCardBlock
							key={`display-card-block-${data.id}${index}`}
							data={data}
						/>
					))}
				</div>
				{loaded && instanceRef.current && (
					<>
						<Arrow
							left
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.prev()
							}
							disabled={currentSlide === 0}
						/>

						<Arrow
							onClick={(e: any) =>
								e.stopPropagation() || instanceRef.current?.next()
							}
							disabled={
								currentSlide ===
								instanceRef.current.track.details.slides.length - 1
							}
						/>
					</>
				)}
			</div>
		</section>
	);
}

export type DisplayCardBlockType = {
	title: string;
	description: string;
	donated_amount: number;
	required_amount: number;
	cover_image: string;
	created_by: {
		profile_id: number;
		name: string;
		profile_image: string;
	};
};

export type DisplayCardBlockDataType = { data: FundraiserEventsProps };
const DisplayCardBlock = ({ data }: DisplayCardBlockDataType) => {

	return (
		<div className="max-w-sm cursor-pointer keen-slider__slide shadow-lg flex flex-col rounded-2xl bg-white overflow-hidden">
			<Image
				className="w-full h-[8rem] md:h-[12rem] object-cover"
				width={500}
				height={500}
				priority
				quality={100}
				src={
					data.fundraiser_photo.length === 0
						? "https://picsum.photos/45/500"
						: BASE_URL + data.fundraiser_photo[0].photo
				}
				alt="donate"
			/>
			<div className="px-4 py-4 text-black flex flex-col gap-2">
				<div className="">
					<div className="font-bold text-xl h-14 mb-2 line-clamp-2">
						<Link href={`/fundraiser/fundraiser-details/${data.id}`}>
						{data.title}</Link>
					</div>
					<p className="text-gray-700 text-xs line-clamp-2">
						{data.description}
					</p>
				</div>
				<div className="grid grid-cols-2 divide-x gap-1">
					<div className="text-base flex flex-col">
						<span className="text-sm text-gray-500">Raised</span>
						<span className="font-extrabold text-blue-600 text-lg font-sans tracking-tight">
							{toIndianCurrency(data.total_donation)}
						</span>
						<span className="text-xs font-nunito font-normal">
							out of{" "}
							<span className="font-sans tracking-tight">
								{toIndianCurrency(data.target_amount)}
							</span>
						</span>
					</div>
					<div className="text-base px-2 flex flex-col gap-1 text-gray-500">
						<span className="text-sm">Created by</span>
						<div className="relative flex items-center gap-1 justify-start">
							<Image
								height={20}
								width={20}
								className="rounded-full object-cover h-8 w-8"
								alt={data.organiser_name}
								src={
									data.organiser_logo === ""
										? "https://picsum.photos/45/500"
										: `${BASE_URL}media/${data.organiser_logo}`
								}
							/>
							<span className="text-xs line-clamp-1">
								{data.organiser_name}
							</span>
						</div>
					</div>
				</div>
				<div className="mt-2">
					<span id="ProgressLabel" className="sr-only">
						Loading
					</span>

					<span
						// role="progressbar"
						// aria-labelledby="ProgressLabel"
						// aria-valuenow="75"
						className="block rounded-full bg-gray-200"
					>
						<span
							className="block h-2.5 rounded-full bg-gradient-to-r from-purple-200 via-violet-500 to-blue-600"
							style={{
								width: GetPercentage(data.total_donation, data.target_amount),
							}}
							// Dynamic data for progress bar
						/>
					</span>
				</div>

				<LatestSupportersAvatars
					recent_donors={data.recent_donors}
					total_donors={data.total_donors}
				/>
			</div>
		</div>
	);
};

export type LatestSupporterType = {
	recent_donors: RecentDonorType[];
	total_donors: number;
};

const LatestSupportersAvatars = ({
	recent_donors,
	total_donors,
}: LatestSupporterType) => {
	return (
		<div>
			<span className="text-xs text-gray-500">Latest Supporters</span>
			<div className="flex flex-row-reverse justify-end px-3">
				<div className="relative font-sans m-1 ml-0 mr-1 flex h-8 w-auto items-center justify-center rounded-full text-[0.6rem] md:text-xs text-gray-500">
					{total_donors > recent_donors.length &&
						`+ ${total_donors - recent_donors.length} others`}
				</div>
				{recent_donors.slice(0, 4).map((data, index) => (
					<AvatarImage
						key={`avatar-image${data.donated_by__photo}${index}`}
						photo={data.donated_by__photo}
					/>
				))}
				{/* {[20, 68, 8, 51].map((data, index) => (
          <AvatarImage
            key={"avatar-image" + data + index}
            temporaryProp={data}
          />
        ))} */}
			</div>
		</div>
	);
};

// const AvatarImage = ({ temporaryProp }: { temporaryProp: number }) => {
const AvatarImage = ({ photo }: { photo: string }) => {
	return (
		<div className="relative m-1 -ml-3 mr-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
			<Image
				height={20}
				width={20}
				quality={10}
				priority
				className="rounded-full object-cover h-7 w-7"
				alt="avatar image"
				src={`${BASE_URL}media/${photo}`}
				// src={`https://randomuser.me/api/portraits/men/${temporaryProp}.jpg`}
			/>
		</div>
	);
};

function Arrow(props: {
	disabled: boolean;
	left?: boolean;
	onClick: (e: any) => void;
}) {
	const disabled = props.disabled ? " arrow--disabled" : "";
	return (
		<button type="button" onClick={props.onClick}>
			{props.left ? (
				<TbArrowLeft
					className={`arrow arrow--left rounded-full p-2 border border-slate-600 hover:border-slate-900 h-9 w-9 hover:text-slate-900 duration-150 transition-colors text-slate-600 absolute -top-1 cursor-pointer right-16 ${disabled}`}
				/>
			) : (
				<TbArrowRight
					className={`arrow arrow--right rounded-full p-2 border border-slate-600 hover:border-slate-900 h-9 w-9 hover:text-slate-900 duration-150 transition-colors text-slate-600 absolute -top-1 cursor-pointer right-4 ${disabled}`}
				/>
			)}
		</button>
	);
}
