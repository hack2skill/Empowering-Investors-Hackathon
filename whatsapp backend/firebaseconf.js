import dotenv from 'dotenv';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";


dotenv.config();
const firebaseConfig = {
  apiKey:"AIzaSyB6OjsLMUrJfDsT8t6SwklQkmaHpjQz-Y8",
  authDomain: "cashfloai.firebaseapp.com",
  projectId: "cashfloai",
  storageBucket: "cashfloai.appspot.com",
  messagingSenderId: "887856204934",
  appId:"1:887856204934:web:45ff418af969f9ec039507"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();