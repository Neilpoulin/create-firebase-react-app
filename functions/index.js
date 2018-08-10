const functions = require('firebase-functions');
import firebase from 'firebase/app'
require("firebase/firestore")

//This will set up a single function as an entire Express app that handles additional routing
// Initialize Firebase
var config = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "",
    messagingSenderId: "MESSAGING_SENDER_ID"
};
// noinspection JSUnresolvedVariable, JSUnresolvedFunction
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);


const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/', (req, res) => {
    let body = {test: "successful!"}
    console.log('this is the test body', body)
    return res.send(body)
});

/********
 * THIS IS THE NAME OF YOUR ENDPOINT. CHANGE IT FROM "TEST" TO WHATEVER YOU WANT
 ********/
exports.test = functions.https.onRequest(app);
