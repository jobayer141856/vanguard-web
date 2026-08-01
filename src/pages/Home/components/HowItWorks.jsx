import bookingIcon from "../../../assets/howItWorks/booking.png";
import codIcon from "../../../assets/howItWorks/cod.png";
import deliveryIcon from "../../../assets/howItWorks/delivery.png";
import b2bIcon from "../../../assets/howItWorks/b2b.png";

const steps = [
	{
		id: 1,
		title: "Booking Hub & Drop",
		description:
			"Drop your packages to nearest hub or request for a pickup from your location.",
		icon: bookingIcon,
	},
	{
		id: 2,
		title: "Cash On Delivery",
		description:
			"Get payments collected from your customers securely and transferred to you.",
		icon: codIcon,
	},
	{
		id: 3,
		title: "Delivery Info",
		description:
			"Track your packages in real-time and get instant updates on delivery status.",
		icon: deliveryIcon,
	},
	{
		id: 4,
		title: "Booking B2B & Corporate",
		description:
			"Specialized delivery solutions tailored for corporate clients and bulk shipments.",
		icon: b2bIcon,
	},
];

const HowItWorks = () => {
	return (
		<section className="w-full rounded-[2rem] bg-white shadow-sm p-6 md:p-12 my-8">
			{/* Section Title */}
			<h2 className="text-2xl md:text-3xl font-bold text-[#0b0c10] mb-8">
				How it Works
			</h2>

			{/* Cards Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{steps.map((step) => (
					<div
						key={step.id}
						className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow duration-300"
					>
						{/* Icon Container */}
						<div className="w-12 h-12 mb-6 flex items-center justify-start">
							<img
								src={step.icon}
								alt={step.title}
								className="w-full h-full object-contain"
							/>
						</div>

						{/* Text Content */}
						<h3 className="text-lg font-bold text-[#0b0c10] mb-3 leading-snug">
							{step.title}
						</h3>
						<p className="text-sm text-gray-500 leading-relaxed">
							{step.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
