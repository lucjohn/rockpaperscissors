let humanScore = 0;
let CPUScore = 0;

function getComputerChoice(){
    let number = Math.random()
    if (number < 1/3){
        return "rock";
    }
    else if(number < 2/3){
        return "paper";
    }
    else{
        return "scissors"
    }
}
function getHumanChoice(){
    let response = (window.prompt("Rock, Paper or Scissors?", "")).toLowerCase();
    if(response == "rock" || response == "paper" || response == "scissors"){
        return response;
    }
    else{
        return "invalid response";
    }
    }
function playRound(humanChoice, CPUChoice){
    if (humanScore < 4 && CPUScore < 4) {
        if (humanChoice == CPUChoice){
            document.querySelector(".resultsDisplay").textContent = "TIE! Your Score: " + humanScore + " CPU Score: " + CPUScore;  
    }
    else if(humanChoice == "rock"){
        if(CPUChoice == "paper"){
            CPUScore++;
            document.querySelector(".resultsDisplay").textContent = "You LOST! Your Score: " + humanScore + " CPU Score: " + CPUScore;  
        }
        else if(CPUChoice == "scissors"){
            humanScore++;
            document.querySelector(".resultsDisplay").textContent = "You WON! Your Score: " + humanScore + " CPU Score: " + CPUScore;  
        }
    }
    else if(humanChoice == "paper"){
        if(CPUChoice == "scissors"){
            CPUScore++;
            document.querySelector(".resultsDisplay").textContent = "You LOST! Your Score: " + humanScore + " CPU Score: " + CPUScore;  
        }
        else if(CPUChoice == "rock"){
            humanScore++;
            document.querySelector(".resultsDisplay").textContent = "You WON! Your Score: " + humanScore + " CPU Score: " + CPUScore;  
        }
    }
    else if(humanChoice == "scissors"){
        if(CPUChoice == "rock"){
            CPUScore++;
            document.querySelector(".resultsDisplay").textContent = "You LOST! Your Score: " + humanScore + " CPU Score: " + CPUScore;  
        }
        else if(CPUChoice == "paper"){
            humanScore++;
            document.querySelector(".resultsDisplay").textContent = "You WON! Your Score: " + humanScore + " CPU Score: " + CPUScore;  
        }
    }
}
    else {
        if (CPUChoice == 5) { document.querySelector(".resultsDisplay").textContent = "YOU HAVE BEEN DEFEATED BY THE CPU."}
        else { document.querySelector(".resultsDisplay").textContent = "YOU HAVE DEFEATED THE CPU."}
    }
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
})

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
})

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
})




