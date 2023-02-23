import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const username = req.body.username;
  const password = req.body.password;

  const credential = {
    username,
    password,
  };

  const response = await fetch("http://127.0.0.1:8000/api/user/login", {
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
