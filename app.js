const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", ()=>{
    play(ROCK);
});

scissorsBtn.addEventListener("click", ()=>{
    play(SCISSORS);
});

paperBtn.addEventListener("click", ()=>{
    play(PAPER);
});



function play(userOption) {
    userImg.src = "img/" +userOption+ ".svg";

    resultText.innerHTML = "Pensando!";

    const inteval = setInterval(function (){
        const machineOption = calcMachineOption();
        machineImg.src = "./img/" +machineOption+ ".svg";
    }, 200);

    setTimeout(function (){

        clearInterval(inteval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);
    
    
        machineImg.src = "./img/" +machineOption+ ".svg";
    
            switch(result){
                case TIE:
                    resultText.innerHTML = "Empate";
                    break;
                case WIN:
                    resultText.innerHTML = " Has Ganado!";
                    break;
                case LOST:
                    resultText.innerHTML = "Tu Pierdes!";
                    break;
            }
    }, 1500);


   
}

function calcMachineOption(){
   const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;
    }else if(userOption === ROCK){

        if(machineOption === PAPER) return LOST;
        if(machineOption === SCISSORS)return WIN;

    }else if(userOption === SCISSORS){
        
        if(machineOption === PAPER) return WIN;
        if(machineOption === ROCK)return LOST;

    }else if(userOption === PAPER){
        
        if(machineOption === SCISSORS) return LOST;
        if(machineOption === ROCK)return WIN;
    
    }
}