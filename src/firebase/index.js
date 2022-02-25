
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyByOHJJFM4ugz89qvG_jkpsRA_2TFcAR1c",
    authDomain: "capmus-recruitment-system.firebaseapp.com",
    projectId: "capmus-recruitment-system",
    storageBucket: "capmus-recruitment-system.appspot.com",
    messagingSenderId: "365012498783",
    appId: "1:365012498783:web:ee1a0df20a7dd4fa97deea"
};

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)