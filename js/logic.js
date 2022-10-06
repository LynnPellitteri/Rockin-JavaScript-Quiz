var startScreen = document.getElementById('startScreen');
var startButton = document.getElementById('startButton');
var questionsEl = document.getElementById('questions');
var timerId = document.getElementById("timer");

    var currentQuestion = ""
    var timer = 60
    var timerId =

// FUNCTION TO START THE QUIZ
function letsBegin() {
  document.getElementById('startButton').style.display = 'none';
 letsBegin.removeAttribute('class','hide');
 timerId.getElementById('questions').style.display = '';
  
  // start timer
letsBegin(); {
  document.getElementById("element").style.display = "block";
  alert.timeSet;
}
  // show starting time possibly should use visible hidden???

  //document.getElementById("element").style.display = "block";
 
  getQuestion();{

    
  }
}

function startTimer(){
  timerInterval = setInterval; {
  timerCount--;
  timerId.textContent=timerCount;
  if (timerCount === 0){
    clearInterval(timerInterval);
  }
} 10000;
  }
//startButton.addEventListener('click',startQuiz)
// hide start screen 
  
  // un-hide questions section

  // start timer

  // show starting time

  getQuestion();


/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
  // get current question object from array

  // update title with current question

  // clear out any old question choices

  // loop over choices
    // FOR {
      // create new button for each choice
  
      // display on the page
      
    // } 
}

/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {

  // if the clicked element is not a choice button, do nothing.
  if (answer === "") {
    displayMessage('correct!',"Rockin and Rollin");

  } else (answer !== "" ); {
    displayMessage('wrong!', 'No Worries You will Rock One Day' );

  }
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // give them feedback, letting them know it's wrong
  //} else {
    // give them feedback, letting them know it's right
  //}

  // flash right/wrong feedback on page for a short period of time

  // move to next question

  // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box - for initials

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage
localStorage.setitem(saveHighscore, "")
    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials

  // user clicks button to start quiz

  // user clicks on element containing choices

//scores.js 
function printHighscores() {
  // either get scores from localstorage or set to empty array

  // sort highscores by score property in descending order

  // loop through scores
    // create li tag for each high score

    // display on page
}

/// FUNCTION TO CLEAR SCORES ///
function clearHighscores() {
  // remove an item from local storag
  // reload the page
}

/// CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION ///

// run function when page loads
printHighscores();