import React, { useState, useEffect, useContext } from "react";
import Scrapbook from "./Scrapbook/Scrapbook";
import "./Ragday.css";
import { Library } from "./Library/Library";
import { Control, Brim } from "./Scrapbook/State/Control";
import TailorsNotes from "./TailorsNotes/TailorsNotes";

function Ragday() {
	const [page, setpage] = useState("splash");

	useEffect(() => {
		setTimeout(() => {
			setpage("menu");
		}, 3000);
	}, []);

	const loadScrapbook = () => {
		setpage("scrapbook");
	};

	const getNotes = () => {
		setpage("tailorsnotes");
	};

	const goBack = (x) => {
		switch (x) {
			case "scrapbook":
				setpage("scrapbook");
				break;

			case "menu":
				setpage("menu");
				break;

			default:
				break;
		}
	};

	return (
		<Control>
			<div className="ragday">
				{page === "splash" && (
					<div className="splash">
						<img src={Library.splash} alt="" />
					</div>
				)}

				{page === "menu" && <Menu loadScrapbook={loadScrapbook} />}

				{page === "scrapbook" && (
					<Scrapbook getNotes={getNotes} goBack={(x) => goBack(x)} />
				)}

				{page === "tailorsnotes" && <TailorsNotes goBack={(x) => goBack(x)} />}
			</div>
		</Control>
	);
}

export default Ragday;

function Menu({ loadScrapbook }) {
	const [control, setcontrol] = useContext(Brim);

	return (
		<div className="ragday-menu">
			<div className="types">
				<button
					id="shirt"
					onClick={() => setcontrol({ ...control, article: "shirt" })}
				/>

				<button
					id="short"
					onClick={() => setcontrol({ ...control, article: "short" })}
				/>

				<button
					id="trouser"
					onClick={() => setcontrol({ ...control, article: "trouser" })}
				/>

				<button
					id="skirt"
					onClick={() => setcontrol({ ...control, article: "skirt" })}
				/>

				<button
					id="blouse"
					onClick={() => setcontrol({ ...control, article: "blouse" })}
				/>
			</div>

			<div className="templates">
				<button id="shortsleeve-tshirt" onClick={loadScrapbook} />

				<button id="longsleeve-tshirt" onClick={loadScrapbook} />

				<button
					id="Hoodie"
					onClick={loadScrapbook}
					style={{
						backgroundImage: `url(${Library.hoodie1})`,
						backgroundSize: 190,
						backgroundPositionX: -25,
					}}
				/>

				<button id="button-shirt" onClick={loadScrapbook} />

				<button id="" onClick={loadScrapbook} />

				<button id="" onClick={loadScrapbook} />
			</div>
		</div>
	);
}
