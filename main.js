// dice function
let diceBtn = document.querySelector('.dice');
let showNum = document.querySelector('.show-num');
let showDice = document.querySelector('.show-dice');

class Player {
    constructor(name) {
        this.name = name;
        this.position = 1;

    }

}
play = [
    {
        name: 'Bunny',
        imgUrl: './images/bunny.png'

    },
    {
        name: 'Cow',
        imgUrl: './images/bunny.png'

    }
]
function dice() {
    randomNum = Math.floor(Math.random() * 6) + 1;
    showNum.textContent = randomNum;
    // var showDice = document.createElement('img');
    showDice.src = "./images/dice" + randomNum + ".gif"

}


diceBtn.addEventListener('click', dice)

var mapSection = document.querySelector('.map');
for (let i = 9; i >= 0; i--) {
    var row = document.createElement('section');
    mapSection.appendChild(row);
    row.classList.add('row');
    if (i % 2 === 0) {
        
        for (let j = 1; j <= 10; j++) {
            let smallGrid = document.createElement('div');
            smallGrid.textContent = i * 10 + j;
            smallGrid.classList.add('small-grid');
            row.appendChild(smallGrid)
        } 
    } else {
        
        for (let j = 10; j >= 1; j--) {
        let smallGrid = document.createElement('div');
        smallGrid.textContent = i * 10 + j;
        smallGrid.classList.add('small-grid');
        row.appendChild(smallGrid)
        }
    }
}


    
   
    
