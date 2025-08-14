"use server";
import Link from "next/link";
import Header from "./components/header/Header";
import { auth } from "@/auth";
import Image from "next/image";
export default async function Home() { 
	const session = await auth()
	console.log(session) 

	
	return (
		<div className="">
			{/* Header */}
			<Header session={session}/>


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


// export async function getServerSideProps(context) {
// 	//Get the user
// 	const session = await getSession(context);
// 	return {
// 		props: {
// 			session, // Will be passed to the page component as props
// 		},
// 	};
// }


