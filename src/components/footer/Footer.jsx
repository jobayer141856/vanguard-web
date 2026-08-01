import Logo from "../logo/Logo";

const Footer = () => {
	return (
		<footer className="bg-[#0b0c10] text-gray-300 py-12 px-6 flex flex-col items-center justify-center space-y-8 rounded-[2rem]">
			{/* Top Section */}
			<div className="flex flex-col items-center text-center space-y-4 max-w-3xl">
				<Logo />
				<p className="text-sm font-light leading-relaxed">
					Enjoy fast, reliable parcel delivery with real-time tracking
					and zero hassle. From personal packages to business
					shipments — we deliver on time, every time.
				</p>
			</div>

			{/* Top Dashed Divider */}
			<hr className="w-full max-w-5xl border-t border-dashed border-[#1e363a]" />

			{/* Navigation Links */}
			<nav className="flex flex-wrap justify-center gap-8 sm:gap-12 text-sm">
				<a href="#" className="hover:text-white transition-colors">
					Services
				</a>
				<a href="#" className="hover:text-white transition-colors">
					Coverage
				</a>
				<a href="#" className="hover:text-white transition-colors">
					About Us
				</a>
				<a href="#" className="hover:text-white transition-colors">
					Pricing
				</a>
				<a href="#" className="hover:text-white transition-colors">
					Blog
				</a>
				<a href="#" className="hover:text-white transition-colors">
					Contact
				</a>
			</nav>

			{/* Bottom Dashed Divider */}
			<hr className="w-full max-w-5xl border-t border-dashed border-[#1e363a]" />

			{/* Social Icons */}
			<div className="flex gap-4">
				{/* LinkedIn */}
				<a
					href="#"
					className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077b5] hover:opacity-80 transition-opacity"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						className="fill-white"
					>
						<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
					</svg>
				</a>
				{/* X (Twitter) */}
				<a
					href="#"
					className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:opacity-80 transition-opacity"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						className="fill-black"
					>
						<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.92 6.064-6.92zm-1.293 19.49h2.039L6.482 3.24H4.298l13.31 17.404z" />
					</svg>
				</a>
				{/* Facebook */}
				<a
					href="#"
					className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877f2] hover:opacity-80 transition-opacity"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						className="fill-white"
					>
						<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
					</svg>
				</a>
				{/* YouTube */}
				<a
					href="#"
					className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ff0000] hover:opacity-80 transition-opacity"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						className="fill-white"
					>
						<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
					</svg>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
