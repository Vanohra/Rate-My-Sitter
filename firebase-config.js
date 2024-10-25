// FIREBASE CONFIGURATION

// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtcJgePUpRxDS_9yTU6zebprYlCQYWyAk",
    authDomain: "rate-my-sitter.firebaseapp.com",
    projectId: "rate-my-sitter",
    storageBucket: "rate-my-sitter.appspot.com",
    messagingSenderId: "685607120529",
    appId: "1:685607120529:web:52be8c6fae26f9b6d59930",
    measurementId: "G-1C7T9WQR0C"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

