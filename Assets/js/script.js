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
let highScores = JSON.parse(localStorage.getItem('highScoreArray'));
let questions = [
    {
    question: "Which of the following is a correct way to create an object in java script?",
    choices: ["var name = {}", "name = {}", "{name} = {}", "object name = {}"],
    answer: 2
    },

    {
     question: "What does a const keyword do in javascript?",
     choices: ["Creates a variable with a value that can be changed within the Scope", "Creates a variable with a value that can only be changed upon calling const again", "Creates a variable with a value that can never be changed", "Creates a variable with a value that can only be changed once"],
     answer: 3
    },

    {
     question: "abcde?",
     choices: ["A", "B", "C", "D"],
     answer: 4
    },

    {
    question: "aaaaaa?",
    choices: ["Aa", "Bb", "Cc", "Dd"],
    answer: 2
    },

    {
    question: "ccccccc?",
    choices: ["aaA", "bbbB", "C", "D"],
    answer: 1
    }

];

function displayQuestionOne () {
    quizQuestion.innerHTML = questions[qNum].question
    quizChoice1.innerHTML = questions[qNum].choices[0]
    quizChoice2.innerHTML = questions[qNum].choices[1]
    quizChoice3.innerHTML = questions[qNum].choices[2]
    quizChoice4.innerHTML = questions[qNum].choices[3]
    // displayQuestionTwo();
};

// function displayQuestionTwo() {
//     question1.addEventListener("click", function() {
//         checkAns(questions[0].answer)
//         quizQuestion.innerHTML = questions[1].question
//         quizChoice1.innerHTML = questions[1].choices[0]
//         quizChoice2.innerHTML = questions[1].choices[1]
//         quizChoice3.innerHTML = questions[1].choices[2]
//         quizChoice4.innerHTML = questions[1].choices[3]
//         question1.setAttribute("id", "question2")
//         displayQuestionThree();
//     });
// };

// function displayQuestionThree () {
//     let question2 = document.querySelector("#question2");
//     question2.addEventListener("click", function() {
//         checkAns(questions[1].answer)
//         quizQuestion.innerHTML = questions[2].question
//         quizChoice1.innerHTML = questions[2].choices[0]
//         quizChoice2.innerHTML = questions[2].choices[1]
//         quizChoice3.innerHTML = questions[2].choices[2]
//         quizChoice4.innerHTML = questions[2].choices[3]
//         question2.setAttribute("id", "question3")
//         displayQuestionFour();
//     });
// };

// function displayQuestionFour () {
//     let question3 = document.querySelector("#question3");
//     question3.addEventListener("click", function() {
//         console.log(userans)
//         quizQuestion.innerHTML = questions[3].question
//         quizChoice1.innerHTML = questions[3].choices[0]
//         quizChoice2.innerHTML = questions[3].choices[1]
//         quizChoice3.innerHTML = questions[3].choices[2]
//         quizChoice4.innerHTML = questions[3].choices[3]
//         question3.setAttribute("id", "question4")
//         displayQuestionFive ();
//     });
// };

// function displayQuestionFive () {
//     let question4 = document.querySelector("#question4")
//     question4.addEventListener("click", function() {
//         console.log(userans)
//         quizQuestion.innerHTML = questions[4].question
//         quizChoice1.innerHTML = questions[4].choices[0]
//         quizChoice2.innerHTML = questions[4].choices[1]
//         quizChoice3.innerHTML = questions[4].choices[2]
//         quizChoice4.innerHTML = questions[4].choices[3]
//     });
// };

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
    if(highscore === null) {
        highscoreArr = highScoresArr.concat(results);
        localStorage.setItem('highScoresArr', JSON.stringify(highScoresArr));
    } else {
        highscoreArr = highScore;
        highscoreArr = highScoresArr.concat(results);
        localStorage.setItem('highScoresArr', JSON.stringify(highScoresArr));
    };
    location.href = "./index2.html"

}