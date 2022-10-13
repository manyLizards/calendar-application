// grab the current time exact
var currentDate = moment().local();

// grab Text elements
var eight = document.querySelector("#eight");
eight.value = 8
var nine = document.querySelector("#nine");
nine.value = 9
var ten = document.querySelector("#ten");
ten.value = 10
var eleven = document.querySelector("#eleven");
eleven.value = 11
var twelve = document.querySelector("#twelve");
twelve.value = 12
var one = document.querySelector("#one");
one.value = 13
var two = document.querySelector("#two");
two.value = 14
var three = document.querySelector("#three");
three.value = 15
var four = document.querySelector("#four");
four.value = 16
var five = document.querySelector("#five");
five.value = 17
var saveBtn = document.querySelectorAll(".save");

// Set the current Day at the top of the scheduler
$('#currentDay').text(currentDate.format("ddd, MMM, Do, YYYY"));

// Set variable for current hour
var currentTime = currentDate.format("k");

console.log(eight.innerText)

// color code the time blocks
var timeBlocks = [
    eight,
    nine,
    ten,
    eleven,
    twelve,
    one,
    two,
    three,
    four,
    five,
]

function colorCode () {
for (i=0; i<timeBlocks.length; i++) {
    if (timeBlocks[i].value == currentTime) {
        timeBlocks[i].classList.add("current")
        timeBlocks[i].classList.remove("upNext")
        timeBlocks[i].classList.remove("previous")
    } else if (timeBlocks[i].value > currentTime) {
        timeBlocks[i].classList.add("upNext")
        timeBlocks[i].classList.remove("current")
        timeBlocks[i].classList.remove("previous")
    } else {
        timeBlocks[i].classList.add("previous")
        timeBlocks[i].classList.remove("current")
        timeBlocks[i].classList.remove("upNext")
    }
}
}
colorCode()


var task = localStorage.getItem("task")

var taskList = [
    {}
]

//SaveBtn EventListener not working am going to try using an array for each hour

// saveBtn.addEventListener("click", function saveTask() {
//     var userInputLocker = document.createElement("p")
//     userInputLocker.className = "new-task"
//     var userInput = document.querySelector(".text")
//     userInputLocker.innerText = userInput.innerText.value
//     localStorage.setItem("task", task)
//     var newTask = document.querySelector('.new-task')
//     newTask.textContent = task; 
// })