import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./Firebase.config";

const provider = new firebase.auth.GoogleAuthProvider();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const signInWithGoogle = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      return user;
      // ...
    })
    .catch((error) => {
      var errorMessage = error.message;
      return errorMessage;
    });
};
