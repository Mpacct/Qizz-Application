let quizQuestion = document.getElementById("questions");
let quizChoice1 = document.getElementById("choice1");
let quizChoice2 = document.getElementById("choice2");
let quizChoice3 = document.getElementById("choice3");
let quizChoice4 = document.getElementById("choice4");
let question1 = document.querySelector("#question1");
let questions = [
    {
    question: "Which of the following is a correct way to create an object in java script?",
    choices: ["var name = {}", "name = {}", "{name} = {}", "object name = {}"]
    },

    {
     question: "What does a const keyword do in javascript?",
     choices: ["Creates a variable with a value that can be changed within the Scope", "Creates a variable with a value that can only be changed upon calling const again", "Creates a variable with a value that can never be changed", "Creates a variable with a value that can only be changed once"]
    },

    {
     question: "abcde?",
     choices: ["A", "B", "C", "D"]
    },

    {
    question: "aaaaaa?",
    choices: ["Aa", "Bb", "Cc", "Dd"]
    },

    {
    question: "ccccccc?",
    choices: ["aaA", "bbbB", "C", "D"]
    }

];

function displayQuestionOne () {
    quizQuestion.innerHTML = questions[0].question
    quizChoice1.innerHTML = questions[0].choices[0]
    quizChoice2.innerHTML = questions[0].choices[1]
    quizChoice3.innerHTML = questions[0].choices[2]
    quizChoice4.innerHTML = questions[0].choices[3]
    displayQuestionTwo();
};

function displayQuestionTwo() {
    question1.addEventListener("click", function() {
        quizQuestion.innerHTML = questions[1].question
        quizChoice1.innerHTML = questions[1].choices[0]
        quizChoice2.innerHTML = questions[1].choices[1]
        quizChoice3.innerHTML = questions[1].choices[2]
        quizChoice4.innerHTML = questions[1].choices[3]
        question1.setAttribute("id", "question2")
        displayQuestionThree();
    });
};

function displayQuestionThree () {
    let question2 = document.querySelector("#question2");
    question2.addEventListener("click", function() {
        quizQuestion.innerHTML = questions[2].question
        quizChoice1.innerHTML = questions[2].choices[0]
        quizChoice2.innerHTML = questions[2].choices[1]
        quizChoice3.innerHTML = questions[2].choices[2]
        quizChoice4.innerHTML = questions[2].choices[3]
        question2.setAttribute("id", "question3")
        displayQuestionFour();
    });
};

function displayQuestionFour () {
    let question3 = document.querySelector("#question3");
    question3.addEventListener("click", function() {
        quizQuestion.innerHTML = questions[3].question
        quizChoice1.innerHTML = questions[3].choices[0]
        quizChoice2.innerHTML = questions[3].choices[1]
        quizChoice3.innerHTML = questions[3].choices[2]
        quizChoice4.innerHTML = questions[3].choices[3]
        question3.setAttribute("id", "question4")
        displayQuestionFive ();
    });
};

function displayQuestionFive () {
    let question4 = document.querySelector("#question4")
    question4.addEventListener("click", function() {
        quizQuestion.innerHTML = questions[4].question
        quizChoice1.innerHTML = questions[4].choices[0]
        quizChoice2.innerHTML = questions[4].choices[1]
        quizChoice3.innerHTML = questions[4].choices[2]
        quizChoice4.innerHTML = questions[4].choices[3]
    });
};

displayQuestionOne();