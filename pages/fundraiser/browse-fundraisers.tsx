import Layout from "@components/exocrowd-client/Layout";
import React from "react";
import {
	TbArrowRight,
	TbCircleCheck,
	TbHeadset,
	TbPigMoney,
	TbSearch,
} from "react-icons/tb";
import { nanoid } from "nanoid";

export const headlineTags = [
	{
		id: nanoid(),
		tag: "Verified Fundraisers",
		Icon: TbCircleCheck,
	},
	{
		id: nanoid(),
		tag: "Help & Assistance",
		Icon: TbHeadset,
	},
	{
		id: nanoid(),
		tag: "Tax Benefits",
		Icon: TbPigMoney,
	},
];

export const tagsList = [
	{
		id: nanoid(),
		tag: "All",
	},
	{
		id: nanoid(),
		tag: "Medical",
	},
	{
		id: nanoid(),
		tag: "Relief Camps",
	},
	{
		id: nanoid(),
		tag: "Organizations",
	},
	{
		id: nanoid(),
		tag: "Child",
	},
	{
		id: nanoid(),
		tag: "Projects",
	},
	{
		id: nanoid(),
		tag: "Education",
	},
];

const BrowseFundraisers = () => {
	return (
		<Layout title="Exocrowd - fundraiser details page">
			<section className="bg-neutral-50 mx-auto max-w-7xl bg-heroImage bg-no-repeat bg-cover">
				<div className="flex flex-col h-[50vh] md:h-[25vh] py-4 md:py-20 justify-center items-center backdrop-brightness-50 w-full">
					<div className="text-white px-4 text-center">
						<h1 className="text-center font-bold text-2xl text-white md:text-3xl">
							Want to make contributions?
						</h1>
						<p className="mt-2 text-sm">
							You can make a huge impact to the lives of people with small
							contributions.
						</p>
						<div className="mt-4 max-w-xs mx-auto flex flex-wrap gap-2 items-center justify-center">
							{headlineTags.map((item, index) => (
								<span
									key={`headline-tag-${item.id}`}
									className="inline-flex bg-slate-950/30 backdrop-blur justify-center items-center gap-1 text-xs px-1.5 py-1 rounded-full"
								>
									<item.Icon />
									{item.tag}
								</span>
							))}
						</div>
					</div>
					<div className="mt-4 flex justify-center items-center gap-2 px-4 max-w-xl mx-auto w-full">
						<div className="relative w-full mx-auto text-slate-600">
							<input
								className="border w-full border-slate-300 bg-white h-12 px-5 pl-12 rounded-full text-sm shadow-2xl font-medium focus:outline-none placeholder:text-slate-600"
								type="search"
								name="search"
								placeholder="Search by name, fundraiser, handle, tag, description, etc... "
							/>
							<span className="absolute text-slate-500 left-0 top-0 mt-4 text-lg ml-4">
								<TbSearch />
							</span>
						</div>
						<button
							type="submit"
							className="bg-blue-600 text-xl flex-shrink-0 text-white rounded-full h-12 w-12 text-center flex justify-center items-center hover:bg-blue-700 duration-150"
						>
							<TbArrowRight />
						</button>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default BrowseFundraisers;
