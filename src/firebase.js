import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmZkeAM-Xw37ZwAe8PXOVRtk4L5G498to",
    authDomain: "survey-3526c.firebaseapp.com",
    databaseURL: "https://survey-3526c-default-rtdb.firebaseio.com",
    projectId: "survey-3526c",
    storageBucket: "survey-3526c.appspot.com",
    messagingSenderId: "236779884955",
    appId: "1:236779884955:web:9810d57addb0487676113e",
    measurementId: "G-JPTQ2481Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};