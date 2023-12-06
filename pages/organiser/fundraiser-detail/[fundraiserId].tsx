import React, { useEffect, useState } from "react";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import ChartAnalytic from "@components/organiser/fundraiser-detail/ChartAnalytic";
import { DataDisplay } from "../../admin/fundraiser-detail/[fundraiserId]";
import DetailWrapper from "@components/admin/fundraiser-detail/DetailWrapper";
import Donations from "@components/organiser/fundraiser-detail/Donations";
import { DonorsObjStore } from "@store/organiser-fundraiserDetail-store";
import { FormatDate } from "@utils/index";
import FundDonors from "@components/organiser/fundraiser-detail/FundDonors";
import { FundraiserEventProps } from "../fundraisers";
import Layout from "@components/organiser/layout/Layout";
import { NextPageContext } from "next";
import Photos from "@components/organiser/fundraiser-detail/Photos";
import { RootUrlStore } from "@store/table-store";
import { Toaster } from "react-hot-toast";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";

export type FunraiserPhotoType = {
  id: string;
  photo: string;
  fundraiser: string;
};

export interface FundraiserEventsProps extends FundraiserEventProps {
  fundraiser_photo: FunraiserPhotoType[];
}

export interface DonationProps {
  id: string;
  donor_id: string;
  donated_to: string;
  donated_by: string;
  amount: number;
  fundraiser_title: string;
  organise_by: string;
  donor_name: string;
  donor_email: string;
  organiser_email: string;
  donor_photo_url: string;
  created_at: string;
}

export type DonorsObjType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: DonationProps[];
};

export interface FundDonationsGraphProp {
  id: string;
  amount: number;
  created_at: string;
  total_donation: number;
  created_date: string;
}

const FunraiserDetail = ({
  token,
  detail,
  donors_obj,
  fund_donations_graph_data,
}: {
  token: string;
  detail: FundraiserEventsProps;
  donors_obj: DonorsObjType;
  fund_donations_graph_data: FundDonationsGraphProp[];
}) => {
  const { donorsIns, setDonorsIns } = DonorsObjStore();
  const { setOrgToken } = orgTokenStore();
  const [fundraiserPhotos, setFundraiserPhotos] = useState<
    FunraiserPhotoType[]
  >(detail.fundraiser_photo);
  const [recentDonations, setRecentDonations] = useState<DonationProps[]>(
    donors_obj.results
  );
  const [donors, setDonors] = useState<DonationProps[]>();
  const [prev, setPrev] = useState<string | null>("");
  const [next, setNext] = useState<string | null>("");
  const { setRootUrl } = RootUrlStore();

  useEffect(() => {
    setOrgToken(token);
    setDonorsIns(donors_obj);
    setRootUrl(CROWDFUNDING_BASE_URL + `donors/${detail.id}?page=`);
  }, []);

  useEffect(() => {
    if (donorsIns != null) {
      setDonors(donorsIns.results);
      setPrev(donorsIns.previous);
      setNext(donorsIns.next);
    }
  }, [donorsIns]);

  return (
    <Layout pageTitle='Fundraiser detail'>
      <Toaster />
      <div className='max-w-3xl mx-auto  sm:px-6 lg:max-w-7xl space-y-12 pb-20'>
        <main className=''>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3'>
            <DetailWrapper
              status={detail.approved_status}
              totalDonation={detail.total_donation}
              totalDonors={detail.total_donors}
            >
              <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                <div className='sm:col-span-1'>
                  <DataDisplay
                    orgId={detail.organiser}
                    title='Title'
                    content={detail.title}
                  />
                </div>
                <div className='sm:col-span-1'>
                  <DataDisplay
                    orgId={detail.organiser}
                    title='Target Amount'
                    content={"₹ " + detail.target_amount}
                  />
                </div>
                <div className='sm:col-span-1'>
                  <DataDisplay
                    orgId={detail.organiser}
                    title='Created on'
                    content={FormatDate(detail.created_at)}
                  />
                </div>
                <div className='sm:col-span-1'>
                  <DataDisplay
                    orgId={detail.organiser}
                    title='Ends on'
                    content={FormatDate(detail.end_date)}
                  />
                </div>
                <div className='sm:col-span-1'>
                  <DataDisplay
                    orgId={detail.organiser}
                    title='Goal'
                    content={
                      detail.goal +
                      "Lorem ipsum dolor sit amet consecteturadipisicing elit. Iure, nemo."
                    }
                  />
                </div>
                <div className='sm:col-span-2'>
                  <DataDisplay
                    orgId={detail.organiser}
                    title='Description'
                    content={
                      // "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu." +
                      detail.description
                    }
                  />
                </div>
              </dl>
            </DetailWrapper>
            <Donations donors={recentDonations} />
          </div>
        </main>

        <Photos
          fundraiserId={detail.id}
          photos={fundraiserPhotos}
          title={detail.title}
          setFundraiserPhoto={setFundraiserPhotos}
        />

        {donors && donors.length > 0 && (
          <FundDonors
            totalDonation={donors_obj.count}
            donors={donors}
            next={next}
            prev={prev}
          />
        )}

        <ChartAnalytic graphData={fund_donations_graph_data} />
      </div>
    </Layout>
  );
};

export default FunraiserDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { fundraiserId } = context.query;
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });

  const response = await fetch(
    CROWDFUNDING_BASE_URL + "fundraiser-detail/" + fundraiserId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const detail = await response.json();

  const donors_res = await fetch(
    CROWDFUNDING_BASE_URL + "donors/" + fundraiserId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const donors_obj = await donors_res.json();

  const fund_donations_res = await fetch(
    CROWDFUNDING_BASE_URL + "fund-donations-graph/" + fundraiserId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const fund_donations_graph_data = await fund_donations_res.json();

  if (!detail || !donors_obj) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
      fundraiserId,
      detail,
      donors_obj,
      fund_donations_graph_data,
    },
  };
}
