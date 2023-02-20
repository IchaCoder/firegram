import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import {
	signInWithRedirect,
	getRedirectResult,
	GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config";

const Signin = () => {
	const navigate = useNavigate();
	const handleSignin = (e) => {
		e.preventDefault();
	};

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
		getRedirectResult(auth)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access Google APIs.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				// The signed-in user info.
				const user = result.user;
				console.log(user);
				navigate("/");
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	return (
		<div>
			<form onSubmit={handleSignin}>
				<label htmlFor="name">Name</label>
				<input type="text" placeholder="Enter name" />
				<label htmlFor="password">Password</label>
				<input type="password" placeholder="Enter password" />
				<button>Submit</button>
				<h3>
					Dont have an account? <Link to="signup">Signup</Link>
				</h3>
			</form>
			<div className="signup">
				<h2>Signin with google</h2>
				<div className="google" onClick={signInWithGoogle}>
					<FcGoogle style={{ fontSize: "3rem" }} />
				</div>
			</div>
		</div>
	);
};

export default Signin;
