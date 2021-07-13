import React, { useContext, useEffect, useState } from "react";
import { Brim } from "../../../State/Control";
import Neckline from "./Neckline";
import Collar from "./Collar";
import Bodice from "./Bodice";
import LongSleeve from "./LongSleeve";
import ShortSleeve from "./ShortSleeve";
import Placket from "./Placket";
import Pocket from "./Pocket";
import Yoke from "./Yoke";
import Cuff from "./Cuff/Cuff";
import Attachment from "./Attachment";
import Measure from "../../Measure/Measure";
import Material from "../Material";
import Hood from "./Hood";
import Pouch from "./Pouch";
import Hem from "./Hem";

function Shirt({ id, side }) {
	const [control] = useContext(Brim);

	const [colors] = useState([
		"white",
		"grey",
		"dodgerblue",
		"yellow",
		"rgb(135, 228, 155)",
		"#ed1c24",
		"#1A1A1A",
		"brown",
	]);

	const [components] = useState([
		"yoke",
		"placket",
		"pocket",
		"longsleeve",
		"pouch",
		"cuff",
	]);

	const bool = useState([true, false]);

	// useEffect(() => {
	//     if (control.randomize === true) {

	//         setInterval(() => {

	//             let v = change("colors");
	//             let newC = change("components");

	//             setcontrol({
	//                 ...control,

	//                 bodiceColorFront: v,
	//                 longsleeveColorFront: v,
	//                 bodiceColorBack: v,
	//                 longsleeveColorBack: v,
	//                 yokeColor: v,
	//                 necklineColor: v,
	//                 [`${newC}OnScreen`]: change("bool"),
	//                 [`${newC}Color`]: v,

	//             })

	//         }, 30000)
	//     }
	// }, [])

	const change = (type) => {
		if (type === "colors") {
			return colors[Math.floor(Math.random() * colors.length)];
		}

		if (type === "components") {
			return components[Math.floor(Math.random() * components.length)];
		}

		if (type === "bool") {
			return bool[Math.floor(Math.random() * bool.length)];
		}
	};

	return (
		<div className="shirt">
			<Hood
				id={"shirt " + id + " hood"}
				size={116}
				top={40}
				axis={179}
				onScreen={control.hoodOnScreen}
				form={control.hoodForm}
				color={control.hoodColor}
				design={control.hoodDesign}
				side={side}
			/>

			<Collar
				id={"shirt " + id + " collar"}
				contrast={false}
				size={81}
				top={100}
				axis={195}
				stroke={0.6}
				onScreen={control.collarOnScreen}
				form={control.collarForm}
				color={control.collarColor}
				side={side}
			/>

			<Neckline
				id={"shirt" + id + "neckline"}
				size={100}
				top={127}
				axis={185}
				contrast={true}
				onScreen={control.necklineOnScreen}
				form={control.necklineForm}
				colorFront={control.necklineColor}
				colorBack={control.necklineColor}
				side={side}
			/>

			<Yoke
				id={"shirt " + id + "yoke"}
				size={150}
				top={130}
				axis_L={125}
				axis_R={195}
				onScreen={control.yokeOnScreen}
				form={control.yokeForm}
				color={control.yokeColor}
				side={side}
			/>

			<Measure article="shirt" />

			<Bodice
				id={"shirt " + id + " bodice"}
				size={220}
				top={130}
				axis={125}
				useDesign={control.useDesign}
				onScreen={control.bodiceOnScreen}
				form={control.bodiceForm}
				designFront={control.bodiceDesignFront}
				designBack={control.bodiceDesignBack}
				colorFront={control.bodiceColorFront}
				colorBack={control.bodiceColorBack}
				side={side}
			/>

			<LongSleeve
				id={"shirt " + id + " longsleeve"}
				size={74}
				top={157}
				axis_L={68.5}
				axis_R={327}
				onScreen={control.longsleeveOnScreen}
				form={control.longsleeveForm}
				designFront={control.longsleeveDesignFront}
				designBack={control.longsleeveDesignBack}
				colorFront={control.longsleeveColorFront}
				colorBack={control.longsleeveColorBack}
				side={side}
			/>

			<ShortSleeve
				id={"shirt " + id + " shortsleeve"}
				size={74}
				top={157}
				axis_L={69}
				axis_R={329}
				onScreen={control.shortsleeveOnScreen}
				form={control.shortsleeveForm}
				designFront={control.shortsleeveDesignFront}
				designBack={control.shortsleeveDesignBack}
				colorFront={control.shortsleeveColorFront}
				colorBack={control.shortsleeveColorBack}
				side={side}
			/>

			<Placket
				id={"shirt " + id + " placket"}
				size={35}
				top={140}
				axis={216}
				onScreen={control.placketOnScreen}
				form={control.placketForm}
				color={control.placketColor}
				side={side}
			/>

			<Pouch
				id={"shirt " + id + " pouch"}
				size={34}
				top={210}
				axis={273}
				contrast={true}
				onScreen={control.pouchOnScreen}
				form={control.pouchForm}
				color={control.pouchColor}
				side={side}
			/>

			<Pocket
				id={"shirt " + id + " pocket"}
				size={34}
				top={210}
				axis={273}
				contrast={true}
				onScreen={control.pocketOnScreen}
				form={control.pocketForm}
				color={control.pocketColor}
				side={side}
			/>

			<Cuff
				id={"shirt " + id + " cuff"}
				contrast={false}
				onScreen={control.cuffOnScreen}
				form={control.cuffForm}
				color={control.cuffColor}
				side={side}
			/>

			<Hem
				id={"shirt " + id + " hem"}
				size={199}
				top={410}
				axis={135}
				onScreen={control.hemOnScreen}
				form={control.hemForm}
				color={control.hemColor}
				side={side}
			/>

			{control.setExperiment === true && (
				<Material
					id={"shirt" + id + "material"}
					size={35}
					top={148}
					axis={218}
					onScreen={true}
					form={control.materialForm}
					color={control.materialColor}
					design={control.materialDesign}
				/>
			)}

			{/* {control.material} */}

			<div
				style={{
					position: "absolute",
					top: 200,
					left: 190,
					zIndex: 8,
					fontFamily: "cursive",
					fontSize: 20,
					border:
						control.attributeOnScreen === "design" &&
						control.useDesign === "text"
							? "1px solid"
							: "",
					padding: 10,
				}}
			>
				{control.text}
			</div>
		</div>
	);
}

export default Shirt;
