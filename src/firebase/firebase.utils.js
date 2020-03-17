import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA5Fs9clBFsiNmlQLGXcCeLQ94AIG2-U20",
    authDomain: "crown-web.firebaseapp.com",
    databaseURL: "https://crown-web.firebaseio.com",
    projectId: "crown-web",
    storageBucket: "crown-web.appspot.com",
    messagingSenderId: "934759382047",
    appId: "1:934759382047:web:5d7511d87268ac4f05e92a",
    measurementId: "G-30CR33ZWRG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
