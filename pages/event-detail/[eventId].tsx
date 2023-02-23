import { NextPageContext } from "next";
import React from "react";
import cookie from "cookie";

// import { cookies } from "next/headers";

const EventDetail = () => {
  return <div>EventDetail</div>;
};

export default EventDetail;

export async function getServerSideProps(context: NextPageContext) {
  const { eventId } = context.query;
  //   console.log("From Server: ", context);
  console.log(
    "cookie ",
    cookie.parse(
      context.req ? context.req.headers.cookie || "" : document.cookie
    )
  );

  return {
    props: { eventId },
  };
}
