import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYfPMjbYKZbFQFT4-KQFIJ4kkt18xlgtI",
  authDomain: "ayf-database.firebaseapp.com",
  projectId: "ayf-database",
  storageBucket: "ayf-database.appspot.com",
  messagingSenderId: "89472665581",
  appId: "1:89472665581:web:2d7b08363c94fe569d49e4",
  measurementId: "G-5XRH4NK9XH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
