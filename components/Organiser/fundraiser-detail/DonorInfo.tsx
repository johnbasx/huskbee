import { Dialog, Transition } from "@headlessui/react";
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

import React from "react";
import { IconType } from "react-icons";

const DonorInfo = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
			>
				Donor info
			</button>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-10 inset-0 overflow-y-auto"
					onClose={setOpen}
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
								<div>
									<div className="text-center space-y-2">
										<DataDisplay Icon={UserIcon} content="Full Name" />
										<DataDisplay Icon={EnvelopeIcon} content="name@gmail.com" />
									</div>
								</div>
								<div className="mt-5 sm:mt-6" />
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
};

export default DonorInfo;

const DataDisplay = ({
	Icon,
	content,
}: {
	// Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	Icon: IconType;
	content: string;
}) => {
	return (
		<div className="flex">
			<Icon
				className="flex-shrink-0 w-6 h-6 text-blue-700"
				aria-hidden="true"
			/>
			<span className="ml-3 font-bold text-gray-900">{content}</span>
		</div>
	);
};
