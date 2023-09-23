import Filter from "./Filter";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchInPage = ({
  SearchPartner,
}: {
  SearchPartner: (query: string) => void;
}) => {
  return (
    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 border-transparent border-b-gray-300 bg-transparentfocus:border-transparent focus:border-b-gray-300 focus:ring-0 sm:w-96 max-w-md  ">
      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </span>
      <input
        onChange={(event) => {
          SearchPartner(event.target.value);
        }}
        type="text"
        name="table-search"
        id="table-search"
        autoComplete="table-search"
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Search in this page"
      />
    </div>
  );
};

export default SearchInPage;
