import React from "react";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";

export default function Stories() {
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

	return (
		<>
			{realtimePosts.docs.map((story) => (
				<div
					key={story.id}
					className="relative h-56 w-32 flex-shrink-0  overflow-hidden cursor-pointer  rounded-2xl mr-3"
				>
					<Image
                    
						src={story.data().imgUrl}
						fill
						alt="story image"
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-cover transition-transform duration-300 hover:brightness-80 hover:scale-105  "
					/>
					<div className="absolute z-20 h-8 w-8 top-3 left-3 border-2 border-blue-500 rounded-full">
						<Image
                        onClick={() => deletePost(story.id)}
							src={story.data().image || '/fallback-image.jpg'}
							fill
							alt="profile pic"
							sizes="32px"
							className="rounded-full object-cover "
						/>
					</div>
					<div className="absolute z-20 text-white bottom-3 left-3">
						<h1>{story.data().name}</h1>
					</div>
				</div>
			))}
		</>
	);
}
