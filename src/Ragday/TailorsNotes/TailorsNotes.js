import React, { useContext, useState, useEffect } from "react";
import { Brim } from "../Scrapbook/State/Control";
import View from "../Scrapbook/View/View";
import "./tailorsnotes.css";
import Notes, { note } from "./Notes";

function TailorsNotes({ goBack }) {
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
		"pouch",
		"cuff",
		"hood",
		"zipper",
	]);

	useEffect(() => {
		components.map((each) => {
			setnote2([
				...note2,
				{
					name: each.name,
					onscreen: `control[${each}OnScreen]`,
					form: `control.[${each}Form]`,
					fabric: `control.[${each}Fabric]`,
					color: `control.[${each}Color]`,
				},
			]);
		});
	}, []);

	useEffect(() => {
		setcontrol({ ...control, attributeOnScreen: "form" });
	}, []);

	const [note2, setnote2] = useState([]);

	const [note1] = useState([
		{
			name: "hood",
			onscreen: control.hoodOnScreen,
			form: control.hoodForm,
			fabric: control.hoodFabric,
			color: control.hoodColor === "#1A1A1A" ? "black" : control.hoodColor,
		},
		{
			name: "collar",
			onscreen: control.collarOnScreen,
			form: control.collarForm,
			fabric: control.collarFabric,
			color: control.collarColor === "#1A1A1A" ? "black" : control.collarColor,
		},
		{
			name: "neckline",
			onscreen: control.necklineOnScreen,
			form: control.necklineForm,
			fabric: control.necklineFabric,
			color:
				control.necklineColor === "#1A1A1A" ? "black" : control.necklineColor,
		},
		{
			name: "yoke",
			onscreen: control.yokeOnScreen,
			form: control.yokeForm,
			fabric: control.yokeFabric,
			color: control.yokeColor === "#1A1A1A" ? "black" : control.yokeColor,
			design: "",
		},
		{
			name: "bodice",
			onscreen: control.bodiceOnScreen,
			form: control.bodiceForm,
			fabric: control.bodiceFabric,
			color:
				control.bodiceColorFront === "#1A1A1A"
					? "black"
					: control.bodiceColorFront,
		},
		{
			name: "placket",
			onscreen: control.placketOnScreen,
			form: control.placketForm,
			fabric: control.placketFabric,
			color:
				control.placketColor === "#1A1A1A" ? "black" : control.placketColor,
		},
		{
			name: "longsleeve",
			onscreen: control.longsleeveOnScreen,
			form: control.longsleeveForm,
			fabric: control.longsleeveFabric,
			color:
				control.longsleeveColorFront === "#1A1A1A"
					? "black"
					: control.longsleeveColorFront,
		},
		{
			name: "shortsleeve",
			onscreen: control.shortsleeveOnScreen,
			form: control.shortsleeveForm,
			fabric: control.shortsleeveFabric,
			color:
				control.shortsleeveColorFront === "#1A1A1A"
					? "black"
					: control.shortsleeveColorFront,
		},
		{
			name: "pocket",
			onscreen: control.pocketOnScreen,
			form: control.pocketForm,
			fabric: control.pocketFabric,
			color: control.pocketColor === "#1A1A1A" ? "black" : control.pocketColor,
		},
		{
			name: "cuff",
			onscreen: control.cuffOnScreen,
			form: control.cuffForm,
			fabric: control.cuffFabric,
			color: control.cuffColor === "#1A1A1A" ? "black" : control.cuffColor,
		},
		{
			name: "pouch",
			onscreen: control.pouchOnScreen,
			form: control.pouchForm,
			fabric: control.pouchFabric,
			color: control.pouchColor === "#1A1A1A" ? "black" : control.pouchColor,
		},
	]);

	return (
		<div className="tailorsnotes">
			<button id="goback" onClick={() => goBack("scrapbook")} />

			<View type="summary" />

			<Notes note={note1} />
		</div>
	);
}

export default TailorsNotes;
