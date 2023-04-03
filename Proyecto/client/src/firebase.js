// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// require("dotenv").config();
// const {
//   FIREBASE_APIKEY,
//   FIREBASE_AUTHDOMAIN,
//   FIREBASE_PROJECTID,
//   FIREBASE_STORAGEBUCKET,
//   FIREBASE_MESSAGINGSENDERID,
//   FIREBASE_APPID,
// } = process.env;

// console.log(FIREBASE_APIKEY);
// console.log(FIREBASE_AUTHDOMAIN);
// console.log(FIREBASE_PROJECTID);
// console.log(FIREBASE_STORAGEBUCKET);
// console.log(FIREBASE_MESSAGINGSENDERID);
// console.log(FIREBASE_APPID);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaCx3rdoxaPMjPgGu_HeJ1hmwQhpLM-oY",
    authDomain: "adi-app-f6061.firebaseapp.com",
    projectId: "adi-app-f6061",
    storageBucket: "adi-app-f6061.appspot.com",
    messagingSenderId: "153399835973",
    appId: "1:153399835973:web:380f071a8ca10cb128522c",

  // apiKey: process.env.FIREBASE_APIKEY,
  // authDomain: process.env.FIREBASE_AUTHDOMAIN,
  // projectId: process.env.FIREBASE_PROJECTID,
  // storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  // appId: process.env.FIREBASE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
