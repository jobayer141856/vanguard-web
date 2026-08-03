import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Top illustration (this usually stays as a static import)
import deliveryIllustration from "../../../assets/customer-top.png";

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch data from public/data/reviews.json
	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const response = await fetch("/data/reviews.json");
				if (!response.ok) {
					throw new Error("Failed to fetch reviews");
				}
				const data = await response.json();
				console.log("Fetched testimonials:", data); // Debugging line
				setTestimonials(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchTestimonials();
	}, []);

	return (
		<section className="w-full flex flex-col items-center py-12 overflow-hidden">
			{/* Top Illustration */}
			<div className="mb-4 flex justify-center">
				<img
					src={deliveryIllustration}
					alt="Delivery boxes"
					className="w-full h-full object-contain"
				/>
			</div>

			{/* Section Headers */}
			<div className="text-center max-w-3xl mx-auto mb-12 px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-[#0b0c10] mb-4">
					What our customers are sayings
				</h2>
				<p className="text-gray-500 text-sm md:text-base leading-relaxed">
					Experience seamless, reliable, and well-managed parcel
					delivery with ZapShift. Achieve absolute peace of mind with
					real-time updates and on-time service!
				</p>
			</div>

			{/* Loading / Error States */}
			{isLoading && <p className="text-gray-500">Loading reviews...</p>}
			{error && (
				<p className="text-red-500">Error loading reviews: {error}</p>
			)}

			{/* Swiper Carousel (Only renders if we have data) */}
			{/* Swiper Carousel */}
			{!isLoading && !error && testimonials.length > 0 && (
				<div className="w-full max-w-[1400px] relative px-4">
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={"auto"}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Navigation, Pagination]}
						className="mySwiper"
						navigation={{
							prevEl: ".custom-swiper-button-prev",
							nextEl: ".custom-swiper-button-next",
						}}
					>
						{testimonials.map((testimonial) => (
							<SwiperSlide key={testimonial.id}>
								{/* Large Quote Icon (Light Teal colored) */}
								<div className="text-6xl text-[#a3d5d3] font-serif leading-none mb-4">
									“
								</div>

								{/* Quote Text */}
								<p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
									{testimonial.review}
								</p>

								{/* User Info */}
								<div className="flex items-center gap-4">
									<img
										src={testimonial.user_photoURL}
										alt={testimonial.userName}
										className="w-12 h-12 rounded-full object-cover bg-[#104b49]"
									/>
									<div className="text-left">
										<h4 className="font-bold text-[#0b1b1a] text-sm md:text-base">
											{testimonial.userName}
										</h4>
										<p className="text-xs md:text-sm text-gray-500">
											{testimonial.user_email}
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Custom Navigation & Pagination Container - Positioned below the cards */}
					<div className="flex items-center justify-center gap-6 mt-4">
						{/* Previous Button (White) */}
						<button className="custom-swiper-button-prev w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm z-10 cursor-pointer text-[#0b1b1a]">
							<FiArrowLeft size={20} />
						</button>

						{/* Pagination Dots */}
						<div className="custom-swiper-pagination flex items-center justify-center gap-1.5"></div>

						{/* Next Button (Lime Green) */}
						<button className="custom-swiper-button-next w-10 h-10 rounded-full bg-[#d1f366] flex items-center justify-center hover:bg-[#c5ea4c] transition-colors shadow-sm z-10 cursor-pointer text-[#0b1b1a]">
							<FiArrowRight size={20} />
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Testimonials;
