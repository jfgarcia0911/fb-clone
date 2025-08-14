"use client";

import Link from "next/link";
import Header from "./components/header/Header";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Sidebar from './components/sidebar/Sidebar'


export default  function Home() { 

	const {data: session} = useSession()

	
	return (
		<div className="">
			{/* Header */}
			<Header />


			<main>
				{/* Sidebar */}
				<Sidebar/>
				{/* Feed */}  
				{/* Widgets */}
			</main>
		</div>
	);
}




