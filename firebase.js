import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRuOCuA4AMOD3YQD0EN0OAa5qp789-nw8",
  authDomain: "ecommerce-a474e.firebaseapp.com",
  projectId: "ecommerce-a474e",
  storageBucket: "ecommerce-a474e.appspot.com",
  messagingSenderId: "662095106993",
  appId: "1:662095106993:web:8fba9cbdb4b4e6ee926390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
export default app;