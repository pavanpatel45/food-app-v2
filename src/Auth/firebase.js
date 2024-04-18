// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2q8MXkn8WJGuVR_vB6NgBSO6fnFABDSQ",
  authDomain: "food-app-6da2f.firebaseapp.com",
  projectId: "food-app-6da2f",
  storageBucket: "food-app-6da2f.appspot.com",
  messagingSenderId: "20206801866",
  appId: "1:20206801866:web:b3f685a465425f3935f533",
  measurementId: "G-NZ5YZFHNGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);