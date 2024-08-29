let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePoint = document.querySelector("#user-score");
const compScorePoint = document.querySelector("#computer-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return(option[randIdx]);
}

const drawGame = () =>{
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScorePoint.innerText = userScore;
        msg.innerText = `You win, your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else{
        compScore++
        compScorePoint.innerText = compScore;
        msg.innerText = `You lose, your ${userChoice} was beaten by ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log(`${userChoice} = user`);
    const compChoice = genCompChoice()
    console.log(`${compChoice} = computer`);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        } 
        
        else if (userChoice === "paper"){
            userWin = compChoice === "rock"? true: false;    
        }
        
        else{
            userWin = compChoice === "paper"? true: false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})