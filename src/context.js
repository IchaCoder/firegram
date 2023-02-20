import React, { useState, useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	// useEffect(() => {
	// 	auth.onAuthStateChanged((user) => {
	// 		if (user) {
	// 			console.log("user active");

	// 			localStorage.setItem(
	// 				"userInfo",
	// 				JSON.stringify({
	// 					name: user.displayName,
	// 					email: user.email,
	// 					verified: user.emailVerified,
	// 				})
	// 			);
	// 		} else {
	// 			localStorage.removeItem("userInfo");
	// 		}
	// 		console.log("user not active");
	// 	});
	// }, []);

	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
