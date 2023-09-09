import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsWOKwvSB5Tvt1hS9TWB-YDTcdJCO9f4g",
    authDomain: "my-notes-6185a.firebaseapp.com",
    projectId: "my-notes-6185a",
    storageBucket: "my-notes-6185a.appspot.com",
    messagingSenderId: "693047599580",
    appId: "1:693047599580:web:f7cecc50c4ec15f4666f19"
  };

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp}