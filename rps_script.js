var selections = document.getElementsByClassName("image");
var selectionOverlay = document.getElementsByClassName("onTop");

var userChoice
var computerChoice

var imageArray = ['rock.png', 'paper.png', 'scissors.png'];

var decisionText;
var playerScore = 0;
var computerScore = 0;
var roundNumber = 1;


function fadeOut(){
    for (i=0; i<selections.length; i++){
        selections[i].classList.add("fadeOut");
    }
    
}

function fadeIn(){
    for (i=0; i<selectionOverlay.length; i++){
        selectionOverlay[i].classList.add("fadeIn");
    }

}

function playAgainFadeIn(){
    document.getElementById(playAgain).classList.add("fadeIn");
}




function selectImage(item){
    var url = item + ".png";
    userChoice = url;
    document.getElementById("userImage").src = url;
    computerSelection()
    fadeInAndOut();
}



function computerSelection(){
    var digit = Math.floor((Math.random() * 3));
    computerChoice = imageArray[digit];
    document.getElementById("computerImage").src = imageArray[digit];
}

function fadeInAndOut(){
    fadeIn();
    fadeOut();
    scoreCalculation();
}

//calculations

function whatBeats(move){
    var place = imageArray.indexOf(move);
    var beatsYourItem = imageArray[(place + 1) % 3];
    return beatsYourItem; //beatsItem tells you what item BEATS your item, i.e. if your item is paper then scissors would be beatsItem
}


function scoreCalculation(){
    if (computerChoice == userChoice){
        decisionText = "Draw!";
    }
    else if (whatBeats(computerChoice) == userChoice){
        decisionText = "Player Wins!";
        playerScore++;
    }
    else if (whatBeats(userChoice) == computerChoice){
        decisionText = "Computer Wins!";
        computerScore++;
    }
    document.getElementById("playAgain").classList.add("show");
    showScores();
}

function showScores(){
    var playerScoreText = document.getElementById("playerScore");
    var computerScoreText = document.getElementById("computerScore");
    var decisionTextOn = document.getElementById("decisionText");

    playerScoreText.innerHTML = "Your score: "+ playerScore;
    computerScoreText.innerHTML = "Computer score: "+ computerScore;
    decisionTextOn.innerHTML = decisionText;
}

function playAgain(){
    document.getElementById("playAgain").classList.remove("show");

    for (i=0; i<selections.length; i++){
        selections[i].classList.remove("fadeOut");
    }

    for (i=0; i<selectionOverlay.length; i++){
        selectionOverlay[i].classList.remove("fadeIn");
    }

    document.getElementById("decisionText").innerHTML = "";
    roundNumber++;
    document.getElementById("round").innerHTML = "Round " + roundNumber;
    
}

function reset(){
    playerScore=0;
    computerScore=0;
    roundNumber=0;
    playAgain();
    decisionText = "";
    showScores();
}