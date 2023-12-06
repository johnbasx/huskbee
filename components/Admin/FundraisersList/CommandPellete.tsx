import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import CommandPalleteWrapper from "@components/common/CommandPelleteWrapper";
import { FolderIcon } from "@heroicons/react/24/outline";
import { FundraiserEventProps } from "../../../pages/organiser/fundraisers";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { orgTokenStore } from "@store/index";
import useDebounce from "@hooks/useDebounce";
import { useRouter } from "next/router";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const CommandPallete = () => {
  const { office_admin_token } = orgTokenStore();
  const [query, setQuery] = useState("");
  const [fundraisers, setFundraisers] = useState<FundraiserEventProps[]>([]);
  const debouncedSearch = useDebounce(query, 500);

  useEffect(() => {
    const fetchData = async () => {
      if (query == "") {
        return;
      } else {
        const data = await fetch(
          CROWDFUNDING_BASE_URL + `search-fundraisers/?q=` + debouncedSearch,
          {
            headers: {
              Authorization: `Bearer ${office_admin_token}`,
            },
          }
        ).then((res) => res.json());
        setFundraisers(data);
        // console.log(data);
      }
    };
    if (debouncedSearch) {
      fetchData();
    }
  }, [debouncedSearch]);

  return (
    <CommandPalleteWrapper
      buttonText="Search from all fundraisers"
      placeholder="Serch by fundraiser title"
      query={query}
      setQuery={setQuery}
      length={fundraisers.length}
    >
      {fundraisers.length > 0 && (
        <Combobox.Options
          static
          className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
        >
          <li className="p-2">
            <ul className="text-sm text-gray-700">
              {fundraisers.map((fundraiser) => (
                <Combobox.Option
                  key={fundraiser.id}
                  value={fundraiser}
                  className={({ active }) =>
                    classNames(
                      "flex cursor-default select-none items-center rounded-md px-3 py-2",
                      active && "bg-indigo-600 text-white"
                    )
                  }
                >
                  {({ active }) => (
                    <>
                      <FolderIcon
                        className={classNames(
                          "h-6 w-6 flex-none",
                          active ? "text-white" : "text-gray-400"
                        )}
                        aria-hidden="true"
                      />
                      <span className="ml-3 flex-auto truncate">
                        {fundraiser.title}
                      </span>
                      {active && (
                        <span className="ml-3 flex-none text-indigo-100">
                          Jump to...
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </ul>
          </li>
        </Combobox.Options>
      )}
    </CommandPalleteWrapper>
  );
};

export default CommandPallete;
