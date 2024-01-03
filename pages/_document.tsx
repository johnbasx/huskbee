import { Head, Html, Main, NextScript } from "next/document";

import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="en" className="bg-gray-50 antialiased font-nunito">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				{/* <!-- this sets the color of url bar  --> */}
				{/* <meta name="theme-color" content="#000000" key="theme-color" /> */}
				{/* <link rel="manifest" href="/site.webmanifest"></link> */}
				{/* <!-- this sets logo in Apple smatphones. --> */}
				{/* <link rel='apple-touch-icon' href='/manifest/maskable_icon.png' /> */}

				{/* Google Font - Albert Sans */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
			</Head>
			{/* <body className="bg-gradient-to-b from-black via-slate-900 to-black text-slate-100 antialiased"> */}
			<body>
				<Main />
				<NextScript />
				<Script src="https://sdk.cashfree.com/js/v3/cashfree.js" />
			</body>
		</Html>
	);
}
