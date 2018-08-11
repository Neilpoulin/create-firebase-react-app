require('dotenv').config()

// const firebase = require('firebase/app')
// require("firebase/firestore")

//This will set up a single function as an entire Express app that handles additional routing
// Initialize Firebase
// var config = {
//     apiKey: "xxx",
//     authDomain: "xxx",
//     databaseURL: "xxx",
//     projectId: "xxx",
//     storageBucket: "",
//     messagingSenderId: "xxx"
// };
// // noinspection JSUnresolvedVariable, JSUnresolvedFunction
// firebase.initializeApp(config);
// const firestore = firebase.firestore();
// const settings = {
//     timestampsInSnapshots: true
// };
// firestore.settings(settings);


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
// exports.test = functions.https.onRequest(app);
module.exports = app
