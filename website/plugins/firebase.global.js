import * as firebase from 'firebase/app';
import 'firebase/auth';

let conf = {
    apiKey: "AIzaSyCUJTAACaA_yEVqgSN_SiEH-nQzJw0vfhg",
    authDomain: "replyninja.firebaseapp.com",
    databaseURL: "https://replyninja.firebaseio.com",
    projectId: "replyninja",
    storageBucket: "replyninja.appspot.com",
    messagingSenderId: "532483950563",
    appId: "1:532483950563:web:ba8f7a7064b816559002d6",
    measurementId: "G-JCP9FGV2T8"
}
if (!firebase.apps.length) {
    firebase.initializeApp(conf);
}


