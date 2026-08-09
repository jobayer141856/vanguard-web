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
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);

	const signUpUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const signOutUser = () => {
		setLoading(true);
		return auth.signOut();
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
		signOutUser,
	};

	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
