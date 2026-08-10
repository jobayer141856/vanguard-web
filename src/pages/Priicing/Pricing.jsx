import { useState } from "react";
import { useForm } from "react-hook-form";

const Pricing = () => {
	const [calculatedCost, setCalculatedCost] = useState("50");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Calculator Data:", data);

		// Dummy calculation logic (Replace with your actual pricing logic)
		let baseCost = 50;
		let weightCost = data.weight ? parseFloat(data.weight) * 20 : 0;

		setCalculatedCost((baseCost + weightCost).toString());
	};

	const handleReset = () => {
		reset();
		setCalculatedCost("0");
	};

	return (
		<section className="w-full bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_4px_25px_rgb(0,0,0,0.03)] my-8">
			{/* Top Header Section */}
			<div className="mb-12 max-w-3xl">
				<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0b1b1a] mb-4">
					Pricing Calculator
				</h2>
				<p className="text-gray-500 text-sm md:text-base leading-relaxed">
					Enjoy fast, reliable parcel delivery with real-time tracking
					and zero hassle. From personal packages to business
					shipments — we deliver on time, every time.
				</p>
			</div>

			{/* Calculator Card */}
			<div className="w-full bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12">
				{/* Card Title */}
				<h3 className="text-xl md:text-2xl font-bold text-[#0b1b1a] text-center mb-10">
					Calculate Your Cost
				</h3>

				<div className="flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-16">
					{/* Left Side: Form */}
					<div className="w-full md:w-1/2">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-4"
						>
							{/* Parcel Type */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Parcel type
									</span>
								</label>
								<select
									defaultValue=""
									className={`select select-bordered w-full h-11 min-h-[2.75rem] focus:outline-none focus:border-gray-400 text-sm font-normal ${
										errors.parcelType
											? "select-error"
											: "text-gray-500"
									}`}
									{...register("parcelType", {
										required: "Please select parcel type",
									})}
								>
									<option value="" disabled>
										Select Parcel type
									</option>
									<option value="Document">Document</option>
									<option value="Small Package">
										Small Package
									</option>
									<option value="Large Box">Large Box</option>
								</select>
							</div>

							{/* Delivery Destination */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Delivery Destination
									</span>
								</label>
								<select
									defaultValue=""
									className={`select select-bordered w-full h-11 min-h-[2.75rem] focus:outline-none focus:border-gray-400 text-sm font-normal ${
										errors.destination
											? "select-error"
											: "text-gray-500"
									}`}
									{...register("destination", {
										required: "Please select destination",
									})}
								>
									<option value="" disabled>
										Select Delivery Destination
									</option>
									<option value="Inside Dhaka">
										Inside Dhaka
									</option>
									<option value="Dhaka Suburb">
										Dhaka Suburb
									</option>
									<option value="Outside Dhaka">
										Outside Dhaka
									</option>
								</select>
							</div>

							{/* Weight (KG) */}
							<div className="form-control w-full">
								<label className="label pb-1">
									<span className="label-text font-bold text-xs text-gray-800">
										Weight (KG)
									</span>
								</label>
								<input
									type="number"
									step="0.1"
									placeholder="Enter weight"
									className={`input input-bordered w-full h-11 focus:outline-none focus:border-gray-400 text-sm ${
										errors.weight ? "input-error" : ""
									}`}
									{...register("weight", {
										required: "Weight is required",
										min: 0.1,
									})}
								/>
							</div>

							{/* Action Buttons */}
							<div className="flex gap-4 pt-4">
								<button
									type="button"
									onClick={handleReset}
									className="btn bg-transparent border border-[#d1f366] text-gray-700 hover:bg-[#d1f366]/20 hover:border-[#d1f366] px-8 h-11 min-h-[2.75rem]"
								>
									Reset
								</button>
								<button
									type="submit"
									className="btn flex-1 bg-[#d1f366] hover:bg-[#c5ea4c] text-[#1a1a1a] border-none font-bold h-11 min-h-[2.75rem]"
								>
									Calculate
								</button>
							</div>
						</form>
					</div>

					{/* Right Side: Cost Display */}
					<div className="w-full md:w-1/2 flex justify-center items-center border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0">
						<div className="text-center">
							<span className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-black text-black leading-none drop-shadow-sm">
								{calculatedCost}{" "}
								<span className="text-5xl md:text-6xl">Tk</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
