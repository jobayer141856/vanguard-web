import { AuthContext } from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "../../firebase/firebase.init";
import { useState, useEffect } from "react";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const { loading, setLoading } = useState(false);
	const [user, setUser] = useState(null);

	const signUpUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential.user);
				setUser(userCredential.user);
				setLoading(true);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				console.error(`Error [${errorCode}]: ${errorMessage}`);
			});
	};

	const signInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential.user);
				const user = userCredential.user;
				setUser(user);
				setLoading(true);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error(`Error [${errorCode}]: ${errorMessage}`);
			});
	};

	const googleSignIn = () => {
		// Implement Google sign-in logic here
		return signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				console.log("Google Access Token:", token);
				const user = result.user;
				console.log("Signed in user:", user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential =
					GoogleAuthProvider.credentialFromError(error);
				console.log(`Error [${errorCode}]: ${errorMessage}`);
				console.log("Email:", email);
				console.log("Credential:", credential);
			});
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		signUpUser,
		signInUser,
		user,
		loading,
		googleSignIn,
	};

	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
