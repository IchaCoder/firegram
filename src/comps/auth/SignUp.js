import { FcGoogle } from "react-icons/fc";
import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { handleSignup } from "../../hooks/handleGoogleSignin";
import { Link } from "react-router-dom";

const SignUp = () => {
	const provider = new GoogleAuthProvider();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="signup">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name</label>
				<input type="text" placeholder="Enter name" />
				<label htmlFor="password">Password</label>
				<input type="password" placeholder="Enter password" />
				<button>Submit</button>
				<h3>
					Already have an account? <Link to="/auth">Signin</Link>
				</h3>
			</form>
			<h2>Signup with google</h2>
			<div className="google" onClick={() => handleSignup(provider)}>
				<FcGoogle style={{ fontSize: "3rem" }} />
			</div>
		</div>
	);
};

export default SignUp;
