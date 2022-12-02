// Practice on the Quotes and Addquotes:
import React from "react";
import { useState } from "react";
import "../Components/File1.css" ;
import File2 from "../Components/File2"

const QuoteApp = () =>{
	const [counter, setCounter] = useState(0)
	const [quotes, setQuotes] =  useState([
		"This is the day the lord has made",
		"only the intelligent one's are ready to learn",
		"He who fights to run away, leaves to fight another day",
		"Time and tide waits for no man",
		"I am a legend",
		"I live by the mercies of God",
		"Strangers shall rebuild my walls and kings will serve me",
		"The YOU in YOU is the YOU that YOU will be. If it will be YOU, it's up to YOU.",
		"You need a UNICONIC TEAM and a UNICONIC IDEA together with a UNICONIC MOVE to build UNICORNS",
		"If you don't build your dreams, people will pay you to build theirs!! ",
		"Dream BIG!!",
		"Don't Quit",
		"Today is tough, tomorrow will be tougher but the day after tomorrow will be beautiful. But we give up today.",
		"You're beautiful"
	])

	const [addText, setText] = useState("");

	const increment = () =>{
		return setCounter(counter + 1);
	}

	const decrement = () =>{
		if (counter <= 0) {
			return setCounter(quotes.length - 1)
		} else {
			return setCounter(counter - 1)
		}
	}

	const addQuotes = () =>{
		return setQuotes([...quotes, addText])
	}
console.log(counter);
console.log(quotes);
console.log(quotes.length);
console.log("Text i added: ", addText);
	return(
		<div className="container">
			<h1>Hello Sylvia</h1>
			<h3>Welcome to my Quotes Site <br />
			    Get your daily inspiration from here <br />
				You can also add your quotes...
			</h3>
			<div className="input">
				<input type="text" placeholder="Enter your quotes" onChange={((e) =>{setText(e.target.value)})} />
				<button onClick={addQuotes}>Add Quotes</button>
			</div>

			

			<div className="quotes"><button className="special-btn">

		<File2 Slide = {quotes[counter % quotes.length]} />

				</button></div>

			<div className="button">
			<button onClick={decrement}>-</button>
			<button onClick={increment}>+</button>
			</div>
		</div>
	)

}
export default QuoteApp;
