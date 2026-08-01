import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Brands from "./components/Brands";
import Services from "./components/Services";

const Home = () => {
	return (
		<div className="mt-3">
			<HeroSection />
			<HowItWorks />
			<Services />
			<Brands />
		</div>
	);
};

export default Home;
