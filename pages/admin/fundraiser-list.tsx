import {
  ApprovedStatus,
  TableHead,
  TableValue,
  TableWrapper,
} from "@components/common/Table/Others";
import { FundraiserObjStore, TableStore } from "@store/office-admin-store";
import React, { useEffect, useState } from "react";
import {
  fundraiser_filter,
  off_admin_table_col_names,
} from "@constants/list-items";

import { CRAWDFUNDING_BASE_URL } from "@constants/api-urls";
import Filter from "@components/common/Table/Filter";
import { FundraiserEventProps } from "../organiser/fundraiser";
import Layout from "@components/Admin/Layout/Layout";
import Link from "next/link";
import { NextPageContext } from "next";
import Pagination from "@components/common/Table/pagination";
import { RootUrlStore } from "@store/table-store";
import SearchInPage from "@components/common/Table/SearchInPage";
import axios from "axios";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";

export type FundraisersObjType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: FundraiserEventProps[];
};

export type TableValeType = {
  value: string | number;
};
const FundraiserList = ({
  token,
  fundraisers_obj,
}: {
  token: string;
  fundraisers_obj: FundraisersObjType;
}) => {
  const { fundraisersIns, setFundraisersIns } = FundraiserObjStore();
  const { office_admin_token, setOfficeAdminToken } = orgTokenStore();
  const { pageNumberList, setPageNumberList } = TableStore();
  const { rootUrl, setRootUrl } = RootUrlStore();
  const [fundraisers, setfundraisers] = useState<FundraiserEventProps[]>();

  // const [rootUrl, setRootUrl] = useState(CRAWDFUNDING_BASE_URL +
  //   "fundraiser-list/ALL?page=")
  const [prev, setPrev] = useState<string | null>("");
  const [next, setNext] = useState<string | null>("");

  useEffect(() => {
    setOfficeAdminToken(token);
    setFundraisersIns(fundraisers_obj);
    setRootUrl(CRAWDFUNDING_BASE_URL + "fundraiser-list/ALL?page=");
  }, []);

  useEffect(() => {
    if (fundraisersIns != null) {
      setfundraisers(fundraisersIns.results);
      setPrev(fundraisersIns.previous);
      setNext(fundraisersIns.next);
    }
  }, [fundraisersIns]);

  const SearchPartner = (query: string) => {
    if (fundraisersIns != null) {
      const filteredList = query
        ? fundraisersIns.results &&
          fundraisersIns.results.filter((fundraiser) =>
            fundraiser.title.toLowerCase().includes(query.toLowerCase())
          )
        : fundraisers_obj.results;
      setfundraisers(filteredList);
    }
  };

  useEffect(() => {
    const total_row = fundraisersIns?.count;
    const requred_number_of_page = total_row != undefined ? total_row / 2 : 0;

    if (total_row != undefined) {
      // ONLY ONE PAGE
      if (total_row > 0 && requred_number_of_page == 1) {
        setPageNumberList([1]);
      }

      // MORE THAN ONE PAGE
      if (total_row > 0 && requred_number_of_page > 1) {
        let list: number[] = [];

        if (fundraisersIns)
          for (let i = 1; i <= requred_number_of_page; i++) {
            list = list.concat(i);
          }
        // console.log("list: ", list);

        setPageNumberList(list);
      }
    }
  }, [fundraisersIns]);

  // useEffect(() => {
  //   console.log("pagenumberList: ", pageNumberList);
  // }, [pageNumberList]);

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios(url, {
          headers: { Authorization: "Bearer " + office_admin_token },
        });
        setFundraisersIns(response.data);
        console.log(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  return (
    <Layout pageTitle="Fundraiser List">
      <div className="w-5xl mx-auto">
        <div className="mt-2 p-8 sm:ml-6 block sm:flex justify-between space-y-4 sm:space-y-0">
          <SearchInPage SearchPartner={SearchPartner} />
          <Filter filterOptions={fundraiser_filter} getFilteredList={getData} />
        </div>

        <TableWrapper totalItem={`${fundraisersIns?.count} Total fundraisers`}>
          <thead className="bg-white">
            <tr>
              {off_admin_table_col_names.map((item) => (
                <TableHead key={item.name} title={item.name} />
              ))}
            </tr>
          </thead>

          <tbody>
            {fundraisers &&
              fundraisers.map((fundraiser, Idx) => (
                <tr
                  key={fundraiser.id}
                  className={Idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <TableValue value={fundraiser.title} />
                  <TableValue value={fundraiser.goal} />
                  <ApprovedStatus value={fundraiser.approved_status} />
                  <TableValue value={fundraiser.open_status} />
                  <TableValue value={fundraiser.created_at} />
                  <TableValue value={fundraiser.organiser_name} />
                  <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                    <Link href={`/admin/fundraiser-detail/${fundraiser.id}`}>
                      <span className="text-indigo-600 hover:text-indigo-900">
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

export default FundraiserList;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("admin_token", { req, res });
  const login_status = getCookie("login", { req, res });
  const login = login_status ? login_status == true : false;

  const response = await fetch(CRAWDFUNDING_BASE_URL + "fundraiser-list/ALL", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const fundraisers_obj = await response.json();

  return {
    props: { token, fundraisers_obj },
  };
}
