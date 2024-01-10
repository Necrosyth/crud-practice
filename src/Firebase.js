// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgAXzqLOwstf2cNcFBjbSoo6hO-iWZnJs",
  authDomain: "crud-practice-acf55.firebaseapp.com",
  projectId: "crud-practice-acf55",
  storageBucket: "crud-practice-acf55.appspot.com",
  messagingSenderId: "753682374594",
  appId: "1:753682374594:web:3568c460c0c645f085005b",
  measurementId: "G-4EXYYJGQYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);