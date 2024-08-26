import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategorySlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	const fetchCategories = async () => {
		const response = await axios.get(
			"https://ecommerce.routemisr.com/api/v1/categories"
		);
		return response.data.data;
	};

	const {
		data: categories,
		error,
		isLoading,
	} = useQuery({
		queryKey: ["categories"],
		queryFn: fetchCategories,
	});

	if (isLoading)
		return <div className="text-center text-gray-600">Loading...</div>;
	if (error)
		return (
			<div className="text-center text-red-600">
				Error fetching categories: {error.message}
			</div>
		);

	return (
		<div className="mb-14 mx-auto max-w-7xl px-4">
			<h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-gray-50">
				Shop Popular Categories
			</h2>
			<div className="relative">
				<Slider {...settings} className="relative">
					{categories.map((catg) => (
						<div key={catg._id} className="p-2">
							<div className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
								<img
									src={catg.image}
									alt={catg.name}
									className="w-full h-48 object-cover"
								/>
								<div className="p-4">
									<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
										{catg.name}
									</h3>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
