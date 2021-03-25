import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu8yJiqQUOwFbEzt3fodGT6fI2joTZxFA",
  authDomain: "clone-yt-7cba5.firebaseapp.com",
  projectId: "clone-yt-7cba5",
  storageBucket: "clone-yt-7cba5.appspot.com",
  messagingSenderId: "260957696927",
  appId: "1:260957696927:web:13e34ad26cda51e60e43aa",
  measurementId: "G-BDJ764HZ88",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
