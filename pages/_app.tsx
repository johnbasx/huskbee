import "../styles/tailwind.css";
import "keen-slider/keen-slider.min.css";

import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import React from "react";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	// const [queryClient] = React.useState(() => new QueryClient());

	const [initialRenderComplete, setInitialRenderComplete] =
		React.useState<boolean>(false);

	useEffect(() => {
		setInitialRenderComplete(true);
	}, [setInitialRenderComplete]);

	if (!initialRenderComplete) {
		return <></>;
	}

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
				/>
			</Head>
			<NextNProgress
				height={6}
				color="#3b82f6"
				options={{ showSpinner: false }}
			/>
			{/* <QueryClientProvider client={queryClient}> */}
			<GoogleOAuthProvider clientId="829759909963-s89871an1chkkaplh3fmtjnvjaabs5fu.apps.googleusercontent.com">
				<Component {...pageProps} />
			</GoogleOAuthProvider>
			{/* </QueryClientProvider> */}
		</>
	);
}

// 829759909963-gqla1538rhsb9gj92b8dbfkl0oan496u.apps.googleusercontent.com

// curl -X POST -d "grant_type=convert_token&client_id=<django-oauth-generated-client_id>&client_secret=<django-oauth-generated-client_secret>&backend=google-oauth2&token=<google_token>" http://localhost:8000/auth/convert-token