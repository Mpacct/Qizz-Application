//Define global variables to access parts of the html body by id names
let timer = document.getElementById("count");
let quizQuestion = document.getElementById("questions");
let quizChoice1 = document.getElementById("choice1");
let quizChoice2 = document.getElementById("choice2");
let quizChoice3 = document.getElementById("choice3");
let quizChoice4 = document.getElementById("choice4");
let question1 = document.querySelector("#question1");
//Define variables in the global scope for use in functions
let timeLeft = 75;
let userans
let qNum = 0
var timeInterval
let highScoresArray = []
let highScore = JSON.parse(localStorage.getItem('highScoresArray'));
// an array of objects that houses each question, answer choices, and the correct answer
let questions = [
    {
    question: "Which of the following is a correct way to create an object in java script?",
    choices: ["var name = {}", "name = {}", "{name} = {}", "object name = {}"],
    answer: 1
    },

    {
     question: "What does a const keyword do in javascript?",
     choices: ["Creates a variable with a value that can be changed within the Scope", "Creates a variable with a value that can only be changed upon calling const again", "Creates a variable with a value that can never be changed", "Creates a variable with a value that can only be changed once"],
     answer: 3
    },

    {
     question: "What does the term 'API' stand for?",
     choices: ["Application Performance Integration", "Apreciation Prose Interjection", "Application Problem Interface", "Application Programming Interface"],
     answer: 4
    },

    {
    question: "Which of the following is a correct way to name a function?",
    choices: ["displayObject() {};", "function displayObject() {};", "function displayObject", "function() = displayObject"],
    answer: 2
    },

    {
    question: "What would you save information to to be able to let the user access it upon refreshing their web browser?",
    choices: ["Local Storage", "Application Storage", "Read-Items", "Set Storage"],
    answer: 1
    }

];
// function that displays the question and answer choices from the above array through using innerHTML
function displayQuestionOne () {
    quizQuestion.innerHTML = questions[qNum].question
    quizChoice1.innerHTML = questions[qNum].choices[0]
    quizChoice2.innerHTML = questions[qNum].choices[1]
    quizChoice3.innerHTML = questions[qNum].choices[2]
    quizChoice4.innerHTML = questions[qNum].choices[3]
};

// function that has the timer countdown and end the quiz if time >= 0
function countdown () {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft}`
        if(timeLeft <= 0){
            //end quiz go to display score
            console.log("Your times up!")
            clearInterval(timeInterval);
            timeLeft = 0
            timer.innerHTML = "Time: 0"
            if(qNum != 5) {
                endQuiz();
            }
        }
    },1000);
}
// function that checks the user input based on the correct answer of each question
function checkAns() {
    if(userans == questions[qNum].answer) {
        return
    } else {
        timeLeft = timeLeft - 15
    }
};
// event listener that runs the check answer function each time option 1 is clicked.  This also displays the next question after each click  If the question number is 5 or greater it will not display a new question, it will run the endquiz function
quizChoice1.addEventListener("click", function(){
    userans = quizChoice1.value
    checkAns()
    qNum++
    if(qNum <=4){
        displayQuestionOne();
    } else {
        endQuiz();
    }
});
// event listener that runs the check answer function each time option 2 is clicked.  This also displays the next question after each click  If the question number is 5 or greater it will not display a new question, it will run the endquiz function
quizChoice2.addEventListener("click", function(){
    userans = quizChoice2.value
    checkAns()
    qNum++
    if(qNum <=4){
        displayQuestionOne();
    } else {
        endQuiz();
    }
});
// event listener that runs the check answer function each time option 3 is clicked.  This also displays the next question after each click  If the question number is 5 or greater it will not display a new question, it will run the endquiz function
quizChoice3.addEventListener("click", function(){
    userans = quizChoice3.value
    checkAns()
    qNum++
    if(qNum <=4){
        displayQuestionOne();
    } else {
        endQuiz();
    }
});
// event listener that runs the check answer function each time option 4 is clicked.  This also displays the next question after each click  If the question number is 5 or greater it will not display a new question, it will run the endquiz function
quizChoice4.addEventListener("click", function(){
    userans = quizChoice4.value
    checkAns()
    qNum++
    if(qNum <=4){
        displayQuestionOne();
    } else {
        endQuiz();
    }
});

// endQuiz function that stores their finalScore as the remaining time left and has the user enter their initials and save it to local storage.  Takes the user to the highscore page upon entering initials
function endQuiz() {
    if (timeLeft < 0) {
        timeLeft = 0
    };
    let finalScore = timeLeft
    let initials = prompt(`Your score was ${timeLeft}! Please enter your initials`)
    let results = {
        initials: initials,
        score: finalScore
    }
    if(highScore === null) {
        highScoresArray = highScoresArray.concat(results);
        localStorage.setItem('highScoresArray', JSON.stringify(highScoresArray));
    } else {
        highScoresArray = highScore;
        highScoresArray = highScoresArray.concat(results);
        localStorage.setItem('highScoresArray', JSON.stringify(highScoresArray));
    };
    location.href = "./highscores.html"
}
//runs displayQuestionOne function
displayQuestionOne();
//runs countdown function
countdown();