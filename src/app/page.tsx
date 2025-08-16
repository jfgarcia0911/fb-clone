"use client";

import Link from "next/link";
import Header from "./components/header/Header";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Sidebar from './components/sidebar/Sidebar'
import Feed from "./components/feed/Feed"

export default  function Home() { 

	const {data: session} = useSession()

	
	return (
		<div className="">
			{/* Header */}
			<Header />

			<main>
				<div className="grid grid-cols-5">
					{/* Sidebar */}
					<div className="bg-pink-300 hidden md:flex ">
						<Sidebar/>	
					</div> 
					{/* Feed */} 
					<div className="bg-gray-300 col-span-5 md:col-span-4 lg:col-span-3 grid justify-center ">
						<Feed/>	
					</div> 
					<div className="bg-blue-300 hidden lg:flex"></div> 
					{/* Widgets */}
				</div>
			</main>
		</div>
	);
}




