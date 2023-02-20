import React, { useEffect, useState } from "react";
import SignUp from "./comps/auth/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import "./style.css";
import Signin from "./comps/auth/Signin";
import Profile from "./pages/Profile";

function App() {
	const [userId, setUserId] = useState();
	const [user, setUser] = useState("");
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				setUser(user);
				// console.log(user);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}, []);
	console.log(user);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home user={user} setUser={setUser} />} />
				{/* <Route path="auth" element={<Auth />}>
					<Route index element={<Signin />} />
					<Route path="signup" element={<SignUp />} />
				</Route> */}
				<Route path="profile" element={<Profile user={user} />} />
			</Routes>
		</Router>
	);
}

export default App;
