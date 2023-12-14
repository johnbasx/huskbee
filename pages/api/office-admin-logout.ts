import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";

export default async function OfficeAdminLogoutAPI(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	res.setHeader("Set-Cookie", [
		serialize("admin_token", "null", {
			httpOnly: true,
			path: "/",
		}),
		serialize("admin_token_expires_on", "", {
			httpOnly: true,
			path: "/",
		}),
		serialize("admin_login", "false", {
			httpOnly: true,
			path: "/",
		}),
	]);
	res.status(200).json({ message: "Successfully logout" });
}
