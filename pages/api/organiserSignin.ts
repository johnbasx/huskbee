import type { NextApiRequest, NextApiResponse } from "next";

import { serialize } from "cookie";
import { BASE_URL } from "@constants/api-urls";

export default async function OrganiserSigninAPI(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const username = req.body.username;
	const password = req.body.password;

	const credential = {
		username,
		password,
	};

	let data;
	try {
		const response = await fetch(`${BASE_URL}api/user/organiser-login`, {
			method: "POST",
			body: JSON.stringify(credential),
			headers: { "Content-Type": "application/json" },
		});
		data = await response.json();
	} catch (e: any) {
		console.log("error: ", e);
	}

	const date = new Date().toString();
	const d = new Date(date);
	const expire_date = addSeconds(d, data.expires_in).toString();

	res.setHeader("Set-Cookie", [
		serialize("org_token", data.access_token, {
			httpOnly: true,
			path: "/",
			maxAge: 2629800000,
		}),
		serialize("org_token_expires_on", expire_date.toString(), {
			httpOnly: true,
			path: "/",
			maxAge: 2629800000,
		}),
		serialize("Org_login", "true", {
			httpOnly: true,
			path: "/",
			maxAge: 2629800000,
		}),
	]);
	res.status(200).json({ user: data.username });
}

function addSeconds(date: Date, seconds: number) {
	date.setSeconds(date.getSeconds() + seconds);
	return date;
}
