import React, { useState } from "react";
import Light from "./light.jsx";

const Home = () => {

	const [light, setLight] = useState(0)

	return (
		<>
			<div className="text-center d-flex justify-content-center">
				<div className="mt-3 traffic-light">
					<Light selected={light === 0} turnedOn={() => setLight(0)} color={"red"} className="red-light" />
					<Light selected={light === 1} turnedOn={() => setLight(1)} color={"yellow"} className="yellow-light" />
					<Light selected={light === 2} turnedOn={() => setLight(2)} color={"green"} className="green-light" />
				</div>
			</div>
		</>
	);
};

export default Home;
