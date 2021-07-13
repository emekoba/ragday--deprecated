import React, { useContext, useState, useEffect } from "react";
import { Library } from "../../../Library/Library";
import { Brim } from "../../State/Control";
import Text from "./Text";

const Design = () => {
	const [control, setcontrol] = useContext(Brim);
	const [menu, setmenu] = useState("image");

	const [palette, setpalette] = useState([
		Library.design1,
		// Library.design2,
		// Library.design3,
		Library.design4,
		// Library.design5,
		Library.design6,
		// Library.design7,
		// Library.design8,
		Library.design9,
		// Library.background1,
		Library.background2,

		// update palette with actual popular clothe Designs....
	]);

	useEffect(() => {
		var children = document.getElementById(menu).parentElement.childNodes;

		Array.from(children).forEach((btn) => {
			btn.style.backgroundColor = "white";
			btn.style.color = "var(--theme)";
		});

		document.getElementById(menu).style.backgroundColor = "var(--theme)";

		document.getElementById(menu).style.color = "white";
	});

	useEffect(() => {
		switch (menu) {
			case "pattern":
				setmenu("pattern");
				setcontrol({ ...control, useDesign: "pattern" });
				break;

			case "image":
				setmenu("image");
				setcontrol({ ...control, useDesign: "image" });
				break;

			case "text":
				setmenu("text");
				setcontrol({ ...control, useDesign: "text" });
				break;

			default:
				break;
		}
	}, []);

	function updatePalette(newDesign) {
		setpalette([Library.wool1, ...palette]);
	}

	const loadDesign = (e) => {
		if (e.target.id === "clear") {
			setcontrol({ ...control, [`${control.selected}Design`]: "" });

			if (control.shirtSide === "front") {
				setcontrol({ ...control, [`${control.selected}DesignFront`]: "" });
			}

			if (control.shirtSide === "back") {
				setcontrol({ ...control, [`${control.selected}DesignBack`]: "" });
			}
		}

		palette.map((eachDesign) => {
			if (eachDesign === e.target.id) {
				setcontrol({ ...control, [`${control.selected}Design`]: eachDesign });

				if (control.shirtSide === "front") {
					setcontrol({
						...control,
						[`${control.selected}DesignFront`]: eachDesign,
					});
				}

				if (control.shirtSide === "back") {
					setcontrol({
						...control,
						[`${control.selected}DesignBack`]: eachDesign,
					});
				}
			}
		});
	};

	const loadPattern = (e) => {
		switch (e.target.id) {
			case "aa":
				setcontrol({
					...control,
					bodicePattern: (
						<polygon
							style={{ fill: control.longsleeveColor }}
							points="0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"
						/>
					),
				});
				break;

			case "clear":
				control.shirtSide === "front"
					? setcontrol({
							...control,
							format: "",
					  })
					: setcontrol({
							...control,
							formet: "",
					  });
				break;

			case "hood":
				control.shirtSide === "front"
					? setcontrol({ ...control, hoodDesign: "" })
					: setcontrol({ ...control, hoodDesignBack: "" });
				break;

			default:
				break;
		}
	};

	const changeMenu = (e) => {
		switch (e.target.id) {
			case "pattern":
				setmenu("pattern");
				setcontrol({ ...control, useDesign: "pattern" });
				break;

			case "image":
				setmenu("image");
				setcontrol({ ...control, useDesign: "image" });
				break;

			case "text":
				setmenu("text");
				setcontrol({ ...control, useDesign: "text" });
				break;

			default:
				break;
		}
	};

	const selectorStyles = {
		// border: "1px solid",
		height: 80,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	};

	const btn = {
		fontSize: 7,
		border: "1px solid var(--theme)",
		borderRadius: 5,
		height: 20,
		marginRight: 10,
		marginLeft: 0,
		padding: 2,
		borderTopLeftRadius: 0,
		fontWeight: "bold",
	};

	return (
		<div className="design">
			<div style={selectorStyles}>
				<button id="pattern" onClick={changeMenu} style={btn}>
					P
				</button>
				<button id="image" onClick={changeMenu} style={btn}>
					I
				</button>
				<button id="text" onClick={changeMenu} style={btn}>
					T
				</button>
			</div>

			{menu === "pattern" && (
				<div className="pattern">
					<button id="clear" onClick={loadPattern} />

					<button id="aa" onClick={loadPattern}>
						{/* <svg style={{ fill: 'url(#bodicepattern' }} /> */}
					</button>

					<button id="bb" onClick={loadPattern} />
				</div>
			)}

			{menu === "image" && (
				<div className="image">
					<button id="clear" onClick={loadDesign} />
					<button id="new-design" onClick={updatePalette}>
						+
					</button>
					{palette.map((eachDesign) => (
						<button
							id={eachDesign}
							onClick={loadDesign}
							style={{ backgroundImage: `url(${eachDesign})` }}
						/>
					))}
				</div>
			)}

			{menu === "text" && <Text />}
		</div>
	);
};
export default Design;
