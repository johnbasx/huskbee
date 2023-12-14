import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export interface LayoutProps {
	children: React.ReactNode;
	title: string;
}

const Layout = ({
	children,
	title = "Exocrowd | We are stronger united",
}: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<main className={"min-h-screen bg-neutral-50 font-nunito"}>
				<Navbar />
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
