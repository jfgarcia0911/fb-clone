"use client";

import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ImFileVideo } from "react-icons/im";
import { MdPhotoLibrary } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import CreatPostIcon from "./CreatePostIcon";
import firebase from "firebase/compat/app";
import { db,storage } from "../../../firebase.js";

// export default function CreatePost() {
// 	const { data: session } = useSession();
// 	const inputRef = useRef(null);
// 	const filePickerRef = useRef(null);
// 	const [imageToPost, setImageToPost] = useState();

// 	const sendPost = (e) => {
// 		e.preventDefault();

// 		if (!inputRef.current.value) return;

// 		db.collection("posts").add({
// 			message: inputRef.current.value,
// 			name: session.user.name,
// 			email: session.user.email,
// 			image: session.user.image,
// 			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
// 		})
// 		.then(doc => {
// 			console.log(doc)
// 			if (imageToPost){
// 				const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')

// 				removeImage();

// 				uploadTask.on('state_change', null, error => console.error(error), () => {
// 					//when the upload completes
// 					storage.ref(`posts/${doc.id}` ).getDownloadURL().then(url => {
// 						db.collection('posts').doc(doc.id).set({
// 							postImage: url
// 						}, {merge: true})
// 					})
// 				})
// 			}
// 		})

// 		inputRef.current.value = "";
// 	};

// 	const addImageToPost = (e) => {
// 		console.log(e.target.files[0])
// 		const reader = new FileReader();
// 		if (e.target.files[0]) {
// 			reader.readAsDataURL(e.target.files[0]);
// 		}

// 		reader.onload = (readerEvent) => {
// 			setImageToPost(readerEvent.target.result);
// 		};
// 	};

// 	const removeImage = () => {
// 		setImageToPost(null);
// 		filePickerRef.current.value = null;
// 	};

// 	return (
// 		<div>
// 			<div className=" border-b border-gray-100 shadow-sm rounded-xl my-3  text-gray-700">
// 				<div className=" flex items-center mx-4  border-b py-3 border-gray-200">
// 					<div className="mr-2 ">
// 						<Image
// 							src={session?.user?.image || "/default-avatar.png"}
// 							alt="Profile"
// 							width={50}
// 							height={50}
// 							className="  rounded-full cursor-pointer transition duration-300 hover:brightness-95"
// 						/>
// 					</div>
// 					<form className="flex  w-full">
// 						<input
// 							ref={inputRef}
// 							type="text"
// 							placeholder={` What's on your mind, ${
// 								session?.user.name || "friend"
// 							}?`}
// 							className="bg-gray-100 p-2 text-lg w-full outline-none focus:outline-none  rounded-3xl font-medium  "
// 						/>
// 						<button hidden type="submit" onClick={sendPost}>
// 							Submit
// 						</button>
// 					</form>

// 					{imageToPost && (
// 						<div onClick={removeImage}>
// 							<Image
// 								className="h-10 object-contain"
// 								width={40} // Add appropriate width
// 								height={40}
// 								alt="pic"
// 								src={imageToPost}
// 							/>
// 						</div>
// 					)}
// 				</div>
// 				<div className="flex relative items-center justify-between my-2  mx-4 ">
// 					<div className="text-red-600 w-full ">
// 						<CreatPostIcon
// 							Icon={ImFileVideo}
// 							title={"Live video"}
// 						/>
// 					</div>
// 					<div
// 						onClick={() => filePickerRef.current.click()}
// 						className="text-green-600 w-full "
// 					>
// 						<CreatPostIcon
// 							Icon={MdPhotoLibrary}
// 							title={"Photo/video"}
// 						/>
// 						<input
// 							type="file"
// 							ref={filePickerRef}
// 							onChange={addImageToPost}
							
// 							hidden
// 						/>
// 					</div>
// 					<div className="text-red-400 w-full">
// 						<CreatPostIcon Icon={TfiVideoClapper} title={"Reel"} />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }


export default function CreatePost() {
	const { data: session } = useSession();
	const inputRef = useRef(null);
	const filePickerRef = useRef(null);
	const [imageToPost, setImageToPost] = useState();

	const sendPost = (e) => {
		e.preventDefault();

		if (!inputRef.current.value) return;

		db.collection("posts").add({
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		
		inputRef.current.value = "";
	};

	const  addImageToPost = async (e)  =>  {
		const file = e.target.files[0]
		console.log(file)
		const data = new FormData()
		data.set("file", file)

		const uploadRequest = await fetch('/api/files', {
			method: "POST",
			body: data,
		})
	};

	const removeImage = () => {
		setImageToPost(null);
		filePickerRef.current.value = null;
	};

	return (
		<div>
			<div className=" border-b border-gray-100 shadow-sm rounded-xl my-3  text-gray-700">
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
							ref={inputRef}
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

					{imageToPost && (
						<div onClick={removeImage}>
							<Image
								className="h-10 object-contain"
								width={40} // Add appropriate width
								height={40}
								alt="pic"
								src={imageToPost}
							/>
						</div>
					)}
				</div>
				<div className="flex relative items-center justify-between my-2  mx-4 ">
					<div className="text-red-600 w-full ">
						<CreatPostIcon
							Icon={ImFileVideo}
							title={"Live video"}
						/>
					</div>
					<div
						onClick={() => filePickerRef.current.click()}
						className="text-green-600 w-full "
					>
						<CreatPostIcon
							Icon={MdPhotoLibrary}
							title={"Photo/video"}
						/>
						<input
							type="file"
							ref={filePickerRef}
							onChange={addImageToPost}
							
							hidden
						/>
					</div>
					<div className="text-red-400 w-full">
						<CreatPostIcon Icon={TfiVideoClapper} title={"Reel"} />
					</div>
				</div>
			</div>
		</div>
	);
}

// 2:51