import React, {useState} from "react";

export default function DarkMode() {
	// myStyle is a css object pls treat it like js object not as css
	const [myStyle, setMyStyle] = useState({
		color: "white",
		backgroundColor: "black",
	});
	const [btnText, setBtnText] = useState("Enable Dark mode");

	const toggleStyle = () => {
		if (myStyle.color === "white") {
			setMyStyle({
				color: "black",
				backgroundColor: "white",
			});
			setBtnText("Enable light mode");
		} else {
			setMyStyle({
				color: "white",
				backgroundColor: "balck",
			});
			setBtnText("Enable dark mode");
		}
	};
	return (
		<>
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="flexSwitchCheckDefault"
					onClick={toggleStyle}
				/>
				<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
					Enable Dark Mode
				</label>
			</div>
		</>
	);
}
