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

    // handle new user register by register button
    const handleUserRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setErrorMsg('Password Must be 6 character long');
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorMsg('Password must contain at least 2 uppercase letter');
            return;
        }
        newUserRegister();

    }

    //implement new user registration
    const newUserRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result?.user);
                setErrorMsg('');
                verifyEmail();
                setUserName();
                window.location.reload();
            }).catch(error => {
                setErrorMsg(error.message);
            });
    }
    //user name set
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            //profile updated
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
        singInProcess,
        handleSignOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleUserRegister,
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