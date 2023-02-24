import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDu_Fds2CetA5Y0V_O7dfF7eoBXK_6KXw8",
  authDomain: "chat-6b193.firebaseapp.com",
  projectId: "chat-6b193",
  storageBucket: "chat-6b193.appspot.com",
  messagingSenderId: "905562615470",
  appId: "1:905562615470:web:02a5e7a0fa3f1c974c073f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
