import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from "react-icons/fi";

const faqData = [
	{
		id: 1,
		question: "How does this posture corrector work?",
		answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
	},
	{
		id: 2,
		question: "Is it suitable for all ages and body types?",
		answer: "Yes, our product is designed with adjustable straps to comfortably fit a wide range of body types and is suitable for most adults.",
	},
	{
		id: 3,
		question: "Does it really help with back pain and posture improvement?",
		answer: "Consistent use helps build muscle memory, gently guiding your shoulders back into proper alignment, which can significantly reduce back and neck strain over time.",
	},
	{
		id: 4,
		question: "Does it have smart features like vibration alerts?",
		answer: "This specific model focuses on premium mechanical support, breathability, and comfort, without electronic components or vibration alerts.",
	},
	{
		id: 5,
		question: "How will I be notified when the product is back in stock?",
		answer: "You can sign up for our email newsletter or click the 'Notify Me' button on the product page to receive an instant alert when we restock.",
	},
];

const Faq = () => {
	// State to track which accordion item is currently open (null means all closed)
	// Initialized to 0 so the first item is open by default, just like the design
	const [openIndex, setOpenIndex] = useState(0);

	const toggleFaq = (index) => {
		// If clicking the already open item, close it. Otherwise, open the new one.
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="w-full flex flex-col items-center py-16 bg-[#f4f6f5]">
			{/* Section Headers */}
			<div className="text-center max-w-3xl mx-auto mb-10 px-4">
				<h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-[#0b1b1a] mb-4">
					Frequently Asked Question (FAQ)
				</h2>
				<p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
					Enhance posture, mobility, and well-being effortlessly with
					Posture Pro. Achieve proper alignment, reduce pain, and
					strengthen your body with ease!
				</p>
			</div>

			{/* Accordion List */}
			<div className="w-full max-w-4xl px-4 flex flex-col gap-4 mb-10">
				{faqData.map((faq, index) => {
					const isOpen = openIndex === index;

					return (
						<div
							key={faq.id}
							// Apply different styling based on whether the item is open or closed
							className={`rounded-xl overflow-hidden transition-all duration-300 ${
								isOpen
									? "bg-[#eff7f7] border border-[#bce0df]" // Active state styling
									: "bg-white border border-transparent shadow-[0_2px_15px_rgb(0,0,0,0.02)]" // Inactive state styling
							}`}
						>
							{/* Question Header (Clickable) */}
							<button
								onClick={() => toggleFaq(index)}
								className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
							>
								<h3
									className={`font-bold text-sm md:text-base pr-4 ${isOpen ? "text-[#0b1b1a]" : "text-[#0b1b1a]"}`}
								>
									{faq.question}
								</h3>
								<div className="shrink-0 text-gray-500">
									{isOpen ? (
										<FiChevronUp
											size={20}
											className="text-[#0b1b1a]"
										/>
									) : (
										<FiChevronDown size={20} />
									)}
								</div>
							</button>

							{/* Answer Body */}
							<div
								className={`transition-all duration-300 ease-in-out ${
									isOpen
										? "max-h-96 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed">
									{faq.answer}
								</p>
							</div>
						</div>
					);
				})}
			</div>

			{/* See More Button */}
			<a
				href="#"
				className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
			>
				<span className="bg-[#d1f366] text-[#1a1a1a] font-bold text-sm md:text-base px-6 py-3 rounded-full">
					See More FAQ's
				</span>
				<span className="bg-[#1a1a1a] rounded-full w-12 h-12 flex items-center justify-center shrink-0">
					<FiArrowUpRight
						size={22}
						color="#d1f366"
						strokeWidth={2.5}
					/>
				</span>
			</a>
		</section>
	);
};

export default Faq;
