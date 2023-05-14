import React, { useState } from "react";

export default function About(props) {
	let myStyle = {
		color: props.mode === "dark" ? "white" : "black",
		backgroundColor: props.mode === "dark" ? "#212529" : "white",
		border: "0px solid grey",
		borderRadius: "10px",
		height: "150px",
	};
	return (
		<>
			<div className="container" style={myStyle}>
				<div className="container text-center">
					<strong>
						<h1 className="display-4"> About us</h1>
					</strong>
					<p className="para">
						Online Text Tools offers a collection of useful text processing
						utilities. All text tools are simple, easy to use, and they share
						the same user interface. Once you learn how to use one of the tools,
						you'll instantly know how to use all of them. The utilities work
						right from your browser and don't require downloads and installs.
						Created by team essential.
					</p>
				</div>
			</div>
		</>
	);
}
