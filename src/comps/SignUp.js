import { FcGoogle } from "react-icons/fc";
import React from "react";
import {
	GoogleAuthProvider,
	signInWithRedirect,
	getRedirectResult,
} from "firebase/auth";
import { auth } from "../firebase/config";

const SignUp = () => {
	const provider = new GoogleAuthProvider();

	const handleSignup = () => {
		signInWithRedirect(auth, provider);
		getRedirectResult(auth)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access Google APIs.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;

				// The signed-in user info.
				const user = result.user;
				console.log(user);
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
		<div className="signup">
			<h2>Signup with google</h2>
			<div onClick={handleSignup}>
				<FcGoogle style={{ fontSize: "3rem" }} />
			</div>
		</div>
	);
};

export default SignUp;
