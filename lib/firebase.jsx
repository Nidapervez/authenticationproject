// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6mL83hozkqLg2D3OpXt58IspuKbau6GE",
  authDomain: "authentication-e9f9c.firebaseapp.com",
  projectId: "authentication-e9f9c",
  storageBucket: "authentication-e9f9c.firebasestorage.app",
  messagingSenderId: "21073260939",
  appId: "1:21073260939:web:ff8ed509eed46fbb64ff8e",
  measurementId: "G-MN595H6WP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore();
export const auth=getAuth();