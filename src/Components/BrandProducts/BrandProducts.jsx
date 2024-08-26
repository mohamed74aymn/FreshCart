import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
export default function BrandProducts({ brandId }) {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (brandId) {
			axios
				.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)
				.then((response) => {
					setProducts(response.data.data); // Assuming products are in response.data.data
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching brand products:", error);
					setLoading(false);
				});
		}
	}, [brandId]);

	if (loading) {
		return <div>Loading Products...</div>;
	}

	return (
		<div className="row my-4">
			{products?.length > 0 ? (
				products.map((product) => (
					<Product key={product._id} product={product} />
				))
			) : (
				<div>No products found for this brand.</div>
			)}
		</div>
	);
}
