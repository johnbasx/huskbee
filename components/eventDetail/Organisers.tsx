import Image from "next/image";
import { OrganiserProps } from "../../pages/event-detail/[eventId]";
import React from "react";

const Organisers = ({ organiser }: { organiser: OrganiserProps }) => {
  return (
    <div className="border-t border-gray-200 mt-10 pt-10">
      <h3 className="text-sm font-medium">Organised by</h3>
      <section aria-labelledby="policies-heading" className="mt-10">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {/* {organisers.map((organiser) => ( */}
          <div
            key={organiser.id}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
          >
            <dt>
              {/* <policy.icon
                  className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                /> */}
              <Image
                src={organiser.logo}
                alt={organiser.name}
                height={200}
                width={200}
              />
              <span className="mt-4 text-sm font-medium text-gray-900">
                {organiser.name}
              </span>
            </dt>
            <dd className="mt-1 text-sm text-gray-500">
              Some description about the organiser
            </dd>
          </div>
          {/* ))} */}
        </dl>
      </section>
    </div>
  );
};

export default Organisers;
