import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCLfhgca9tQpLd-Ff8xjGcDMA22Kf8zN6o",
    authDomain: "chat-app-a55eb.firebaseapp.com",
    projectId: "chat-app-a55eb",
    storageBucket: "chat-app-a55eb.firebasestorage.app",
    messagingSenderId: "850469306690",
    appId: "1:850469306690:web:76f0c71280a8654bcac8db",
    measurementId: "G-FLLWFJFLQJ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  export {app, analytics}