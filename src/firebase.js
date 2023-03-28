import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0SUxrNlj6yNxGDT0UD_aLK5Xm2Qu09CI",
  authDomain: "day-and-night-f1248.firebaseapp.com",
  projectId: "day-and-night-f1248",
  storageBucket: "day-and-night-f1248.appspot.com",
  messagingSenderId: "1031274688156",
  appId: "1:1031274688156:web:17f739e748340e2a6a4759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);

