import React, { useEffect, useState } from "react";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import { FaSearch } from "react-icons/fa";
import { FundraiserEventProps } from "../../../pages/organiser/fundraisers";
import Link from "next/link";
import { Spinner } from "flowbite-react";
import { orgTokenStore } from "@store/index";
import useDebounce from "@hooks/useDebounce";

const SearchFundraiser = ({
	setFundraisers,
}: {
	setFundraisers: (fundraiserEvents: FundraiserEventProps[]) => void;
}) => {
	const { token } = orgTokenStore();
	const [query, setQuery] = useState("");
	const debouncedSearch = useDebounce(query, 500);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const data = await fetch(
				`${CROWDFUNDING_BASE_URL}list-create-fundraiser-event/?q=${debouncedSearch}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			).then((res) => res.json());
			setFundraisers(data);

			setLoading(false);
		};
		if (debouncedSearch) {
			fetchData();
		}
	}, [debouncedSearch]);

	useEffect(() => {
		if (query === "") {
			setQuery("all");
		}
	}, [query]);

	return (
		<>
			<div className="flex justify-between mx-auto max-w-5xl lg:mx-0 w-full">
				<form className="w-1/2 flex lg:ml-0" action="#" method="GET">
					<label htmlFor="search-field" className="sr-only">
						Search
					</label>
					<div className="relative w-full text-gray-400 focus-within:text-gray-600 border-transparent border border-b-gray-700">
						<div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
							<FaSearch className="h-5 w-5" aria-hidden="true" />
						</div>
						<input
							id="search-field"
							onChange={(event) => setQuery(event.target.value)}
							className="bg-white block w-full h-full pl-8 pr-3 py-2 text-gray-700  border-transparent placeholder-gray-400 focus:outline-none focus:placeholder-gray-900 focus:ring-0 focus:border-transparent sm:text-sm"
							placeholder="Search fundraiser"
							type="search"
							name="search"
						/>
					</div>
				</form>
				<Link href="/organiser/create-fundraiser">
					<span className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
						Create Fundraiser
					</span>
				</Link>
			</div>
			<div className="text-gray-600 mt-4">
				{loading ? (
					<>
						<Spinner className="text-gray-300 h-6 w-6" />{" "}
						<span className="ml-2">Searching...</span>
					</>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default SearchFundraiser;
