import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Brands from "./Components/Brands/Brands";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProtectAuthRoute from "./Components/ProtectAuthRoute/ProtectAuthRoute";
import AuthContextProvider, {
	AuthContext,
} from "./Components/Context/AuthContext";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import ShippingAddress from "./Components/ShippingAddress/ShippingAddress";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import Wishlist from "./Components/Wishlist/Wishlist";
import WishlistContextProvider from "./Components/Context/wishlistContext";
import CartContextProvider from "./Components/Context/CartContext";
import Categories from "./Components/Categories/Categories";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import NewPass from "./Components/NewPass/NewPass";
import NameContextProvider from "./Components/Context/NameContext";
function App() {
	const queryClient = new QueryClient();

	let router = createBrowserRouter([
		{
			path: "",
			element: <Layout />,
			children: [
				{
					index: true,
					element: (
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					),
				},
				{
					path: "cart",
					element: (
						<ProtectedRoute>
							<Cart />
						</ProtectedRoute>
					),
				},
				{
					path: "productDetails/:id",
					element: (
						<ProtectedRoute>
							<ProductDetails />
						</ProtectedRoute>
					),
				},
				{
					path: "products",
					element: (
						<ProtectedRoute>
							<Products />
						</ProtectedRoute>
					),
				},
				{
					path: "brands",
					element: (
						<ProtectedRoute>
							<Brands />
						</ProtectedRoute>
					),
				},
				{
					path: "wishlist",
					element: (
						<ProtectedRoute>
							<Wishlist />
						</ProtectedRoute>
					),
				},
				{
					path: "categories",
					element: (
						<ProtectedRoute>
							<Categories />
						</ProtectedRoute>
					),
				},
				{
					path: "shippingAddress/:cartId",
					element: (
						<ProtectedRoute>
							<ShippingAddress />
						</ProtectedRoute>
					),
				},
				{
					path: "login",
					element: (
						<ProtectAuthRoute>
							<Login />
						</ProtectAuthRoute>
					),
				},

				{
					path: "resetpassword",
					element: (
						<ProtectAuthRoute>
							<ResetPassword />
						</ProtectAuthRoute>
					),
				},

				{
					path: "forgetpassword",
					element: (
						<ProtectAuthRoute>
							<ForgetPassword />
						</ProtectAuthRoute>
					),
				},
				{
					path: "newpass",
					element: (
						<ProtectAuthRoute>
							<NewPass />
						</ProtectAuthRoute>
					),
				},

				{
					path: "register",
					element: (
						<ProtectAuthRoute>
							<Register />
						</ProtectAuthRoute>
					),
				},
				{
					path: "*",
					element: <NotFound />,
				},
			],
		},
	]);

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="icon"
						href="https://agencex-astro.vercel.app/images/favicon.png"
					/>
				</Helmet>
				<QueryClientProvider client={queryClient}>
					<AuthContextProvider>
						<CartContextProvider>
							<WishlistContextProvider>
								<NameContextProvider>
									<RouterProvider router={router}> </RouterProvider>
								</NameContextProvider>
							</WishlistContextProvider>
						</CartContextProvider>
						<ToastContainer />
						{/* <Online>Only shown when you're online</Online> */}
						<Offline>
							{" "}
							<div className="fixed bottom-4 start-4 p-4 rounded-md bg-yellow-200">
								Only shown offline (surprise!)
							</div>{" "}
						</Offline>
					</AuthContextProvider>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</HelmetProvider>
			;
		</>
	);
}

export default App;
