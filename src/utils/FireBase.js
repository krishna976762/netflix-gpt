// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging"; 

// Your web app's Firebase configuration
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
const messaging = getMessaging();

export const requestPermissionAndToken = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      getToken(messaging, { vapidKey: "BI9e6UX9naXIPu2tNl1bZ2q52DpGdqWS_ZCb9WEOhd57Tzi_OmYHUA0YiLNEy3Nj4WVFmauRxTfx_qrjLowNraw" })
        .then((currentToken) => {
          if (currentToken) {
            console.log("Registration token:", currentToken);
          } else {
            console.log("No registration token available.");
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token:", err);
        });
    } else {
      console.log("Permission denied.");
    }
  });
};

requestPermissionAndToken();

export const onMessageListener = () => { 
  return new Promise(resolve => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};



