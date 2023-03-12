
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBjaO687gnyLfSdPduwGB2-UjSGvB7mVe4",
  authDomain: "social-network-856cd.firebaseapp.com",
  projectId: "social-network-856cd",
  storageBucket: "social-network-856cd.appspot.com",
  messagingSenderId: "884313771981",
  appId: "1:884313771981:web:403703bae73ff78bfd7e84",
  measurementId: "G-DPKG2QNWD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app)