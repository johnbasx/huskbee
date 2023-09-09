import { BOOKING_BASE_URL } from "@constants/api-urls";
import { NextPageContext } from "next";
import React from "react";
import { getCookie } from "cookies-next";

const UpcomingEvents = () => {
  return <div>UpcomingEvents</div>;
};

export default UpcomingEvents;

export async function getServerSideProps(context: NextPageContext) {
  const req = context.req;
  const res = context.res;
  const login_status = getCookie("login", { req, res });
  const login = login_status ? login_status == true : false;

  const response = await fetch(BOOKING_BASE_URL + "upcoming-events");
  const events = await response.json();

  return {
    props: { login, events },
  };
}
