// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDxZB44-q6POQGyggBCdXhHGDz6jbltiCQ",
    authDomain: "react-47200-f992d.firebaseapp.com",
    projectId: "react-47200-f992d",
    storageBucket: "react-47200-f992d.appspot.com",
    messagingSenderId: "241047834406",
    appId: "1:241047834406:web:c2d6872c256fbf2114bbe7"
};

initializeApp(firebaseConfig);

export const firestore = getFirestore();