import React, { useRef } from "react";

import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";

const TrustAndSafetySection = () => {
	return (
		<section className="bg-blue-700 flex justify-center items-center min-h-[70vh] py-28 px-6">
			<motion.div className="mx-auto text-white max-w-screen-2xl flex flex-col gap-10">
				<div className="flex items-center gap-2 font-bold text-lg md:text-2xl">
					{/* <TbDiscountCheckFilled /> */}
					<p>Trust & Safety</p>
				</div>
				<div>
					<h3 className="text-2xl md:text-4xl font-bold">We have your back.</h3>
					<p className="text-2xl md:text-4xl mt-4 max-w-screen-lg">
						With a team dedicated to trust and safety, we’ve successfully
						managed fundraisers for different kinds of needs and requirements of
						people. Don’t worry about a thing, we’ve got you covered.
					</p>
				</div>
				<div>
					<button
						type="button"
						className="bg-transparent font-semibold text-sm text-black hover:bg-blue-50 duration-200 rounded-full py-2 hover:px-4 flex items-center justify-start gap-2"
					>
						Explore Trust & Safety <TbArrowRight />
					</button>
				</div>
			</motion.div>
		</section>
	);
};

export default TrustAndSafetySection;
