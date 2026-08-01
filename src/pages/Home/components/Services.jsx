import icon1 from "../../../assets/services/service.png";

const servicesData = [
	{
		id: 1,
		title: "Express & Standard Delivery",
		description:
			"We deliver your packages quickly and safely within the city. Choose standard or express delivery based on your urgency.",
		icon: icon1,
		isHighlighted: false,
	},
	{
		id: 2,
		title: "Nationwide Delivery",
		description:
			"We deliver all over Bangladesh with complete tracking and security so you have absolute peace of mind.",
		icon: icon1,
		isHighlighted: true, // This triggers the lime green background
	},
	{
		id: 3,
		title: "Fulfillment Solution",
		description:
			"We offer end-to-end fulfillment solutions for E-commerce businesses, managing everything from storage to dispatch.",
		icon: icon1,
		isHighlighted: false,
	},
	{
		id: 4,
		title: "Cash on Home Delivery",
		description:
			"Our cash on delivery service ensures safe payment collection and prompt transfer directly to your account.",
		icon: icon1,
		isHighlighted: false,
	},
	{
		id: 5,
		title: "Corporate Service & Contract Logistics",
		description:
			"Specialized logistics and delivery solutions for corporate clients, managing bulk shipments seamlessly.",
		icon: icon1,
		isHighlighted: false,
	},
	{
		id: 6,
		title: "Return/Refund",
		description:
			"We seamlessly manage reverse logistics, handling customer returns and package drop-offs with complete transparency.",
		icon: icon1,
		isHighlighted: false,
	},
];

const Services = () => {
	return (
		<section className="bg-[#0b1b1a] rounded-[2rem] py-16 px-6 md:px-12 lg:px-20 w-full mt-3">
			{/* Section Header */}
			<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 space-y-4">
				<h2 className="text-3xl md:text-4xl font-bold text-white">
					Our Services
				</h2>
				<p className="text-gray-300 text-sm md:text-base leading-relaxed">
					Experience a reliable stream of fast, secure, and
					hassle-free parcel delivery services with real-time tracking
					to ensure your packages reach their destination safely and
					on time.
				</p>
			</div>

			{/* Services Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{servicesData.map((service) => (
					<div
						key={service.id}
						className={`flex flex-col items-center text-center p-8 rounded-[1rem] transition-transform hover:-translate-y-1 duration-300 ${
							service.isHighlighted
								? "bg-[#d1f366]" // Highlighted card background
								: "bg-white" // Default card background
						}`}
					>
						{/* Icon */}
						<div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-blue-50/50">
							{/* Assuming the icons are images. If they are SVGs, you can swap this img tag for the SVG component */}
							<img
								src={service.icon}
								alt={service.title}
								className="w-8 h-8 object-contain"
							/>
						</div>

						{/* Text Content */}
						<h3 className="text-lg font-bold text-[#0b0c10] mb-3 leading-tight px-4">
							{service.title}
						</h3>
						<p
							className={`text-sm leading-relaxed ${
								service.isHighlighted
									? "text-[#1a1a1a]" // Darker text for readability on the lime background
									: "text-gray-500" // Standard gray text for white background
							}`}
						>
							{service.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
