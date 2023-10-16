import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-gray-50 antialiased">
      <Head>
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        {/* <!-- link manifest.json --> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <!-- this sets the color of url bar  --> */}
        <meta name="theme-color" content="#000000" key="theme-color" />
        {/* <link rel="manifest" href="/site.webmanifest"></link> */}
        {/* <!-- this sets logo in Apple smatphones. --> */}
        <link rel="apple-touch-icon" href="/manifest/maskable_icon.png" />

        {/* Google Font - Albert Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <body className="bg-gradient-to-b from-black via-slate-900 to-black text-slate-100 antialiased"> */}
      <body className=" text-slate-100 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
