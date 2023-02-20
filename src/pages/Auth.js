import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../comps/auth/auth.css";
import Signin from "../comps/auth/Signin";

const Auth = () => {
	return (
		<section className="auth">
			<div className="auth_section">
				{/* <div className="auth_tab">
					<NavLink
						end
						className={({ isActive }) => (isActive ? "active" : "")}
						to="/auth"
					>
						Signin
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "active" : "")}
						to="/auth/signup"
					>
						Signup
					</NavLink>
				</div> */}
				<Signin />
			</div>
		</section>
	);
};

export default Auth;
