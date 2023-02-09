let timer = document.getElementById("count");
let quizQuestion = document.getElementById("questions");
let quizChoice1 = document.getElementById("choice1");
let quizChoice2 = document.getElementById("choice2");
let quizChoice3 = document.getElementById("choice3");
let quizChoice4 = document.getElementById("choice4");
let question1 = document.querySelector("#question1");
let timeLeft = 75;
let userans
let qNum = 0
var timeInterval
let highScoresArray = []
let highScore = JSON.parse(localStorage.getItem('highScoresArray'));
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

function displayQuestionOne () {
    quizQuestion.innerHTML = questions[qNum].question
    quizChoice1.innerHTML = questions[qNum].choices[0]
    quizChoice2.innerHTML = questions[qNum].choices[1]
    quizChoice3.innerHTML = questions[qNum].choices[2]
    quizChoice4.innerHTML = questions[qNum].choices[3]
};


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
            endQuiz();
        }
    },1000);
}

function checkAns() {
    if(userans == questions[qNum].answer) {
        console.log('change to next question')
    } else {
        timeLeft = timeLeft - 15
        console.log('wrong')
    }
};

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

displayQuestionOne();
countdown();

function endQuiz() {
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