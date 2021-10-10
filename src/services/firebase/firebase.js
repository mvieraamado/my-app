import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBw9_rakBO-sXQ8R8LJ_gCqYa0QphNLv_E",
    authDomain: "dreams-app-19735.firebaseapp.com",
    projectId: "dreams-app-19735",
    storageBucket: "dreams-app-19735.appspot.com",
    messagingSenderId: "1002805076641",
    appId: "1:1002805076641:web:e2bdbcfbf6b0cde04706e0"
};
const app = firebase.initializeApp(firebaseConfig);

 export const getFirebase = ()=>{
    return app
};

export const db = getFirestore(app)
