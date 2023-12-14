import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function OrganisationLogoutAPI(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// let cookie = req.cookies.clear();
	res.setHeader("Set-Cookie", [
		serialize("org_token", "null", {
			httpOnly: true,
			path: "/",
		}),
		serialize("org_token_expires_on", "", {
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
