import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyANunSotWB-sDpceFwbEnMNIuyDxBhsk9g",
    authDomain: "muso-ninjas-b2462.firebaseapp.com",
    projectId: "muso-ninjas-b2462",
    storageBucket: "muso-ninjas-b2462.appspot.com",
    messagingSenderId: "1015751104966",
    appId: "1:1015751104966:web:c44ee6011529d1a4eb7ac7"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
