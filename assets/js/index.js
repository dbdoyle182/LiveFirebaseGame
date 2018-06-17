// Initialize Firebase
const config = {
    apiKey: "AIzaSyBrCWkH7ccwpAIA7Ox8zAzW2q6Xc55PgQk",
    authDomain: "onlinerps-d8af0.firebaseapp.com",
    databaseURL: "https://onlinerps-d8af0.firebaseio.com",
    projectId: "onlinerps-d8af0",
    storageBucket: "onlinerps-d8af0.appspot.com",
    messagingSenderId: "98602852390"
  };


firebase.initializeApp(config);

// Database reference variables
const database = firebase.database();
const chatData = database.ref('/chat');
const playersRef = database.ref('players');
const currentTurnRef = database.ref('turn');

// Global game variables

let currentPlayers = null;
let currentTurn = null;
let playerNum = false;
let playerOneExists = false;
let playerTwoExists = false;
let playerOneData = null;
let playerTwoData = null;



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




