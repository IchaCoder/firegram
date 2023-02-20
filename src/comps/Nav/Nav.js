import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import dp from "../../images/dp.png";

const Nav = ({ user }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<div className="title">
			<h1>FireGram</h1>
			{pathname !== "/" ? (
				<Link to="/">Home</Link>
			) : (
				<div onClick={() => navigate("profile")}>
					<img
						src={user.photoURL}
						alt="profile logo"
						width="40px"
						height="40px"
					/>
				</div>
			)}
		</div>
	);
};

export default Nav;
