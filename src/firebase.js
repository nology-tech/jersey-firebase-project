// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ9WgKCWyZGE-ragBILiLK2t6fL4GY9IM",
  authDomain: "fir-project-a23a9.firebaseapp.com",
  projectId: "fir-project-a23a9",
  storageBucket: "fir-project-a23a9.appspot.com",
  messagingSenderId: "635700915837",
  appId: "1:635700915837:web:46541785aabd977405cb14",
  measurementId: "G-3C9L5VKDYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const db = getFirestore();
