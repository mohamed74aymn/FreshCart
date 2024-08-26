// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import CategorySlider from "../CategorySlider/CategorySlider";
// export default function SliderHead() {
// 	function getCategories() {
// 		return axios.get("https://ecommerce.routemisr.com/api/v1/categories");
// 	}

// 	const { data } = useQuery({
// 		queryKey: ["categories"],
// 		queryFn: getCategories,
// 	});

// 	return (
// 		<div className="flex justify-center items-center">
// 			<div className="2xl:mx-auto 2xl:container lg:px-20 pb-20 md:px-6 px-4 w-96 sm:w-auto">
// 				<div role="main" className="flex flex-col items-center justify-center">
// 					<h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
// 						Our Exclusive Collection
// 					</h1>
// 					<p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
// 						If you're looking for random paragraphs, you've come to the right
// 						place. When a random word or a random sentence isn't quite enough
// 					</p>
// 				</div>
// 				<div className="mt-12">
// 					{/* Integrate the CategorySlider component */}
// 					<CategorySlider />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
