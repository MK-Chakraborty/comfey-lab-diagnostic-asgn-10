import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signInUsingGoogle = () => signInWithPopup(auth, googleProvider);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
        })
    },[])

    const logOut = () => {
        signOut(auth)
        .then(()=> {
            setUser({});
        })
    }

    return {
        user,
        error,
        logOut,
        signInUsingGoogle
    }
}

export default useFirebase;