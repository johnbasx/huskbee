import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", [
    serialize("access_token", "null", {
      httpOnly: true,
      path: "/",
    }),
    serialize("expires_on", "", {
      httpOnly: true,
      path: "/",
    }),
    serialize("login", "false", {
      httpOnly: true,
      path: "/",
    }),
  ]);
  res.status(200).json({ message: "Successfully logout" });
}
