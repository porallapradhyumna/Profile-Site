import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAdLZIeyq8qOtBWc2gty8L6Lix-iNbR5bk",
    authDomain: "fir-demo-3294e.firebaseapp.com",
    databaseURL: "https://fir-demo-3294e-default-rtdb.firebaseio.com",
    projectId: "fir-demo-3294e",
    storageBucket: "fir-demo-3294e.appspot.com",
    messagingSenderId: "385827459782",
    appId: "1:385827459782:web:f633145cbe0c5c1339bdc7",
    measurementId: "G-PRS0H576MG"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);