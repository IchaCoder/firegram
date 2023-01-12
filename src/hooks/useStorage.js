import { useState, useEffect } from "react";
import { storage, db, timestamp } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState("");
	const [url, setUrl] = useState("");

	useEffect(() => {
		// create reference
		const storageRef = ref(storage, file.name);

		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				let percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			async () => {
				const createdAt = timestamp;
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					setUrl(url);
					addDoc(collection(db, "images"), {
						url,
						createdAt,
					});
				});
			}
		);
	}, [file]);

	return { url, progress, error };
};

export default useStorage;
