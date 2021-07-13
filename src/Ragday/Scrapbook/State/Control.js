import React, { createContext, useState, useEffect } from "react";
import { Library } from "../../Library/Library";
import { Note5 } from "../../Notes";

export const Brim = createContext();

export const Control = (props) => {
	const getDesignWidth = (component, height, width) => {
		let x = component === "bodice" ? "170%" : "100%";
		return x;
	};

	const getDesignHeight = (component, height, width) => {
		return "120%";
	};

	const [control, setcontrol] = useState({
		//SCRAPBOOK

		Sroute: "scrapbook",

		article: "shirt",
		articleName: "Grey T-Shirt",
		dateCreated: "13/7/2020",
		publisher: "Russell J Emekoba",

		selected: "bodice",
		stack: [],
		expandMenu: true,
		attributeOnScreen: "color",
		useDesign: "image",

		comp: "components",
		// comp: "attributes",

		// SOCK

		sockcuffOnScreen: "",
		sockcuffForm: "plain",
		sockcuffFabric: "",
		sockcuffDesign: "",
		sockcuffColor: "",

		socklegOnScreen: true,
		socklegForm: "plain",
		socklegFabric: "cotton",
		socklegDesign: "",
		socklegColor: "white",

		ankleOnScreen: true,
		ankleForm: "plain",
		ankleFabric: "cotton",
		ankleDesign: "",
		ankleColor: "white",

		gussetOnScreen: true,
		gussetForm: "plain",
		gussetFabric: "cotton",
		gussetDesign: "",
		gussetColor: "white",

		footOnScreen: true,
		footForm: "plain",
		footFabric: "cotton",
		footDesign: "",
		footColor: "white",

		toeOnScreen: true,
		toeForm: "plain",
		toeFabric: "cotton",
		toeDesign: "",
		toeColor: "red",

		// SHIRT

		randomize: true,

		appendmaterial: true,
		appendTo: "",
		createNew: "",

		shirtSide: "front",

		shirtmeasureOnScreen: false,

		text: "",

		setExperiment: false,
		material: [],
		materialColor: "",
		materialDesign: "",

		button: [],
		buttonColor: "",

		lace: [],
		laceColor: "",

		collarOnScreen: false,
		collarForm: "club",
		collarFabric: "cotton",
		collarColor: "white",
		collarDesign: "",

		necklineOnScreen: true,
		necklineForm: "vneck",
		necklineFabric: "cotton",
		necklineColor: "white",
		necklineDesign: "",

		hoodOnScreen: false,
		hoodForm: "plain",
		hoodFabric: "wool",
		hoodColor: "white",
		hoodDesign: "",

		yokeOnScreen: false,
		yokeForm: "plain",
		yokeFabric: "cotton",
		yokeColor: "white",
		yokeDesign: "",

		bodiceOnScreen: true,
		bodiceForm: "plain2",
		bodiceFabric: "cotton",
		bodiceColorFront: "white",
		bodiceColorBack: "",
		bodiceDesignFront: "",
		bodiceDesignBack: "",
		topline: "",

		bodiceDesignWidth: getDesignWidth("bodice"),
		bodiceDesignHeight: getDesignHeight("bodice"),

		placketOnScreen: true,
		placketForm: "button",
		placketFabric: "cotton",
		placketColor: "black",
		// "#666",

		shortsleeveOnScreen: false,
		shortsleeveForm: "plain",
		shortsleeveFabric: "cotton",
		shortsleeveColorFront: "white",
		shortsleeveColorBack: "white",
		shortsleeveDesignFront: "",
		shortsleeveDesignBack: "",

		longsleeveOnScreen: true,
		longsleeveForm: "plain",
		longsleeveFabric: "cotton",
		longsleeveColorFront: "white",
		longsleeveColorBack: "white",
		longsleeveDesignFront: "",
		longsleeveDesignBack: "",

		pocketOnScreen: false,
		pocketForm: "patch",
		pocketFabric: "cotton",
		pocketColor: "white",
		pocketDesign: "",

		pouchOnScreen: false,
		pouchForm: "plain",
		pouchFabric: "cotton",
		pouchColor: "white",
		pouchDesign: "",

		hemOnScreen: false,
		hemForm: "long",
		hemFabric: "cotton",
		hemColor: "white",
		hemDesign: "",

		cuffOnScreen: true,
		cuffForm: "band",
		cuffFabric: "cotton",
		cuffColor: "white",
		sleeve: "short",
	});

	return (
		<Brim.Provider value={[control, setcontrol]}>
			{props.children}
		</Brim.Provider>
	);
};
