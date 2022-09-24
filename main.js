// dice function
let diceBtn = document.querySelector('.dice');
let showNum = document.querySelector('.show-num');
let showDice = document.querySelector('.show-dice');

// class Player {
//     constructor(name) {
//         this.name = name;
//         this.position = 1;

//     }

// }
const player1 = {
        name: 'Bunny',
        imgUrl: './images/bunny.png',
        position: 0
    };
const player2 = {
        name: 'Cow',
        imgUrl: './images/bunny.png',
        position: 0

    }

var player1Div = document.querySelector('.player1')
var img1 = document.querySelector('.img1');
var player2Div = document.querySelector('.player2')

function dice() {
    randomNum = Math.floor(Math.random() * 6) + 1;
    showNum.textContent = randomNum;
    // var showDice = document.createElement('img');
    showDice.src = "./images/dice" + randomNum + ".gif";
    player1.position += randomNum;
    console.log(player1.position);
  
    img1.style.top = `-${Math.ceil(player1.position / 10) * 50}px`;
    if (Math.floor(player1.position / 10) % 2 === 1) {
        img1.style.left = `${(9 - player1.position % 10) * 50}px`;

    } else {
        img1.style.left = `${player1.position % 10 * 50}px`;
    }
    
    

    


}


diceBtn.addEventListener('click', dice)

var mapSection = document.querySelector('.map');
for (let i = 9; i >= 0; i--) {
    var row = document.createElement('section');
    row.classList.add('row');
    mapSection.appendChild(row);
    
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


    
   
    
