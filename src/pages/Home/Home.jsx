import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";

const Home = () => {
	return (
		<div className="mt-3">
			<HeroSection />
			<HowItWorks />
			<Services />
		</div>
	);
};

export default Home;
