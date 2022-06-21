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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;