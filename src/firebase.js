import firebase from 'firebase'
// import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//npm add firebase
const firebaseConfig = {
  apiKey: 'AIzaSyALI3euRUdgezCmygHxQdxdc2Ihiec0QbI',
  authDomain: 'linkedin-clone-1d87f.firebaseapp.com',
  projectId: 'linkedin-clone-1d87f',
  storageBucket: 'linkedin-clone-1d87f.appspot.com',
  messagingSenderId: '855585098738',
  appId: '1:855585098738:web:30aab1ddd66686a43cf96b',
  measurementId: 'G-62S7BL6BLB',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
