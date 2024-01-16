import {DisplayCardBlockDataType} from "./FundraiserCardScroll";
import React, { useState } from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

import Image from "next/image";
import { toIndianCurrency } from "@utils/index";
import { useKeenSlider } from "keen-slider/react";
import { staticCardData } from "@constants/fundraiser";

const MoreWaysScroll = () => {
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
		<section className="bg-blue-700 text-white py-8 px-0 sm:py-18 lg:px-8 lg:py-24">
			<div className="flex flex-col max-w-screen-2xl mx-auto">
				<div className="py-8 px-6 lg:px-0 max-w-3xl">
					<h2 className="text-2xl md:text-4xl font-bold">
						More ways to make a difference. Find fundraisers inspired by what
						you care about.
					</h2>
				</div>
				<div className="navigation-wrapper relative">
					<div ref={sliderRef} className="keen-slider py-12 px-6 lg:px-0">
						{staticCardData.map((data, index) => (
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
								onClick={(e) =>
									e.stopPropagation() || instanceRef.current?.prev()
								}
								disabled={currentSlide === 0}
							/>

							<Arrow
								onClick={(e) =>
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
			</div>
		</section>
	);
};

const DisplayCardBlock = ({ data }: DisplayCardBlockDataType) => {
	return (
		<div className="max-w-sm cursor-pointer group bg-blue-900 lg:hover:bg-blue-900/50 duration-150 transition-colors keen-slider__slide flex flex-col rounded-2xl lg:bg-transparent overflow-hidden p-2">
			<div className="relative overflow-hidden rounded-xl">
				<Image
					className="w-full rounded-xl group-hover:scale-110 duration-200 transition-transform ease-in h-[8rem] md:h-[12rem] object-cover"
					width={500}
					height={500}
					priority
					quality={100}
					src={data.cover_image}
					alt="donate"
				/>
				<div className="absolute bg-black/30 font-sans tracking-tight backdrop-blur-md py-1.5 px-2 text-xs font-semibold rounded-full bottom-2 left-2">
					<span>1.6K donations</span>
				</div>
			</div>
			<div className="px-3 py-3 flex flex-col gap-2">
				<div className="">
					<div className="font-bold text-xl h-14 mb-2 line-clamp-2">
						{data.title}
					</div>
				</div>
				{/* <div className='grid grid-cols-2 divide-x gap-1'> */}
				<div className="text-base flex flex-col gap-1 font-semibold text-gray-100">
					<span className="text-sm">by {data.created_by.name}</span>
					<span className="text-xs line-clamp-1 text-blue-200">for Family</span>
				</div>
				{/* </div> */}
				<div className="mt-2">
					<span id="ProgressLabel" className="sr-only">
						Donation Progress
					</span>

					<span
						// role="progressbar"
						// aria-labelledby="ProgressLabel"
						// aria-valuenow="75"
						className="block rounded-full bg-blue-400/50 lg:bg-blue-900"
					>
						<span
							className="block h-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50"
							style={{ width: "78%" }}
							// Dynamic data for progress bar
						/>
					</span>
				</div>

				{/* <LatestSupportersAvatars /> */}
				<div className="text-base flex flex-col">
					<span className="font-extrabold text-slate-50 text-sm font-sans tracking-tight">
						{toIndianCurrency(data.donated_amount)}{" "}
						<span className="font-nunito">raised</span>
					</span>
					<span className="text-xs font-semibold font-nunito text-blue-200">
						out of{" "}
						<span className="font-sans tracking-tight">
							{toIndianCurrency(data.required_amount)}
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

function Arrow(props: {
	disabled: boolean;
	left?: boolean;
	onClick: (e: any) => void;
}) {
	const disabled = props.disabled ? "arrow--disabled" : "";
	return (
		<button type="button" onClick={props.onClick}>
			{props.left ? (
				<TbArrowLeft
					className={`arrow arrow--left rounded-full p-2 border border-slate-300 hover:border-slate-100 h-9 w-9 hover:text-slate-100 duration-150 transition-colors text-slate-300 absolute -top-1 cursor-pointer right-16 ${disabled}`}
				/>
			) : (
				<TbArrowRight
					className={`arrow arrow--right rounded-full p-2 border border-slate-300 hover:border-slate-100 h-9 w-9 hover:text-slate-100 duration-150 transition-colors text-slate-300 absolute -top-1 cursor-pointer right-4 ${disabled}`}
				/>
			)}
		</button>
	);
}

export default MoreWaysScroll;
