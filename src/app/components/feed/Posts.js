import React from "react";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { db } from "@/firebase";
import Link from "next/link";

export default function Posts() {
	// const [isVisible, setIsVisible] = useState(true)

	const deletePost = async (postId) => {
		try {
			await db.collection("posts").doc(postId).delete();
			console.log("Post deleted successfully");
		} catch (error) {
			console.error("Error deleting post: ", error);
		}
	};

	const [realtimePosts, loading, error] = useCollection(
		db.collection("posts").orderBy("timestamp", "desc")
	);

	if (loading) return <p>Loading posts...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!realtimePosts) return <p>No posts found.</p>;

	return (
		<div>
			{realtimePosts.docs.map((post) => (
				<div key={post.id} className={`relative `}>
					{/* Upper Part */}
					<div className="flex relative justify-between p-3">
						<div className="flex items-center ">
							<div className=" border-2 rounded-full border-blue-500 mr-3">
								<Image
									src={post.data().image}
									alt="Profile"
									width={50}
									height={50}
									className="rounded-full h-10 w-10"
								/>
							</div>
							<div>
								<div className="flex flex-col leading-none ">
									<span className="text-lg font-xl capitalize">
										{post.data().name}
									</span>
									<span className="text-sm font-small text-gray-500">
										<span className="text-md text-gray-500">
											{new Intl.DateTimeFormat("en-US", {
												month: "long",
												day: "numeric",
												hour: "numeric",
												minute: "2-digit",
												hour12: true,
											})
												.format(
													post
														.data()
														.timestamp?.toDate()
												)
												.replace(",", " at")}
										</span>
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-3 text-gray-500">
							<HiOutlineDotsHorizontal className="h-7 w-7" />
							<RiCloseLine onClick={() => deletePost(post.id)} className="h-7 w-7" />
						</div>
					</div>
					<div className="">
						<p className="p-3 pt-0">{post.data().message}</p>
					</div>
					{/* Middle Part */}
					<Link href={`./post/${post.id}`}>
					<div className="relative h-140 w-full cursor-pointer">
						<Image
							src={post.data().imgUrl || "/fallback-image.jpg"}
							alt="Profile"
							fill
							loading="lazy"
							sizes="(max-width: 768px) 100vw, 33vw"
							className=" object-cover"
						/>
					</div>
					</Link>

					{/* Bottom Part */}
					<div className="border-y  border-gray-400 my-5 mx-3 py-2">
						<div className="flex items-center justify-evenly relative text-gray-500">
							<div className="flex text-lg hover:bg-gray-100 w-full py-2 rounded-xl justify-center">
								<SlLike className="h-6 w-6 mr-2" />
								<p> Like</p>
							</div>
							<div className="flex text-lg hover:bg-gray-100 w-full py-2 rounded-xl justify-center">
								<FaRegCommentAlt className="h-6 w-6 mr-2" />
								<p> Comment</p>
							</div>
							<div className="flex text-lg hover:bg-gray-100 w-full py-2 rounded-xl justify-center">
								<FaRegShareFromSquare className="h-6 w-6 mr-2" />
								<p> Share</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
