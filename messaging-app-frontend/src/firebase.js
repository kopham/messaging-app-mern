import firebase from 'firebase/compat/app'; // Import the compat version
import 'firebase/compat/auth'; // for authentication
import 'firebase/compat/storage'; // for storage
import 'firebase/compat/database'; // for realtime database
import 'firebase/compat/firestore'; // for cloud firestore

// From firebase app
const firebaseConfig = {
    apiKey: "AIzaSyC_-mrWjs_LP-zyd1AWkM_VBDV7BMuPFCI",
    authDomain: "messaging-app-mern-242f6.firebaseapp.com",
    projectId: "messaging-app-mern-242f6",
    storageBucket: "messaging-app-mern-242f6.appspot.com",
    messagingSenderId: "1052789623953",
    appId: "1:1052789623953:web:0b65cec3e1299e39498330"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db