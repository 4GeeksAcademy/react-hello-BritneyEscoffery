import React, {useEffect, useState} from "react";
import Test from "./Test";
import Counter from "./Counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = ({time}) => {
const stringTime = time.toString()
console.log(stringTime +1)
const digit1 = time < 10 ? stringTime[0] : stringTime[1]
const digit2 = time < 10 ? "" : stringTime[0]
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
			
			<span className="digit1 border bg-secondary p-3 m-2">
				{digit2} 
			</span>
			<span className="digit2 border bg-secondary p-3 m-2">
				{digit1}
			</span>
		</div>
	);
};

export default Home;