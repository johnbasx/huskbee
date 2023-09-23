import React, { useEffect, useState } from "react";

import Layout from "@components/Admin/Layout/Layout";
import Link from "next/link";
import { NextPageContext } from "next";
import Pagination from "@components/common/Table/pagination";
import { USER_BASE_URL } from "@constants/api-urls";
import axios from "axios";
import { getCookie } from "cookies-next";
import { usersStore } from "@store/office-admin-store";

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
  const { usersObj, setUserObj } = usersStore();
  const [users, setUsers] = useState<HuskbeeUserProp[]>([]);
  useEffect(() => {
    setUserObj(huskbee_user_obj);
  }, []);
  const [prev, setPrev] = useState<string | null>("");
  const [next, setNext] = useState<string | null>("");

  useEffect(() => {
    setUsers(usersObj != null ? usersObj.results : []);
    setPrev(usersObj != null ? usersObj.previous : null);
    setNext(usersObj != null ? usersObj.next : null);
  }, [usersObj]);

  const getData = async (url: string | null) => {
    if (url != null) {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: "Bearer " + token },
        });
        setUserObj(response.data);
        // setUsers(response.data.results);
        console.log(response.data);
      } catch (e: any) {
        console.log(e);
      }
    }
  };

  return (
    <Layout pageTitle="Huskbee users">
      <div className="bg-white">
        <div className=" py-12 px-4  sm:px-6 lg:px-8 lg:py-12 ">
          <div className="space-y-8 sm:space-y-12">
            {/* <div className="space-y-5 sm:mx-auto sm:max-w-6xl sm:space-y-4 lg:max-w-6xl">
              <h2 className="ml-6 text-xl font-extrabold  sm:text-3xl text-gray-700">
                Users
              </h2>
            </div> */}
            <ul
              role="list"
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-6xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6 text-center"
            >
              {users &&
                users.map((user) => (
                  <li key={user.full_name}>
                    <div className="space-y-4">
                      <img
                        className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 shadow-lg object-cover"
                        src={user.photo}
                        alt=""
                      />
                      <div className="space-y-2">
                        <div className="text-xs font-medium lg:text-sm">
                          <Link href={`/admin/user-detail/${user.id}`}>
                            <h3 className="text-indigo-600">
                              {user.full_name}
                            </h3>
                          </Link>
                          <p className="text-gray-600">{user.email}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Pagination
        next={next}
        prev={prev}
        pagenumberList={[1, 2, 3]}
        getPageData={getData}
      />
    </Layout>
  );
};

export default Users;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("admin_token", { req, res });

  const response = await fetch(USER_BASE_URL + "huskbee-users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const huskbee_user_obj = await response.json();

  return {
    props: { token, huskbee_user_obj },
  };
}
