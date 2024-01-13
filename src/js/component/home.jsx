import React from "react";
import "../../styles/index.css";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";





//create your first component
const Home = () => {

	const [ color, setColor ] = useState("");

	return (
		<div className="contenedor">
		<div className="text-center  my-5 traffic-light">
			<div onClick={() => setColor("red")}
			 className={"light red mb-2" + (color == "red" ? " glow" : "")}></div>
			<div onClick={() => setColor("yellow")} className={"light yellow mb-2" + (color == "yellow" ? " glow" : "")}></div>
			<div onClick={() => setColor("green")} className={"light green mb-2" + (color == "green" ? " glow" : "")}></div>
		</div>
		</div>
	);
};

export default Home;
