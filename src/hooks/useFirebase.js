import { useState } from "react";
import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from "../firebase/firebase.init";


initializeFirebase();


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(true);

    //implement new user registration
    const newUserRegister = () => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    //user name set
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // const newUser = { ...user, displayName: name };
            // setUser(newUser);
            window.location.reload();
        }).catch(error => {
            setErrorMsg(error.message);
        });
    }

    //verify user email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                //email verification sent
            });
    }





    //sign in implementation
    const singInProcess = () => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    //trace the user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    //implement sign out 
    const handleSignOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            console.log(error);
        }).finally(() => setLoading(false));

    }

    //get the value from input and set the values.
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    //sign in with facebook
    const handleFacebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);

    }
    // sign in with google
    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    //sign in with github
    const handleGithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);

    }

    //sign in with twitter
    const handleTwitterSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);

    }

    return {
        newUserRegister,
        setUserName,
        verifyEmail,
        singInProcess,
        handleSignOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleGithubSignIn,
        handleGoogleSignIn,
        handleTwitterSignIn,
        handleFacebookSignIn,
        setErrorMsg,
        setLoading,
        setUser,
        loading,
        password,
        user,
        errorMsg

    }


}

export default useFirebase;