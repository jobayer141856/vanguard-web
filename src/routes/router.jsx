import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
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
		],
	},
]);
