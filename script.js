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
var saveBtn = document.querySelectorAll(".save");

// Set the current Day at the top of the scheduler
$('#currentDay').text(currentDate.format("ddd, MMM, Do, YYYY"));

// Set variable for current hour
var currentTime = currentDate.format("h");

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
    if (timeBlocks[i].innerText == currentTime) {
        $("form").addClass("current")
    } else if (timeBlocks[i].innerText < currentTime) {
        $("form").addClass("upNext")
    } else {
        $("form").addClass("previous")
    }
}
}
colorCode()


var task = localStorage.getItem("task")
//SaveBtn EventListener not working am going to try using an array for each hour
saveBtn.addEventListener("click", function saveTask() {
    var userInputLocker = document.createElement("p")
    userInputLocker.className = "new-task"
    var userInput = document.querySelector(".text")
    userInputLocker.innerText = userInput.innerText.value
    localStorage.setItem("task", task)
    var newTask = document.querySelector('.new-task')
    newTask.textContent = task; 
})