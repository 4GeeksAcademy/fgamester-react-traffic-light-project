import React, { useState } from "react";
import Light from "./light.jsx";



const Home = () => {



	return (
		<>
			<div className="text-center d-flex justify-content-center">
				<div className="mt-3 traffic-light">
					<Light color={"red"} className="red-light" />
					<Light color={"yellow"} className="yellow-light" />
					<Light color={"green"} className="green-light" />
				</div>
			</div>
		</>
	);
};

export default Home;
