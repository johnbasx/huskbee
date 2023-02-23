import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
 
  const access_token = req.body.access_token;

  const credential = {
    access_token
  };

  const response = await fetch("http://127.0.0.1:8000/api/user/loginWithGoogle", {
    method: "POST",
    body: JSON.stringify(credential),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  let date = new Date().toString();
  const d = new Date(date);
  const expire_date = addSeconds(d, data.expires_in).toString();

  res.setHeader("Set-Cookie", [
    serialize("access_token", data.access_token, {
      httpOnly: true,
      // secure: true,
      path: "/",
    }),
    serialize("expires_on", expire_date.toString(), {
      httpOnly: true,
      // secure: true,
      path: "/",
    }),
    serialize("login", "true", {
      httpOnly: true,
      // secure: true,
      path: "/",
    }),
  ]);
  res.status(200).json({ message: "Successfully set cookie" });
}

function addSeconds(date: Date, seconds: number) {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}
