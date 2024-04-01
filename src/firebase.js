import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYdaKXbHDx0qgAHRteiaj8g44fk_gHW_w",
  authDomain: "space-33e5d.firebaseapp.com",
  projectId: "space-33e5d",
  storageBucket: "space-33e5d.appspot.com",
  messagingSenderId: "428159781860",
  appId: "1:428159781860:web:ba900bcc78c6559eff95f1",
  measurementId: "G-SXNVJRFCX2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
