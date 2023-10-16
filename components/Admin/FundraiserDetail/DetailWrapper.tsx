import React from "react";

const DetailWrapper = ({
  children,
  status,
}: {
  children: React.ReactNode;
  status: string;
}) => {
  return (
    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow sm:rounded-lg border">
          <div className="px-4 py-5 sm:px-6 flex justify-between">
            <div>
              <h2
                id="applicant-information-title"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Fundraiser event Information
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Fundraiser application detail.
              </p>
            </div>
            <div>
              {status == "AP" ? (
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Approved
                </span>
              ) : status == "PN" ? (
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Pending
                </span>
              ) : status == "RE" ? (
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                  Rejected
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            {children}
          </div>
          <div>
            <a
              href="#"
              className="block bg-gray-50 text-sm font-medium text-blue-600 text-center px-4 py-4 hover:text-blue-700 sm:rounded-b-lg"
            >
              Read criteria and requrements needed to approve Fundraiser
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailWrapper;
