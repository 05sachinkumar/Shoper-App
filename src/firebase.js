import firebase from "firebase/compat/app"

import "firebase/compat/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkxnq1e2VetKOAlZbYP-CY-dKxatSfN2k",
  authDomain: "shoper-app-123.firebaseapp.com",
  projectId: "shoper-app-123",
  storageBucket: "shoper-app-123.appspot.com",
  messagingSenderId: "250551983506",
  appId: "1:250551983506:web:daa6ac9f655a55b  451f54b"
};

// Initialize Firebase to connect the firebase application
const app = firebase.initializeApp(firebaseConfig);

// To connect to firebase application
export const myDatabase = firebase.firestore()

// To connect to authentication(google authentication)
// getAuth()----this method is helps to connect our react application to firebase authentication which is present inside the firebase.
// GoogleAuthProvider-----is a class that will helps our react application to connect with Google Authentication.

export const auth = getAuth(app)  //auth----is a variable which is pointing to the authentication system in the firebase.
export const provider = new GoogleAuthProvider()  //provider---- is a variable which is directly pointing to the Google Authentication.
