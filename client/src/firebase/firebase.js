// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2y6t3-F4it1totrbjA0ocASyFFV3JnDI",
  authDomain: "yad-sara.firebaseapp.com",
  projectId: "yad-sara",
  storageBucket: "yad-sara.appspot.com",
  messagingSenderId: "31019839130",
  appId: "1:31019839130:web:8c2dcd79353c7682e5b923"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {app, auth, firestore};