import React, { useContext, useEffect } from "react";
import Form from "./Form";
import Color from "./Color";
import Size from "./Size/Size";
import Fabric from "./Fabric";
import Design from "./Design/Design";
import Append from "./Append/Append";
import Remarks from "./Remarks/Remarks";
import { Brim } from "../State/Control";

const Attributes = () => {
	const [control, setcontrol] = useContext(Brim);

	useEffect(() => {
		var children = document.getElementById(control.attributeOnScreen)
			.parentElement.childNodes;
		Array.from(children).forEach((btn) => {
			btn.style.backgroundColor = "white";
			btn.style.color = "var(--theme)";
		});
		document.getElementById(control.attributeOnScreen).style.backgroundColor =
			"var(--theme)";
		document.getElementById(control.attributeOnScreen).style.color = "white";
	});

	const buttonClick = (e) => {
		setcontrol({ ...control, attributeOnScreen: e.target.id });
	};

	return (
		<div className="attributes">
			<div className="menu">
				{control.attributeOnScreen === "form" && <Form />}
				{control.attributeOnScreen === "fabric" && <Fabric />}
				{control.attributeOnScreen === "color" && <Color />}
				{control.attributeOnScreen === "size" && <Size />}
				{control.attributeOnScreen === "design" && <Design />}
				{control.attributeOnScreen === "append" && <Append />}
				{control.attributeOnScreen === "remarks" && <Remarks />}
			</div>

			<div className="attr-btn">
				<button id="form" onClick={buttonClick}>
					form
				</button>
				<button id="fabric" onClick={buttonClick}>
					fabric
				</button>
				<button id="color" onClick={buttonClick}>
					color
				</button>
				<button id="size" onClick={buttonClick}>
					size
				</button>
				<button id="design" onClick={buttonClick}>
					design
				</button>
				<button id="append" onClick={buttonClick}>
					attach
				</button>
				<button id="remarks" onClick={buttonClick}>
					Remarks
				</button>
			</div>
		</div>
	);
};
export default Attributes;
