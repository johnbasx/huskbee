import { AddressProps } from "../../../pages/organiser/profile";
import { DataDisplay } from "./OrganisationInfo";
import React from "react";

const Address = ({
  title,
  detail,
}: {
  title: string;
  detail: AddressProps;
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DataDisplay
            bgColor="bg-gray-50"
            title="Adress"
            content={detail.name}
          />
          <DataDisplay
            bgColor="bg-white"
            title="Land mark"
            content={detail.land_mark}
          />
          <DataDisplay
            bgColor="bg-gray-50"
            title="Google map link"
            content={detail.google_map}
          />
          <DataDisplay
            bgColor="bg-gray-50"
            title="Pin code"
            content={detail.pin_code}
          />
        </dl>
      </div>
    </div>
  );
};

export default Address;
