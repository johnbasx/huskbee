import React from 'react';

const FundraiserDetailDescription = ({ details }: { details: string }) => {
  return (
    <div className='py-4'>
      <h2 className='text-lg font-bold'>About the fundraiser</h2>
      <div className='prose prose-neutral mx-auto mt-8 max-w-none prose-a:text-blue-600'>
        <div dangerouslySetInnerHTML={{ __html: details }} />
      </div>
    </div>
  );
};

export default FundraiserDetailDescription;
