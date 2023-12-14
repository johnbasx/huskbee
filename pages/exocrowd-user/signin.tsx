import React, { FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import AuthLayout from "@components/layout/AuthLayout";
import { GoogleLogin } from "react-google-login";
import { GoogleSvg } from "@components/common/GoogleSvg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const SignInPage = () => {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const loginNextServer = async (e: FormEvent) => {
		e.preventDefault();
		const data = {
			username: username,
			password: password,
		};
		// console.log(data);
		try {
			const response = await axios.post("/api/signin", data);
			// console.log(response.status);
			toast.success("Successfully Login");
			router.push("/");
		} catch (e: any) {
			console.log(e);
		}
	};

	const responseGoogle = (response: any) => {
		if (response.accessToken) {
			LoginWithGoogle(response.accessToken);
		}
		return response;
	};

	const LoginWithGoogle = async (token: string) => {
		const data = {
			access_token: token,
		};
		try {
			const response = await axios.post("/api/googleSignin", data);
			// console.table(response);
			toast.success("Login successful");
			router.push("/");
		} catch (e: any) {
			console.log(e);
		}
	};

	return (
		<>
			<Toaster />
			<AuthLayout>
				<div className="relative flex flex-col items-center justify-center flex-1 h-screen px-2 mx-auto max-w-screen-2xl">
					<div className="absolute w-full h-full pointer-events-none">
						<div className="relative w-full h-screen">
							<Image
								height={100}
								width={100}
								className="object-cover w-full h-full blur-3xl opacity-30"
								src="/logo/axewhy-colorful-logo.png"
								alt="Logo backdrop"
							/>
						</div>
					</div>
					<div className="flex w-full max-w-sm mx-auto overflow-hidden border shadow-lg rounded-3xl bg-slate-100/50 border-slate-100/50 backdrop-blur-lg lg:max-w-4xl">
						{/* Login image for Large Screens */}
						<div className="hidden bg-cover lg:block lg:w-1/2 bg-loginImage" />
						<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
							<div className="relative flex items-center justify-center w-full py-4">
								<Image
									alt="Exocrowd Logo"
									src="/exocrowd-logo.svg"
									width={1000}
									height={1000}
									className="object-contain h-12"
								/>
							</div>
							{/* <h2 className='text-2xl font-bold text-center text-black'>
                HuskBee
              </h2> */}
							<p className="text-base text-center">
								by <span className="tracking-tighter">Foxbeta</span>
							</p>
							<p className="mt-4 text-xl text-center text-gray-200">
								Welcome back!
							</p>

							<GoogleLogin
								clientId="829759909963-gqla1538rhsb9gj92b8dbfkl0oan496u.apps.googleusercontent.com"
								render={(renderProps) => (
									// <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>

									<button
										type="button"
										// onClick={() => loginWithGoogle()}
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
										className="flex items-center justify-center w-full mt-4 text-gray-200 transition-colors duration-300 transform border rounded-lg cursor-pointer border-zinc-700 bg-black hover:bg-zinc-900"
									>
										<div className="px-4 py-2">
											<GoogleSvg />
										</div>

										<span className="px-4 py-3 font-bold text-center">
											Log in with Google
										</span>
									</button>
								)}
								buttonText="Login with Google"
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy="single_host_origin"
							/>

							<div className="flex items-center justify-between mt-4">
								<span className="w-1/5 border-b border-gray-600 lg:w-1/4" />

								<a
									href="#!"
									className="text-sm font-semibold text-center text-gray-500 hover:underline"
								>
									or login with email
								</a>

								<span className="w-1/5 border-b border-gray-400 lg:w-1/4" />
							</div>

							<form
								onSubmit={(e) => {
									loginNextServer(e);
								}}
							>
								<div className="mt-4">
									<label
										className="block mb-2 text-sm font-medium text-gray-900"
										htmlFor="email"
									>
										Email
									</label>
									<input
										id="email"
										className="block w-full px-4 py-2 text-gray-900 border rounded-md border-gray-700/50 bg-zinc-700/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 autofill:bg-zinc-700/50"
										type="email"
										placeholder="e.g. your.name@xyz.com"
										onChange={(e) => setUsername(e.target.value)}
										required
									/>
								</div>

								<div className="mt-4">
									<div className="flex justify-start">
										<label
											className="block mb-2 text-sm font-medium text-gray-900"
											htmlFor="loggingPassword"
										>
											Password
										</label>
									</div>
									<input
										id="loggingPassword"
										className="w-full px-4 py-2 text-gray-900 border rounded-md border-gray-700/50 block bg-zinc-700/20 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring-blue-900 autofill:bg-zinc-700/50 placeholder:text-xs"
										type="password"
										hidden
										placeholder="Must have at least 8 characters"
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
									<div className="flex justify-end mt-2">
										<a
											href="#!"
											className="text-xs text-gray-500 hover:underline"
										>
											Forgot Password?
										</a>
									</div>
								</div>

								<div className="mt-4">
									<button
										// onClick={() => {
										//   loginNextServer();
										// }}
										type="submit"
										className="w-full rounded-lg px-4 py-3 font-semibold tracking-wide text-white transition-colors duration-300 transform bg-blue-600 cursor-pointer hover:bg-blue-700 focus:bg-blue-700 focus:ring-opacity-40 focus:border-blue-800 focus:outline-none focus:ring focus:ring-blue-700"
									>
										Login
									</button>
								</div>
							</form>

							<div className="flex items-center justify-center mt-4">
								<span className="text-xs text-gray-500">
									Don&apos;t have an account yet?{" "}
									<Link href="/signup">
										<span className="font-semibold text-black hover:underline">
											Sign up
										</span>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</AuthLayout>
		</>
	);
};

export default SignInPage;
