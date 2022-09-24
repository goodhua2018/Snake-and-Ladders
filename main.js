// dice function
let diceBtn = document.querySelector('.dice');
let showNum = document.querySelector('.show-num');
let showDice = document.querySelector('.show-dice');
function dice() {
    randomNum = Math.floor(Math.random() * 6) + 1;
    showNum.textContent = randomNum;
    // var showDice = document.createElement('img');
    showDice.src = "./images/dice" + randomNum + ".gif"

}


diceBtn.addEventListener('click', dice)