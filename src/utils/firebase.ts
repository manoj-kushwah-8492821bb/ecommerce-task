import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2Kqs2lvSN8qutby3_tCGshbfv4DURuW0",
    authDomain: "react-task-19f15.firebaseapp.com",
    projectId: "react-task-19f15",
    storageBucket: "react-task-19f15.appspot.com",
    messagingSenderId: "398111174063",
    appId: "1:398111174063:web:d442c198c02c247382135a",
    measurementId: "G-MX8LKMSP5C"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);