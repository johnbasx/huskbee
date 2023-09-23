export const TableHead = ({ title }: { title: string }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
    >
      {title}
    </th>
  );
};

export const TableValue = ({ value }: { value: string | Boolean }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
      {value == true ? (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Open
        </span>
      ) : value == false ? (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
          Close
        </span>
      ) : (
        <>{typeof value == "string" && value}</>
      )}
    </td>
  );
};

export const ApprovedStatus = ({ value }: { value: string }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
      {value == "AP" ? (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-white">
          Approved
        </span>
      ) : value == "RE" ? (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white">
          Reject
        </span>
      ) : (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-500 text-white">
          Pending
        </span>
      )}
    </td>
  );
};

export const TableWrapper = ({
  children,
  totalItem,
}: {
  children: React.ReactNode;
  totalItem: string;
}) => {
  return (
    <div className=" overflow-x-auto sm:mx-6 pt-2 sm:pt-10 pb-10">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 shadow-lg bg-white rounded-lg">
        <div className="overflow-hidden rounded-lg py-2 ">
          <span className="text-lg font-medium sm:text-base text-gray-700">
            {totalItem}
          </span>
          <table className="mt-3 min-w-full divide-y divide-gray-400 ">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
};
