import { login } from "@/lib/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";

export default function page() {
	return (
		<div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center ">
			<div className="flex flex-col items-center justify-center border-gray shadow-md w-[400px] p-2">
				<div className="font-bold text-3xl mb-4 opacity-90">
					Welcome to Joblist
				</div>
				<div className="text-md text-gray-500 mb-8 font-medium">
					Sign in to post jobs or apply for opportunities
				</div>
				<div className=" text-gray-500 mb-2">
					<button onClick={login}  className="cursor-pointer flex items-center justify-center">
						<FaGithub className="h-6 w-6 mr-3 items-center" />
						<div className="text-md font-medium ">
							Continue with Github
						</div>
					</button>
				</div>
			</div>
			<div className=" w-[400px] text-md text-gray-500 font-medium border-gray shadow-lg">
				<div className="text-center my-10">
					By signing in, you agree to our{" "}
					<span className="text-blue-500">Terms of Service</span> and{" "}
					<span className="text-blue-500">Privacy Policy</span>.
				</div>
			</div>
		</div>
	);
}
