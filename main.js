// dice function
let diceBtn = document.querySelector('.dice');
let showNum = document.querySelector('.show-num');
let showDice = document.querySelector('.show-dice');

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


class Player {
    constructor(name) {
        this.name = name;
        this.imgUrl = '';
        this.position = 0;
        // bind this
        this.diceBunny = this.diceBunny.bind(this);
        this.diceCow = this.diceCow.bind(this);
        this.flag = true;
        
        
    }
    diceBunny() {
        let img1 = document.querySelector('.img1');
        let randomNum = Math.floor(Math.random() * 6) + 1;
        showNum.textContent = randomNum;
    // var showDice = document.createElement('img');
        showDice.src = "./images/dice" + randomNum + ".gif";
        this.position += randomNum;
        console.log(this)
        console.log(this.position);
  
        img1.style.top = `-${Math.ceil(this.position / 10) * 50}px`;
        if (Math.floor(this.position / 10) % 2 === 1) {
            img1.style.left = `${(9 - this.position % 10) * 50}px`;

        } else {
            img1.style.left = `${this.position % 10 * 50}px`;
        }
        this.flag = false;
       

    }

    diceCow() {
        let img2 = document.querySelector('.img2');
        let randomNum = Math.floor(Math.random() * 6) + 1;
        showNum.textContent = randomNum;
    // var showDice = document.createElement('img');
        showDice.src = "./images/dice" + randomNum + ".gif";
        this.position += randomNum;
        console.log(this)
        console.log(this.position);
  
        img2.style.top = `-${Math.ceil(this.position / 10) * 50}px`;
        if (Math.floor(this.position / 10) % 2 === 1) {
            img2.style.left = `${(9 - this.position % 10) * 50}px`;

        } else {
            img2.style.left = `${this.position % 10 * 50}px`;
        }


    }
}
var bunny = new Player('bunny', 0)
var cow = new Player('Cow', 0)

var steps = 0;
// if (steps % 2 === 0) {
    
// if (diceBtn.onclick = bunny.diceBunny;
//     steps++;
//     console.log(steps);
// } 
// if (steps % 2 === 1) {
    
//     diceBtn.onclick = cow.diceCow;
//     steps++;
//     console.log(steps);
// }

/*
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
*/






    
   
    
