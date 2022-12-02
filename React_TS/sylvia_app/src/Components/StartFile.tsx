import React from 'react';
import { useState } from "react";
import CounterFile from "../Components/CounterFile";

// This is a Today component 

const StartFile = () =>{
    const [counter, setCounter] = useState(0);

    const increment = () =>{
		return setCounter(counter + 1);
	}

	const decrement = () =>{
		if (counter <= 0) {
			return setCounter(counter - 1)
	}
}
    return(
        <div>
             This is my start file.
             <CounterFile counter = {counter}  />
            
             <div className="button">
			    <button onClick={decrement}>-</button>
			    <button onClick={increment}>+</button>
			</div>
    
        </div>
    )
}

export default StartFile;

