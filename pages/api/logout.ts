import type { NextApiRequest, NextApiResponse } from "next";

import type { NextRequest } from "next/server";
import { serialize } from "cookie";

export default async function LogoutAPI(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// let cookie = req.cookies.clear();
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
