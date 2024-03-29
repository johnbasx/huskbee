import React, { useEffect, useState } from "react";
import { RootUrlStore, TableStore } from "@store/table-store";
import {
  TableHead,
  TableValue,
  TableWrapper,
} from "@components/common/table/Others";
import {
  donations_table_col_names,
  donors_filter,
} from "@constants/list-items";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import CommandPallete from "@components/admin/all-donations/CommandPelllete";
import { DonationObjStore } from "@store/office-admin-store";
import { DonationProps } from "../organiser/fundraiser-detail/[fundraiserId]";
import Filter from "@components/common/table/Filter";
import { FormatDate } from "@utils/index";
import Layout from "@components/admin/layout/Layout";
import Link from "next/link";
import { NextPageContext } from "next";
import Pagination from "@components/common/table/pagination";
import axios from "axios";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";

export type DonationObjType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: DonationProps[];
};

const AllDonations = ({
  token,
  donation_obj,
}: {
  token: string;
  donation_obj: DonationObjType;
}) => {
  const { donationIns, setDonationIns } = DonationObjStore();
  const { office_admin_token, setOfficeAdminToken } = orgTokenStore();
  const { rootUrl, setRootUrl } = RootUrlStore();
  const { pageNumberList, setPageNumberList } = TableStore();

  const [donations, setDonations] = useState<DonationProps[]>();

  const [prev, setPrev] = useState<string | null>("");
  const [next, setNext] = useState<string | null>("");

  useEffect(() => {
    setOfficeAdminToken(token);
    setDonationIns(donation_obj);
    setRootUrl(CROWDFUNDING_BASE_URL + "all-donations/ALL?page=");
  }, []);

  useEffect(() => {
    if (donationIns != null) {
      setDonations(donationIns.results);
      setPrev(donationIns.previous);
      setNext(donationIns.next);
    }
  }, [donationIns]);

  const SearchDonation = (query: string) => {
    if (donationIns != null) {
      const filteredList = query
        ? donationIns.results &&
          donationIns.results.filter((donation) =>
            donation.fundraiser_title
              .toLowerCase()
              .includes(query.toLowerCase())
          )
        : donation_obj.results;
      setDonations(filteredList);
    }
  };

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios(url, {
          headers: { Authorization: "Bearer " + office_admin_token },
        });
        setDonationIns(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    const total_row = donationIns?.count;
    const requred_number_of_page = total_row != undefined ? total_row / 2 : 0;

    if (total_row != undefined) {
      // ONLY ONE PAGE
      if (total_row > 0 && requred_number_of_page == 1) {
        setPageNumberList([1]);
      }

      // MORE THAN ONE PAGE
      if (total_row > 0 && requred_number_of_page > 1) {
        let list: number[] = [];

        if (donationIns)
          for (let i = 1; i <= requred_number_of_page; i++) {
            list = list.concat(i);
          }
        // console.log("list: ", list);

        setPageNumberList(list);
      }
    }
  }, [donationIns]);
  return (
    <Layout pageTitle='All Donations'>
      <div className='max-w-7xl mx-auto'>
        <div className='mt-2 py-8 mx-6 block sm:flex justify-between space-y-4 sm:space-y-0'>
          <CommandPallete />
          <Filter
            linkPart={CROWDFUNDING_BASE_URL + "all-donations/"}
            filterOptions={donors_filter}
            getFilteredList={getData}
          />
        </div>

        <TableWrapper
          totalItem={`${donationIns?.count} Total donations`}
          SearchPartner={SearchDonation}
        >
          <thead className='bg-transparent'>
            <tr>
              {donations_table_col_names.map((item) => (
                <TableHead key={item.name} title={item.name} />
              ))}
            </tr>
          </thead>

          <tbody>
            {donations &&
              donations.map((donation, Idx) => (
                <tr
                  key={donation.id}
                  className={
                    Idx % 2 === 0 ? "bg-transparent" : "bg-transparent"
                  }
                >
                  <TableValue value={donation.fundraiser_title} />
                  <TableValue value={donation.organise_by} />
                  <TableValue value={donation.donor_name} />
                  <TableValue value={FormatDate(donation.created_at)} />
                  <TableValue value={donation.amount.toString()} />
                  <td className='px-6 py-4 whitespace-nowrap  text-sm font-medium'>
                    <Link
                      href={`/admin/fundraiser-detail/${donation.donated_to}`}
                    >
                      <span className='text-indigo-600 hover:text-indigo-900'>
                        Detail
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </TableWrapper>

        <Pagination
          prev={prev}
          next={next}
          pagenumberList={pageNumberList}
          getPageData={getData}
        />
      </div>
    </Layout>
  );
};

export default AllDonations;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("admin_token", { req, res });

  const response = await fetch(CROWDFUNDING_BASE_URL + "all-donations/ALL", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const donation_obj = await response.json();

  return {
    props: { token, donation_obj },
  };
}
