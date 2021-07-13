import React, { useContext, useEffect, useState } from "react";
import { Brim } from "../State/Control";
import Shirt from "./Articles/Shirt/Shirt";
import Collar from "./Articles/Shirt/Collar";
import Neckline from "./Articles/Shirt/Neckline";
import Sock from "./Articles/Sock/Sock";

function View({ type, getNotes, goBack }) {
	const [control, setcontrol] = useContext(Brim);

	const [components] = useState([
		"collar",
		"neckline",
		"yoke",
		"placket",
		"pocket",
		"hem",
		"longsleeve",
		"shortsleeve",
		"cuff",
		"hood",
		"zipper",
	]);

	useEffect(() => {
		var children = document.getElementById(control.shirtSide).parentElement
			.childNodes;

		Array.from(children).forEach((btn) => {
			btn.style.backgroundColor = "white";
		});

		document.getElementById(control.shirtSide).style.backgroundColor =
			"#e6e6e6";
	});

	const removeComponent = () => {
		if (
			control.selected === "collar" ||
			control.selected === "neckline" ||
			control.selected === "bodice"
		) {
			return null;
		} else {
			setcontrol({
				...control,
				[`${control.selected}OnScreen`]: false,
				selected: "bodice",
			});
		}
	};

	const changeSide = (e) => {
		setcontrol({ ...control, shirtSide: e.target.id });
	};

	const getFabric = () => {
		var fabric;

		switch (control.selected) {
			case "collar":
				fabric = control.collarFabric;
				break;

			case "neckline":
				fabric = control.necklineFabric;
				break;

			case "yoke":
				fabric = control.yokeFabric;
				break;

			case "bodice":
				fabric = control.bodiceFabric;
				break;

			case "longsleeve":
				fabric = control.longsleeveFabric;
				break;

			case "shortsleeve":
				fabric = control.shortsleeveFabric;
				break;

			case "placket":
				fabric = control.placketFabric;
				break;

			case "pocket":
				fabric = control.pocketFabric;
				break;

			case "cuff":
				fabric = control.cuffFabric;
				break;

			case "hood":
				fabric = control.hoodFabric;
				break;

			case "pouch":
				fabric = control.pouchFabric;
				break;

			case "hem":
				fabric = control.hemFabric;
				break;

			default:
				break;
		}

		return fabric;
	};

	const selectAll = () => {
		if (control.collarOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "collar"] });

		if (control.necklineOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "neckline"] });

		if (control.yokeOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "yoke"] });

		if (control.bodiceOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "bodice"] });

		if (control.longsleeveOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "longsleeve"] });

		if (control.shortsleeveOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "shortsleeve"] });

		if (control.pocketOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "pocket"] });

		if (control.placketOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "placket"] });

		if (control.hoodOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "hood"] });

		if (control.cuffOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "cuff"] });

		if (control.pouchOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "pouch"] });

		if (control.hemOnScreen === true)
			setcontrol({ ...control, stack: [...control.stack, "hem"] });

		console.log(control.stack);
	};

	const styles = {
		zoom: type === "summary" ? 0.75 : "",
		marginTop: type === "summary" ? 60 : "",
	};

	return (
		<div
			className="view"
			style={{ overflow: type === "summary" ? "hidden" : "scroll" }}
		>
			{type === "summary" ? null : (
				<div className="topboard">
					<button onClick={() => goBack("menu")}></button>

					<button id="remove" onClick={removeComponent}>
						x
					</button>

					<div className="component-board">
						{control.selected === ""
							? "........."
							: getFabric() + " " + control.selected}
					</div>

					<button onClick={getNotes} />

					{/* <button onClick={selectAll}>ALL</button> */}
				</div>
			)}

			<div className="side" style={{ left: type === "summary" ? 140 : "" }}>
				<button id="front" onClick={changeSide}>
					front
				</button>

				<button id="back" onClick={changeSide}>
					back
				</button>
			</div>

			{/* <button style={{ position: "absolute", left: 200 }} onClick={selectAll}>select all</button> */}

			<div className="view1" style={styles}>
				{control.article === "shirt" && (
					<Shirt side={control.shirtSide} id={1} />
				)}

				{control.article === "sock" && <Sock />}

				{/* {(control.article === 'short') && <Short/>}
                    {(control.article === 'skirt') && <Skirt/>}
                    {(control.article === 'blouse') && <Blouse/>}
                    {(control.article === 'sock') && <Sock/>}
                    {(control.article === 'pant') && "<Pant/>"}
                    {(control.article === 'belt') && "<Belt/>"}
                    {(control.article === 'glove') && "<Glove/>"} */}
			</div>

			{/* {type === "summary" ? null :


                <div className="view2">

                    {control.selected === "collar" &&
                        <Collar id={"shirt" + 1 + "collar"} size={250} axis={120} top={130} stroke={0.4} onScreen={true} form={control.collarForm} colorFront={control.collarColor} />}

                    {control.selected === "neckline" &&
                        <Neckline id={"shirt" + 1 + "neckline2"} size={250} axis={120} top={130} stroke={0.5} onScreen={true} form={control.necklineForm} colorFront={control.necklineColor} />}




                    <div className="slideshow">

                    <img src={require("../../Library/Designs/Design1.jpg")} alt=""/>
                    <img src={require("../../Library/Designs/Design2.jpg")} alt=""/>
                    <img src={require("../../Library/Designs/Design3.jpg")} alt=""/>
                    <img src={require("../../Library/Designs/Design4.png")} alt=""/>
                    <img src={require("../../Library/Designs/Design5.png")} alt=""/>
                    <img src={require("../../Library/Designs/Design6.jpg")} alt=""/>
                    <img src={require("../../Library/Designs/Design1.jpg")} alt=""/>
                    <img src={require("../../Library/Designs/Design2.jpg")} alt=""/>
                    <img src={require("../../Library/Designs/Design3.jpg")} alt=""/>
                    <img src={require("../../Library/Designs/Design4.png")} alt=""/>
                    <img src={require("../../Library/Designs/Design5.png")} alt=""/>
                    <img src={require("../../Library/Designs/Design6.jpg")} alt=""/>

                </div>
                </div>
            }
 */}
		</div>
	);
}

export default View;
