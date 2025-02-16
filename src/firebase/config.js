import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
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
let database = getFirestore(app);
export { app, database, auth };
