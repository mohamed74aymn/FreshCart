import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import Product from "../Product/Product";
import { WishlistContext } from "../Context/wishlistContext";

export default function Products() {
	const { addToWishlist, wishlistCheck, removeFromWishlist } =
		useContext(WishlistContext);

	function getProducts() {
		return axios.get("https://ecommerce.routemisr.com/api/v1/products");
	}

	let { data } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	useEffect(() => {
		getProducts();
	}, [wishlistCheck]);

	return (
		<div>
			<Helmet>
				<title>products</title>
			</Helmet>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data?.data.data.map((product, i) => {
					return <Product product={product} key={i} />;
				})}
			</div>
		</div>
	);
}
