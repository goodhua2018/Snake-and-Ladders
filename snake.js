// dice function
let diceBtn = document.querySelector('.dice');
let showNum = document.querySelector('.show-num');
let showDice = document.querySelector('.show-dice');
// draw map
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
// players
const players = [
    {
        name: "Bunny",
        img: 'img1',
        position: 0
    },
    {
        name: "Cow",
        img: 'img2',
        position: 0
    }
];
let ladders = [
    {
        startPosition: 3,
        endPosition: 14
    },
    {
        startPosition: 27,
        endPosition: 45
    },
    {
        startPosition: 42,
        endPosition: 63
    },
    {
        startPosition: 68,
        endPosition: 87
    }
];


let turn = 0;


function dice () {
    if (turn >= players.length) {
        turn = 0;
    }
   
    let currentPlayer = players[turn];
    
    let img = document.querySelector(`.${currentPlayer.img}`);
    let randomNum = Math.floor(Math.random() * 6) + 1;
        showNum.textContent = randomNum;
    // var showDice = document.createElement('img');
        showDice.src = "./images/dice" + randomNum + ".gif";
        
        let previousIndex = Math.floor(currentPlayer.position / 10)
        let previousPosition = currentPlayer.position;
        console.log(previousPosition)
       
        currentPlayer.position += randomNum;
        console.log(currentPlayer.position)

        let afterIndex = Math.floor(currentPlayer.position / 10)
        
        
        // same row
        if (afterIndex === previousIndex) {
            img.style.top = `-${Math.ceil(currentPlayer.position / 10) * 50}px`;
            if (Math.floor(currentPlayer.position / 10) % 2 === 1) {
                img.style.left = `${(9 - currentPlayer.position % 10) * 50}px`;

            } else {
                img.style.left = `${currentPlayer.position % 10 * 50}px`;
            } 
            // different rows
        } else {
            //previous position 1x, 3x, 5x, 7x, 9x, step direction right to left
            if (Math.floor(previousPosition / 10) % 2 === 1) {
                img.style.top = `-${Math.ceil(previousPosition / 10) * 50}px`;
                img.style.left = 0
                setTimeout(() => {
                    img.style.top = `-${(Math.ceil(previousPosition / 10) + 1) * 50}px`;
                    img.style.left = 0;
                }, 2000);
                setTimeout(() => {
                    img.style.left = `${currentPlayer.position % 10 * 50}px`;
                },3000)
            } else {
                // previous position 0x, 2x, 4x, 6x, 8x, step direction left to right
                img.style.left = `450px`;
                img.style.top = `-${Math.ceil(previousPosition / 10) * 50}px`;
                setTimeout(() => {
                    img.style.top = `-${(Math.ceil(previousPosition / 10) + 1) * 50}px`;
                    img.style.left = `450px`;
                }, 2000);
                setTimeout(() => {
                    img.style.left = `${(9 - currentPlayer.position % 10) * 50}px`;
                },3000)


            }
             
        }
        if (currentPlayer.position >= 99) {
            console.log(`${currentPlayer.name} is the winner!`)
            img.style.left = `200px`;
            img.style.top = `-600px`;

        }
  
        


        // show whoes turn
        if (randomNum !== 6) {
            let nextTurn = turn + 1;  
            if (nextTurn >= players.length) {
                nextTurn = 0;
            }
            console.log(players[nextTurn].name) 
            turn++; 
        } else {
            
            console.log(players[turn].name) 
        }



        
// if (currentPlayer.position === 5) {
//     currentPlayer.position = 35;
//     img.style.top = `-${Math.ceil(currentPlayer.position / 10) * 50}px`;
// if (Math.floor(currentPlayer.position / 10) % 2 === 1) {
//     img.style.left = `${(9 - currentPlayer.position % 10) * 50}px`;

// } else {
//     img.style.left = `${currentPlayer.position % 10 * 50}px`;
// } 
// }
    setTimeout(ladder, 2000);
        function ladder () {
  
    ladders.forEach((ladder) => {
        if (ladder.startPosition === currentPlayer.position) {
            currentPlayer.position = ladder.endPosition;
            img.style.top = `-${Math.ceil(currentPlayer.position / 10) * 50}px`;
        if (Math.floor(currentPlayer.position / 10) % 2 === 1) {
            img.style.left = `${(9 - currentPlayer.position % 10) * 50}px`;
        
        } else {
            img.style.left = `${currentPlayer.position % 10 * 50}px`;
        } 
        }
    })
}
}


diceBtn.addEventListener('click', dice)


// class Player {
//     constructor(name) {
//         this.name = name;
//         this.imgUrl = '';
//         this.position = 0;
//         // bind this
//         this.diceBunny = this.diceBunny.bind(this);
//         this.diceCow = this.diceCow.bind(this);
//         this.flag = true;
        
        
//     }
//     diceBunny() {
//         let img1 = document.querySelector('.img1');
//         let randomNum = Math.floor(Math.random() * 6) + 1;
//         showNum.textContent = randomNum;
//     // var showDice = document.createElement('img');
//         showDice.src = "./images/dice" + randomNum + ".gif";
//         this.position += randomNum;
//         console.log(this)
//         console.log(this.position);
  
//         img1.style.top = `-${Math.ceil(this.position / 10) * 50}px`;
//         if (Math.floor(this.position / 10) % 2 === 1) {
//             img1.style.left = `${(9 - this.position % 10) * 50}px`;

//         } else {
//             img1.style.left = `${this.position % 10 * 50}px`;
//         }
//         this.flag = false;
       

//     }

//     diceCow() {
//         let img2 = document.querySelector('.img2');
//         let randomNum = Math.floor(Math.random() * 6) + 1;
//         showNum.textContent = randomNum;
//     // var showDice = document.createElement('img');
//         showDice.src = "./images/dice" + randomNum + ".gif";
//         this.position += randomNum;
//         console.log(this)
//         console.log(this.position);
  
//         img2.style.top = `-${Math.ceil(this.position / 10) * 50}px`;
//         if (Math.floor(this.position / 10) % 2 === 1) {
//             img2.style.left = `${(9 - this.position % 10) * 50}px`;

//         } else {
//             img2.style.left = `${this.position % 10 * 50}px`;
//         }


//     }
// }

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









    
   
    
