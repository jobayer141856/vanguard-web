import logo from "../../assets/logo.png";
const Logo = () => {
	return (
		<div className="flex items-end ">
			<img src={logo} alt="Logo" className="h-12 w-auto" />
			<h1 className="text-2xl font-bold text-white -ml-3.5">VanGuard</h1>
		</div>
	);
};

export default Logo;
