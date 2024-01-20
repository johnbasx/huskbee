import { AddressProps } from '../../../pages/organiser/profile';
import { DataDisplay } from './OrganisationInfo';
import React from 'react';

const Address = ({
  title,
  detail,
}: {
  title: string;
  detail: AddressProps;
}) => {
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg font-medium leading-6 text-neutral-900'>
          {title}
        </h3>
      </div>
      <div className='border-t border-neutral-200'>
        <dl>
          <DataDisplay
            bgColor='bg-neutral-50'
            title='Address'
            content={detail.name}
          />
          <DataDisplay
            bgColor='bg-white'
            title='Land mark'
            content={detail.land_mark}
          />
          <DataDisplay
            bgColor='bg-neutral-50'
            title='Google map link'
            content={detail.google_map}
          />
          <DataDisplay
            bgColor='bg-neutral-50'
            title='Pin code'
            content={detail.pin_code}
          />
        </dl>
      </div>
    </div>
  );
};

export default Address;
