let btn = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-game-btn");

let turn0 = true; //PlayerO
const winCondition = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    enableButtons();
    msgContainer.classList.add("hide");
}

btn.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(turn0){
            btn.innerText = "O";
            turn0 = false;
        } else {
            btn.innerText = "X";
            turn0 = true;
        }
        btn.disabled = "true";

        checkWinner();
    });
});

const disableButtons = () => {
    btn.forEach((btn) => {
        btn.disabled = true;
    });
};

const enableButtons = () => {
    btn.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} has won the game!`;
    msgContainer.classList.remove("hide");
    disableButtons();
}

const checkWinner = () => {
    for(let condition of winCondition){
        let pos1Val = btn[condition[0]].innerText;
        let pos2Val = btn[condition[1]].innerText;
        let pos3Val = btn[condition[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);