require("dotenv").config();

// Initialize Firebase
const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  };


firebase.initializeApp(config);

const database = firebase.database();

// Test added to make sure firebase was working
// const submitButton = document.querySelector('input.submitBtn');
// submitButton.addEventListener('click', testFirebaseConnection);

// // console.log(submitButton)

// function testFirebaseConnection() {
//     const name = document.getElementById("nameInput").value; 
//     console.log(name)
//     document.getElementById('nameOutput').innerHTML = name;


//     // Add firebase connection once click function is working

//     database.ref().set({
//         name: name
//     })
// }

