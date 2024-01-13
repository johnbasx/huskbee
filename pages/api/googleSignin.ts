import type { NextApiRequest, NextApiResponse } from "next";

import { BASE_URL } from "@constants/api-urls";
import { serialize } from "cookie";

export default async function GoogleSigninAPI(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const access_token = req.body.access_token;

	const credential = {
		access_token,
	};

	const response = await fetch(
		`${BASE_URL}api/user/loginWithGoogle`,
		{
			method: "POST",
			body: JSON.stringify(credential),
			headers: { "Content-Type": "application/json" },
		},
	);

	const data = await response.json();

	if(response.status===409){
		res.status(409).json(data);
	}

	console.log("Google ", data, response.status);
	const date = new Date().toString();
	const d = new Date(date);
	const expire_date = addSeconds(d, data.expires_in).toString();

	res.setHeader("Set-Cookie", [
		serialize("user_token", data.access_token, {
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
