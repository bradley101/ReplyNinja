import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import User from './user.model';

const service = require('../firebase-config.json');

admin.initializeApp({
    credential: admin.credential.cert(service),
});

// admin.initializeApp(functions.config().firebase);

let db = admin.firestore()

exports.triggerNewUser = functions.auth.user().onCreate((user) => {
    console.log('Function invoked');
    let userObj = new User(user.displayName != undefined ? user.displayName : "", 
        user.email != undefined ? user.email : "",
        user.uid,
        user.photoURL != undefined ? user.photoURL : "");

    db.collection('users').doc(user.uid).set({
        uid: userObj.uid,
        name: userObj.name,
        email: userObj.email,
        photoURL: userObj.photoUrl
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err);
    })
})
