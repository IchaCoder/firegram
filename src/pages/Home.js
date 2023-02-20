import React from "react";
import ImageGrid from "../comps/ImageGrid";
import UploadForm from "../comps/UploadForm";
import Title from "../comps/Nav/Title";
import Auth from "./Auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Home = ({ user, setUser }) => {
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				setUser("");
				console.log("Signed out successfully");
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<>
			{user ? (
				<div className="App">
					<Title user={user} />
					<UploadForm />
					<ImageGrid />
					<button onClick={handleLogout} className="logout">
						Logout
					</button>
				</div>
			) : (
				<Auth />
			)}
		</>
	);
};

export default Home;
