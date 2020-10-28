import { apps } from 'firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


if (!apps.length) {
    // firebase init
    const firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID
    }
    firebase.initializeApp(firebaseConfig)
}

// utils
const storage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const eventsCollection = db.collection('events')

// export utils/refs
export {
    storage,
    db,
    auth,
    usersCollection,
    eventsCollection
}