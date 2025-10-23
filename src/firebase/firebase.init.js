
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrLTtBb0evhg9OW95gGJXZcg-dOVP1iVA",
  authDomain: "assignment-09-pet-care.firebaseapp.com",
  projectId: "assignment-09-pet-care",
  storageBucket: "assignment-09-pet-care.firebasestorage.app",
  messagingSenderId: "753220443555",
  appId: "1:753220443555:web:98be27561152ed2c990e16"
};

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);