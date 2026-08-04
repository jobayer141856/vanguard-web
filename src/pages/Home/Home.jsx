import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Brands from "./components/Brands";
import Services from "./components/Services";
import Features from "./components/Features";
import SatisfactionBanner from "./components/SatisfactionBanner";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";

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
			<Faq />
		</div>
	);
};

export default Home;
