"use client";

import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ImFileVideo } from "react-icons/im";
import { MdPhotoLibrary } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaLock } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import CreatPostIcon from "./CreatePostIcon";
import firebase from "firebase/compat/app";
import { db } from "../../../firebase.js";
import { IoClose } from "react-icons/io5";

import Modal from "../../ui/Modal";

export default function CreatePost() {
	const { data: session } = useSession();
	const inputRef = useRef(null);
	const filePickerRef = useRef(null);
	const [imageToPost, setImageToPost] = useState();
	const [open, setOpen] = useState(false);
	const [file, setFile] = useState({});
	const [isUploading, setIsUpoading] = useState(false);

	

	const handleConfirm = async (e) => {
		setIsUpoading(true);
		e?.preventDefault(); // Safe even if not from form event
		await addImageToPost(e);
		await sendPost(e);
	};

	const sendPost = (imgUrl) => {
		

		if (!inputRef.current.value) return;

		db.collection("posts").add({
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			imgUrl: imgUrl,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		inputRef.current.value = "";
	};

	const handleImage = (e) => {
		// Image Reader
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readerEvent) => {
			setImageToPost(readerEvent.target.result);
		};
		const file = e.target.files[0];
		setFile(file);
		console.log(file);
	};

	const addImageToPost = async () => {
		const data = new FormData();
		data.set("file", file);

		const response = await fetch("/api/files", {
			method: "POST",
			body: data,
		});

		const signedUrl = await response.json();
		sendPost(signedUrl);

		setIsUpoading(false);
		setOpen(false);
		removeImage();
	};

	const removeImage = () => {
		setImageToPost(null);
		if (filePickerRef.current) {
			filePickerRef.current.value = ""; // Reset the file input
		}
	};

	return (
		<div className="relative">
			<div className=" border-b relative border-gray-100 shadow-sm rounded-xl   text-gray-700">
				<div className=" flex items-center mx-4  border-b py-3 border-gray-200">
					<div className="mr-2 ">
						<Image
							src={session?.user?.image || "/default-avatar.png"}
							alt="Profile"
							width={50}
							height={50}
							className="  rounded-full cursor-pointer transition duration-300 hover:brightness-95"
						/>
					</div>
					<form className="flex  w-full">
						<input
							onClick={() => setOpen(true)}
							type="text"
							placeholder={` What's on your mind, ${
								session?.user.name || "friend"
							}?`}
							className="bg-gray-100 p-2 text-lg w-full outline-none focus:outline-none  rounded-3xl font-medium  "
						/>
						<button hidden type="submit" onClick={sendPost}>
							Submit
						</button>
					</form>
				</div>
				<div className="flex relative items-center justify-between my-2  mx-4 ">
					<div className="text-red-600 w-full ">
						<CreatPostIcon
							Icon={ImFileVideo}
							title={"Live video"}
						/>
					</div>

					<div
						onClick={() => setOpen(true)}
						// onClick={() => filePickerRef.current?.click()}
						className="text-green-600 w-full cursor-pointer"
					>
						<CreatPostIcon
							Icon={MdPhotoLibrary}
							title={"Photo/video"}
						/>
						<input
							type="file"
							ref={filePickerRef}
							onChange={handleImage}
							hidden
						/>
					</div>
					<div className="text-red-400 w-full">
						<CreatPostIcon Icon={TfiVideoClapper} title={"Reel"} />
					</div>
				</div>
			</div>

			{/* Create Post Modal */}

			<Modal
				isOpen={open}
				onClose={() => {
					setImageToPost(null);
					setOpen(false);
				}}
			>
				<div className=" w-140 max-w-[600px]  ">
					<div className="flex justify-center">
						<h1 className="text-xl font-bold mb-4">Create Post</h1>
					</div>
					<div>
						<div className=" flex items-center mx-1  border-b py-1 border-gray-200">
							<div className="mr-2 ">
								<Image
									src={
										session?.user?.image ||
										"/default-avatar.png"
									}
									alt="Profile"
									width={50}
									height={50}
									className="  rounded-full cursor-pointer transition duration-300 hover:brightness-95"
								/>
							</div>
							<div>
								<h1 className="capitalize font-medium">
									{session?.user?.name}
								</h1>
								<div className="flex ml-3 items-center group cursor-pointer">
									<FaLock />
									<span className="mx-1  font-medium text-sm">
										Only me
									</span>
									<FaCaretDown className="" />
								</div>
							</div>
						</div>
					</div>
					<div>
						<form className="flex  w-full">
							<input
								ref={inputRef}
								type="text"
								placeholder={` What's on your mind, ${
									session?.user.name || "friend"
								}?`}
								className="h-15 p-2 text-lg w-full outline-none focus:outline-none  text-wrap line-clamp-2 rounded-3xl text-md  "
							/>
						</form>
					</div>

					{imageToPost && (
						<div className="relative h-110 w-full ">
							<Image
								src={imageToPost}
								alt="Profile"
								fill
								sizes="(max-width: 800px) 100vw, 33vw"
								className=" object-contain rounded-xl border border-gray-300"
								onClick={removeImage}
							/>
							<div className="group cursor-pointer">
								<IoClose
									className="absolute p-1 rounded-full bg-white right-3 top-3 h-8 w-8 text-gray-500"
									onClick={removeImage}
								/>
							</div>
						</div>
					)}
					<div className="flex items-center justify-between border rounded-lg p-1 mt-3 border-gray-300">
						<div>
							<h1 className="ml-2 font-medium">
								Add to your post
							</h1>
						</div>
						<div
							onClick={() => filePickerRef.current.click()}
							className="text-green-600 cursor-pointer "
						>
							<CreatPostIcon Icon={MdPhotoLibrary} />
							<input
								type="file"
								ref={filePickerRef}
								onChange={handleImage}
								disabled={isUploading}
								hidden
							/>
						</div>
					</div>
					<button
						onClick={handleConfirm}
						className="cursor-pointer w-full flex justify-center bg-blue-600 rounded-lg text-white p-1 mt-3 font-medium"
					>
						{isUploading ? "Uploading..." : "Confirm"}
					</button>
				</div>
			</Modal>
		</div>
	);
}
