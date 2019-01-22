import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBHVEUf8h_pjwZxeMH6ArAVqcBlxYc79zk",
    authDomain: "game-of-words-1.firebaseapp.com",
    databaseURL: "https://game-of-words-1.firebaseio.com",
    projectId: "game-of-words-1",
    storageBucket: "game-of-words-1.appspot.com",
    messagingSenderId: "366761524180"
};
export const app = firebase.initializeApp(config);

const db = app.firestore()
db.settings({
    timestampsInSnapshots: true
})
var getOptions = {
    source: 'cache'
};
// var citiesRef = db.collection("cities");



// citiesRef.doc("SF").set({
//     name: "San Francisco",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 860000,
//     regions: ["west_coast", "norcal"]
// });
// citiesRef.doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 3900000,
//     regions: ["west_coast", "socal"]
// });
// citiesRef.doc("DC").set({
//     name: "Washington, D.C.",
//     state: null,
//     country: "USA",
//     capital: true,
//     population: 680000,
//     regions: ["east_coast"]
// });
// citiesRef.doc("TOK").set({
//     name: "Tokyo",
//     state: null,
//     country: "Japan",
//     capital: true,
//     population: 9000000,
//     regions: ["kanto", "honshu"]
// });
// citiesRef.doc("BJ").set({
//     name: "Beijing",
//     state: null,
//     country: "China",
//     capital: true,
//     population: 21500000,
//     regions: ["jingjinji", "hebei"]
// });


// var docRef = db.collection("cities");

// docRef.get().then((snap) => {
//     snap.forEach(doc => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     });
// }).catch(function (error) {
//     console.log("Error getting document:", error);
// });
// fetch

// docRef.get().then(doc => {
//     if(doc && doc.exists) {
//         console.log(doc.data ())
//     }
// })

//fetch via event
// let getRealtimeUpdates = () => {
//     docRef.onSnapshot((doc) => {
//         if(doc && doc.exists) {
//             console.log(doc)
//             console.log(doc.data())
//         }
//     })
// }

// getRealtimeUpdates()


// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} =>`, doc.data());
//     });
// });