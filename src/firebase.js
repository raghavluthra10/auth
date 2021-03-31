import firebase from 'firebase/app';
import 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: 'AIzaSyA01c28SOyerKkw1GLbyeBXhyuqO0ZLgjU',
    authDomain: 'react-auth-5bda5.firebaseapp.com',
    projectId: 'react-auth-5bda5',
    storageBucket: 'react-auth-5bda5.appspot.com',
    messagingSenderId: '217474960673',
    appId: '1:217474960673:web:d9cc5dcdd88d8a670ac260'
})

export const auth = app.auth()
export default app