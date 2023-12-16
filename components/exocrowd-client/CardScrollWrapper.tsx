// import { recommendedData } from "@/src/contents/recommendData";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import LargeFundCard from "./LargeFundCard";
import FundCard from "./FundCard";

const CardScrollWrapper = () => {
	return (
		<>
			<div className="flex flex-col m-auto max-w-7xl p-auto">
				<div className="flex items-center justify-between px-3 py-5 mx-2 text-xl font-bold text-black pt-7">
					<div className="flex items-center space-x-1">
						<TbBuildingBroadcastTower className="w-5 h-5 text-emerald-500" />
						<h1>Trending right now</h1>
					</div>
					<span className="px-2 py-1 text-xs font-semibold text-slate-800">
						View all
					</span>
				</div>
				<div className="flex pb-0 overflow-x-scroll hide-scroll-bar">
					<div className="flex ml-5 flex-nowrap">
						{/* <div className='inline-block pr-3'>
                            <div className='flex items-center justify-center w-[20rem] md:w-[22rem] max-w-xs overflow-hidden duration-300 ease-in-out rounded-3xl'>
                                <div className='flex flex-col space-y-4'>
                                    <h3 className='text-sm font-medium text-gray-500'>
                                        We hope the best for your support
                                    </h3>
                                    <span className='flex items-center justify-center w-10 h-10 text-white bg-black rounded-full'>
                                        <BiArrowBack className='w-6 h-6' />
                                    </span>
                                </div>
                            </div>
                        </div> */}
						{/* {recommendedData.map((data, index) => (
              // <RecommendCard key={data.name + index * 3} {...data} />
              // <LargeFundCard key={data.name + index * 3} />
              <FundCard key={data.name + index} />
            ))} */}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardScrollWrapper;
