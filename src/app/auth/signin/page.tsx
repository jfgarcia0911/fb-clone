import { login } from "@/lib/auth";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export default function page() {
	return (
		<div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center ">
			<div className="flex flex-col items-center justify-center border-gray shadow-md w-[500px] p-2">
				<div className="font-bold text-3xl mb-4 opacity-90">
					Welcome to Facebook Clone
				</div>
				<div className="text-md text-gray-500 mb-8 font-medium">
					Sign in to connect with friends and share what&apos;s new.
				</div>
				<div className=" text-gray-500 mb-2">
					<button onClick={login}  className="cursor-pointer flex items-center text-blue-500 justify-center">
						<FaFacebook className="h-6 w-6 mr-3 items-center" />
						<div className="text-md font-medium ">
							Login with Facebook
						</div>
					</button>
				</div>
			</div>
			<div className=" w-[500px] text-md text-gray-500 font-medium border-gray shadow-lg">
				<div className="text-center my-10">
					By signing in, you agree to our{" "}
					<span className="text-blue-500">Terms of Service</span> and{" "}
					<span className="text-blue-500">Privacy Policy</span>.
				</div>
			</div>
		</div>
	);
}
