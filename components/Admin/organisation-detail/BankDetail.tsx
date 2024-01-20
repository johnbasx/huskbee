import { BankDetailProps } from '../../../pages/organiser/profile';
import { DataDisplay } from './OrganisationInfo';
import React from 'react';

const BankDetail = ({
  title,
  detail,
}: {
  title: string;
  detail: BankDetailProps;
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
            title='Account holder name'
            content={detail.acc_name}
          />
          <DataDisplay
            bgColor='bg-white'
            title='Account number'
            content={detail.acc_number}
          />
          <DataDisplay
            bgColor='bg-neutral-50'
            title='Branch'
            content={detail.branch}
          />
          <DataDisplay bgColor='bg-white' title='IFSC' content={detail.ifsc} />
          <DataDisplay
            bgColor='bg-neutral-50'
            title='UPI'
            content={detail.upi_id}
          />
        </dl>
      </div>
    </div>
  );
};

export default BankDetail;
