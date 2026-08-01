import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import amazonVector from "../../../assets/brands/amazon_vector.png";
import amazonLogo from "../../../assets/brands/amazon.png";
import casioLogo from "../../../assets/brands/casio.png";
import moonstarLogo from "../../../assets/brands/moonstar.png";
import randstadLogo from "../../../assets/brands/randstad.png";
import starLogo from "../../../assets/brands/star.png";
import startPeopleLogo from "../../../assets/brands/start_people.png";

const brandsData = [
	{
		id: 1,
		name: "Amazon",
		logo: amazonLogo,
		vector: amazonVector,
	},
	{
		id: 2,
		name: "Casio",
		logo: casioLogo,
		vector: null,
	},
	{
		id: 3,
		name: "Moonstar",
		logo: moonstarLogo,
		vector: null,
	},
	{
		id: 4,
		name: "Randstad",
		logo: randstadLogo,
		vector: null,
	},
	{
		id: 5,
		name: "Star",
		logo: starLogo,
		vector: null,
	},
	{
		id: 6,
		name: "Star People",
		logo: startPeopleLogo,
		vector: null,
	},
];

const Brands = () => {
	return (
		<section className="w-full rounded-[2rem] bg-white shadow-sm p-6 md:p-12 my-8 overflow-hidden">
			{/* Section Title */}
			<h2 className="text-2xl md:text-3xl font-bold text-[#0b0c10] mb-8 text-center">
				We've helped thousands of sales teams
			</h2>

			{/* Swiper Component */}
			<Swiper
				modules={[Autoplay]}
				spaceBetween={20}
				slidesPerView={5}
				loop={true}
				speed={3000} // Controls the speed of the smooth scroll
				autoplay={{
					delay: 0,
					disableOnInteraction: false, // Keeps playing if user touches it
				}}
				className="smooth-swiper"
			>
				{brandsData.map((brand) => (
					<SwiperSlide
						key={brand.id}
						className="flex items-center justify-center"
					>
						<div className="flex flex-col items-center justify-center space-y-1 h-full">
							<img
								src={brand.logo}
								alt={`${brand.name} Logo`}
								// Reduced image height here
								className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
							/>
							{brand.vector && (
								<img
									src={brand.vector}
									alt={`${brand.name} Vector`}
									className="h-3 md:h-4 object-contain"
								/>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Brands;
