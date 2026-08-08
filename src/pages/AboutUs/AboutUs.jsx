import { useState } from "react";

const AboutUs = () => {
	// State to manage the currently active tab
	const [activeTab, setActiveTab] = useState("Story");

	// Array of tab names for easy mapping
	const tabs = ["Story", "Mission", "Success", "Team & Others"];

	// Content for each tab (you can easily expand this with different text for each section)
	const tabContent = {
		Story: (
			<div className="flex flex-col space-y-6">
				<p className="text-gray-500 text-sm md:text-base leading-relaxed">
					We started with a simple promise — to make parcel delivery
					fast, reliable, and stress-free. Over the years, our
					commitment to real-time tracking, efficient logistics, and
					customer-first service has made us a trusted partner for
					thousands. Whether it's a personal gift or a time-sensitive
					business delivery, we ensure it reaches its destination — on
					time, every time.
				</p>
				<p className="text-gray-500 text-sm md:text-base leading-relaxed">
					We started with a simple promise — to make parcel delivery
					fast, reliable, and stress-free. Over the years, our
					commitment to real-time tracking, efficient logistics, and
					customer-first service has made us a trusted partner for
					thousands. Whether it's a personal gift or a time-sensitive
					business delivery, we ensure it reaches its destination — on
					time, every time.
				</p>
				<p className="text-gray-500 text-sm md:text-base leading-relaxed">
					We started with a simple promise — to make parcel delivery
					fast, reliable, and stress-free. Over the years, our
					commitment to real-time tracking, efficient logistics, and
					customer-first service has made us a trusted partner for
					thousands. Whether it's a personal gift or a time-sensitive
					business delivery, we ensure it reaches its destination — on
					time, every time.
				</p>
			</div>
		),
		Mission: (
			<div className="text-gray-500 text-sm md:text-base leading-relaxed">
				Our mission is to revolutionize the logistics industry by
				providing the fastest, safest, and most transparent delivery
				solutions across Bangladesh.
			</div>
		),
		Success: (
			<div className="text-gray-500 text-sm md:text-base leading-relaxed">
				With over 64 districts covered and thousands of satisfied
				merchants, our success is measured by the growth and
				satisfaction of our partners.
			</div>
		),
		"Team & Others": (
			<div className="text-gray-500 text-sm md:text-base leading-relaxed">
				Behind every successful delivery is a dedicated team of
				logistics experts, skilled riders, and customer support agents
				working 24/7.
			</div>
		),
	};

	return (
		<section className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_4px_25px_rgb(0,0,0,0.03)] my-8">
			{/* Header Section */}
			<div className="max-w-2xl mb-12">
				<h2 className="text-4xl md:text-5xl font-bold text-[#0b1b1a] mb-4">
					About Us
				</h2>
				<p className="text-gray-500 text-sm md:text-base leading-relaxed">
					Enjoy fast, reliable parcel delivery with real-time tracking
					and zero hassle. From personal packages to business
					shipments — we deliver on time, every time.
				</p>
			</div>

			{/* Tabs Navigation */}
			<div className="flex flex-wrap items-center gap-6 md:gap-10 mb-8 border-b border-gray-100 pb-2">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`pb-2 text-lg md:text-xl transition-colors relative ${
							activeTab === tab
								? "font-bold text-[#7A8B28]" // Olive green color for active state
								: "font-medium text-gray-400 hover:text-gray-600"
						}`}
					>
						{tab}
						{/* Optional: Add a subtle underline for the active tab for better UX */}
						{/* {activeTab === tab && (
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7A8B28] rounded-t-full"></span>
                        )} */}
					</button>
				))}
			</div>

			{/* Tab Content Display */}
			<div className="w-full transition-all duration-300 ease-in-out">
				{tabContent[activeTab]}
			</div>
		</section>
	);
};

export default AboutUs;
