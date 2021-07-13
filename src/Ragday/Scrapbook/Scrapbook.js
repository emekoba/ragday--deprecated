import React, { useState, useEffect, useContext } from "react";
import "./Scrapbook.css";
import Topbar from "./Topbar/Topbar";
import View from "./View/View";
import Attributes from "./Attributes/Attributes";
import Components from "./Components/Components";
import { Brim } from "./State/Control";

function Scrapbook({ getNotes, goBack }) {
	const [control] = useContext(Brim);
	const [route, setroute] = useState(control.comp);

	useEffect(() => {
		var children = document.getElementById(route).parentElement.childNodes;

		Array.from(children).forEach((btn) => {
			btn.style.border = "none";
		});

		document.getElementById(route).style.borderBottom =
			"4px solid var(--theme)";
	});

	const changeTab = (e) => {
		if (e.target.id === "components") {
			setroute("components");
		}

		if (e.target.id === "attributes") {
			setroute("attributes");
		}
	};

	return (
		<div className="scrapbook">
			{/* <Topbar getNotes={getNotes}/> */}

			<View getNotes={getNotes} goBack={goBack} />

			<div className="sidebar">
				<div className="tabs">
					<button id="components" onClick={changeTab}>
						Components
					</button>

					<button id="attributes" onClick={changeTab}>
						Attributes
					</button>
				</div>

				{route === "components" && <Components />}

				{route === "attributes" && <Attributes />}
			</div>
		</div>
	);
}

export default Scrapbook;
