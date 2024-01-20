import SearchInPage from './SearchInPage';

export const TableHead = ({ title }: { title: string }) => {
  return (
    <th
      scope='col'
      className='px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-black'
    >
      {title}
    </th>
  );
};

export const TableValue = ({ value }: { value: string | boolean }) => {
  return (
    <td className='whitespace-nowrap px-6 py-4 text-sm capitalize text-neutral-800'>
      {value === true ? (
        <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
          Open
        </span>
      ) : value === false ? (
        <span className='inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-green-800'>
          Close
        </span>
      ) : (
        <>{typeof value === 'string' && value}</>
      )}
    </td>
  );
};

export const ApprovedStatus = ({ value }: { value: string }) => {
  return (
    <>
      {value === 'AP' ? (
        <span className='inline-flex rounded-full bg-green-500 px-2 text-xs font-semibold leading-5 text-white'>
          Approved
        </span>
      ) : value === 'RE' ? (
        <span className='inline-flex rounded-full bg-red-500 px-2 text-xs font-semibold leading-5 text-white'>
          Reject
        </span>
      ) : (
        <span className='inline-flex rounded-full bg-blue-500 px-2 text-xs font-semibold leading-5 text-white'>
          Pending
        </span>
      )}
    </>
  );
};

export const TableWrapper = ({
  children,
  totalItem,
  SearchPartner,
}: {
  children: React.ReactNode;
  totalItem: string;
  SearchPartner: (query: string) => void;
}) => {
  return (
    <div className='overflow-x-auto rounded-lg border bg-white pb-10 pt-2 shadow-md sm:mx-6 sm:pt-10'>
      <div className='inline-block min-w-full align-middle sm:px-6 lg:px-8 '>
        <div className='overflow-hidden rounded-lg'>
          <div className='mb-6 flex justify-between'>
            <SearchInPage SearchPartner={SearchPartner} />
            <span className='text-lg font-medium text-neutral-700 sm:text-base'>
              {totalItem}
            </span>
          </div>

          <table className=' min-w-full divide-y divide-neutral-400 '>
            {children}
          </table>
        </div>
      </div>
    </div>
  );
};
