import React from "react";

const Counter = ({seconds}) => {
    if (seconds >= 10){
        console.log("it's greater than 10!!")
    }
        
    return(
        <div>
           here are the: {seconds}
        </div>
    )
};


export default Counter;