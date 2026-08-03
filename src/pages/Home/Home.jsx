import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Features from "./components/Features";
import SatisfactionBanner from "./components/SatisfactionBanner";
import Testimonials from "./components/Testimonials";

const Home = () => {
	return (
		<div className="mt-3 mb-3">
			<HeroSection />
			<HowItWorks />
			<Services />
			<Brands />
			<Features />
			<SatisfactionBanner />
			<Testimonials />
		</div>
	);
};

export default Home;
