import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const RootLayout = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
