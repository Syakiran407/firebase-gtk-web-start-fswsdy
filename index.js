// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here
// var firebaseConfig = {};
  // web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCidWslseI7a9dCNFSShrVPZDLMm3xR_d8",
    authDomain: "fir-web-codelab-5e1dd.firebaseapp.com",
    databaseURL: "https://fir-web-codelab-5e1dd.firebaseio.com",
    projectId: "fir-web-codelab-5e1dd",
    storageBucket: "fir-web-codelab-5e1dd.appspot.com",
    messagingSenderId: "755886290702",
    appId: "1:755886290702:web:a7d6e7c6ddd86c1259095f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    } 
  }
};

// const ui = new firebaseui.auth.AuthUI(firebase.auth());
