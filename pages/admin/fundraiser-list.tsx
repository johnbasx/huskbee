import {
  ApprovedStatus,
  TableHead,
  TableValue,
  TableWrapper,
} from '@components/common/table/Others';
import { FundraiserObjStore, TableStore } from '@store/office-admin-store';
import React, { useEffect, useState } from 'react';
import {
  fundraiser_filter,
  off_admin_table_col_names,
} from '@constants/list-items';

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import CommandPallete from '@components/admin/fundraisers-list/CommandPellete';
import Filter from '@components/common/table/Filter';
import { FormatDate } from '@utils/index';
import { FundraiserEventProps } from '../organiser/fundraisers';
import Layout from '@components/admin/layout/Layout';
import Link from 'next/link';
import { NextPageContext } from 'next';
import Pagination from '@components/common/table/pagination';
import { RootUrlStore } from '@store/table-store';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { orgTokenStore } from '@store/index';

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

  // const [rootUrl, setRootUrl] = useState(CROWDFUNDING_BASE_URL +
  //   "fundraiser-list/ALL?page=")
  const [prev, setPrev] = useState<string | null>('');
  const [next, setNext] = useState<string | null>('');

  useEffect(() => {
    setOfficeAdminToken(token);
    setFundraisersIns(fundraisers_obj);
    setRootUrl(CROWDFUNDING_BASE_URL + 'fundraiser-list/ALL?page=');
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
          headers: { Authorization: 'Bearer ' + office_admin_token },
        });
        setFundraisersIns(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  return (
    <Layout pageTitle='Fundraiser List'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 mt-2 block justify-between space-y-4 py-8 sm:flex sm:space-y-0'>
          <CommandPallete />
          <Filter
            linkPart={CROWDFUNDING_BASE_URL + 'fundraiser-list/'}
            filterOptions={fundraiser_filter}
            getFilteredList={getData}
          />
        </div>

        <TableWrapper
          totalItem={`${fundraisersIns?.count} Total fundraisers`}
          SearchPartner={SearchPartner}
        >
          <thead className='bg-white'>
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
                  className={Idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}
                >
                  <TableValue value={fundraiser.title} />
                  <TableValue value={fundraiser.goal} />
                  <td className='whitespace-nowrap px-6 py-4 text-sm text-neutral-800'>
                    <ApprovedStatus value={fundraiser.approved_status} />
                  </td>
                  <TableValue value={fundraiser.open_status} />
                  <TableValue value={FormatDate(fundraiser.created_at)} />
                  <TableValue value={fundraiser.organiser_name} />
                  <td className='whitespace-nowrap px-6 py-4  text-sm font-medium'>
                    <Link href={`/admin/fundraiser-detail/${fundraiser.id}`}>
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

export default FundraiserList;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('admin_token', { req, res });
  const login_status = getCookie('login', { req, res });
  const login = login_status ? login_status == true : false;

  const response = await fetch(CROWDFUNDING_BASE_URL + 'fundraiser-list/ALL', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const fundraisers_obj = await response.json();

  return {
    props: { token, fundraisers_obj },
  };
}
