import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";
import authImage from "../../../assets/authimage.png";
import { Link } from "react-router";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form Data:", data);
		// Add your registration logic here (including handling the avatar file)
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row bg-white">
			{/* Left Side: Register Form */}
			<div className="w-full md:w-1/2 flex flex-col p-8 lg:p-12 xl:p-16 relative">
				{/* Logo */}
				<div className="absolute top-8 left-8 lg:top-12 lg:left-12">
					<Link to="/" className="btn btn-ghost flex items-end">
						<img src={logo} alt="Logo" className="h-12 w-auto" />
						<h1 className="text-2xl font-bold text-black -ml-3.5">
							VanGuard
						</h1>
					</Link>
				</div>

				{/* Form Container */}
				<div className="flex-1 flex items-center justify-center mt-20 md:mt-0">
					<div className="max-w-md w-full">
						<h1 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-2">
							Create an Account
						</h1>
						<p className="text-gray-500 mb-6 text-sm md:text-base">
							Register with VanGuard
						</p>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-4"
						>
							{/* Avatar Upload */}
							<div className="relative w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors">
								<input
									type="file"
									accept="image/*"
									className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
									{...register("avatar")}
								/>
								{/* User Silhouette Icon */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-8 h-8 text-gray-400"
								>
									<path
										fillRule="evenodd"
										d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
										clipRule="evenodd"
									/>
								</svg>
								{/* Little Green Arrow */}
								<div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="w-4 h-4 text-[#a4c519]"
									>
										<path
											fillRule="evenodd"
											d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
							</div>

							{/* Name Field */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-gray-800">
										Name
									</span>
								</label>
								<input
									type="text"
									placeholder="Name"
									className={`input input-bordered w-full focus:outline-none focus:border-gray-400 ${
										errors.name ? "input-error" : ""
									}`}
									{...register("name", {
										required: "Name is required",
									})}
								/>
								{errors.name && (
									<label className="label pt-1 pb-0">
										<span className="label-text-alt text-error">
											{errors.name.message}
										</span>
									</label>
								)}
							</div>

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

							{/* Register Button */}
							<button
								type="submit"
								className="btn w-full bg-[#d1f366] hover:bg-[#c5ea4c] text-black border-none mt-2 font-bold"
							>
								Register
							</button>
						</form>

						{/* Login Link */}
						<p className="text-center text-sm text-gray-500 mt-6">
							Already have an account?{" "}
							<Link
								to="/login"
								className="text-[#a4c519] font-bold hover:underline transition-colors"
							>
								Login
							</Link>
						</p>

						{/* DaisyUI Divider */}
						<div className="divider text-gray-400 text-sm my-6">
							Or
						</div>

						{/* Google Register Button */}
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
							Register with google
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

export default Register;
