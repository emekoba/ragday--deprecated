import React, { useContext, useEffect } from "react";
import { Brim } from "../../../State/Control";

function ShortSleeve({
	size,
	top,
	axis_R,
	axis_L,
	onScreen,
	form,
	colorFront,
	colorBack,
	designFront,
	designBack,
	side,
}) {
	const [control, setcontrol] = useContext(Brim);

	const select = () => {
		setcontrol({ ...control, selected: "shortsleeve" });
	};

	useEffect(() => {
		if (side === "front") {
			let leftMain = document.getElementById("leftsleeve-main");

			if (!designFront === false)
				leftMain.style.fill = "url(#shortsleevepattern)";
			else {
				leftMain.style.fill = colorFront;
			}

			let rightMain = document.getElementById("rightsleeve-main");

			if (!designFront === false)
				rightMain.style.fill = "url(#shortsleevepattern)";
			else {
				rightMain.style.fill = colorFront;
			}

			let leftTop = document.getElementById("leftsleeve-top");

			leftTop.style.fill = colorFront === "" ? "e6e6e6" : colorFront;
			leftTop.style.stroke = colorFront;

			let rightTop = document.getElementById("rightsleeve-top");

			rightTop.style.fill = colorFront === "" ? "e6e6e6" : colorFront;
			rightTop.style.stroke = colorFront;
		}
	});

	useEffect(() => {
		if (side === "back") {
			let backLeftMain = document.getElementById("back-leftsleeve-main");

			if (!designBack === false)
				backLeftMain.style.fill = "url(#shortsleevepattern)";
			else {
				backLeftMain.style.fill = colorBack;
			}

			let backRightMain = document.getElementById("back-rightsleeve-main");

			if (!designBack === false)
				backRightMain.style.fill = "url(#shortsleevepattern)";
			else {
				backRightMain.style.fill = colorBack;
			}

			let backLeftTop = document.getElementById("back-leftsleeve-top");

			backLeftTop.style.fill = colorBack === "" ? "e6e6e6" : colorBack;
			backLeftTop.style.stroke = colorBack;

			let backRightTop = document.getElementById("back-rightsleeve-top");

			backRightTop.style.fill = colorBack === "" ? "e6e6e6" : colorBack;
			backRightTop.style.stroke = colorBack;
		}
	});

	const stylesLeft = {
		width: size,
		left: axis_L,
		top: top,
		zIndex: 2,
	};

	const stylesRight = {
		width: size,
		left: axis_R,
		top: top,
		zIndex: 2,
	};

	var toLeft = 2;
	var toTop = 4;
	var c = 2;
	var magnify = 0.08;

	return (
		<div
			onClick={select}
			style={{ visibility: onScreen === true ? "visible" : "hidden" }}
		>
			{/* PLAIN SHORT SLEEVE */}
			{form === "plain" && (
				<div>
					{side === "front" ? (
						//FRONTSIDE

						<div>
							<svg style={stylesLeft} viewBox="0 0 60.73 190.96">
								<defs>
									<pattern
										id="shortsleevepattern"
										viewBox={toLeft + "," + toTop + "," + c + "," + magnify}
										width="110%"
										height="30%"
									>
										{/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
										<image height="10" width="10" href={designFront} />
									</pattern>
								</defs>

								<path
									id="leftsleeve-main"
									d="M48.46.88A.3.3,0,0,0,48,.62C39.64,8.08,19.69,22.92.69,62.21c-3.17,6.56,35,29.7,43.89,20.61,0,0,11.52-13.13,13.43-20C58,62.86,45.46,36.1,48.46.88Z"
								/>

								<path
									id="leftsleeve-top"
									d="M48.48.62c-2.89,33,8,58.71,9.37,61.9a.13.13,0,0,0,.25,0C65,37.59,50.66,4.8,48.74.58A.13.13,0,0,0,48.48.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>

							<svg
								style={{ ...stylesRight, left: axis_R - 2 }}
								viewBox="0 0 60.73 190.96"
							>
								<defs>
									<pattern
										id="shortsleevepattern"
										viewBox={toLeft + "," + toTop + "," + c + "," + magnify}
										width="110%"
										height="30%"
									>
										{/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
										<image height="10" width="10" href={designFront} />
									</pattern>
								</defs>

								<path
									id="rightsleeve-main"
									d="M12,.88a.3.3,0,0,1,.5-.26c8.32,7.45,28.27,22.29,47.27,61.59,3.17,6.56-35,29.7-43.89,20.61,0,0-11.52-13.13-13.43-20C2.45,62.86,15,36.1,12,.88Z"
								/>

								<path
									id="rightsleeve-top"
									d="M12,.62c2.89,33-8,58.71-9.37,61.9a.13.13,0,0,1-.25,0C-4.51,37.59,9.8,4.8,11.72.58A.13.13,0,0,1,12,.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>
						</div>
					) : (
						//BACKSIDE

						<div>
							<svg style={stylesLeft} viewBox="0 0 60.73 190.96">
								<defs>
									<pattern
										id="shortsleevepattern"
										viewBox={toLeft + "," + toTop + "," + c + "," + magnify}
										width="110%"
										height="30%"
									>
										{/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
										<image height="10" width="10" href={designBack} />
									</pattern>
								</defs>

								<path
									id="back-leftsleeve-main"
									d="M48.46.88A.3.3,0,0,0,48,.62C39.64,8.08,19.69,22.92.69,62.21c-3.17,6.56,35,29.7,43.89,20.61,0,0,11.52-13.13,13.43-20C58,62.86,45.46,36.1,48.46.88Z"
								/>

								<path
									id="back-leftsleeve-top"
									d="M48.48.62c-2.89,33,8,58.71,9.37,61.9a.13.13,0,0,0,.25,0C65,37.59,50.66,4.8,48.74.58A.13.13,0,0,0,48.48.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>

							<svg
								style={{ ...stylesRight, left: axis_R - 2 }}
								viewBox="0 0 60.73 190.96"
							>
								<defs>
									<pattern
										id="shortsleevepattern"
										viewBox={toLeft + "," + toTop + "," + c + "," + magnify}
										width="110%"
										height="30%"
									>
										{/* <polygon style={{fill: 'rgb(135, 228, 155)'}} points = "0, 0 2, 5 0, 10 5, 8 10, 10 8, 5 10, 0 5, 2"/> */}
										<image height="10" width="10" href={designBack} />
									</pattern>
								</defs>

								<path
									id="back-rightsleeve-main"
									d="M12,.88a.3.3,0,0,1,.5-.26c8.32,7.45,28.27,22.29,47.27,61.59,3.17,6.56-35,29.7-43.89,20.61,0,0-11.52-13.13-13.43-20C2.45,62.86,15,36.1,12,.88Z"
								/>

								<path
									id="back-rightsleeve-top"
									d="M12,.62c2.89,33-8,58.71-9.37,61.9a.13.13,0,0,1-.25,0C-4.51,37.59,9.8,4.8,11.72.58A.13.13,0,0,1,12,.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>
						</div>
					)}
				</div>
			)}

			{/* EXTRA-SHORT */}
			{form === "extrashort" && (
				<div>
					{side === "front" ? (
						//FRONTSIDE

						<div>
							<svg
								style={{ ...stylesLeft, left: axis_L + 15 }}
								viewBox="0 0 60.73 190.96"
							>
								<path
									id="leftsleeve-main"
									d="M35.61.88a.3.3,0,0,0-.5-.26C26.79,8.08,3.26,33.92.52,57c-.86,7.24,29.82,17.23,39.81,16.55a12.7,12.7,0,0,0,3.1-1.9c1.72-1.38-.19-1.95,1.72-8.79C45.16,62.86,32.6,36.1,35.61.88Z"
								/>

								<path
									id="leftsleeve-top"
									d="M35.63.62c-2.89,33,8,58.71,9.37,61.9a.13.13,0,0,0,.25,0C52.12,37.59,37.81,4.8,35.89.58A.13.13,0,0,0,35.63.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>

							<svg
								style={{ ...stylesRight, left: axis_R + -0.8, top: top + 1 }}
								viewBox="0 0 60.73 190.96"
							>
								<path
									id="rightsleeve-main"
									d="M12,.88a.3.3,0,0,1,.5-.26C20.81,8.08,44.34,33.92,47.09,57c.86,7.24-29.82,17.23-39.81,16.55a12.7,12.7,0,0,1-3.1-1.9c-1.72-1.38.19-1.95-1.72-8.79C2.45,62.86,15,36.1,12,.88Z"
								/>

								<path
									id="rightsleeve-top"
									d="M12,.62c2.89,33-8,58.71-9.37,61.9a.13.13,0,0,1-.25,0C-4.51,37.59,9.8,4.8,11.72.58A.13.13,0,0,1,12,.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>
						</div>
					) : (
						//BACKSIDE

						<div>
							<svg
								style={{ ...stylesLeft, left: axis_L + 15 }}
								viewBox="0 0 60.73 190.96"
							>
								<path
									id="back-leftsleeve-main"
									d="M35.61.88a.3.3,0,0,0-.5-.26C26.79,8.08,3.26,33.92.52,57c-.86,7.24,29.82,17.23,39.81,16.55a12.7,12.7,0,0,0,3.1-1.9c1.72-1.38-.19-1.95,1.72-8.79C45.16,62.86,32.6,36.1,35.61.88Z"
								/>

								<path
									id="back-leftsleeve-top"
									d="M35.63.62c-2.89,33,8,58.71,9.37,61.9a.13.13,0,0,0,.25,0C52.12,37.59,37.81,4.8,35.89.58A.13.13,0,0,0,35.63.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>

							<svg
								style={{ ...stylesRight, left: axis_R + -0.8, top: top + 1 }}
								viewBox="0 0 60.73 190.96"
							>
								<path
									id="back-rightsleeve-main"
									d="M12,.88a.3.3,0,0,1,.5-.26C20.81,8.08,44.34,33.92,47.09,57c.86,7.24-29.82,17.23-39.81,16.55a12.7,12.7,0,0,1-3.1-1.9c-1.72-1.38.19-1.95-1.72-8.79C2.45,62.86,15,36.1,12,.88Z"
								/>

								<path
									id="back-rightsleeve-top"
									d="M12,.62c2.89,33-8,58.71-9.37,61.9a.13.13,0,0,1-.25,0C-4.51,37.59,9.8,4.8,11.72.58A.13.13,0,0,1,12,.62Z"
									style={{ fill: "#e6e6e6" }}
								/>
							</svg>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default ShortSleeve;
