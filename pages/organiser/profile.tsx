import React, { ReactNode } from "react";

import AddressInfo from "@components/Organiser/Profile/AddressInfo";
import BankDetail from "@components/Organiser/Profile/BankDetail";
import Layout from "@components/Organiser/Layout/Layout";
import { NextPageContext } from "next";
import { USER_BASE_URL } from "@constants/api-urls";
import { getCookie } from "cookies-next";

export interface AddressProps {
  id: string;
  name: string;
  pin_code: string;
  land_mark: string;
  google_map: string;
  organiser: string;
  huskbee_user: string | null;
  default: boolean;
}

export interface BankDetailProps {
  id: string;
  acc_number: string;
  ifsc: string;
  acc_name: string;
  branch: string;
  upi_id: string;
  phone_number: string;
  organiser: string;
  default: boolean;
}
export interface OrganiserProfileProps {
  name: string;
  email: string;
  logo: string;
  phone: string;
  organisation_name: string;
  organiser_type: string;
  created_at: Date;
  updated_at: Date;
  user: number;
}

export interface ExOrganiserProfileProps extends OrganiserProfileProps {
  address: AddressProps[];
  bank_detail: BankDetailProps[];
}

const Profile = ({ profile }: { profile: ExOrganiserProfileProps }) => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-12">
        {/* Profile */}
        <Wrapper title="Profile">
          <ProfileContent
            label="Full name"
            value={profile.name}
            link="sample-link"
          />
          <ProfileContent
            label="Email"
            value={profile.email}
            link="sample-link"
          />
          <ProfileContent
            label="Phone"
            value={profile.phone}
            link="sample-link"
          />
          <ProfileContent
            label="Organisation type"
            value={profile.organiser_type}
            link="sample-link"
          />
        </Wrapper>

        <Wrapper title="Bank Detail">
          <BankDetail bankDetail={profile.bank_detail} />
        </Wrapper>

        <Wrapper title="Address info">
          <AddressInfo addresses={profile.address} />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default Profile;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const token = getCookie("org_token", { req, res });
  const response = await fetch(USER_BASE_URL + "organiser-profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const profile = await response.json();
  // console.log(profile);
  if (!profile) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { profile },
  };
}

export const ProfileContent = ({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link: string;
}) => {
  return (
    <div className="bg-transparent py-6 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
      <dl className="grid grid-cols-1 sm:gap-6 text-base sm:grid-cols-2 md:gap-x-8 lg:col-span-6">
        <div>
          <dt className=" font-bold text-gray-200">{label}</dt>
        </div>
        <div>
          <dt className="font-medium text-gray-300">{value}</dt>
        </div>
      </dl>

      <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-6">
        <div className="pb-4 flex items-end justify-end">
          <dd className="font-medium text-blue-300 cursor-pointer">Edit</dd>
        </div>
      </dl>
    </div>
  );
};

const Wrapper = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="mt-8 px-4 pt-4 md:px-8 md:pt-8 backdrop-blur-md bg-zinc-800/20 rounded-3xl border border-zinc-700/40">
      <h2 className="font-bold text-2xl text-gray-50 ">{title}</h2>
      <div className="divide-y divide-gray-700">{children}</div>
    </div>
  );
};
