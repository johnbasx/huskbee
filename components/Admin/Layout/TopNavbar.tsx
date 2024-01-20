import React, { useState } from 'react';

import ProfileDropDown from '@components/common/ProfileDropDown';
import axios from 'axios';
import { off_admin_dropdown_list } from '@constants/list-items';
import { useRouter } from 'next/router';

const TopNavbar = ({ pageTitle }: { pageTitle: string }) => {
  const [user, setUser] = useState(localStorage.getItem('off_username'));
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await axios.post('/api/office-admin-logout');

      router.push('/admin/login');
    } catch (e) {
      console.log(e);
    }
    console.log('logout');
  };

  return (
    <div className='hidden border-b border-neutral-200 bg-white px-4 py-2 shadow-md sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
      <div className='min-w-0 flex-1'>
        <h1 className='text-xl font-medium text-neutral-700 sm:text-lg'>
          {pageTitle}
        </h1>
      </div>
      <div className='mt-4 flex sm:ml-4 sm:mt-0'>
        <ProfileDropDown
          content={user}
          handleSignOut={handleSignOut}
          image='/logo/axewhy-colorful-logo.png'
          listItems={off_admin_dropdown_list}
        />
      </div>
    </div>
  );
};

export default TopNavbar;
