import {
	KeenSliderInstance,
	KeenSliderPlugin,
	useKeenSlider,
} from "keen-slider/react";
import React, { MutableRefObject, useState } from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";

import { BASE_URL } from "@constants/api-urls";
import { FunraiserPhotoType } from "../../../pages/organiser/fundraiser-detail/[fundraiserId]";
import Image from "next/image";
import { nanoid } from "nanoid";

export const fundraiserImages = [
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-1.jpg",
	},
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-2.jpg",
	},
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-3.jpg",
	},
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-4.jpg",
	},
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-5.jpg",
	},
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-1.jpg",
	},
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-2.jpg",
	},
	{
		id: nanoid(),
		image_link: "/images/carousel/carousel-3.jpg",
	},
];

function ThumbnailPlugin(
	mainRef: MutableRefObject<KeenSliderInstance | null>,
): KeenSliderPlugin {
	return (slider) => {
		function removeActive() {
			slider.slides.map((slide) => {
				slide.classList.remove("active");
			});
		}
		function addActive(idx: number) {
			slider.slides[idx].classList.add("active");
		}

		function addClickEvents() {
			slider.slides.map((slide, idx) => {
				slide.addEventListener("click", () => {
					if (mainRef.current) mainRef.current.moveToIdx(idx);
				});
			});
		}

		slider.on("created", () => {
			if (!mainRef.current) return;
			addActive(slider.track.details.rel);
			addClickEvents();
			mainRef.current.on("animationStarted", (main) => {
				removeActive();
				const next = main.animator.targetIdx || 0;
				addActive(main.track.absToRel(next));
				slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
			});
		});
	};
}

const ImageScrollWithThumbnails = ({fundraisers_photos}:{fundraisers_photos:FunraiserPhotoType[]}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			initial: 0,
			slides: {
				spacing: 12,
			},
			loop: true,
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

	const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
		{
			initial: 0,
			breakpoints: {
				"(min-width:300px)": {
					slides: {
						perView: 6,
						spacing: 8,
					},
				},
				"(min-width: 1200px)": {
					slides: { perView: 8, spacing: 10 },
				},
			},
			// slides: {
			// 	perView: 8,
			// 	spacing: 10,
			// },
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
		},
		[ThumbnailPlugin(instanceRef)],
	);
	return (
		<div className="navigation-wrapper relative">
			<div ref={sliderRef} className="keen-slider">
				{fundraisers_photos.map((data, index) => (
					<div
						key={data.id}
						className="keen-slider__slide rounded-2xl overflow-hidden bg-slate-200 flex justify-center items-center text-2xl text-white font-medium max-h-screen h-[28vh] lg:h-[45vh]"
					>
						<Image
							height={1000}
							width={1000}
							priority
							quality={100}
							className="object-cover h-full rounded-2xl overflow-hidden"
							alt={`fundraiser-carousel-image-${+data.id}`}
							src={BASE_URL+ data.photo}
						/>
					</div>
				))}
			</div>

			{loaded && instanceRef.current && (
				<div className="h-0">
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
				</div>
			)}

			<div ref={thumbnailRef} className="keen-slider thumbnail mt-2">
				{fundraisers_photos.map((data, index) => (
					<div
						key={data.id}
						className="keen-slider__slide cursor-pointer bg-slate-200 flex justify-center items-center text-2xl text-white font-medium opacity-20 max-h-screen h-[3rem] w-[3rem] rounded-lg lg:rounded-xl lg:h-[6rem] lg:w-[6rem] overflow-hidden"
					>
						<Image
							height={100}
							width={100}
							quality={30}
							priority
							className="object-cover h-full w-full rounded-lg lg:rounded-xl"
							alt={`fundraiser-carousel-thumbnail-${+data.id}`}
							src={BASE_URL+ data.photo}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageScrollWithThumbnails;

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
					className={`arrow arrow--left rounded-full p-2 border bg-blue-400/50 backdrop-blur border-blue-300/50 hover:border-slate-200 h-9 md:h-10 w-9 md:w-10 hover:text-slate-200 duration-150 transition-colors text-slate-100 absolute top-[35%] lg:top-[40%] cursor-pointer left-2 ${disabled}`}
				/>
			) : (
				<TbArrowRight
					className={`arrow arrow--right rounded-full p-2 border bg-blue-400/50 backdrop-blur border-blue-300/50 hover:border-slate-200 h-9 md:h-10 w-9 md:w-10 hover:text-slate-200 duration-150 transition-colors text-slate-100 absolute top-[35%] lg:top-[40%] cursor-pointer right-2 ${disabled}`}
				/>
			)}
		</button>
	);
}
