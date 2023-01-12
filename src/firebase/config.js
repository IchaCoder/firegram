import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCW_fTjjVjgVWYE6h29yEb2KsigMI9BB70",
	authDomain: "firegram-sark.firebaseapp.com",
	projectId: "firegram-sark",
	storageBucket: "firegram-sark.appspot.com",
	messagingSenderId: "251463532945",
	appId: "1:251463532945:web:bc640683556257046c1a30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const timestamp = serverTimestamp();
const auth = getAuth();

export { db, storage, timestamp, auth };
