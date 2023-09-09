import React, { ReactNode, useEffect, useState } from "react";

import AddressInfo from "@components/Organiser/Profile/AddressInfo";
import BankDetail from "@components/Organiser/Profile/BankDetail";
import Layout from "@components/Organiser/Layout/Layout";
import { NextPageContext } from "next";
import { OrganiserProfileStore } from "@store/organiser-profile-store";
import { USER_BASE_URL } from "@constants/api-urls";
import UpdateProfile from "@components/Organiser/Profile/UpdateProfile";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";

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
  id: string;
  user_id: string;
  name: string;
  email: string;
  status: boolean;
  logo: string;
  phone: string;
  organisation_name: string;
  description: string;
  organiser_type: string;
  created_at: string;
  updated_at: string;
  user: number;
}

export interface ExOrganiserProfileProps extends OrganiserProfileProps {
  address: AddressProps[];
  bank_detail: BankDetailProps[];
}

const Profile = ({
  token,
  profile,
}: {
  token: string;
  profile: ExOrganiserProfileProps;
}) => {
  const { setOrgToken } = orgTokenStore();

  const { orgProfile, setOrgProfile, setAddresses, setBankDetail } =
    OrganiserProfileStore();

  useEffect(() => {
    setOrgToken(token);
  }, []);

  useEffect(() => {
    setOrgProfile(profile);
    setAddresses(profile.address);
    setBankDetail(profile.bank_detail);
  }, [orgProfile]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-12">
        <Wrapper title="Profile">
          <ProfileContent
            lookUp={orgProfile.id}
            name="name"
            label="Full name"
            value={orgProfile.name}
            link="update-organiser-profile/"
          />
          <ProfileContent
            lookUp={orgProfile.id}
            name="email"
            label="Email"
            value={orgProfile.email}
            link="update-organiser-profile/"
          />
          <ProfileContent
            lookUp={orgProfile.id}
            name="phone"
            label="Phone"
            value={orgProfile.phone}
            link="update-organiser-profile/"
          />
          <ProfileContent
            lookUp={orgProfile.id}
            name="organiser_type"
            label="Organisation type"
            value={orgProfile.organiser_type}
            link="update-organiser-profile/"
          />
        </Wrapper>

        <Wrapper title="Bank Detail">
          <BankDetail />
        </Wrapper>

        <Wrapper title="Address info">
          <AddressInfo />
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

  if (!profile) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { token, profile },
  };
}

type ProfileContentProp = {
  lookUp: string;
  name: string;
  label: string;
  value: string;
  link: string;
};
export const ProfileContent = ({
  lookUp,
  name,
  label,
  value,
  link,
}: ProfileContentProp) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(value);
  }, []);

  return (
    <div className="bg-transparent py-6 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
      <dl className="grid grid-cols-1 sm:gap-6 text-base sm:grid-cols-2 md:gap-x-8 lg:col-span-6">
        <div>
          <dt className=" font-bold text-gray-200">{label}</dt>
        </div>
        <div>
          <dt className="font-medium text-gray-300">
            {content == "" ? value : content}
          </dt>
        </div>
      </dl>

      <UpdateProfile
        setContent={setContent}
        lookUp={lookUp}
        name={name}
        label={label}
        link={link}
      />
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
