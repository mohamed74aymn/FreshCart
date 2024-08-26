import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const fetchBrands = async () => {
	const response = await axios.get(
		"https://ecommerce.routemisr.com/api/v1/brands"
	);
	return response.data;
};

export default function Brands() {
	const [selectedBrand, setSelectedBrand] = useState(null);

	const handleCardClick = (brand) => {
		setSelectedBrand(brand);
	};

	const handleCloseModal = () => {
		setSelectedBrand(null);
	};

	const { data, isLoading, isError } = useQuery({
		queryKey: ["brands"],
		queryFn: fetchBrands,
	});

	if (isLoading) {
	}

	if (isError) {
		return <LoadingScreen />;
	}

	return (
		<div>
			<div className="flex flex-wrap gap-5 justify-center">
				{data?.data.map((brand) => (
					<div
						key={brand._id}
						onClick={() => handleCardClick(brand)}
						className="border border-gray-300 rounded-lg p-5 text-center w-48 cursor-pointer hover:shadow-lg"
					>
						<img
							src={brand.image}
							alt={brand.name}
							className="w-full h-40 object-contain mb-2"
						/>
						<h3 className="text-lg font-medium">{brand.name}</h3>
					</div>
				))}
			</div>

			{selectedBrand && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
					onClick={handleCloseModal}
				>
					<div
						className="bg-white p-8 rounded-lg max-w-md w-full text-center"
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={selectedBrand.image}
							alt={selectedBrand.name}
							className="w-full h-48 object-contain mb-4"
						/>
						<h3 className="text-2xl font-semibold mb-2">
							{selectedBrand.name}
						</h3>
						<p className="text-gray-600">Mohamed Ayman</p>
						<button
							onClick={handleCloseModal}
							className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
