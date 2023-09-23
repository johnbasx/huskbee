import {
  TableHead,
  TableValue,
  TableWrapper,
} from "@components/common/Table/Others";
import { donor_table_col_names, donors_filter } from "@constants/list-items";

import Filter from "@components/common/Table/Filter";
import Layout from "@components/Admin/Layout/Layout";
import Link from "next/link";
import React from "react";
import SearchInPage from "@components/common/Table/SearchInPage";

const people = [
  {
    name: "Michael Foster",
    role: "Funded 100 Fundraisers",
    imageUrl: "/images/profile_photo/sample.jpg",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/logo/axewhy-colorful-logo.png",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/logo/axewhy-colorful-logo.png",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/logo/axewhy-colorful-logo.png",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/logo/axewhy-colorful-logo.png",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/logo/axewhy-colorful-logo.png",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "/logo/axewhy-colorful-logo.png",
  },
];

const DonorList = () => {
  const SearchPartner = (query: string) => {
    console.log("Search Donars");
    // if (fundraisersIns != null) {
    //   const filteredList = query
    //     ? fundraisersIns.results &&
    //       fundraisersIns.results.filter((fundraiser) =>
    //         fundraiser.title.toLowerCase().includes(query.toLowerCase())
    //       )
    //     : fundraisers_obj.results;
    //   setfundraisers(filteredList);
    // }
  };

  const getData = async (url: string | null) => {
    console.log("get data");

    // if (url != null) {
    //   try {
    //     const response = await axios(url, {
    //       headers: { Authorization: "Bearer " + office_admin_token },
    //     });
    //     setFundraisersIns(response.data);
    //     console.log(response.data);
    //   } catch (e: any) {
    //     console.log(e);
    //   }
    // }
  };

  return (
    <Layout pageTitle="Donors List">
      <div className="bg-white">
        <div className=" py-12 px-4  sm:px-6 lg:px-8 lg:py-12 ">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-6xl sm:space-y-4 lg:max-w-6xl">
              <h2 className="ml-6 text-xl font-extrabold  sm:text-3xl text-gray-700">
                Users
              </h2>
              {/* <p className="text-xl text-gray-500">
              Risus velit condimentum vitae tincidunt tincidunt. Mauris
              ridiculus fusce amet urna nunc. Ut nisl ornare diam in.
            </p> */}
            </div>
            <ul
              role="list"
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-6xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6 text-center"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 shadow-lg object-cover"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <Link href="#!">
                          <h3 className="text-indigo-600">{person.name}</h3>
                        </Link>
                        <p className="text-gray-600">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonorList;
