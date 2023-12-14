import React from "react";
import { TbHandRock } from "react-icons/tb";
import { IconType } from "react-icons";

export const InterestedButton = () => (
	<button
		type="button"
		className="flex justify-center text-center text-lg bg-purple-600/20 hover:bg-purple-700/20 w-auto transition duration-200 border-purple-500/20 border rounded-lg p-2 font-bold text-a"
	>
		<TbHandRock className="h-5 w-5" />
	</button>
);

export type BrandButtonProps = {
	children?: React.ReactNode;
	text: string;
	icon?: IconType;
};
const BrandButton = ({ children, text, icon: Icon }: BrandButtonProps) => {
	return (
		<button
			type="button"
			className="flex justify-center text-center text-lg bg-purple-600 hover:bg-purple-700 w-full transition duration-200 border-purple-500 border rounded-lg py-1 px-3 font-bold"
		>
			{text}
			{Icon ? <Icon className="h-5 w-5" /> : null}
			{children}
		</button>
	);
};

export default BrandButton;
