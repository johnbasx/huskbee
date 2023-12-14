import React, { useEffect } from "react";

import Address from "@components/admin/organisation-detail/Address";
import BankDetail from "@components/admin/organisation-detail/BankDetail";
import { ExOrganiserProfileProps } from "../../organiser/profile";
import Layout from "@components/admin/layout/Layout";
import { NextPageContext } from "next";
import OrganisationInfo from "@components/admin/organisation-detail/OrganisationInfo";
import { USER_BASE_URL } from "@constants/api-urls";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";

const OganiserDetail = ({
	token,
	organiser_detail,
}: {
	token: string;
	organiser_detail: ExOrganiserProfileProps;
}) => {
	const { setOfficeAdminToken } = orgTokenStore();

	useEffect(() => {
		setOfficeAdminToken(token);
	}, []);

	const active_bankDetail = organiser_detail.bank_detail.filter(
		(detail) => detail.default,
	);

	const active_address = organiser_detail.address.filter(
		(detail) => detail.default,
	);

	return (
		<Layout pageTitle="Organiser detail">
			<div className="space-y-6 mb-20 mx-auto max-w-7xl py-6">
				{organiser_detail ? (
					<OrganisationInfo
						detail={organiser_detail}
						title="Organisation Information"
					/>
				) : (
					<NoDetail message="No Detail" />
				)}
				{active_bankDetail[0] ? (
					<BankDetail title="Bank detail" detail={active_bankDetail[0]} />
				) : (
					<NoDetail message="No active bank account" />
				)}
				{active_address[0] ? (
					<Address title="Address detail" detail={active_address[0]} />
				) : (
					<NoDetail message="No active address" />
				)}
			</div>
		</Layout>
	);
};

export default OganiserDetail;

export async function getServerSideProps(context: NextPageContext) {
	const { organiserId } = context.query;
	const req = context.req;
	const res = context.res;
	const token = getCookie("admin_token", { req, res });
	const response = await fetch(
		`${USER_BASE_URL}organiser-detail/${organiserId}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	const organiser_detail = await response.json();

	if (!organiser_detail) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	console.log("Org_detail: ", organiser_detail);
	return {
		props: { token, organiser_detail },
	};
}

const NoDetail = ({ message }: { message: string }) => {
	return (
		<>
			<span className="text-black mt-4">{message}</span>
			<br />
		</>
	);
};
