import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {

    apiKey: "AIzaSyB8aM586XsrRygcQnpgAnXxsItXB6TeRQA",

    authDomain: "crwn-db-c5901.firebaseapp.com",

    projectId: "crwn-db-c5901",

    storageBucket: "crwn-db-c5901.appspot.com",

    messagingSenderId: "750926928496",

    appId: "1:750926928496:web:5706f6d9037ff05aebb2b5",

    measurementId: "G-2NTBSYS4QJ"

};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(firestore.doc("users/15sd4sfasd5"));

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message)
        }
    }

    return userRef;

}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;