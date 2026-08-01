import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FiArrowUpRight } from "react-icons/fi";

// Import your individual transparent illustrations here
import image1 from "../../../assets/heroSection/banner1.png";
import image2 from "../../../assets/heroSection/banner2.png";
import image3 from "../../../assets/heroSection/banner3.png";

const slideData = [
	{
		id: 1,
		title: (
			<>
				We Make Sure Your <br />
				<span className="text-[#b2d235]">Parcel Arrives</span> On Time{" "}
				<br />— No Fuss.
			</>
		),
		imageSrc: image1,
		imageAlt: "Delivery truck and driver",
	},
	{
		id: 2,
		title: (
			<>
				Fastest <br />
				<span className="text-[#b2d235]">Delivery</span> & Easy <br />
				Pickup
			</>
		),
		imageSrc: image2,
		imageAlt: "Delivery rider on a green scooter",
	},
	{
		id: 3,
		title: (
			<>
				Delivery in{" "}
				<span className="text-[#b2d235]">
					30 <br /> Minutes
				</span>{" "}
				at your <br /> doorstep
			</>
		),
		imageSrc: image3,
		imageAlt: "Delivery rider with map background",
	},
];

const HeroSection = () => {
	return (
		<section className="bg-white rounded-[2rem] shadow-sm overflow-hidden">
			<Carousel
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				infiniteLoop={true}
				autoPlay={true}
				interval={5000}
				swipeable={true}
				emulateTouch={true}
				renderIndicator={(onClickHandler, isSelected, index, label) => {
					if (isSelected) {
						return (
							<li
								className="inline-block w-8 h-1.5 bg-[#1a1a1a] rounded-full mx-1 cursor-pointer"
								aria-label={`Selected: ${label} ${index + 1}`}
								title={`Selected: ${label} ${index + 1}`}
							/>
						);
					}
					return (
						<li
							className="inline-block w-8 h-1.5 bg-gray-200 rounded-full mx-1 cursor-pointer hover:bg-gray-300 transition-colors"
							onClick={onClickHandler}
							onKeyDown={onClickHandler}
							value={index}
							key={index}
							role="button"
							tabIndex={0}
							aria-label={`${label} ${index + 1}`}
						/>
					);
				}}
			>
				{slideData.map((slide) => (
					<div
						key={slide.id}
						className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 p-8 md:p-12 lg:p-16 h-full"
					>
						{/* Left Content: Typography & Buttons */}
						<div className="flex-1 flex flex-col space-y-6 max-w-xl text-left z-10">
							<h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0b0c10] leading-[1.15]">
								{slide.title}
							</h1>

							<p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-md">
								Enjoy fast, reliable parcel delivery with
								real-time tracking and zero hassle. From
								personal packages to business shipments — we
								deliver on time, every time.
							</p>

							{/* Call to Action Buttons */}
							<div className="flex flex-wrap items-center gap-3 md:gap-4 pt-4">
								{/* Track Your Parcel Button */}
								<a
									href="#"
									className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
								>
									<div className="flex items-center ">
										<span className="bg-[#d1f366] text-[#1a1a1a] font-semibold text-sm md:text-base px-5 py-2.5 md:px-7 md:py-3.5 rounded-[1rem]">
											Track Your Parcel
										</span>
										<span className="bg-[#1a1a1a] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
											<FiArrowUpRight
												size={22}
												color="#d1f366"
												strokeWidth={2.5}
											/>
										</span>
									</div>
								</a>

								{/* Be A Rider Button */}
								<a
									href="#"
									className="bg-white border border-gray-200 text-[#1a1a1a] font-semibold text-sm md:text-base px-5 py-2.5 md:px-7 md:py-3.5 rounded-[1rem] hover:bg-gray-50 transition-colors shadow-sm"
								>
									Be A Rider
								</a>
							</div>
						</div>

						{/* Right Content: Dynamic Illustration */}
						<div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-end">
							<img
								src={slide.imageSrc}
								alt={slide.imageAlt}
								className="w-full h-auto object-contain drop-shadow-md max-h-[400px] lg:max-h-[500px]"
							/>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};

export default HeroSection;
