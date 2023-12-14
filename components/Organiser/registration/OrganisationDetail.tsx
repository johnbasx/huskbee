import {
	About,
	Email,
	FullName,
	OrganisationLogo,
	OrganisationName,
	PhoneNumber,
	UserName,
} from "./OrgDetailFormInputs";
import {
	FieldError,
	Path,
	SubmitHandler,
	UseFormRegister,
	useForm,
} from "react-hook-form";
import React, { useState } from "react";
import {
	RegistrationFormDataStore,
	RegistrationFormsStore,
} from "@store/index";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import OrganisationType from "./OrgDetailFormInputs";
import { Switch } from "@headlessui/react";
import { error } from "console";

export interface OrgDetailFormValues {
	username: string;
	name: string;
	organisation_name: string;
	email: string;
	phone: string;
	logo: File[] | string;
	description: string;
	organiser_type: string;
}

export type InputProps = {
	label: string;
	name: Path<OrgDetailFormValues>;
	register: UseFormRegister<OrgDetailFormValues>;
	required: boolean;
	error: FieldError | undefined;
};

const OrganisationDetail = () => {
	const [agreed, setAgreed] = useState(false);
	const { setMainDetail } = RegistrationFormDataStore();
	const {
		setAddressFormStatus,
		setBankDetailFormStatus,
		setOrgDetailFormStatus,
	} = RegistrationFormsStore();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<OrgDetailFormValues>();

	const onSubmit: SubmitHandler<OrgDetailFormValues> = (data) => {
		console.log("Test", data);

		setMainDetail(data);

		setOrgDetailFormStatus(false);
		setAddressFormStatus(true);
		setBankDetailFormStatus(false);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto mt-16 max-w-5xl sm:mt-20"
		>
			<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<UserName
					error={errors.username}
					label="Username"
					name="username"
					register={register}
					required
				/>

				<Email
					error={errors.email}
					label="Email"
					name="email"
					register={register}
					required
				/>

				<FullName
					error={errors.name}
					label="Full name"
					name="name"
					register={register}
					required
				/>
				<OrganisationName
					error={errors.organisation_name}
					label="Organisation name"
					name="organisation_name"
					register={register}
					required
				/>
				{/* <Email
          error={errors.email}
          label="Email"
          name="email"
          register={register}
          required
        /> */}
				<PhoneNumber
					error={errors.phone}
					label="Phone number"
					name="phone"
					register={register}
					required
				/>
				<OrganisationLogo
					error={errors.logo}
					label="organisation logo"
					name="logo"
					register={register}
					required
				/>
				<OrganisationType
					label="Organisation Type"
					{...register("organiser_type")}
				/>
				<About
					error={errors.description}
					label="About"
					name="description"
					register={register}
					required
				/>
			</div>
			<div className="flex justify-between mt-10 space-x-4">
				<button
					type="submit"
					className="  block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Next
				</button>
			</div>
		</form>
	);
};

export default OrganisationDetail;
