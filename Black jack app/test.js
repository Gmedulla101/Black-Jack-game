let playerEl = document.querySelector("#player-el");
let message = "";
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let cards = [];

let player = {
    name: "Great",
    chips: 200,
    sayHello: function(){
        console.log("Lamogun!");
    } ,
}

console.log(player.sayHello());

playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard(){
    let gameNumber = Math.floor((Math.random() * 13) + 1);

    if(gameNumber > 10){
        return 10
    } else if(gameNumber === 1){
        return 11
    } else {
        return gameNumber
    };
};

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    isAlive = true;
    renderGame()

}

function renderGame(){ 
    cardEl.textContent = "Cards: " ; 

    for (i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ", ";
    };


    sumEl.textContent = "Sum: " + sum;
    
    if(sum <= 20){
        message = "Do you want a new card?";
    } else if(sum === 21){
        message = "You've got blackjack!";
        hasBlackJack = true;
       
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }
    
    console.log(message);
    messageEl.textContent = message;
}


function newCard(){

    if(isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!")
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    };

};

function newGame(){
    messageEl.textContent = "Want to play a round?";
    cardEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    hasBlackJack = false;
}
















