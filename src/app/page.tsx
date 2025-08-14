"use client";

import Link from "next/link";
import Header from "./components/header/Header";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default  function Home() { 

	const {data: session} = useSession()

	
	return (
		<div className="">
			{/* Header */}
			<Header />


			{session?.user ? (
				<div className="">
					<div>Welcome {session.user.name}</div>
					<Link href="/user-info"> User Info </Link>
					<Image src={session?.user?.image || '/default-avatar.png'} width={30} height={30} alt={session.user.name ?? 'Avatar'}/>
				</div>
			)
			:( <div>User not signed in</div>)}
			<main>
				{/* Sidebar */}
				{/* Feed */}  
				{/* Widgets */}
			</main>
		</div>
	);
}




