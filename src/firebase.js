// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeIWv6Cajh3qDdeLYwgA8VeJIASk9bpHY",
  authDomain: "tahir-yt-clone.firebaseapp.com",
  projectId: "tahir-yt-clone",
  storageBucket: "tahir-yt-clone.appspot.com",
  messagingSenderId: "935589970903",
  appId: "1:935589970903:web:e03953cb5aa644b09f0192",
  measurementId: "G-LDWQ6J5D6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
