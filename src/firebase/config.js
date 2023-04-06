// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1FRKxBGJArLT8hJUxlSO-d9FTKH81t1o",
    authDomain: "pcsbuilder-53601.firebaseapp.com",
    projectId: "pcsbuilder-53601",
    storageBucket: "pcsbuilder-53601.appspot.com",
    messagingSenderId: "737525258816",
    appId: "1:737525258816:web:ed7a1e093096d997269da5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

