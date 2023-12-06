import Head from 'next/head'
import React, { ReactNode } from 'react'

const Layout = ({ pageTitle, children }: { pageTitle: string, children: ReactNode }) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    key="scale"
                />
                {/* <!-- this sets the color of url bar in Apple smatphones --> */}
                {/* <meta name="apple-mobile-web-app-status-bar" content="#0f172a" /> */}
                <meta name="apple-mobile-web-app-status-bar" content="#0f172a" />
            </Head>
            <div className="min-h-full bg-gray-100">{children}</div>
        </>
    )
}

export default Layout