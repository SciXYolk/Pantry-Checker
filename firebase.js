// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc3EqYpFw3ypRko4XEL5vp5hSAoGhVu2I",
  authDomain: "inventory-management-7014b.firebaseapp.com",
  projectId: "inventory-management-7014b",
  storageBucket: "inventory-management-7014b.appspot.com",
  messagingSenderId: "673926358708",
  appId: "1:673926358708:web:1dc1e6fd20f35f8c62d9e1",
  measurementId: "G-TSDXV9DVGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore }