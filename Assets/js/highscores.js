// global variables that let you access two "ids" in the html file for 
let scoreList = document.getElementById("scores")
let initialsList = document.getElementById("initials")

// function that displays the highscore on the browser for the user for the length of all the items stored in local storage
function highscore () {
    scoreList.textContent = ""
    initialsList.textContent = ""
    let highScores = JSON.parse(localStorage.getItem('highScoresArray'))
    if(highScores !== null) {
        for (var i = 0; i < highScores.length; i++) {
            let scoreItem = document.createElement('li');
            let initialsItem = document.createElement('li')
            scoreItem.textContent = highScores[i].score
            initialsItem.textContent = highScores[i].initials
            scoreList.appendChild(scoreItem);
            initialsList.appendChild(initialsItem);
        }
    } else {
        return;
    }
};

//runs the highscore function
highscore();