import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";
import { BASE_URL } from "@constants/api-urls";

export default async function OfficeAdminSigninAPI(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const username = req.body.username;
	const password = req.body.password;

	const credential = {
		username,
		password,
	};

	const response = await fetch(`${BASE_URL}api/user/office-admin-login`, {
		method: "POST",
		body: JSON.stringify(credential),
		headers: { "Content-Type": "application/json" },
	});
	const data = await response.json();

	const date = new Date().toString();
	const d = new Date(date);
	const expire_date = addSeconds(d, data.expires_in).toString();

	//   let cookie = req.cookies.clear();

	res.setHeader("Set-Cookie", [
		serialize("admin_token", data.access_token, {
			httpOnly: true,
			path: "/",
			maxAge: 31536000,
		}),
		serialize("admin_token_expires_on", expire_date.toString(), {
			httpOnly: true,
			path: "/",
			maxAge: 31536000,
		}),
		serialize("admin_login", "true", {
			httpOnly: true,
			path: "/",
			maxAge: 31536000,
		}),
	]);
	res.status(200).json({ user: data.username });
}

function addSeconds(date: Date, seconds: number) {
	date.setSeconds(date.getSeconds() + seconds);
	return date;
}
