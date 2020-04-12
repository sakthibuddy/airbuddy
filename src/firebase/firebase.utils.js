import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBkLX1r6mPFaYTTrKAx94tWbvfW2JGWKsk",
  authDomain: "travel-buddy-d81ee.firebaseapp.com",
  databaseURL: "https://travel-buddy-d81ee.firebaseio.com",
  projectId: "travel-buddy-d81ee",
  storageBucket: "travel-buddy-d81ee.appspot.com",
  messagingSenderId: "626555468841",
  appId: "1:626555468841:web:64e9a623f251458240f038",
  measurementId: "G-DZEBBDBT5M",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      alert(error);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
