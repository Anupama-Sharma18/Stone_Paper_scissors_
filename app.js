let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw" ;
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin){
        console.log("user wins!");
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = "you wins";
        msg.style.backgroundColor = "green";


    }else{
        console.log("computer wins");
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        
        
    }
}
const playGame = (userChoice) => {
    const compchoice = genCompChoice();

    if(userChoice === compchoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compchoice === "paper"? false:true;
        }else if (userChoice === "paper"){
            userWin = compchoice === "scissors"? true:false;
        }else{
            userWin = compchoice === "rock"? false: true;
        }
    showWinner(userWin, userChoice, compchoice);  
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });    
});
