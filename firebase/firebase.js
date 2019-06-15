import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDLA5b3GhEXgCoZX8e4VCZd8IGzUAHK8-4",
    authDomain: "busco-a-mi-mascota-236922.firebaseapp.com",
    databaseURL: "https://busco-a-mi-mascota-236922.firebaseio.com",
    projectId: "busco-a-mi-mascota-236922",
    storageBucket: "busco-a-mi-mascota-236922.appspot.com",
    messagingSenderId: "1021296714116",
    appId: "1:1021296714116:web:c8c6826764dffc40"
};

if (firebase.apps.length <= 0) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.database().ref('/');
export const storage = firebase.storage();
export const fbProvider = new firebase.auth.FacebookAuthProvider();