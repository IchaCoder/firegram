import React from "react";
import "./nav.css";
import Nav from "./Nav";

const Title = ({ user }) => {
	return (
		<>
			<Nav user={user} />

			<div className="sub_title">
				<h2>Your Pictures</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</>
	);
};

export default Title;
