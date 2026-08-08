import { FiSearch } from "react-icons/fi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";


const Coverage = () => {
	const serviceAreasData = useLoaderData(); 
	const position = [23.8103, 90.4125]; // Example position for the marker
	// console.log("Service Areas Data:", serviceAreasData); // Log the data to check its structure
	const mapRef = useRef(null); // Create a ref for the map instance if needed
	const handleSearch = (event) => {
		event.preventDefault();
		const location = event.target.search.value;
		// console.log("Search Query:", location);

		const filterDistrict = serviceAreasData.filter((area) =>
			area.district.toLowerCase().includes(location.toLowerCase()),
		);
		// console.log("Filtered Districts:", filterDistrict);

		if (filterDistrict.length > 0) {
			const firstMatch = filterDistrict[0];
			const newPosition = [firstMatch.latitude, firstMatch.longitude];
			console.log("New Position:", newPosition);
			mapRef.current.flyTo(newPosition, 13);
		}
	};
	return (
		<section className="w-full bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-[0_4px_25px_rgb(0,0,0,0.03)] my-8">
			{/* Top Heading */}
			<h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0b1b1a] mb-8">
				We are available in 64 districts
			</h2>

			{/* Custom Search Bar */}
			<form
				className="flex items-center bg-[#f4f5f7] rounded-full max-w-lg w-full p-1.5 mb-10"
				onSubmit={handleSearch}
			>
				<div className="pl-4 pr-2 text-gray-500">
					<FiSearch size={20} />
				</div>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search here"
					className="flex-grow bg-transparent border-none outline-none text-sm md:text-base text-gray-700 placeholder-gray-400 py-2.5 min-w-0"
				/>
				<button className="bg-primary text-[#1a1a1a] font-semibold text-sm md:text-base px-8 py-2.5 rounded-full hover:bg-[#c5ea4c] transition-colors shrink-0">
					Search
				</button>
			</form>

			{/* Divider */}
			<hr className="w-full border-t border-gray-100 my-10" />

			{/* Bottom Section */}
			<h3 className="text-xl md:text-2xl font-bold text-[#0b1b1a] mb-6">
				We deliver almost all over Bangladesh
			</h3>

			{/* Map Container */}
			<div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gray-100 relative">
				{/* 
                  If you are using a static image for the map, keep this img tag. 
                  If you are embedding a Google Maps iframe, replace the img with the iframe.
                */}
				<MapContainer
					center={position}
					zoom={13}
					scrollWheelZoom={true}
					className="w-full h-full"
					ref={mapRef} // Add a ref if you need to access the map instance
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{serviceAreasData.map((area, index) => (
						<Marker
							key={index}
							position={[area.latitude, area.longitude]}
						>
							<Popup>
								<strong>
									{area.region}, {area.district}, {area.city}
								</strong>
								<br />
								<span>
									Services area:
									{area.covered_area.join(", ")}
								</span>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</section>
	);
};

export default Coverage;
