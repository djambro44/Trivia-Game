
$("#timerButton").on("click", start);


var intervalId;
var clockRunning = false;
var time = 0;

function reset() {

    time = 100;


    // DONE: Change the "display" div to "00:00."
    $("#timer").text("00:00");

}
function start() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}
function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
}

function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;

    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#timer").text(converted);
}
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

var correct = 0;
var currentNumber = 0;
var allQuestions = [
    {
        question: "Q1: What does NFL stand for?",
        choices: ["Nation Football Legacy", "New Football League", "National Football Leauge"],
        correctAnswer: 2
    },
    {
        question: "Q2: How many point is a touchdown worth?",
        choices: ["7", "6", "3"],
        correctAnswer: 1
    },
    {
        question: "Q3: How many teams play in the NFL?",
        choices: ["12", "18", "22"],
        correctAnswer: 0
    },
    {
        question: "Q4: What is the only team in NFL histroy to go undefeated and win a superbowl?",
        choices: ["New England Patriots", "Chicago Bears", "Miami Dolphins"],
        correctAnswer: 2
    },
    {
        question: "Q5: Who is the only player in NFL history to play on three consecutive Super Bowl championship teams?",
        choices: ["Tom Brady", "Joe Monntana", "Deion Sanders"],
        correctAnswer: 2
    }];



function createQuestion() {
    for (var i = 0; i < allQuestions[this.currentNumber].choices.length; i++) {
        document.forms.radioAnswers.elements.choice[i].checked = false;
    }
    var question = document.getElementById("question");
    question.innerHTML = allQuestions[this.currentNumber].question;
    var point = document.getElementById("point");
    point.innerHTML = "<span>score: " + correct + "</span>";
    createChoices();
}
function createChoices() {
    for (var i = 0; i < allQuestions[this.currentNumber].choices.length; i++) {
        var option = document.getElementById("label" + i);
        option.innerHTML = allQuestions[this.currentNumber].choices[i];
    }
}

function nextQuestion (){
    $("next").click(function () {
        alert("it worked");
    });
}

function showScore() {
    document.forms.radioAnswers.style.display = "none";
    var question = document.getElementById("question");
    question.style.display = "none";
    var elt = document.getElementById("point");
    elt.style.display = "block";
    var button = document.getElementById("next");
    button.style.display = "none";

}

window.onload = createQuestion();


































