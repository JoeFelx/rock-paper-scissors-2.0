let pScore = 0;
let cScore = 0;


var playerScore = document.querySelector(".pScore");
var computerScore = document.querySelector(".cScore");
var humanHand = document.querySelector(".humanHand");
var compHand = document.querySelector(".compHand");   
var playBtn = document.querySelector(".playBtn");
var playScreen = document.querySelector(".startMenu");
var gameScreen = document.querySelector(".container");

playBtn.addEventListener("click", function () {
    playScreen.classList.add("fadeOut");
    gameScreen.classList.remove("fadeOut");
})


function Click() {
    var button = document.querySelectorAll(".button");
    for(i = 0; i < button.length; i++){
        button[i].addEventListener("click", function(){
            var HumanChoice = this.innerHTML;
            console.log(HumanChoice);

            humanHand.setAttribute("src", "/assets/" + HumanChoice + ".png");

            var options = ["scissors", "rock", "paper", "paper", "scissors", "rock"];
            var compChoice = Math.floor(Math.random(options) * 6);
            var compDecision = options[compChoice];
            compHand.setAttribute("src", "/assets/" + compDecision + ".png");

            if (HumanChoice === "rock" && compDecision === "scissors") {
                document.querySelector(".title h3").innerHTML = "You win";
                pScore++;
            } else if ( HumanChoice === "paper" && compDecision === "rock") {
                document.querySelector(".title h3").innerHTML = "You win";
                pScore++;
            } else if (HumanChoice === "scissors" && compDecision === "paper") {
                document.querySelector(".title h3").innerHTML = "You win";
                pScore++;
            } else if (compDecision === HumanChoice) {
                document.querySelector(".title h3").innerHTML = "Draw";
            }
            else {
                document.querySelector(".title h3").innerHTML = "You lose";
                cScore++;
            }
            playerScore.innerHTML = pScore;
            computerScore.innerHTML = cScore;
        });
    };
};


Click();