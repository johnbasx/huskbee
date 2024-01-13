import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect } from 'react'

import { CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { getCookie } from "cookies-next";
import { orgTokenStore } from '@store/index';

export type ConfirmOrderResponse = {
  order_amount: number;
  order_status: string
}
const ConfirmPayment = ({
  access_token,
  confirm_order_obj,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user_token, setUserToken } = orgTokenStore()

  useEffect(() => {
    if (access_token != '') {
      setUserToken(access_token)
    }
  }, [user_token])
  return (
    <div>{confirm_order_obj.order_status === "PAID" ? "You have successfully donated" : "Donation not complete"}</div>
  )
}

export default ConfirmPayment

export const getServerSideProps: GetServerSideProps<{
  access_token: string;
  confirm_order_obj: ConfirmOrderResponse;
}> = async (context) => {
  const req = context.req;
  const res = context.res;
  const token = getCookie("user_token", { req, res });

  const { order_id } = context.query;

  let access_token = ''
  if (token != undefined && typeof token == 'string') {
    access_token = token
  }

  console.log('a_c: ', access_token);
  const headers = { 'Content-Type': 'application/json', Authorization: "Bearer " + access_token }

  const data = await fetch(`${CROWDFUNDING_BASE_URL}confirm-payment/${order_id}`, { headers: headers });
  const confirm_order_obj = await data.json();
  if (!confirm_order_obj) {
    return {
      notFound: true,
    };
  }
  return { props: { access_token, confirm_order_obj } };
};