import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Header from "../Header/Header";
import CategorySlider from "../CategorySlider/CategorySlider";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		setIsLoading(true);

		let { data } = await axios.get(
			"https://ecommerce.routemisr.com/api/v1/products"
		);
		setProducts(data.data);
		setIsLoading(false);
	}

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<>
			<Header />
			<CategorySlider />

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products.map((product, index) => {
					return <Product product={product} key={index} />;
				})}
			</div>
		</>
	);
}
