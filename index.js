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
    if (humanChoice == CPUChoice){
        console.log("Draw!");
    }
    else if(humanChoice == "rock"){
        if(CPUChoice == "paper"){
            console.log("You Lose!");
            CPUScore++;
        }
        else if(CPUChoice == "scissors"){
            console.log("You Win!");
            humanScore++;
        }
    }
    else if(humanChoice == "paper"){
        if(CPUChoice == "scissors"){
            console.log("You Lose!");
            CPUScore++;
        }
        else if(CPUChoice == "rock"){
            console.log("You Win!");
            humanScore++;
        }
    }
    else if(humanChoice == "scissors"){
        if(CPUChoice == "rock"){
            console.log("You Lose!");
            CPUScore++;
        }
        else if(CPUChoice == "paper"){
            console.log("You Win!");
            humanScore++;
        }
    }
}
function playGame(){
    for(i=0; i<6;i++){
        playGame(getHumanChoice(),getComputerChoice());
    }
    console.log(humanScore);
    console.log(CPUScore);
}
playGame();

