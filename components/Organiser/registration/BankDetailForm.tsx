import {
	AccHolderName,
	AccountNumber,
	Branch,
	IFSC,
	PhoneNumber,
	UpiId,
} from "./BankDetailFormInputs";
import { Path, SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import React, { useState } from "react";
import {
	RegistrationFormDataStore,
	RegistrationFormsStore,
} from "@store/index";
import { Toaster, toast } from "react-hot-toast";

import Selectbank from "./BankDetailFormInputs";
import { USER_BASE_URL } from "@constants/api-urls";
import axios from "axios";

export interface BankDetailFormValues {
	acc_number: string;
	ifsc: string;
	acc_name: string;
	branch: string;
	upi_id: string;
	phone_number: string;
	bank_name: string;
}

export type BankDetailInputProps = {
	label: string;
	name: Path<BankDetailFormValues>;
	register: UseFormRegister<BankDetailFormValues>;
	required: boolean;
};

const BankDetailForm = () => {
	const [agreed, setAgreed] = useState(false);
	const { mainDetail, address, bankDetail, setBankDetail } =
		RegistrationFormDataStore();

	const { register, handleSubmit } = useForm<BankDetailFormValues>();
	const {
		setAddressFormStatus,
		setBankDetailFormStatus,
		setOrgDetailFormStatus,
	} = RegistrationFormsStore();

	const onSubmit: SubmitHandler<BankDetailFormValues> = async (data) => {
		// console.log(data);
		setBankDetail(data);

		const final_address = { ...address, default: true };
		const final_bank_detail = {
			...bankDetail,
			default: true,
			phone_number: `+91${bankDetail.phone_number}`,
		};

		const final_main_detail = {
			...mainDetail,
			logo: mainDetail?.logo[0],
			phone: `+91${mainDetail.phone}`,
		};

		const last_data = {
			...final_main_detail,
			address: final_address,
			bank_detail: final_bank_detail,
		};
		console.log("last_data: ", last_data);

		try {
			const response = await axios.post(
				`${USER_BASE_URL}register-organiser`,
				last_data,
			);

			console.log(response);
			toast.success("Partners assigned to the event");
		} catch (e) {
			toast.error("Cannot assigned partner");
			console.log(e);
		}
	};
	const PrevStep = () => {
		setOrgDetailFormStatus(false);
		setAddressFormStatus(true);
		setBankDetailFormStatus(false);
	};

	return (
		<>
			<Toaster />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="mx-auto mt-16 max-w-5xl sm:mt-20"
			>
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<Selectbank label="Bank" {...register("bank_name")} />

					<AccountNumber
						label="A/C number"
						name="acc_number"
						register={register}
						required
					/>
					<IFSC label="IFSC" name="ifsc" register={register} required />
					<AccHolderName
						label="Account holder name"
						name="acc_name"
						register={register}
						required
					/>

					{/* <Selectbank label="Bank" name="bank_name" register={register} required/> */}

					<Branch label="Branch" name="branch" register={register} required />
					<UpiId label="UPI" name="upi_id" register={register} required />
					<PhoneNumber
						label="Phone number"
						name="phone_number"
						register={register}
						required
					/>

					{/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? "bg-indigo-600" : "bg-gray-200",
                "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? "translate-x-3.5" : "translate-x-0",
                  "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our{" "}
            <a href="#" className="font-semibold text-indigo-600">
              privacy&nbsp;policy
            </a>
            .
          </Switch.Label>
        </Switch.Group> */}
				</div>
				<div className="flex justify-between mt-10 space-x-4">
					<button
						type="button"
						onClick={() => {
							PrevStep();
						}}
						className="cursor-pointer block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Prev
					</button>
					<button
						type="submit"
						className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Save
					</button>
				</div>
			</form>
		</>
	);
};

export default BankDetailForm;
