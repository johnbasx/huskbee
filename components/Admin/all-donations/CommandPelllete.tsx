import { useEffect, useState } from "react";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import { Combobox } from "@headlessui/react";
import CommandPalleteWrapper from "@components/common/CommandPelleteWrapper";
import { DonationProps } from "../../../pages/organiser/fundraiser-detail/[fundraiserId]";
import { FolderIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { orgTokenStore } from "@store/index";
import useDebounce from "@hooks/useDebounce";
import { useRouter } from "next/router";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const CommandPallete = () => {
  const { office_admin_token } = orgTokenStore();
  const [query, setQuery] = useState("");
  const [donations, setDonations] = useState<DonationProps[]>([]);
  const debouncedSearch = useDebounce(query, 500);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (query == "") {
        return;
      } else {
        const data = await fetch(
          CROWDFUNDING_BASE_URL + `search-donations/?q=` + debouncedSearch,
          {
            headers: {
              Authorization: `Bearer ${office_admin_token}`,
            },
          }
        ).then((res) => res.json());
        setDonations(data);
        console.log(data);
      }
    };
    if (debouncedSearch) {
      fetchData();
    }
  }, [debouncedSearch]);

  return (
    <CommandPalleteWrapper
      buttonText="Search from all donations"
      placeholder="Serch by fundraiser title"
      query={query}
      setQuery={setQuery}
      length={donations.length}
    >
      {donations.length > 0 && (
        <Combobox.Options
          static
          className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
        >
          <li className="p-2">
            <ul className="text-sm text-gray-700">
              {donations.map((donation) => (
                <Combobox.Option
                  key={donation.id}
                  value={donation}
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
                          "h-6 w-6 flex-none ",
                          active ? "text-white" : "text-gray-400"
                        )}
                        aria-hidden="true"
                      />
                      <Link
                        href={`/admin/fundraiser-detail/${donation.donated_to}`}
                      >
                        <span className="ml-3 flex-auto truncate cursor-pointer">
                          {donation.fundraiser_title}
                        </span>
                      </Link>
                      {active && (
                        <span className="cursor-pointer ml-3 flex-none text-indigo-100">
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
