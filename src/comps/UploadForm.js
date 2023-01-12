import React, { useState } from "react";
import Progress from "./Progress";

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const handleChange = (e) => {
		let selected = e.target.files[0];

		const types = ["image/png", "image/jpeg"];

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError(null);
		} else {
			setFile(null);
			setError("Please select an image file png and jpeg");
		}
	};

	return (
		<form>
			<label htmlFor="">
				<input
					style={{ cursor: "pointer" }}
					type="file"
					onChange={handleChange}
				/>
				<span>+</span>
			</label>
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div className="file">{file.name}</div>}
				{file && <Progress file={file} setFile={setFile} />}
			</div>
		</form>
	);
};

export default UploadForm;
