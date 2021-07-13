import React, { useContext, useState } from "react";
import { Brim } from "../State/Control";

function Components() {
	const [control, setcontrol] = useContext(Brim);
	const [search, setsearch] = useState("");

	const [components] = useState([
		"collar",
		"neckline",
		"yoke",
		"placket",
		"pocket",
		// "hem",
		"longsleeve",
		"shortsleeve",
		"pouch",
		"cuff",
		"hood",
		"zipper",
	]);

	const componentClicked = (e) => {
		var btn = e.target.id;

		setcontrol({
			...control,
			[`${e.target.id}OnScreen`]: true,
			selected: e.target.id,
		});

		switch (btn) {
			case "collar":
				setcontrol({
					...control,
					collarOnScreen: true,
					necklineOnScreen: false,
					hoodOnScreen: false,
				});
				break;

			case "neckline":
				setcontrol({
					...control,
					necklineOnScreen: true,
					collarOnScreen: false,
					hoodOnScreen: false,
				});
				break;

			case "hood":
				setcontrol({
					...control,
					hoodOnScreen: true,
					necklineOnScreen: false,
					collarOnScreen: false,
				});
				break;

			case "longsleeve":
				setcontrol({
					...control,
					longsleeveOnScreen: true,
					shortsleeveOnScreen: false,
					sleeve: "long",
					selected: "longsleeve",
				});
				break;

			case "shortsleeve":
				setcontrol({
					...control,
					shortsleeveOnScreen: true,
					longsleeveOnScreen: false,
					sleeve: "short",
					selected: "shortsleeve",
				});
				break;

			default:
				break;
		}
	};

	const sortComponents = (e) => {
		setsearch(e.target.value);
	};

	const getComponents = (e) => {
		let filtered = components.filter((comp) => {
			return comp.indexOf(search) !== -1;
		});

		return filtered.map((btn) => (
			<div className="comp-item">
				<button id={btn} onClick={componentClicked} />
				{btn}
			</div>
		));
	};

	return (
		<div className="components">
			<input onChange={sortComponents} placeholder="search components...." />
			<div className="comp-btn">{getComponents()}</div>
		</div>
	);
}

export default Components;
