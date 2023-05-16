import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//para usar los servicios de FB
const  config = {
    "projectId": "fb-auth-739a6",
    "appId": "1:81217742234:web:4fc8f902efdd47e7898623",
    "storageBucket": "fb-auth-739a6.appspot.com",
    "apiKey": "AIzaSyA28KCA6fYs_8FdPcT7rZsnL6DoZd6I5lc",
    "authDomain": "fb-auth-739a6.firebaseapp.com",
    "messagingSenderId": "81217742234"
  }

firebase.initializeApp(config);


export default firebase;