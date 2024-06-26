// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: `${process.env.FIRESTORE_KEY}`,
  authDomain: `${process.env.FIRESTORE_NAME}.firebaseapp.com`,
  projectId: `${process.env.FIRESTORE_NAME}`,
  storageBucket: `${process.env.FIRESTORE_NAME}.appspot.com`,
  messagingSenderId: "45968830075",
  appId: "1:45968830075:web:6f2295a4e4f1f910f7fcde",
  measurementId: "G-0LE2E13HK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
