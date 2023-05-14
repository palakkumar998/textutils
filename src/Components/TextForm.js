import React, { useState } from "react";

export default function TextForm(props) {
	let myStyle = {
		color: props.mode === "dark" ? "white" : "black",
		backgroundColor: props.mode === "dark" ? "#212529" : "white",
	};
	const handleUpclick = () => {
		// console.log("uppercase is clicked");
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to UPPER-CASE", "success");
	};

	const handleDownClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.showAlert("Converted to lower-case", "success");
	};

	const handleClearClick = () => {
		let newText = "";
		setText(newText);
		props.showAlert("Text Area is cleared", "success");
	};

	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const [text, setText] = useState("Enter text  here");
	// text = "enter text here"  this syntax will not allowed in react it will automatically ignored by reactjs

	return (
		<>
			<div className="container ">
				<h1> {props.heading} </h1>
				<div className="mb-3 ">
					<textarea
						className="form-control"
						value={text}
						onChange={handleOnChange}
						id="myBox"
						rows="10"
						style={props.myStyle}
					></textarea>
				</div>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2 my-1"
					onClick={handleUpclick}
				>
					Convert-to-Upper
				</button>
				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2  my-1 btn btn-warning"
					onClick={handleDownClick}
				>
					Convert-to-lower
				</button>

				<button
					disabled={text.length === 0}
					className="btn btn-primary mx-2  my-1 btn btn-secondary"
					onClick={handleClearClick}
				>
					Clear Text
				</button>
			</div>
			<div className="container my-3">
				<h1>Your Text Summary</h1>
				<p>
					{" "}
					{
						text.split(/\s+/).filter((element) => {
							return element.length !== 0}).length}{" "}
					Words & {text.length} characters
				</p>
				<p>
					{" "}
					{0.008 *
						text.split('').filter((element) => {
							return element.length !== 0}).length}{" "}
					Minutes{" "}
				</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Nothing to Preview"} </p>
			</div>
		</>
	);
}
