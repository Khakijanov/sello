
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ABeKpZKT3ZKo6oLIhXEJhejtFl0LrXI",
  authDomain: "my-store-fef2f.firebaseapp.com",
  projectId: "my-store-fef2f",
  storageBucket: "my-store-fef2f.appspot.com",
  messagingSenderId: "291711907197",
  appId: "1:291711907197:web:202b5c59abfab5f3964814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth
export const auth = getAuth(app);
// data-base
export const db = getFirestore(app)