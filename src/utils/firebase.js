// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAzCMdd_m_0lU8GcNMwnNNuzanyHAgKe0",
  authDomain: "shopping-a0e82.firebaseapp.com",
  projectId: "shopping-a0e82",
  storageBucket: "shopping-a0e82.firebasestorage.app",
  messagingSenderId: "440197858796",
  appId: "1:440197858796:web:007b2da129468c9029acc9",
  measurementId: "G-8F7B1QJ61W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);