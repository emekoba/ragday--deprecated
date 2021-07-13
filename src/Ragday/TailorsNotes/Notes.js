import React, { useContext } from "react";
import { Brim } from "../Scrapbook/State/Control";

function Notes({ note }) {
	const [control, setcontrol] = useContext(Brim);

	var componentFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>{each.name}</div>
					<br />
				</div>
			);
		}
	});

	var formFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>{each.form}</div>
					<br />
				</div>
			);
		}
	});

	var fabricFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>{each.fabric}</div>
					<br />
				</div>
			);
		}
	});

	var colorFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>
						<div style={{ backgroundColor: each.color }}></div>
						{each.color}
					</div>
					<br />
				</div>
			);
		}
	});

	var sizeFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>{each.size}</div>
					<br />
				</div>
			);
		}
	});

	var designFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>{each.design}</div>
					<br />
				</div>
			);
		}
	});

	var attachmentFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>{each.attachment}</div>
					<br />
				</div>
			);
		}
	});

	var remarksFront = note.map((each) => {
		if (each.onscreen === true) {
			return (
				<div>
					<div>{each.remarks}</div>
					<br />
				</div>
			);
		}
	});

	var componentBack;

	return (
		<div className="notes">
			<div className="note-info">
				<div>
					<div>Name : </div>
					<div>{control.articleName}</div>
				</div>
				<br />

				<div>
					<div>Date Created : </div>
					<div>{control.dateCreated}</div>
				</div>
				<br />

				<div>
					<div>Published By : </div>
					<div>{control.publisher}</div>
				</div>
				<br />
			</div>

			{control.shirtSide === "front" && (
				<Front
					component={componentFront}
					form={formFront}
					fabric={fabricFront}
					color={colorFront}
					size={sizeFront}
					design={designFront}
					attachment={attachmentFront}
					remarks={remarksFront}
				/>
			)}

			{control.shirtSide === "back" && (
				<Back
					component={componentBack}
					form={formFront}
					fabric={fabricFront}
					color={colorFront}
					size={sizeFront}
					design={designFront}
					attachment={attachmentFront}
					remarks={remarksFront}
				/>
			)}

			<div>
				<div className="row">
					<div className="header">Measurements</div>
					{sizeFront}
				</div>
				<div className="row">
					<div className="header">Design</div>
					{designFront}
				</div>
			</div>
		</div>
	);
}

export default Notes;

function Front({
	component,
	form,
	fabric,
	color,
	size,
	design,
	attachment,
	remarks,
}) {
	return (
		<div className="tables">
			<div className="row">
				<div className="header">Components</div>
				{component}
			</div>
			<div className="row">
				<div className="header">Form</div>
				{form}
			</div>
			<div className="row">
				<div className="header">Fabric</div>
				{fabric}
			</div>
			<div className="color-row">
				<div className="header">Color</div>
				{color}
			</div>
			<div className="row">
				<div className="header">Attachments</div>
				{attachment}
			</div>
			<div className="row">
				<div className="header">Remarks</div>
				{remarks}
			</div>
		</div>
	);
}

function Back({ component }) {
	return (
		<div className="tables">
			<div className="row">
				<div className="header">Components</div>
				{component}
			</div>
			<div className="row">
				<div className="header">Form</div>
				{component}
			</div>
			<div className="row">
				<div className="header">Fabric</div>
				{component}
			</div>
			<div className="row">
				<div className="header">Color</div>
				{component}
			</div>
			<div className="row">
				<div className="header">Attachments</div>
				{component}
			</div>
			<div className="row">
				<div className="header">Remarks</div>
				{component}
			</div>
		</div>
	);
}
