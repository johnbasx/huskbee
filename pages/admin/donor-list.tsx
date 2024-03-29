import { BASE_URL, CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import React, { useEffect, useState } from 'react';

import Layout from '@components/admin/layout/Layout';
import { NextPageContext } from 'next';
import Pagination from '@components/common/table/pagination';
import { RootUrlStore } from '@store/table-store';
import axios from 'axios';
import { donorsListStore } from '@store/office-admin-store';
import { getCookie } from 'cookies-next';

type DonorsListProp = {
  donor_username: string;
  donor_fullname: string;
  donated_by: string;
  donor_photo: string;
  total_donation: number;
  total_donation_amount: number;
};
export interface DonorsListObjProp {
  count: number;
  next: string | null;
  previous: string | null;
  results: DonorsListProp[];
}
const DonorList = ({
  token,
  donors_list_obj,
}: {
  token: string;
  donors_list_obj: DonorsListObjProp;
}) => {
  const { donorsListObj, setDonorsListObj } = donorsListStore();
  const [donorsList, setDonorsList] = useState<DonorsListProp[]>([]);
  const { setRootUrl } = RootUrlStore();

  useEffect(() => {
    setDonorsListObj(donors_list_obj);
    setRootUrl(CROWDFUNDING_BASE_URL + 'donor-list?page=');
  }, []);
  const [prev, setPrev] = useState<string | null>('');
  const [next, setNext] = useState<string | null>('');

  useEffect(() => {
    setDonorsList(donorsListObj != null ? donorsListObj.results : []);
    setPrev(donorsListObj != null ? donorsListObj.previous : null);
    setNext(donorsListObj != null ? donorsListObj.next : null);
  }, [donorsListObj]);

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: 'Bearer ' + token },
        });
        setDonorsListObj(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
  };
  return (
    <Layout pageTitle='Donors List'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-12'>
        <div className='space-y-8 sm:space-y-12'>
          <ul
            role='list'
            className=' grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6  lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'
          >
            {donorsList.map((donor) => (
              <li key={donor.donor_username}>
                <div className='space-y-4'>
                  <img
                    className='mx-auto h-20 w-20 rounded-full shadow-lg lg:h-24 lg:w-24'
                    src={BASE_URL + 'media/' + donor.donor_photo}
                    alt=''
                  />
                  <div className='space-y-2'>
                    <div className='space-y-2 text-xs font-medium lg:text-sm'>
                      <h3 className='text-base font-bold text-neutral-800'>
                        {donor.donor_fullname}
                      </h3>

                      <p className='text-neutral-600'>
                        Donated {'₹' + donor.total_donation_amount}
                        &nbsp;at&nbsp;{donor.total_donation}
                        {donor.total_donation > 1
                          ? ' Fundraisers'
                          : ' Fundraiser'}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Pagination
          next={next}
          prev={prev}
          pagenumberList={[1, 2, 3]}
          getPageData={getData}
        />
      </div>
    </Layout>
  );
};

export default DonorList;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('admin_token', { req, res });

  const response = await fetch(CROWDFUNDING_BASE_URL + 'donor-list', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const donors_list_obj = await response.json();

  return {
    props: { token, donors_list_obj },
  };
}
