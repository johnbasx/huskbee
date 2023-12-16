import React from "react";
import { RegistrationFormsStore } from "@store/index";
import Link from "next/link";

const steps = [
	{ id: "Step 1", name: "organisation detail", href: "#", status: "complete" },
	{ id: "Step 2", name: "Address", href: "#", status: "current" },
	{ id: "Step 3", name: "Bank Detail", href: "#", status: "upcoming" },
];

const ProgressStepsBar = () => {
	const {
		setOrgDetailFormStatus,
		setAddressFormStatus,
		setBankDetailFormStatus,
	} = RegistrationFormsStore();

	const ChooseFormHandler = (formId: string) => {
		if (formId === "Step 1") {
			setOrgDetailFormStatus(true);
			setAddressFormStatus(false);
			setBankDetailFormStatus(false);
		} else if (formId === "Step 2") {
			setOrgDetailFormStatus(false);
			setAddressFormStatus(true);
			setBankDetailFormStatus(false);
		} else if (formId === "Step 3") {
			setOrgDetailFormStatus(false);
			setAddressFormStatus(false);
			setBankDetailFormStatus(true);
		}
	};
	return (
		<nav aria-label="Progress">
			<ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
				{steps.map((step) => (
					<li key={step.name} className="md:flex-1">
						{step.status === "complete" ? (
							<Link
								href={step.href}
								className="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
								onClick={() => ChooseFormHandler(step.id)}
							>
								{/* <div className="w-1/2 h-1 bg-black"></div> */}
								<span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">
									{step.id}
								</span>
								<span className="text-sm text-gray-900 font-medium">
									{step.name}
								</span>
							</Link>
						) : step.status === "current" ? (
							<Link
								href={step.href}
								className="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
								aria-current="step"
								onClick={() => ChooseFormHandler(step.id)}
							>
								<span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase">
									{step.id}
								</span>
								<span className="text-sm font-medium text-gray-900">
									{step.name}
								</span>
							</Link>
						) : (
							<Link
								href={step.href}
								className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
								onClick={() => ChooseFormHandler(step.id)}
							>
								<span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
									{step.id}
								</span>
								<span className="text-sm font-medium text-gray-900">
									{step.name}
								</span>
							</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default ProgressStepsBar;
