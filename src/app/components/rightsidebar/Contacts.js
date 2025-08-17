import React from "react";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Contacts() {
	return (
		<div className="p-3 w-full ">
			<div className="flex items-center justify-between mb-5">
				<div className="text-gray-500 text-xl font-semibold ">
					Contacts
				</div>
				<div className="flex items-center gap-5 text-gray-500">
					<FaMagnifyingGlass className="h-4 w-4" />
					<HiOutlineDotsHorizontal className="h-5 w-5" />
				</div>
			</div>

			{/* Contacts List */}
			<div className="flex group cursor-pointer ml-3 mb-4 items-center">
				<div className="relative mr-4 h-9 w-9 ">
					<Image
						src="https://links.papareact.com/xql"
						fill
						alt="profile pic"
						sizes="32px"
						className="object-cover rounded-full"
					/>
				</div>
				<div>Name</div>
			</div>

			<div className="flex group cursor-pointer ml-3 mb-4 items-center">
				<div className="relative mr-4 h-9 w-9 ">
					<Image
						src="https://links.papareact.com/xql"
						fill
						alt="profile pic"
						sizes="32px"
						className="object-cover rounded-full"
					/>
				</div>
				<div>Name</div>
			</div>
			<div className="flex group cursor-pointer ml-3 mb-4 items-center">
				<div className="relative mr-4 h-9 w-9 ">
					<Image
						src="https://links.papareact.com/xql"
						fill
						alt="profile pic"
						sizes="32px"
						className="object-cover rounded-full"
					/>
				</div>
				<div>Name</div>
			</div>
			<div className="flex group cursor-pointer ml-3 mb-4 items-center">
				<div className="relative mr-4 h-9 w-9 ">
					<Image
						src="https://links.papareact.com/xql"
						fill
						alt="profile pic"
						sizes="32px"
						className="object-cover rounded-full"
					/>
				</div>
				<div>Name</div>
			</div>
		</div>
	);
}
