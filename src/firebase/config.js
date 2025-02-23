import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBoN-acAjKAR-QaK08zPBEhltFUByjvgxk",

  authDomain: "vchat-e5ab3.firebaseapp.com",

  projectId: "vchat-e5ab3",

  storageBucket: "vchat-e5ab3.firebasestorage.app",

  messagingSenderId: "596644229765",

  appId: "1:596644229765:web:91c65e188a844f1e5c2fec",

  measurementId: "G-4X7RW99M8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword };
