import React, { useEffect } from "react";
import ImageGrid from "./comps/ImageGrid";
import SignUp from "./comps/SignUp";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

function App() {
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				console.log(user);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}, []);
	return (
		<div className="App">
			<Title />
			<UploadForm />
			{/* <ImageGrid /> */}
			<SignUp />
		</div>
	);
}

export default App;
