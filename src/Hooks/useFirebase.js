import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
            else{
                setUser({});
            }
            setIsLoading(false)
        })
    },[])

    

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(()=> {
            setUser({});
        })
        .finally(() => setIsLoading(false))
    }

    return {
        user,
        logOut,
        isLoading,
        setIsLoading,
        signInUsingGoogle
    }
}

export default useFirebase;