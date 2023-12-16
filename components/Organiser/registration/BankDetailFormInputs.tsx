import { BankDetailFormValues, BankDetailInputProps } from "./BankDetailForm";

import React from "react";
import { RegistrationFormDataStore } from "@store/index";
import { UseFormRegister } from "react-hook-form";
import { banks } from "@constants/bank-list";

export const AccountNumber = ({
	label,
	name,
	register,
	required,
}: BankDetailInputProps) => {
	const { bankDetail } = RegistrationFormDataStore();
	return (
		<div>
			<label
				htmlFor="acc_number"
				className="block text-sm font-semibold leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2.5">
				<input
					{...register(name, { required })}
					type="text"
					name="acc_number"
					id="acc_number"
					defaultValue={bankDetail.acc_number}
					autoComplete="given-name"
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
};

export const IFSC = ({
	label,
	name,
	register,
	required,
}: BankDetailInputProps) => {
	const { bankDetail } = RegistrationFormDataStore();

	return (
		<div>
			<label
				htmlFor="ifsc"
				className="block text-sm font-semibold leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2.5">
				<input
					{...register(name, { required })}
					type="text"
					name="ifsc"
					id="ifsc"
					defaultValue={bankDetail.ifsc}
					autoComplete="family-name"
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
};

export const AccHolderName = ({
	label,
	name,
	register,
	required,
}: BankDetailInputProps) => {
	const { bankDetail } = RegistrationFormDataStore();

	return (
		<div className="sm:col-span-1">
			<label
				htmlFor="acc_name"
				className="block text-sm font-semibold leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2.5">
				<input
					{...register(name, { required })}
					type="text"
					name="acc_name"
					id="acc_name"
					defaultValue={bankDetail.acc_name}
					autoComplete="organization"
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
};

export const Branch = ({
	label,
	name,
	register,
	required,
}: BankDetailInputProps) => {
	const { bankDetail } = RegistrationFormDataStore();

	return (
		<div className="sm:col-span-1">
			<label
				htmlFor="branch"
				className="block text-sm font-semibold leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2.5">
				<input
					{...register(name, { required })}
					type="text"
					name="branch"
					id="branch"
					defaultValue={bankDetail.branch}
					autoComplete="branch"
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
};

export const UpiId = ({
	label,
	name,
	register,
	required,
}: BankDetailInputProps) => {
	const { bankDetail } = RegistrationFormDataStore();

	return (
		<div className="sm:col-span-1">
			<label
				htmlFor="upi_id"
				className="block text-sm font-semibold leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2.5">
				<input
					{...register(name, { required })}
					type="text"
					name="upi_id"
					id="upi_id"
					defaultValue={bankDetail.upi_id}
					autoComplete="upi_id"
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
};

export const PhoneNumber = ({
	label,
	name,
	register,
	required,
}: BankDetailInputProps) => {
	const { bankDetail } = RegistrationFormDataStore();

	return (
		<div className="sm:col-span-1">
			<label
				htmlFor="phone_number"
				className="block text-sm font-semibold leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2.5">
				<input
					{...register(name, { required })}
					type="text"
					name="phone_number"
					id="phone_number"
					defaultValue={bankDetail.phone_number}
					autoComplete="phone_number"
					className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
	);
};

const Selectbank = React.forwardRef<
	HTMLSelectElement,
	{ label: string } & ReturnType<UseFormRegister<BankDetailFormValues>>
>(({ onChange, onBlur, name, label }, ref) => {
	const { bankDetail } = RegistrationFormDataStore();
	return (
		<div className="sm:col-span-1">
			<label
				htmlFor="bank_name"
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2">
				<select
					ref={ref}
					onChange={onChange}
					onBlur={onBlur}
					id="bank_name"
					defaultValue={bankDetail.bank_name}
					name="bank_name"
					autoComplete="bank_name"
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
				>
					{banks.map((bank, idx) => (
						<option key={bank.id + idx}>{bank.name}</option>
					))}
				</select>
			</div>
		</div>
	);
});

Selectbank.displayName = "SelectBank";

export default Selectbank;
