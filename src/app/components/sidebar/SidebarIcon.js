import React from "react";

export default function SidebarIcon({ Icon, title }) {
	return (
		<div className="flex items-center mb-7 cursor-pointer group">
			<div className="p-1 rounded-full group-hover:bg-gray-300 transition-colors duration-200">
				<Icon className="h-7 w-7 text-blue-500" />
			</div>
			<span className="lg:hidden xl:inline-flex text-md font-semibold ml-2 ">
				{title}
			</span>
		</div>
	);
}
