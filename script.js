// grab the current time exact
var currentDate = moment().local();

// grab Text elements
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
var currentTime = currentDate.format("h");

console.log(eight.innerText)

// color code the time blocks
// var timeBlocks = [
//     eight,
//     nine,
//     ten,
//     eleven,
//     twelve,
//     one,
//     two,
//     three,
//     four,
//     five,
// ]
// console.log(timeBlocks[0].innerText)

time = $('.time-block')
time.each(function() {
    var hour = parseInt($(this).attr('id'))
    if (hour === currentTime) {
    $(this).children('.text').attr('class', 'current text')
    console.log(('current' + hour + currentTime))
    } else if (currentTime > hour) {
        $(this).children('.text').attr('class', 'previous')
    } else {
        $(this.children('.text').attr('class', 'previous'))
    }
})

// function colorCode () {
// for (i=0; i<timeBlocks.length; i++) {
//     if (timeBlocks[i].innerText === currentTime) {
//         $("form").addClass("current")
//     } else if (timeBlocks[i].innerText < currentTime) {
//         $("form").addClass("upNext")
//     } else {
//         $("form").addClass("previous")
//     }
// }
// }