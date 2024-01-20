import React, { useEffect, useState } from 'react';

import Layout from '@components/admin/layout/Layout';
import Link from 'next/link';
import { NextPageContext } from 'next';
import Pagination from '@components/common/table/pagination';
import { RootUrlStore } from '@store/table-store';
import { USER_BASE_URL } from '@constants/api-urls';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { orgTokenStore } from '@store/index';
import { usersStore } from '@store/office-admin-store';
import Image from 'next/image';

export interface HuskbeeUserProp {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  photo: string;
  created_at: string;
}

export interface HuskbeeUserObjProp {
  count: number;
  next: string | null;
  previous: string | null;
  results: HuskbeeUserProp[];
}
const Users = ({
  token,
  huskbee_user_obj,
}: {
  token: string;
  huskbee_user_obj: HuskbeeUserObjProp;
}) => {
  const { setRootUrl } = RootUrlStore();
  const { usersObj, setUserObj } = usersStore();
  const [users, setUsers] = useState<HuskbeeUserProp[]>([]);
  const [prev, setPrev] = useState<string | null>('');
  const [next, setNext] = useState<string | null>('');

  useEffect(() => {
    setUserObj(huskbee_user_obj);
    setRootUrl(`${USER_BASE_URL}huskbee-users?page=`);
  }, []);

  useEffect(() => {
    setUsers(usersObj != null ? usersObj.results : []);
    setPrev(usersObj != null ? usersObj.previous : null);
    setNext(usersObj != null ? usersObj.next : null);
  }, [usersObj]);

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserObj(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Layout pageTitle='Huskbee users'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-12'>
        <div className='space-y-8 sm:space-y-12'>
          <ul className=' grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6  lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6'>
            {users?.map((user) => (
              <li key={user.id}>
                <div className='space-y-4'>
                  <Image
                    height={100}
                    width={100}
                    className='mx-auto h-20 w-20 rounded-full object-cover shadow-lg lg:h-24 lg:w-24'
                    src={user.photo}
                    alt=''
                  />
                  <div className='space-y-2'>
                    <div className='space-y-2 text-xs font-medium lg:text-sm'>
                      <Link href={`/admin/user-detail/${user.id}`}>
                        <h3 className='text-base font-bold text-neutral-800'>
                          {user.full_name}
                        </h3>
                      </Link>
                      <p className='text-neutral-600'>{user.email}</p>
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

export default Users;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie('admin_token', { req, res });

  const response = await fetch(`${USER_BASE_URL}huskbee-users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const huskbee_user_obj = await response.json();

  return {
    props: { token, huskbee_user_obj },
  };
}
