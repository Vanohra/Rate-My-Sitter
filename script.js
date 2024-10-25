// JAVA FILE
// app.js
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, collection, getDocs, query, where } from "firebase/firestore";

// Parent Signup/Login Logic
document.getElementById('parentForm').addEventListener('submit', async (e) => { 
    e.preventDefault();
    const name = document.getElementById('parentName').value;
    const email = document.getElementById('parentEmail').value;
    const password = document.getElementById('parentPassword').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Store user data in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name,
          email,
          userType: "parent"
        });
        alert("Parent account created!");
      } catch (error) {
        console.error("Error signing up: ", error);
      }

});


// Sitter Signup/Login Logic
document.getElementById('sitterForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('sitterName').value;
    const lastname = document.getElementById('sitterLastName').value;
    const zip = document.getElementById('sitterZip').value;
    const bio = document.getElementById('sitterBio').value;
    const email = document.getElementById('sitterEmail').value;
    const password = document.getElementById('sitterPassword').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Store sitter data in Firestore
    await setDoc(doc(db, "babysitters", userCredential.user.uid), {
      name,
      zip,
      bio,
      email
    });
    alert("Sitter account created!");
  } catch (error) {
    console.error("Error signing up: ", error);
  }

});

// Other functions like searchSitters, viewProfile, and submitReview
