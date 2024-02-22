import React, { Dispatch, useEffect, useState } from 'react';

import { OrganiserProfileStore } from '@store/organiser-profile-store';
import ProfileDropDown from '@components/common/ProfileDropDown';
import axios from 'axios';
import { org_dropdown_list } from '@constants/list-items';
import { useRouter } from 'next/router';

const NavBar = ({
  setSidebarOpen,
  pageTitle,
}: {
  setSidebarOpen: Dispatch<boolean>;
  pageTitle: string;
}) => {
  const { org_logo } = OrganiserProfileStore();
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    setLogo(localStorage.getItem('logo'));
  }, [org_logo]);

  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await axios.post('/api/org-logout');
      router.push('/organiser/login');
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <div className='hidden border-b border-neutral-200 bg-white px-4 py-2 shadow-md sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
      <div className='min-w-0 flex-1'>
        <h1 className='text-xl font-medium text-neutral-700 sm:text-lg'>
          {pageTitle}
        </h1>
      </div>
      <div className='mt-4 flex sm:ml-4 sm:mt-0'>
        {/* FIXME */}
        <ProfileDropDown
          image={
            logo && logo !== 'undefined'
              ? logo
              : '/images/profile_photo/account.jpg'
          }
          content={user}
          handleSignOut={handleSignOut}
          listItems={org_dropdown_list}
        />
      </div>
    </div>
  );
};

export default NavBar;
