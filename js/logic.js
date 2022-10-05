// variables to keep track of quiz state
    // currentQuestion
    var currentQuestion = ""
    // time
    var time = 60
    // timerId
    var timerId 
var startButton = document.getElementById('startButton');
// variables to reference DOM elements
//var questionsEl = document.getElementById('questions');


/// FUNCTION TO START THE QUIZ
function startQuiz() {
startTimer()
 
  // hide start screen 
  document.getElementById('startButton').style.display = 'none';
  // un-hide questions section
  //document.getElementById('questions').style.display = '';
  // start timer
 // setInterval(function,60,000);
  // show starting time possibly should use visible hidden???
 //document.getElementById("element").style.display = "block";
  //getQuestion();
}

function startTimer(){
//target inner text time left element (line 8) //
//use setInterval method to make the timer inner text decrease every second 
}

startButton.addEventListener('click',startQuiz)