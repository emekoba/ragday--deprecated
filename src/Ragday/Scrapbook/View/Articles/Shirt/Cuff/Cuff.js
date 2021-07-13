import React, { useContext } from "react";
import { Brim } from "../../../../State/Control";
import LongsleeveCuff from "./LongsleeveCuff";
import ShortsleeveCuff from "./ShortsleeveCuff";

function Cuff({ contrast, onScreen, form, color }) {
	const [control, setcontrol] = useContext(Brim);

	const select = () => {
		setcontrol({ ...control, selected: "cuff" });
	};

	const isPlain = control.shortsleeveForm === "plain" ? true : false;

	return (
		<div
			onClick={select}
			style={{ visibility: onScreen === true ? "visible" : "hidden" }}
		>
			{control.longsleeveOnScreen === true && (
				<LongsleeveCuff
					contrast={contrast}
					size={36}
					top={366}
					axis_L={66}
					axis_R={367}
					form={form}
					color={color}
				/>
			)}

			{control.shortsleeveOnScreen === true && !isPlain && (
				<ShortsleeveCuff
					contrast={contrast}
					size={60}
					top={227}
					axis_L={80}
					axis_R={330}
					form={form}
					color={color}
				/>
			)}
		</div>
	);
}

export default Cuff;
