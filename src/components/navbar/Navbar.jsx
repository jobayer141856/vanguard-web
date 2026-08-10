import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FiArrowUpRight } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
	const { user, signOutUser } = useAuth();

	const links = (
		<>
			<NavLink to="/services" className="btn btn-ghost normal-case">
				Services
			</NavLink>
			<NavLink to="/coverage" className="btn btn-ghost normal-case">
				Coverage
			</NavLink>
			<NavLink to="/about-us" className="btn btn-ghost normal-case">
				About Us
			</NavLink>
			<NavLink to="/pricing" className="btn btn-ghost normal-case">
				Pricing
			</NavLink>
			<NavLink to="/be-a-rider" className="btn btn-ghost normal-case">
				Be a Rider
			</NavLink>
		</>
	);

	const handleSignOut = () => {
		signOutUser()
			.then(() => {
				toast.success("Signed out successfully!", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			})
			.catch((error) => {
				console.error("Error signing out:", error);
				toast.error("Error signing out. Please try again.", {
					position: "top-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			});
	};

	return (
		<div className="navbar bg-base-100 shadow-sm rounded-xl my-2 px-3">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex="-1"
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{links}
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost flex items-end">
					<img src={logo} alt="Logo" className="h-12 w-auto" />
					<h1 className="text-2xl font-bold text-black -ml-3.5">
						VanGuard
					</h1>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{links}</ul>
			</div>
			<div className="navbar-end gap-2">
				{user ? (
					<div className="flex items-center gap-2">
						<a
							onClick={handleSignOut}
							className="btn bg-primary rounded-[.5rem]"
						>
							Sign Out
						</a>
						<img
							src={user.photoURL}
							alt="User Avatar"
							className="w-10 h-10 rounded-full"
						/>
					</div>
				) : (
					<Link to="/login" className="btn rounded-[.5rem]">
						Sign In
					</Link>
				)}
				<Link to="/be-a-rider" className="flex items-center">
					<a className="btn bg-primary rounded-[.5rem]">Be a rider</a>
					<span className="bg-[#1a1a1a] rounded-full w-10 h-10 flex items-center justify-center">
						<FiArrowUpRight
							size={24}
							color="#d1f366"
							strokeWidth={2.5}
						/>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
