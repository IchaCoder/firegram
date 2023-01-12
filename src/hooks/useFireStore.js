import {
	collection,
	getDocs,
	orderBy,
	doc,
	onSnapshot,
	query,
} from "firebase/firestore";

import { useState, useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = (data) => {
	const [docs, setDocs] = useState([]);

	// This approach fetches data but not in real time

	// const unsubscribe = async () => {
	// 	const querySnapshot = await getDocs(
	// 		collection(db, data),
	// 		orderBy("createdAt", "desc")
	// 	);
	// 	const documents = [];
	// 	querySnapshot.forEach((doc) => {
	// 		documents.push({ ...doc.data(), id: doc.id });
	// 	});
	// 	setDocs(documents);
	// };

	// useEffect(() => {
	// 	unsubscribe();
	// 	return () => unsubscribe();
	// }, [data]);

	// Getting data from realtime when making changes
	useEffect(() => {
		// Query by createdAt field in descending order
		const q = query(collection(db, data), orderBy("createdAt", "desc"));

		const unsubscribe = onSnapshot(
			q,
			(snapshot) => {
				const documents = [];
				snapshot.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				// ...
				setDocs(documents);
			},
			(error) => {
				// ...
				console.log(error);
			}
		);

		return () => unsubscribe();
	}, [data]);

	return { docs };
};

export default useFirestore;
