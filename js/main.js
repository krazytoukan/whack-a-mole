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

//Start Button Logic
startButton.addEventListener("click", function() {
    //sets timer to 30 seconds
    timer.innerText = 30;
    //interval causing timer to decrease
    var timerInterval =  setInterval(function(){
        if (timer.innerText > 0){
            timer.innerText --;
        } else {
            clearInterval(timerInterval)
        }
    }, 1000);
    //interval for automatic Mole movement
    var moleInterval = setInterval(moveMole, 1000);
    //Countdown for 30 seconds
    setTimeout(function(){alert("Time's Up! You Scored " + scoreBoard.innerText + "!")}, 30000);
    //Set Score Board to be Dynamic
    scoreBoard.innerText = points + " Points";
    //Disable and then program button to be reenabled
    startButton.disabled = true;
    //Reset gameboard including score, mole speed, and points
    setTimeout(function(){
        startButton.disabled = false;
        clearInterval(moleInterval);
        points = 0;
        mole.style.display = "none";
    }, 30000)
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