import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAdLZIeyq8qOtBWc2gty8L6Lix-iNbR5bk",
    authDomain: "fir-demo-3294e.firebaseapp.com",
    databaseURL: "https://fir-demo-3294e-default-rtdb.firebaseio.com",
    projectId: "fir-demo-3294e",
    storageBucket: "fir-demo-3294e.appspot.com",
    messagingSenderId: "385827459782",
    appId: "1:385827459782:web:9ea3de0af591e53e39bdc7",
    measurementId: "G-KLC8NSKG61"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);