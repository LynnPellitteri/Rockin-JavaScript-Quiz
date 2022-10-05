// variables to keep track of quiz state
    // currentQuestion
    var currentQuestion = ""
    // time
    var time = 60
    // timerId
    var timerId 
var startButton = document.getElementById('startButton');
// variables to reference DOM elements
var questionsEl = document.getElementById('questions');


/// FUNCTION TO START THE QUIZ
function startQuiz() {
  alert('Hello')
  // hide start screen 
  document.getElementById('startButton').style.display = 'none';
  // un-hide questions section
  document.getElementById('questions').style.display = '';
  // start timer
 // setInterval(function,60,000);
  // show starting time possibly should use visible hidden???
 //document.getElementById("element").style.display = "block";
  //getQuestion();
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
  // get current question object from array

let question = question[0]
  // update title with current question
document.title = "Question"
document.title = '' = document.title
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
  if (something) {

  }

  if (something) {
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // give them feedback, letting them know it's wrong
  } else {
    // give them feedback, letting them know it's right
  }

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

    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials
//  submitButton.addEventListener('click', submitInitials);
  // user clicks button to start quiz
//submitButton.addEventListener('click', start);
  // user clicks on element containing choices
//submitButton.addEventListener('click', choices);
startButton.addEventListener('click',startQuiz)