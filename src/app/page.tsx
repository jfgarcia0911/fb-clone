"use client";

import Header from "./components/header/Header";
import Sidebar from './components/sidebar/Sidebar'
import Feed from "./components/feed/Feed"
import RightsideBar from './components/rightsidebar/RightsideBar'
export default  function Home() { 


	
	return (
		<div className="">
			{/* Header */}
			<Header />

			<main>
				<div className="grid bg-gray-100 grid-cols-5">
					{/* Sidebar */}
					<div className=" hidden lg:flex ">
						<Sidebar/>	
					</div> 
					{/* Feed */} 
					<div className=" col-span-5 md:col-span-5 lg:col-span-3 grid justify-center ">
						<Feed/>	
					</div>
					{/* RightSidebar */}
					<div className=" hidden xl:flex col-span-1">
						<RightsideBar/>
					</div> 
				</div>
			</main>
		</div>
	);
}




