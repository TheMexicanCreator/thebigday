// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAFbrzQbokqowidg9QPdsTDugcBesk2cAs",
    authDomain: "the-big-day-1fd9c.firebaseapp.com",
    projectId: "the-big-day-1fd9c",
    storageBucket: "the-big-day-1fd9c.appspot.com",
    messagingSenderId: "956539461082",
    appId: "1:956539461082:web:7d13134a3281c290f6f4e3",
    measurementId: "G-R5P6V4YJ89"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth };