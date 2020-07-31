import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZEruDBVEb5GGSN9RDN3nAW31L6_VyE3o",
    authDomain: "todo-angular-3badc.firebaseapp.com",
    databaseURL: "https://todo-angular-3badc.firebaseio.com",
    projectId: "todo-angular-3badc",
    storageBucket: "todo-angular-3badc.appspot.com",
    messagingSenderId: "760814333444",
    appId: "1:760814333444:web:bf3c1a4b6d8d03baae8f51"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

export default firestore;