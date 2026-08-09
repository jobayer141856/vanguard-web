import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";
import authImage from "../../../assets/authimage.png";
import { Link } from "react-router";

const ResetPassword = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// Watch the newPassword field to compare it with confirmPassword
	const newPassword = watch("newPassword", "");

	const onSubmit = (data) => {
		console.log("Form Data:", data);
		// Add your reset password submission logic here
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row bg-white">
			{/* Left Side: Reset Password Form */}
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
							Reset Password
						</h1>
						<p className="text-gray-500 mb-8 text-sm md:text-base">
							Reset your password
						</p>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-4"
						>
							{/* New Password Field */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-gray-800">
										New Password
									</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									className={`input input-bordered w-full focus:outline-none focus:border-gray-400 ${
										errors.newPassword ? "input-error" : ""
									}`}
									{...register("newPassword", {
										required: "New password is required",
										minLength: {
											value: 6,
											message:
												"Password must be at least 6 characters",
										},
									})}
								/>
								{errors.newPassword && (
									<label className="label pt-1 pb-0">
										<span className="label-text-alt text-error">
											{errors.newPassword.message}
										</span>
									</label>
								)}
							</div>

							{/* Confirm Password Field */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-gray-800">
										Confirm Password
									</span>
								</label>
								<input
									type="password"
									placeholder="Password"
									className={`input input-bordered w-full focus:outline-none focus:border-gray-400 ${
										errors.confirmPassword
											? "input-error"
											: ""
									}`}
									{...register("confirmPassword", {
										required:
											"Please confirm your password",
										validate: (value) =>
											value === newPassword ||
											"Passwords do not match",
									})}
								/>
								{errors.confirmPassword && (
									<label className="label pt-1 pb-0">
										<span className="label-text-alt text-error">
											{errors.confirmPassword.message}
										</span>
									</label>
								)}
							</div>

							{/* Reset Password Button */}
							<button
								type="submit"
								className="btn w-full bg-[#d1f366] hover:bg-[#c5ea4c] text-black border-none mt-6 font-bold"
							>
								Reset Password
							</button>
						</form>
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

export default ResetPassword;
