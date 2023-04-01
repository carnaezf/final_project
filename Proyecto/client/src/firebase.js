// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// require("dotenv").config();

const {
  FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_APPID,
} = process.env;

console.log(FIREBASE_APIKEY);
console.log(FIREBASE_AUTHDOMAIN);
console.log(FIREBASE_PROJECTID);
console.log(FIREBASE_STORAGEBUCKET);
console.log(FIREBASE_MESSAGINGSENDERID);
console.log(FIREBASE_APPID);

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyBlMsDFLw86G_AaG_ndkt8TNQqT2m0t5FU",
  //   authDomain: "haal-auth-2.firebaseapp.com",
  //   projectId: "haal-auth-2",
  //   storageBucket: "haal-auth-2.appspot.com",
  //   messagingSenderId: "695743692562",
  //   appId: "1695743692562:web:e4c03d2c39486bcfc0bdcb",

  apiKey: "AIzaSyBlMsDFLw86G_AaG_ndkt8TNQqT2m0t5FU",
  authDomain: "haal-auth-2.firebaseapp.com",
  projectId: "haal-auth-2",
  storageBucket: "haal-auth-2.appspot.com",
  messagingSenderId: "695743692562",
  appId: "1695743692562:web:e4c03d2c39486bcfc0bdcb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
