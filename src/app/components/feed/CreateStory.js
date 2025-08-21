import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSession } from "next-auth/react";
import firebase from "firebase/compat/app";
import { db } from "../../../firebase.js";
import { BsPlusLg } from "react-icons/bs";
import { useCollection } from "react-firebase-hooks/firestore";

export default function CreateStory() {
	const { data: session } = useSession();
	const createStoryRef = useRef();
	const [isPosting, setIsPosting] = useState(false);
	const storiesContainerRef = useRef(null);

	const deletePost = async (postId) => {
		try {
			await db.collection("stories").doc(postId).delete();
			console.log("Post deleted successfully");
		} catch (error) {
			console.error("Error deleting post: ", error);
		}
	};

	const [realtimePosts, loading, error] = useCollection(
		db.collection("stories").orderBy("timestamp", "desc")
	);

	if (loading) return <p>Loading posts...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!realtimePosts) return <p>No posts found.</p>;

	const handleImage = async (e) => {
		setIsPosting(true);
		const file = e.target.files[0];

		// Post image to Pinata and get Url
		const data = new FormData();
		data.set("file", file);
		const response = await fetch("/api/files", {
			method: "POST",
			body: data,
		});

		const imgUrl = await response.json();

		db.collection("stories").add({
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			imgUrl: imgUrl,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setIsPosting(false);
		createStoryRef.current.value = "";
	};

	// Scroll functions for arrows
	const scrollLeft = () => {
		if (storiesContainerRef.current) {
			storiesContainerRef.current.scrollBy({ left: -128, behavior: 'smooth' });
		}
		console.log(scrollLeft)
	};

	const scrollRight = () => {
		if (storiesContainerRef.current) {
			storiesContainerRef.current.scrollBy({ left: 140, behavior: 'smooth' });
		}

	};

	return (
		<div className="relative flex items-center">
			{/* Create Story */}
			{isPosting ? (
				<div className="relative h-56 w-32 flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl shadow-lg border-2 border-blue-300 overflow-hidden mr-3">
					{/* Background shimmer effect */}
				<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>

 					{/* Pulsing text */}
 					<div className="flex flex-col items-center justify-center z-10">
 						<div className="animate-bounce mb-2"></div>
 						<span className="text-blue-800 font-semibold animate-pulse">
 							Posting...
 						</span>/					</div>
 				</div>
			) : (
				<div
					onClick={() => createStoryRef.current.click()}
					className="flex flex-col relative hide-scrollbar shadow-lg cursor-pointer mr-3"
				>
					<div className="relative h-56 w-32 flex-shrink-0 overflow-hidden rounded-t-2xl">
						<div className="relative h-42 w-full">
							<Image
								src={session.user.image}
								fill
								alt="Your story"
								sizes="(max-width: 768px) 100vw, 33vw"
								className="object-cover transition-transform duration-300 hover:brightness-80 hover:scale-105"
							/>
						</div>

						<div className="absolute h-10 w-10 top-37 bg-white flex items-center justify-center left-12 border-white-4 rounded-full">
							<BsPlusLg className="h-8 w-8 z-30 text-white bg-blue-500 rounded-full" />
						</div>
						<div className="flex absolute top-44 left-8 z-30 items-center justify-center h-14 shadow-xl rounded-b-2xl">
							<p className="text-sm font-semibold">
								Create Story
							</p>
						</div>
						<input
							ref={createStoryRef}
							type="file"
							hidden
							onChange={handleImage}
						/>
					</div>
				</div>
			)}

			{/* Arrow Left */}
			<button 
				onClick={scrollLeft}
				className="absolute z-40 left-3 bg-white rounded-full p-2 cursor-pointer shadow-md"
			>
				<FaChevronLeft className="h-5 w-5 text-gray-500" />
			</button>

			{/* Stories Container */}
			<div 
				ref={storiesContainerRef}
				className="flex space-x-3 overflow-x-auto overflow-y-hidden hide-scrollbar"
			>
				{realtimePosts.docs.map((story) => (
					<div
						key={story.id}
						className="relative h-56 w-32 flex-shrink-0 overflow-hidden cursor-pointer rounded-2xl"
					>
						<Image
							src={story.data().imgUrl}
							fill
							alt="story image"
							sizes="(max-width: 768px) 100vw, 33vw"
							className="object-cover transition-transform duration-300 hover:brightness-80 hover:scale-105"
						/>
						<div className="absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full">
							<Image
								onClick={() => deletePost(story.id)}
								src={story.data().image || "/fallback-image.jpg"}
								fill
								alt="profile pic"
								sizes="32px"
								className="rounded-full object-cover"
							/>
						</div>
						<div className="absolute z-20 text-white bottom-3 left-3">
							<h1 className="text-sm font-medium truncate max-w-[80px]">{story.data().name}</h1>
						</div>
					</div>
				))}
			</div>

			{/* Arrow Right */}
			<button 
				onClick={scrollRight}
				className="absolute z-40 right-3 bg-white rounded-full p-2 cursor-pointer shadow-md"
			>
				<FaChevronRight className="h-5 w-5 text-gray-500" />
			</button>
		</div>
	);
}