import { Outlet } from "react-router";

const AuthLayout = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] min-h-screen flex flex-col">
			<Outlet />
		</div>
	);
};

export default AuthLayout;
