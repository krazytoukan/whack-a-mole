/*
1. Timer should start at 30 seconds.
2. On start Mole needs to appear.
3. On start, timer should decrease by one second.
4. Mole needs to move randomly every  second.
5. On click of mole: increase score by one.
6. On timer = 0, show alert pop up with final score.
7. Reset gameboard.
*/

var mole = document.querySelector(".mole");
var startButton = document.querySelector(".start-button");
var scoreBoard = document.querySelector(".points");
var timer = document.querySelector(".timer");
var holes = document.querySelectorAll(".hole");
var points = 0;
const difficulty = document.getElementById("difficulty");

//Start Button Logic
startButton.addEventListener("click", function() {
    //sets timer to 30 seconds
    timer.innerText = 30;
    //interval causing timer to decrease and resetting gameboard at end
    var timerInterval =  setInterval(function(){
        if (timer.innerText > 0){
            timer.innerText --;
        } else {
            clearInterval(timerInterval);
            startButton.disabled = false;
            clearInterval(moleInterval);
            points = 0;
            mole.style.display = "none";
            alert("Time's Up! You Scored " + scoreBoard.innerText + "!");
        }
    }, 1000);
    //interval for automatic Mole movement (implementing difficulty as well)
    var moleSpeed = null;
        switch(difficulty.value){
            case "easy":
                moleSpeed = 1000;
                break
            case "medium":
                moleSpeed = 750;
                break
            case "hard":
                moleSpeed = 400
        }
    var moleInterval = setInterval(moveMole, moleSpeed);
    //Set Score Board to be Dynamic
    scoreBoard.innerText = points + " Points";
    //Disable button during game
    startButton.disabled = true;
}
)


//Move the Mole. holes.length-1 instead of 9 allows for dynamic scaling
function moveMole(){
    mole.style.display = "inline-block";
    holes[Math.floor(Math.random()* (holes.length -1))].appendChild(mole);
}

//You Got that Damn Mole
function moleClick(){
    points += 1;
    scoreBoard.innerText = points + " Points";
    moveMole();
}
//Clicking the Mole
mole.addEventListener("click", moleClick);