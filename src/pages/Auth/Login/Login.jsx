import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";

// Replace with your actual illustration asset path
import authImage from "../../../assets/authimage.png";
import { Link } from "react-router";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form Data:", data);
		// Add your login logic here
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row bg-white">
			{/* Left Side: Login Form */}
			<div className="w-full md:w-1/2 flex flex-col p-8 lg:p-12 xl:p-16 relative">
				{/* Logo */}
				<div className="absolute top-8 left-8 lg:top-12 lg:left-12">
					<a className="btn btn-ghost flex items-end">
						<img src={logo} alt="Logo" className="h-12 w-auto" />
						<h1 className="text-2xl font-bold text-black -ml-3.5">
							VanGuard
						</h1>
					</a>
				</div>

				{/* Form Container */}
				<div className="flex-1 flex items-center justify-center mt-16 md:mt-0">
					<div className="max-w-md w-full">
						<h1 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-2">
							Welcome Back
						</h1>
						<p className="text-gray-500 mb-8 text-sm md:text-base">
							Login with VanGuard.
						</p>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-4"
						>
							{/* Email Field */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-gray-800">
										Email
									</span>
								</label>
								<input
									type="email"
									placeholder="Email"
									className={`input input-bordered w-full focus:outline-none focus:border-gray-400 ${
										errors.email ? "input-error" : ""
									}`}
									{...register("email", {
										required: "Email is required",
									})}
								/>
								{errors.email && (
									<label className="label pt-1 pb-0">
										<span className="label-text-alt text-error">
											{errors.email.message}
										</span>
									</label>
								)}
							</div>

							{/* Password Field */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-gray-800">
										Password
									</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									className={`input input-bordered w-full focus:outline-none focus:border-gray-400 ${
										errors.password ? "input-error" : ""
									}`}
									{...register("password", {
										required: "Password is required",
									})}
								/>
								{errors.password && (
									<label className="label pt-1 pb-0">
										<span className="label-text-alt text-error">
											{errors.password.message}
										</span>
									</label>
								)}
							</div>

							{/* Forget Password */}
							<div className="flex justify-start pt-1">
								<Link
									to="/forgot-password"
									className="text-sm text-gray-500 hover:text-gray-800 hover:underline transition-colors"
								>
									Forget Password?
								</Link>
							</div>

							{/* Login Button */}
							<button
								type="submit"
								className="btn w-full bg-[#d1f366] hover:bg-[#c5ea4c] text-black border-none mt-2 font-bold"
							>
								Login
							</button>
						</form>

						{/* Register Link */}
						<p className="text-center text-sm text-gray-500 mt-6">
							Don't have any account?{" "}
							<Link
								to="/register"
								className="text-[#a4c519] font-bold hover:underline transition-colors"
							>
								Register
							</Link>
						</p>

						{/* DaisyUI Divider */}
						<div className="divider text-gray-400 text-sm my-6">
							Or
						</div>

						{/* Google Login Button */}
						<button className="btn w-full bg-[#f3f4f6] hover:bg-[#e5e7eb] text-gray-700 border-none font-medium flex items-center justify-center gap-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								className="w-5 h-5"
							>
								<path
									fill="#EA4335"
									d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
								/>
								<path
									fill="#4285F4"
									d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
								/>
								<path
									fill="#FBBC05"
									d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
								/>
								<path
									fill="#34A853"
									d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
								/>
								<path fill="none" d="M0 0h48v48H0z" />
							</svg>
							Login with google
						</button>
					</div>
				</div>
			</div>

			{/* Right Side: Illustration */}
			<div className="hidden md:flex w-full md:w-1/2 bg-[#f6f9ec] items-center justify-center p-12">
				<img
					src={authImage}
					alt="Delivery service illustration"
					className="w-full max-w-lg object-contain"
				/>
			</div>
		</div>
	);
};

export default Login;
