import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import About from "./Components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};
	let colorMode = () =>{
		if (mode === "light") {
			setMode("primary")
			document.body.style.backgroundColor = "094cb0";
			document.body.style.color = "black";
			showAlert("Primary Color Enabled", "success");
		}
		else{
			setMode("light");
			document.body.style.backgroundColor = "073c8a";
			document.body.style.color = "white";
			showAlert("Light mode has been Enabled", "success");
		}
	}

	let toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#303030";
			document.body.style.color = "white";
			// document.title = "TextUtils: Dark-mode";
			showAlert("Dark mode has been Enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
			// document.title = "TextUtils: Light-mode";
			showAlert("Light mode has been Enabled", "success");
		}
	};
	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} colorMode = {colorMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					<Switch>
						<Route exact path="/about">
							<About mode={mode} />
						</Route>

						<Route exact path="/">
							<TextForm
								showAlert={showAlert}
								heading="Enter text here to Analyse"
							/>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
