import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { CROWDFUNDING_BASE_URL } from "@constants/api-urls";
import axios from "axios";
import { orgTokenStore } from "@store/index";
import Image from "next/image";

const UploadPhoto = ({ funraiserId }: { funraiserId: string }) => {
	const { token } = orgTokenStore();
	const [currentImage, setCurrentImage] = useState<File>();
	const [previewImage, setPreviewImage] = useState<string>("");
	const [progress, setProgress] = useState<number>(0);
	//   const [message, setMessage] = useState<string>("");

	const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files as FileList;
		setCurrentImage(selectedFiles?.[0]);
		setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
		setProgress(0);
	};

	const upload = async () => {
		setProgress(0);
		if (!currentImage) return;

		const form_data = new FormData();
		form_data.append("fundraiser", funraiserId);
		form_data.append("photo", currentImage);

		try {
			const response = await axios.post(
				`${CROWDFUNDING_BASE_URL}add-fundraiser-photo/`,
				form_data,
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);

			// console.log("fundraiser_response: ", response.data);

			// const fundraiser = fundraisers?.concat({
			//   id: response.data.id,
			//   title: response.data.title,
			//   goal: response.data.goal,
			//   description: response.data.description,
			//   open_status: response.data.open_status,
			//   created_at: response.data.created_at,
			//   organiser: response.data.organiser,
			// });

			// setFundraisers(fundraiser!);
			// setOpen(false);
			toast.success("Fundraiser photo added");

			// console.log(response);
		} catch (e) {
			toast.error("Cannot add fundraiser photo");
			console.log(e);
			// setOpen(false);
		}
	};

	return (
		<div>
			<Toaster />
			<div className="row">
				<div className="col-8">
					<label className="btn btn-default p-0">
						<input type="file" accept="image/*" onChange={selectImage} />
					</label>
				</div>

				<div className="col-4">
					<button
						type="button"
						className="btn btn-success btn-sm"
						disabled={!currentImage}
						onClick={upload}
					>
						Upload
					</button>
				</div>
			</div>

			{currentImage && progress > 0 && (
				<div className="progress my-3">
					<div
						className="progress-bar progress-bar-info"
						role="progressbar"
						aria-valuenow={progress}
						aria-valuemin={0}
						aria-valuemax={100}
						style={{ width: `${progress}%` }}
					>
						{progress}%
					</div>
				</div>
			)}

			{previewImage && (
				<div>
					<Image
						height={500}
						width={500}
						className="preview object-cover"
						src={previewImage}
						alt="Preview Image"
					/>
				</div>
			)}
		</div>
	);
};

export default UploadPhoto;
