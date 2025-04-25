// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdoJdmUUKqmEmZi5VL2EaAt1IlZZ3mCCM",
  authDomain: "testapp-89d44.firebaseapp.com",
  projectId: "testapp-89d44",
  storageBucket: "testapp-89d44.firebasestorage.app",
  messagingSenderId: "768935126278",
  appId: "1:768935126278:web:56a19a23a14eab04086a87",
  measurementId: "G-MFQPRVVZ1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

