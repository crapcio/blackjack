let firstCard = 6;
let secondCard = 5;
let hasBlackJack = false;
let isAlive = true;
let msg = "Want to play a round?";
let cards = [firstCard, secondCard];


let msgEl = document.getElementById("msg-el");
let sumEl = document.querySelector("#sum-el");
let sum = firstCard + secondCard;
let cardsEl = document.getElementById("cards-el");


const startGame = () => {
    renderGame();
}


function renderGame()
{
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21){
        msg = "Do you want to draw a new card? 🤔";
        console.log(msg)
}    else if (sum === 21){
        msg = "Congratz! BlackJack! 🤩";
        hasBlackJack = true;
    }
    else{
        msg = "You are out of the game 😭";
        isAlive = false;
    }
    msgEl.textContent = msg;

    
}
function newCard(){
    console.log("Drawing a new card from the deck!");
    
    let card = 6;
    
    sum += card;

    startGame()
}
msgEl.textContent = msg;