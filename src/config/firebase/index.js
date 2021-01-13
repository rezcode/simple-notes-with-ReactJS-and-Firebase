import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyADiU9cyezcD1s3r7Y-7l6diJPPvex4i1Y",
  authDomain: "simple-notes-react-fireb-5ac6c.firebaseapp.com",
  projectId: "simple-notes-react-fireb-5ac6c",
  storageBucket: "simple-notes-react-fireb-5ac6c.appspot.com",
  messagingSenderId: "155096764968",
  appId: "1:155096764968:web:dd32ae69f49ef472459b1d",
  measurementId: "G-2VQY3KZ0KJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
