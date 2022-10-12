// grab the current time exact
var currentDate = moment();

// grab html elements
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var ten = document.querySelector("#ten");
var eleven = document.querySelector("#eleven");
var twelve = document.querySelector("#twelve");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");

// Set the current Day at the top of the scheduler
$('#currentDay').text(currentDate.format("ddd, MMM, Do, YYYY"));

// Set variable for current hour
var currentTime = currentDate.format("H");

console.log(currentTime)

// Attempt to code time block by time
//Attempt #1 - associated with lines 5-14
// v This code is not working v
//function colorCode () {
//     if (currentTime === 8) {
//         eight.style.backgroundColor = green;
//         nine.style.backgroundColor = yellow;
//         ten.style.backgroundColor = yellow;
//         eleven.style.backgroundColor = yellow;
//         twelve.style.backgroundColor = yellow;
//         one.style.backgroundColor = yellow;
//         two.style.backgroundColor = yellow;
//         three.style.backgroundColor = yellow;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 9) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = green;
//         ten.style.backgroundColor = yellow;
//         eleven.style.backgroundColor = yellow;
//         twelve.style.backgroundColor = yellow;
//         one.style.backgroundColor = yellow;
//         two.style.backgroundColor = yellow;
//         three.style.backgroundColor = yellow;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 10) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = green;
//         eleven.style.backgroundColor = yellow;
//         twelve.style.backgroundColor = yellow;
//         one.style.backgroundColor = yellow;
//         two.style.backgroundColor = yellow;
//         three.style.backgroundColor = yellow;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 11) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = gray;
//         eleven.style.backgroundColor = green;
//         twelve.style.backgroundColor = yellow;
//         one.style.backgroundColor = yellow;
//         two.style.backgroundColor = yellow;
//         three.style.backgroundColor = yellow;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 12) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = gray;
//         eleven.style.backgroundColor = gray;
//         twelve.style.backgroundColor = green;
//         one.style.backgroundColor = yellow;
//         two.style.backgroundColor = yellow;
//         three.style.backgroundColor = yellow;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 1) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = gray;
//         eleven.style.backgroundColor = gray;
//         twelve.style.backgroundColor = gray;
//         one.style.backgroundColor = green;
//         two.style.backgroundColor = yellow;
//         three.style.backgroundColor = yellow;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 2) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = gray;
//         eleven.style.backgroundColor = gray;
//         twelve.style.backgroundColor = gray;
//         one.style.backgroundColor = gray;
//         two.style.backgroundColor = green;
//         three.style.backgroundColor = yellow;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 3) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = gray;
//         eleven.style.backgroundColor = gray;
//         twelve.style.backgroundColor = gray;
//         one.style.backgroundColor = gray;
//         two.style.backgroundColor = gray;
//         three.style.backgroundColor = green;
//         four.style.backgroundColor = yellow;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 4) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = gray;
//         eleven.style.backgroundColor = gray;
//         twelve.style.backgroundColor = gray;
//         one.style.backgroundColor = gray;
//         two.style.backgroundColor = gray;
//         three.style.backgroundColor = gray;
//         four.style.backgroundColor = green;
//         five.style.backgroundColor = yellow;
//     } else if (currentTime === 5) {
//         eight.style.backgroundColor = gray;
//         nine.style.backgroundColor = gray;
//         ten.style.backgroundColor = gray;
//         eleven.style.backgroundColor = gray;
//         twelve.style.backgroundColor = gray;
//         one.style.backgroundColor = gray;
//         two.style.backgroundColor = gray;
//         three.style.backgroundColor = gray;
//         four.style.backgroundColor = gray;
//         five.style.backgroundColor = green;
//     } else {
//             eight.style.backgroundColor = gray;
//             nine.style.backgroundColor = gray;
//             ten.style.backgroundColor = gray;
//             eleven.style.backgroundColor = gray;
//             twelve.style.backgroundColor = gray;
//             one.style.backgroundColor = gray;
//             two.style.backgroundColor = gray;
//             three.style.backgroundColor = gray;
//             four.style.backgroundColor = gray;
//             five.style.backgroundColor = gray;
//         }
//     }
// ^ This code is not working ^