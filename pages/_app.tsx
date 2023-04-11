import "../styles/tailwind.css";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  // useEffect(() => {
  //   const importTE = async () => {
  //     (await import("tw-elements")).default;
  //   };
  //   importTE();
  // }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script> */}
        <GoogleOAuthProvider clientId="829759909963-gqla1538rhsb9gj92b8dbfkl0oan496u.apps.googleusercontent.com">
          <>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
              />
            </Head>
            <Component {...pageProps} />
          </>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </>
  );
}
