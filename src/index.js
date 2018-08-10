import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { Provider } from 'react-redux'
import {getStore} from './store'
import 'firebase'
import firebase from 'firebase/app'


// Initialize Firebase
// noinspection JSUnresolvedVariable, ES6ModulesDependencies
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: '',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
// noinspection JSUnresolvedVariable, JSUnresolvedFunction
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

const store = getStore()

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));