import {
  AddressTabListStore,
  AddressTabListType,
} from "@store/organiser-profile-store";
import { BASE_URL, USER_BASE_URL } from "@constants/api-urls";
import React, { ReactNode, useEffect, useState } from "react";

import AddressInfo from "@components/organiser/Profile/AddressInfo";
import BankDetail from "@components/organiser/Profile/BankDetail";
import Layout from "@components/organiser/layout/Layout";
import { NextPageContext } from "next";
import { OrganiserProfileStore } from "@store/organiser-profile-store";
import { Toaster } from "react-hot-toast";
import UpdateLogo from "@components/organiser/Profile/UpdateLogo";
import UpdateProfile from "@components/organiser/Profile/UpdateProfile";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";

const person = {
  name: "Leslie Alexander",
  role: "Co-Founder / CEO",
  imageUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

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
  const { setAddressTabList } = AddressTabListStore();
  const {
    orgProfile,
    setOrgProfile,
    addresses,
    setAddresses,
    org_logo,
    setOrgLogo,
  } = OrganiserProfileStore();

  useEffect(() => {
    setOrgToken(token);
    setOrgProfile(profile);
    setAddresses(profile.address);
    setOrgLogo(BASE_URL + profile.logo);

    let list: AddressTabListType[] = [];
    profile.address.map((item) => {
      list = [...list, { name: item.name, default: item.default }];
    });
    setAddressTabList(list);
  }, []);

  return (
    <Layout pageTitle="Profile">
      <Toaster />
      <div className="mt-8 max-w-3xl mx-auto gap-6 sm:px-6 lg:max-w-7xl pb-12 space-y-12">
        <ProfileWrapper
          title="Organiser profile"
          logo={org_logo}
          user_id={profile.id}
          // subtitle="Information about the Organiser"
        >
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
          <ProfileContent
            lookUp={orgProfile.id}
            name="description"
            label="Description"
            value={`${orgProfile.description}`}
            link="update-organiser-profile/"
          />
        </ProfileWrapper>
        {/* <Wrapper
          title="Bank information"
          subtitle={`Different Bank Accounts for ${profile.organisation_name}`}
        >
          <BankDetail BankAccounts={profile.bank_detail} />
        </Wrapper>*/}
        <Wrapper
          title="Organiser Addresses"
          subtitle={`Different address for ${profile.organisation_name}`}
        >
          <AddressInfo Addresses={addresses} SetAddress={setAddresses} />
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
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-between space-x-4">
        <span>{value}</span>
        <div className="mr-2 flex-shrink-0">
          <UpdateProfile
            lookUp={lookUp}
            name={name}
            label={label}
            link={link}
            defaultValue={value}
          />
        </div>
      </dd>
    </div>
  );
};

const Wrapper = ({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="bg-white w-full rounded-lg border p-6 shadow-md">
      <div className="px-4 sm:px-0 text-center">
        {/* <div className="flex items-center gap-x-6">
          <img
            className="h-16 w-16 rounded-full"
            src={person.imageUrl}
            alt=""
          />
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
              {title}
            </h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">
              {person.role}
            </p>
          </div>
        </div> */}
        <h3 className="text-xl font-semibold leading-7 text-gray-900">
          {title}
        </h3>
        <p className="mt-1  text-sm leading-6 text-gray-500">{subtitle}</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">{children}</dl>
      </div>
    </div>
  );
};

const ProfileWrapper = ({
  children,
  logo,
  title,
  user_id,
}: {
  children: ReactNode;
  logo: string;
  title: string;
  user_id: string;
}) => {
  // console.log("Logo: ", logo);
  return (
    <div className="bg-white w-full rounded-lg border p-6 shadow-md">
      <div className="px-4 sm:px-0 text-center">
        <div className="flex items-center gap-x-6">
          <img className="h-16 w-16 rounded-full" src={logo} alt="" />
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
              {title}
            </h3>
            <UpdateLogo user_id={user_id} />
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">{children}</dl>
      </div>
    </div>
  );
};
