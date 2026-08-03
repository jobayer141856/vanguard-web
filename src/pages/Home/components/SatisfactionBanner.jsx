import boxIllustration from "../../../assets/location-merchant.png";
import merchantBg from "../../../assets/be-a-merchant-bg.png";

const SatisfactionBanner = () => {
	return (
		<section className="relative w-full bg-secondary rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-lg mt-8">
			{/* 
              Top Glowing Light Effect 
              (Pure CSS fallback in case you didn't export the glow as an image) 
            */}
			{/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-gradient-to-b from-cyan-200/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>
			<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div> */}

			<img
				src={merchantBg}
				alt="Merchant background illustration"
				className="absolute top-0 left-1/2 -translate-x-1/2 w-full"
			/>

			{/* Left Content: Typography & Buttons */}
			<div className="relative z-10 flex-1 flex flex-col max-w-2xl text-left">
				<h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 leading-tight">
					Merchant and Customer Satisfaction is Our First Priority
				</h2>

				<p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
					We offer the lowest delivery charge with the highest value
					along with 100% safety of your product. ZapShift courier
					delivers your parcels in every corner of bangladesh right on
					time.
				</p>

				{/* Call to Action Buttons */}
				<div className="flex flex-wrap items-center gap-4">
					{/* Primary Button */}
					<a
						href="#"
						className="inline-block bg-[#d1f366] text-[#1a1a1a] font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-[#c5ea4c] transition-colors"
					>
						Become a Merchant
					</a>

					{/* Secondary Outlined Button */}
					<a
						href="#"
						className="inline-block bg-transparent border border-[#d1f366] text-[#d1f366] font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-[#d1f366]/10 transition-colors"
					>
						Earn with ZapShift Courier
					</a>
				</div>
			</div>

			{/* Right Content: Line Art Illustration */}
			<div className="relative z-10 flex-1 w-full max-w-sm md:max-w-md flex justify-center md:justify-end">
				<img
					src={boxIllustration}
					alt="Delivery boxes with map pin"
					className="w-full h-auto object-contain drop-shadow-sm opacity-90"
				/>
			</div>
		</section>
	);
};

export default SatisfactionBanner;
