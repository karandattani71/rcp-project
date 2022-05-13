var userScore = 0;
var computerScore = 0;
var tie=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const winscore_span=document.getElementById("win-score");
const sccoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div=document.getElementById('btn1')


function computerChoice() {
    const choices = ['rc', 'pc', 'sc'];
    const choice_result=choices[Math.floor(Math.random() * 3)];
    if(choice_result=='rc'){
        document.getElementById("imgc").innerHTML="<img src='img/rock1.png' width=230px height=230px>";
    }
    else if(choice_result=='pc'){
        document.getElementById("imgc").innerHTML="<img src='img/paper1.png' width=230px height=230px>";
    }
    else{
        document.getElementById("imgc").innerHTML="<img src='img/scissor1.png' width=230px height=230px>";
    }
    return choice_result;
}

// Here I have defined 3 function to for win , luse , draw


function win(userInput, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // winscore_span.innerHTML=userScore;

    if (userInput === 'r' && compChoice === 'sc') {
        result_p.innerHTML = `Computer chosed Scissors. You Win`;
    }
    else if (userInput === 'p' && compChoice === 'rc') {
        result_p.innerHTML = `Computer chosed Rock. You Win`;
    }
    else if (userInput === 's' && compChoice === 'pc') {
        result_p.innerHTML = `Computer chosed Paper. You Win`;
    }
    console.log(userInput,compChoice)

    // Using a delay of 350ms after showing background green/red/black colour
    console.log(compChoice)
    document.getElementById(userInput).classList.add('win');
    document.getElementById(compChoice).classList.add('lose');
    setTimeout(function () { document.getElementById(userInput).classList.remove('win'); }, 350);
    setTimeout(function () { document.getElementById(compChoice).classList.remove('lose'); }, 350);
}

function Lose(userInput, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'pc') {
        result_p.innerHTML = "Computer chosed Paper. You Lost";
    }
    else if (userInput === 'p' && compChoice === 'sc') {
        result_p.innerHTML = `Computer chosed Scissors. You Lost`;
    }
    else if (userInput === 's' && compChoice === 'rc') {
        result_p.innerHTML = `Computer chosed Rock. You Lost`;
    }
    document.getElementById(userInput).classList.add('lose');
    document.getElementById(compChoice).classList.add('win');
    setTimeout(function () { document.getElementById(userInput).classList.remove('lose'); }, 350);
    setTimeout(function () { document.getElementById(compChoice).classList.remove('win'); }, 350);

}

function Draw(userInput, compChoice) {
    tie++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'rc') {
        result_p.innerHTML = `It's a Draw!!`;
    }
    else if (userInput === 'p' && compChoice === 'pc') {
        result_p.innerHTML = `It's a Draw!!`;
    }
    else if (userInput === 's' && compChoice === 'sc') {
        result_p.innerHTML = `It's a Draw!!`;
    }
    document.getElementById(userInput).classList.add('draw');
    document.getElementById(compChoice).classList.add('draw');
    setTimeout(function () { document.getElementById(userInput).classList.remove('draw'); }, 350);
    setTimeout(function () { document.getElementById(compChoice).classList.remove('draw'); }, 350);
}

// Getting called by main function with info of user choice
// Calls function Win , Lose and Draw .

function game(userInput) {
    const compChoice = computerChoice();
    const UserChoice = userInput + compChoice;
        if (UserChoice === "rsc" || UserChoice === "prc" || UserChoice === "spc") {
        win(userInput, compChoice);
        console.log("Win");
    }
    else if (UserChoice === "rpc" || UserChoice === "psc" || UserChoice === "src") {
        Lose(userInput, compChoice);
        console.log("Lose");
    }
    else if (UserChoice === "rrc" || UserChoice === "ppc" || UserChoice === "ssc") {
        Draw(userInput, compChoice);
        console.log("Draw");
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        document.getElementById("imag").innerHTML="<img src='img/rock1.png' width=230px height=230px>";
        game('r');
    })
    paper_div.addEventListener('click', function () {
        document.getElementById("imag").innerHTML="<img src='img/paper1.png' width=230px height=230px>";
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        document.getElementById("imag").innerHTML="<img src='img/scissor1.png' width=230px height=230px>";
        game('s');
    })
    reset_div.addEventListener('click', function() {
        userScore_span.innerHTML=0
        computerScore_span.innerHTML=0
        userScore=0
        computerScore=0
        document.getElementById("imag").innerHTML="<img src='img/user.png' class='imagm'>";
        document.getElementById("imgc").innerHTML="<img src='img/computer.png' class='imgc'>";

    })
}

main();