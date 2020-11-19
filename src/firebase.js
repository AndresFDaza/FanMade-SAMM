import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA7aeliVkCo1TGxD4I0gSNtu_vFEKGfNGw",
  authDomain: "pruebaidae-7379f.firebaseapp.com",
  databaseURL: "https://pruebaidae-7379f.firebaseio.com",
  projectId: "pruebaidae-7379f",
  storageBucket: "pruebaidae-7379f.appspot.com",
  messagingSenderId: "888044970810",
  appId: "1:888044970810:web:5661d3e0d812d3098c2603",
  measurementId: "G-S21ME4M5GH",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
