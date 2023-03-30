const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

app.use(cors({ origin: true }));

app.get('/hello', (req, res) => {
    const city = 'paris';
    //   Add a new document with a generated id and the city name.
    db.collection("cities").add({
        name: city
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            res.send(`Hello from ${city} added to Firestore!`);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            res.status(500).send('Error adding document to Firestore.');
        });
});
// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

exports.api = functions.https.onRequest(app);