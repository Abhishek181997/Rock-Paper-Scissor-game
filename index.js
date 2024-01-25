let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const genCompChoice = ()=>{
    const options = ["rock", "paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    console.log("game was draw.");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = " #081b31";
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You win")
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You lose")
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost.   ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice===compChoice){
        // Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==='rock'){
            // scissors, paper
            userWin = compChoice === "paper" ?false:true;

        }else if(userChoice === 'scissor'){
            // rock, paper
            userWin = compChoice === "rock" ? false:true;
        }else{
            userWin = compChoice === "scissor" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    

}

choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked", userChoice);
        playGame(userChoice);

    });
})