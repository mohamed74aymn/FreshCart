import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import headImage from "../../assets/head.jpg";

export default function Header() {
	return (
		<section className="relative pb-20 bg-white">
			<div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
				<div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
					<h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
						Shopping{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-blue-600 to-green-600">
							FreshCart
						</span>{" "}
						Discover Your Next Favorite Product Today!
					</h1>
					<p className="mt-8 text-gray-700">
						Welcome to FreshCart offers a curated selection of the latest
						fashion, cutting-edge electronics, and stylish home essentials.
						Enjoy exclusive deals, fast shipping, and exceptional customer
						service. Discover top-quality products at unbeatable prices!
					</p>
					<div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
						<form
							action="#"
							className="flex gap-3 items-center w-full bg-gray-100 border border-gray-200 shadow-lg rounded-full p-1 focus-within:bg-white focus-within:border-blue-600"
						>
							<span className="min-w-max pr-2 border-r border-gray-200">
								{/* <svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									viewBox="0 0 24 24"
									fill="none"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
									/>
								</svg> */}
							</span>
							<input
								type="email"
								placeholder="mohamed@gmail.com"
								className="w-full py-3 bg-transparent outline-none"
							/>
							<button className="flex justify-center items-center px-6 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700">
								Get Started
							</button>
						</form>
					</div>
				</div>
				<div className="lg:flex-1 lg:w-1/2 relative max-w-3xl mx-auto">
					<img
						src={headImage}
						alt="Hero image"
						className="w-full lg:h-full object-center rounded-3xl object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
