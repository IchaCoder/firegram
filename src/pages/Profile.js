import React from "react";
import Nav from "../comps/Nav/Nav";
import "../comps/profile/profile.css";
import logo from "../images/dp.png";

const Profile = ({ user }) => {
	return (
		<div className="App">
			<Nav />
			<div className="profile">
				<div className="profile_pic">
					<img src={user.photoURL} alt="profile picture" />
					<div className="add">+</div>
				</div>
				<div className="profile_name">
					<h2>{user.displayName}</h2>
					<h2>{user.email}</h2>
					<h3>1k Friends</h3>
				</div>
			</div>
		</div>
	);
};

export default Profile;
