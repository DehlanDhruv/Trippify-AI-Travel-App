// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt_W5YuCuHUpMJAoP-ME3fv-ku3SuS7dQ",
  authDomain: "ai-travel-app-21add.firebaseapp.com",
  projectId: "ai-travel-app-21add",
  storageBucket: "ai-travel-app-21add.firebasestorage.app",
  messagingSenderId: "664903933115",
  appId: "1:664903933115:web:6f57aa146e6d1316a09d9e",
  measurementId: "G-DH21BJPQQT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
