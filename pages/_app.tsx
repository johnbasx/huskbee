import "../styles/tailwind.css";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
