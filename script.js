// to generate random numbers in the range of 0 to 2
// Math.random() * 3;
// to generate in the range of 0 to 9
// Math.random() * 10

// to remove the decimal values we use 
// Math.floor(Math.random() * 10);
// now the generated random numbers will look like >> 0 1 2 3 4 5... 


let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
// 3
const genCompChoice = () => {
    // rock paper scissors 
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//4 
const drawGame = () => {
    console.log("Draw Game!");
    msg.innerText = "Game was draw! Play again."
    msg.style.backgroundColor = "#081b31";
}

// 5 
const showWinner = (userWin, userChoice, compChoice) => {
      if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log(`You win!`);
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`
        msg.style.backgroundColor = "green";
      } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log(`You lose!`)
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
      }
}

// 2
let playGame = (userChoice) => {
    console.log(`user choice = ${userChoice}`)
    //   now generate comp choice >> modualar way of programming in which each function performs only one task
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`)


    if (userChoice === compChoice) {
        // draw game 
        drawGame();
    } else {
        let userWin = true;           //assume
        if (userChoice === "rock") {
            // scissors  , paper   >> computer choice can not be rock bcz agr aesa hota tou draw condition lag jati 
            userWin = compChoice === "paper"? false : true;
        } else if (userChoice === "paper") {
            // comp >> rock scissor 
            userWin = compChoice === "scissors"? false : true;
        } else {
            // userChoice >>  scissors
            // compChoice >> rock , paper 
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

// 1
choices.forEach((choice) => {
    // console.log(choice) 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice)
    })
})