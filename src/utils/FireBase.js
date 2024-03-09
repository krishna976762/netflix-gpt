// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVlBVccyRbtWVz5z5DLpFjQMzu4gAW1b8",
  authDomain: "netflixgpt-kb.firebaseapp.com",
  projectId: "netflixgpt-kb",
  storageBucket: "netflixgpt-kb.appspot.com",
  messagingSenderId: "787698389028",
  appId: "1:787698389028:web:7f5c598e569d5adfa308b1",
  measurementId: "G-GGY4C8TLRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();