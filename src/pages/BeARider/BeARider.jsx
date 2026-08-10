import { useForm } from "react-hook-form";

// Replace with your actual illustration asset path
import riderImage from "../../assets/agent-pending.png";

const BeARider = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Rider Registration Data:", data);
		// Add your form submission logic here
	};

	return (
		<div className="min-h-screen bg-[#f4f5f7] py-10 px-4 sm:px-8">
			<div className="max-w-[1200px] mx-auto bg-white rounded-[2rem] shadow-[0_4px_25px_rgb(0,0,0,0.03)] p-8 md:p-12 lg:p-16">
				{/* Top Header Section */}
				<div className="mb-8">
					<h1 className="text-4xl md:text-[2.75rem] font-bold text-[#0b1b1a] mb-4">
						Be a Rider
					</h1>
					<p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
						Enjoy fast, reliable parcel delivery with real-time
						tracking and zero hassle. From personal packages to
						business shipments — we deliver on time, every time.
					</p>
				</div>

				{/* Divider */}
				<hr className="w-full border-t border-gray-100 mb-8" />

				{/* Section Title */}
				<h2 className="text-2xl font-bold text-[#0b1b1a] mb-8">
					Tell us about yourself
				</h2>

				<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
					{/* Left Side: Form */}
					<div className="flex-1 w-full max-w-lg">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-4"
						>
							{/* Your Name */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Your Name
									</span>
								</label>
								<input
									type="text"
									placeholder="Your Name"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${errors.name ? "input-error" : ""}`}
									{...register("name", {
										required: "Name is required",
									})}
								/>
							</div>

							{/* Driving License Number */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Driving License Number
									</span>
								</label>
								<input
									type="text"
									placeholder="Driving License Number"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${errors.license ? "input-error" : ""}`}
									{...register("license", {
										required: "License number is required",
									})}
								/>
							</div>

							{/* Your Email */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Your Email
									</span>
								</label>
								<input
									type="email"
									placeholder="Your Email"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${errors.email ? "input-error" : ""}`}
									{...register("email", {
										required: "Email is required",
									})}
								/>
							</div>

							{/* Your Region (Select) */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Your Region
									</span>
								</label>
								<select
									defaultValue=""
									className={`select select-bordered w-full h-11 min-h-[2.75rem] focus:outline-none focus:border-gray-400 text-sm font-normal ${errors.region ? "select-error" : "text-gray-500"}`}
									{...register("region", {
										required: "Region is required",
									})}
								>
									<option value="" disabled>
										Select your Region
									</option>
									<option value="Dhaka">Dhaka</option>
									<option value="Chittagong">
										Chittagong
									</option>
									<option value="Sylhet">Sylhet</option>
								</select>
							</div>

							{/* Your District (Select) */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Your District
									</span>
								</label>
								<select
									defaultValue=""
									className={`select select-bordered w-full h-11 min-h-[2.75rem] focus:outline-none focus:border-gray-400 text-sm font-normal ${errors.district ? "select-error" : "text-gray-500"}`}
									{...register("district", {
										required: "District is required",
									})}
								>
									<option value="" disabled>
										Select your District
									</option>
									<option value="Gulshan">Gulshan</option>
									<option value="Banani">Banani</option>
									<option value="Dhanmondi">Dhanmondi</option>
								</select>
							</div>

							{/* NID No */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										NID No
									</span>
								</label>
								<input
									type="text"
									placeholder="NID"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${errors.nid ? "input-error" : ""}`}
									{...register("nid", {
										required: "NID is required",
									})}
								/>
							</div>

							{/* Phone Number */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Phone Number
									</span>
								</label>
								<input
									type="tel"
									placeholder="Phone Number"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${errors.phone ? "input-error" : ""}`}
									{...register("phone", {
										required: "Phone number is required",
									})}
								/>
							</div>

							{/* Bike Brand Model and Year */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Bike Brand Model and Year
									</span>
								</label>
								<input
									type="text"
									placeholder="Bike Brand Model and Year"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${errors.bikeModel ? "input-error" : ""}`}
									{...register("bikeModel", {
										required: "Bike model is required",
									})}
								/>
							</div>

							{/* Bike Registration Number */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Bike Registration Number
									</span>
								</label>
								<input
									type="text"
									placeholder="Bike Registration Number"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${errors.bikeReg ? "input-error" : ""}`}
									{...register("bikeReg", {
										required:
											"Registration number is required",
									})}
								/>
							</div>

							{/* Tell Us About Yourself */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Tell Us About Yourself
									</span>
								</label>
								<input
									type="text"
									placeholder="Tell Us About Yourself"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm`}
									{...register("about")}
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="btn w-full bg-[#d1f366] hover:bg-[#c5ea4c] text-[#1a1a1a] border-none mt-6 font-bold"
							>
								Submit
							</button>
						</form>
					</div>

					{/* Right Side: Illustration */}
					<div className="hidden lg:flex flex-1 items-start justify-center pt-8">
						<img
							src={riderImage}
							alt="Delivery rider on scooter"
							className="w-full max-w-md object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BeARider;
