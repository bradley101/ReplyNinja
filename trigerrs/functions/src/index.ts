import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as service from '../';

admin.initializeApp({
    credential: admin.credential.cert(service),
});

// admin.initializeApp(functions.config().firebase);

let db = admin.firestore()

exports.triggerNewUser = functions.auth.user().onCreate((user) => {
    console.log('Function invoked');
    db.collection('users').doc(user.uid).set({
        firstname: user.displayName,
        email: user.email,
        photo: user.photoURL
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err);
    })
})
