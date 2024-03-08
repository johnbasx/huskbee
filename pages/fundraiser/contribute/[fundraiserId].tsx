import { BASE_URL, CROWDFUNDING_BASE_URL } from '@constants/api-urls';
import { FormatDate, toIndianCurrency } from '@utils/index';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useEffect } from 'react';

import { FundraiserEventsProps } from '../../organiser/fundraiser-detail/[fundraiserId]';
import Image from 'next/image';
import Layout from '@components/exocrowd-client/Layout';
import Script from 'next/script';
import axios from 'axios';
import { getCookie } from 'cookies-next';

// @ts-ignore
import { load } from '@cashfreepayments/cashfree-js';
import { orgTokenStore } from '@store/index';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import { useState } from 'react';

type CashfreeReturnType = {
  mode: string;
  checkout: (checkoutOptions: {
    paymentSessionId: string;
    redirectTarget: string;
  }) => void;
};

const Contribute = ({
  access_token,
  fundraiser_detail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user_token, setUserToken } = orgTokenStore();

  const router = useRouter();
  const [amount, setAmount] = useState<Number>(0);

  let cashfree: Promise<CashfreeReturnType>;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: 'sandbox',
    });
  };
  initializeSDK();

  const doPayment = async (cashfree_session_id: string) => {
    let checkoutOptions = {
      paymentSessionId: cashfree_session_id,
      redirectTarget: '_self',
    };
    (await cashfree).checkout(checkoutOptions);
  };

  useEffect(() => {
    if (access_token != '') {
      setUserToken(access_token);
    }
  }, [user_token]);

  const goToDonatePage = async () => {
    const data = {
      amount: amount,
      fundraiser_id: router.query.fundraiserId,
    };

    try {
      const response = await axios.post(
        CROWDFUNDING_BASE_URL + 'create-order',
        data,
        {
          headers: { Authorization: `Bearer ${user_token}` },
        }
      );

      console.log('c_id: ', response.data.order_session_id);
      doPayment(response.data.order_session_id);

      // router.push("/admin/login");
    } catch (e) {
      console.log(e);
    }
    console.log('logout');
  };
  return (
    <Layout title={`Contribute to ${fundraiser_detail.title}`}>
      <div className='mx-auto max-w-5xl py-8 font-semibold text-neutral-700'>
        Fundraiser title - {fundraiser_detail.title}
        <br />
        Fundraiser goal - {fundraiser_detail.goal}
        <br />
        Fundraiser description - {fundraiser_detail.description}
        <br />
        Target amount - {toIndianCurrency(fundraiser_detail.target_amount)}
        <br />
        End date - {FormatDate(fundraiser_detail.end_date)}
        <br />
        Total donors - {fundraiser_detail.donation_detail.total_donors}
        <br />
        Total donations - {toIndianCurrency(fundraiser_detail.donation_detail.total_donation)}
        <br />
        Fundraiser creator or Organiser name -{' '}
        {fundraiser_detail.organiser_name}
        <br />
        <br />
        organiser logo -
        <Image
          src={BASE_URL + '/media/' + fundraiser_detail.organiser_logo}
          height={400}
          width={400}
          alt='organiser-logo'
        />
        Fundraiser photo -
        <Image
          src={BASE_URL + fundraiser_detail.fundraiser_photo[0].photo}
          height={400}
          width={400}
          alt='fundraiser-photo'
        />
        <form className='mx-auto max-w-sm'>
          <label
            htmlFor='number-input'
            className='mb-2 block text-sm font-medium text-neutral-900 dark:text-white'
          >
            Enter amount to donate
          </label>
          <input
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            type='number'
            id='number-input'
            aria-describedby='helper-text-explanation'
            className='block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='90210'
            required
          />

          <button
            type='button'
            onClick={() => goToDonatePage()}
            className='w-full rounded-xl bg-neutral-950 px-4 py-3 text-lg font-semibold text-white'
          >
            Contribute now
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contribute;

export const getServerSideProps: GetServerSideProps<{
  access_token: string;
  fundraiser_detail: FundraiserEventsProps;
}> = async (context) => {
  const req = context.req;
  const res = context.res;
  const token = getCookie('user_token', { req, res });
  const { fundraiserId } = context.query;

  let access_token = '';
  if (token != undefined && typeof token == 'string') {
    access_token = token;
  } else {
    return {
      redirect: {
        destination: `/exocrowd-user/signin`,
        permanent: false,
      },
    };
  }

  const data = await fetch(
    `${CROWDFUNDING_BASE_URL}fundraiser-detail/${fundraiserId}`
  );
  const fundraiser_detail = await data.json();

  if (!fundraiser_detail || fundraiser_detail.detail === 'Not found.') {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
      // notFound: true,
    };
  }
  return { props: { access_token, fundraiser_detail } };
};
