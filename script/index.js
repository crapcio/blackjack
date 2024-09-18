
const getRandomCard = () => {
    let randomCard = Math.floor(Math.random()*10 ) + 1;
    return randomCard;
}


let firstCard = getRandomCard();
let secondCard = getRandomCard();
let hasBlackJack = false;
let isAlive = true;
let msg = "Want to play a round?";
let cards = [firstCard, secondCard];
let cardsPool = [1,2,3,4,5,6,7,8,9,10,11,
    1,2,3,4,5,6,7,8,9,10,11,
    1,2,3,4,5,6,7,8,9,10,11,
    1,2,3,4,5,6,7,8,9,10,11
]

let msgEl = document.getElementById("msg-el");
let sumEl = document.querySelector("#sum-el");
let sum = firstCard + secondCard;
let cardsEl = document.getElementById("cards-el");


const startGame = () => {
    renderGame();
}



function renderGame()
{   cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }

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
    
    let card = getRandomCard();
    cards.push(card);
    
    sum += card;
    console.log(cards)
    startGame()
}
msgEl.textContent = msg;