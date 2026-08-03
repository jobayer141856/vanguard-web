import trackingIcon from "../../../assets/live-tracking.png";
import safeDeliveryIcon from "../../../assets/safe-delivery.png";

const featuresData = [
	{
		id: 1,
		title: "Live Parcel Tracking",
		description:
			"Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipments journey and get instant status updates for complete peace of mind.",
		icon: trackingIcon,
	},
	{
		id: 2,
		title: "100% Safe Delivery",
		description:
			"We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
		icon: safeDeliveryIcon,
	},
	{
		id: 3,
		title: "24/7 Call Center Support",
		description:
			"Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
		icon: safeDeliveryIcon,
	},
];

const Features = () => {
	return (
		<section className="w-full flex flex-col gap-6">
			{featuresData.map((feature) => (
				<div
					key={feature.id}
					className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow duration-300"
				>
					{/* Left: Illustration */}
					<div className="w-40 md:w-56 shrink-0 flex justify-center">
						<img
							src={feature.icon}
							alt={feature.title}
							className="w-full h-auto object-contain"
						/>
					</div>

					{/* Middle: Dashed Divider (Hidden on mobile, visible on tablet/desktop) */}
					<div className="hidden md:block w-px h-24 border-l-[2px] border-dashed border-gray-200"></div>

					{/* Right: Text Content */}
					<div className="flex-1 text-center md:text-left">
						<h3 className="text-xl md:text-2xl font-bold text-[#0b0c10] mb-3">
							{feature.title}
						</h3>
						<p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">
							{feature.description}
						</p>
					</div>
				</div>
			))}
		</section>
	);
};

export default Features;
