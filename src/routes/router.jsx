import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import VerifyCode from "../pages/Auth/VerifyCode/VerifyCode";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import BeARider from "../pages/BeARider/BeARider";
import PrivateRoute from "../routes/PrivateRoute";
export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "about-us",
				Component: AboutUs,
			},
			{
				path: "coverage",
				Component: Coverage,
				loader: () =>
					fetch("/public/data/serviceAreas.json").then((res) =>
						res.json(),
					),
			},
			{
				path: "be-a-rider",
				element: (
					<PrivateRoute>
						<BeARider />
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "/",
		Component: AuthLayout,
		children: [
			{
				path: "login",
				Component: Login,
			},
			{
				path: "register",
				Component: Register,
			},
			{
				path: "forgot-password",
				Component: ForgotPassword,
			},

			{
				path: "verify-code",
				Component: VerifyCode,
			},
			{
				path: "reset-password",
				Component: ResetPassword,
			},
		],
	},
]);
