import React, {useEffect, useState} from "react";
import Test from "./Test";
import Counter from "./Counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = ({time}) => {
  // Convert number to string with leading zeros
  // Always return a 5-digit string (00000, 00001, etc.)
const stringTime = time.toString().padStart(5,"0");
// Grab each digit separately from the index
const digit5 = stringTime[0]; 
const digit4 = stringTime[1];
const digit3 = stringTime[2];
const digit2 = stringTime[3];
const digit1 = stringTime[4];

// console.log(stringTime +1)
// const digit1 = time < 10 ? stringTime[0] : stringTime[1]
// const digit2 = time < 10 ? "" : stringTime[0]
// Ternary operator format ex: condition ? do this : do that
// 0
// 1
// 2
// 3
// 4
// 5 
// 6
// 10
// 13
	return (
		<div className="text-center">
			<span className="digit5 border bg-secondary p-3 m-2">
				{digit5} 
			</span>
			<span className="digit4 border bg-secondary p-3 m-2">
				{digit4}
			</span>
			<span className="digit3 border bg-secondary p-3 m-2">
				{digit3}
			</span>
			<span className="digit2 border bg-secondary p-3 m-2">
				{digit2}
			</span>
			<span className="digit1 border bg-secondary p-3 m-2">
				{digit1}
			</span>
		</div>
	);
};

export default Home;