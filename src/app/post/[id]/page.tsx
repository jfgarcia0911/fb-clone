import React from "react";
import { db } from "@/firebase";
import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";
import Link from "next/link";
export default async function page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const postId = (await params).id;

	const docRef = db.collection("posts").doc(postId);
	const docSnap = await docRef.get();

	console.log(docSnap.data());
	return (
		<div className="bg-black w-full flex justify-center">
			<div className="relative h-screen w-1/2 cursor-pointer bg-white">
				{docSnap.exists ? (
					<Image
						src={docSnap.data()?.imgUrl || "/fallback-image.jpg"}
						alt="Profile"
						fill
						loading="lazy"
						sizes="(max-width: 768px) 100vw, 33vw"
						className=" object-contain"
					/>
				) : (
					<div> Post not found</div>
				)}
			</div>
			<Link href={`/`}>
				<div className="absolute top-5 left-5 rounded-full flex items-center  bg-gray-500  z-10">
					<RiCloseLine className="h-10 w-10  text-white" />
				</div>
			</Link>
		</div>
	);
}
