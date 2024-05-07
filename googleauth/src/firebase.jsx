import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyAAom2VyKmalVfgOTn_OpeCe3_NnnGJL0g",
  authDomain: "auth-e62d5.firebaseapp.com",
  projectId: "auth-e62d5",
  storageBucket: "auth-e62d5.appspot.com",
  messagingSenderId: "141853596837",
  appId: "1:141853596837:web:8e734bb98ba3591c38014c",
  measurementId: "G-86W4GF23FB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app)
export const provider = new GoogleAuthProvider()



