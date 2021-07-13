import React, { useEffect, useContext } from "react";
import { Brim } from "../../../../State/Control";

function ShortsleeveCuff({ size, top, axis_L, axis_R, form, color }) {
	useEffect(() => {
		let rightMain = document.getElementById("cuff-right-main");
		rightMain.style.fill = color;

		let leftMain = document.getElementById("cuff-left-main");
		leftMain.style.fill = color;
	});

	const stylesRight = {
		width: size,
		left: axis_R,
		top: top,
		zIndex: 2,
	};

	const stylesLeft = {
		width: size,
		left: axis_L,
		top: top,
		zIndex: 2,
	};

	return (
		<div>
			{/* PLAIN */}

			{/* BAND */}
			{form === "band" && (
				<div>
					<svg style={stylesLeft} viewBox="0 0 278.58 134.54">
						<path
							d="M275.31,94.43l-5,5.72s2.23,1-5.51-2.53c-17.17-7.83-51.79-23-96.83-39.55l-.07,0c-20.55-7.55-43.25-15.38-67.47-22.93l-.07,0C71.06,25.93,39.51,17.18,7,9.86,2.19,8.78,7,9.79,2.19,8.78l.74-6.45S114.58,21.67,275.31,94.43Z"
							style={{ strokeWidth: 4 }}
						/>

						<path
							d="M238.8,129.34c.1,2.63-42.11-9.71-108.3-32.15S12,53.93,11.94,51.31l0-.11c1.51-2,53.08,14.38,118.22,36.47C196.38,110.11,238.72,126.71,238.8,129.34Z"
							style={{ strokeWidth: 3 }}
						/>

						<path
							id="cuff-left-main"
							d="M264.85,97.62l-.91,2.54L238.8,129.34c-.09-2.82-46-20.79-117-44.87C51.88,60.77,13.56,49.15,11.94,51.31L7,9.86c32.54,7.32,64.09,16.07,93.44,25.23l.07,0c23.34,7.6,46.35,15.49,67.47,22.93l.07,0C213.06,74.62,247.67,89.79,264.85,97.62Z"
							style={{ strokeWidth: 4 }}
						/>
					</svg>

					<svg style={stylesRight} viewBox="0 0 278.58 134.54">
						<path
							d="M3.27,94.43l5,5.72s-2.23,1,5.51-2.53c17.17-7.83,51.79-23,96.83-39.55l.07,0c20.55-7.55,43.25-15.38,67.47-22.93l.07,0c29.35-9.16,60.9-17.91,93.44-25.23,4.78-1.08,0-.06,4.78-1.08l-.74-6.45S164,21.67,3.27,94.43Z"
							style={{ strokeWidth: 4 }}
						/>

						<path
							d="M39.78,129.34c-.1,2.63,42.11-9.71,108.3-32.15S266.55,53.93,266.64,51.31l0-.11c-1.51-2-53.08,14.38-118.22,36.47C82.19,110.11,39.86,126.71,39.78,129.34Z"
							style={{ strokeWidth: 3 }}
						/>

						<path
							id="cuff-right-main"
							d="M13.73,97.62l.91,2.54,25.14,29.17c.09-2.82,46-20.79,117-44.87C226.69,60.77,265,49.15,266.64,51.31l5-41.45c-32.54,7.32-64.09,16.07-93.44,25.23l-.07,0C154.76,42.71,131.75,50.6,110.63,58l-.07,0C65.52,74.62,30.9,89.79,13.73,97.62Z"
							style={{ strokeWidth: 4 }}
						/>
					</svg>
				</div>
			)}
		</div>
	);
}

export default ShortsleeveCuff;
