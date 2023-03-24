let game = {
    deck: {},
    cardsUp: 0,
    card1: 0,
    card2: 0,
};
let card1 = 0;
let card2 = 0;


function createDeck(numPairs){
    let cardArr = [];
    //let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let symbols = ['\u20AA', '\u20B4', '\u20B8', '\u2126', '\u2180', '\u2181', '\u2182', '\u21B9', '\u21EA', '\u222D', '\u222E', '\u221E', '\u22C8', '\u2234', '\u22F1', '\u2318', '\u2316', '\u2314', '\u2311', '\u2306', '\u2388', '\u2389', '\u238A', '\u23C8', '\u23B3', '\u23CF', '\u23FB', '\u23FE', '\u23D5', '\u235A', '\u23B6', '\u2370', '\u2324', '\u2352', '\u23E3']
    for(i = 0; i < numPairs; i++){
        const card = {
            id: i,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            color: `hsl(${Math.floor(Math.random() * 360)} ${50 + Math.floor(Math.random() * 51)}% ${Math.floor(Math.random() * 101)}%)`,
        }
        cardArr.push(card);
        cardArr.push(card);
    }
    return cardArr;
}

function shuffle(deck){
    let shuffledDeck = [];
    for(let i = deck.length; i > 0; i--){
        let nextCard = Math.floor(Math.random() * i);
        //console.log(nextCard);
        shuffledDeck.push(deck[nextCard]);
        deck.splice(nextCard, 1)
    }
    return shuffledDeck
}

function putCardsBackDown(){
    card1.firstChild.style.visibility = 'hidden';
    card2.firstChild.style.visibility = 'hidden';
    card1.addEventListener('click', flipCard);
    //game.card1 = 0;
    //game.card2 = 0;
    card1 = 0;
    card2 = 0;
}

function flipCard(obj){
    console.log(`card1 = ${card1}`);
    console.log(`card2 = ${card2}`);
    //console.log('G')
    //console.log(obj.target.firstChild.style.visibility);
    if(obj.target.firstChild.style.visibility === 'hidden'){
        obj.target.firstChild.style.visibility = 'visible';
    }
    if(card1 === 0){
        //game.card1 = obj.target;
        card1 = obj.target;
        card1.removeEventListener('click', flipCard);
    }else{
        //game.card2 = obj.target;
        card2 = obj.target;
        if(card1.id != card2.id){
            setTimeout(putCardsBackDown, 500)
        }else{
            card2.removeEventListener('click', flipCard);
            card1 = 0;
            card2 = 0;
        }





        //game.card1 = 0;
        //game.card2 = 0;
    }
}

function layCard(card){
    let cardElement = document.createElement('div');
    cardElement.innerHTML = `<p>${card.symbol}</p>`;
    cardElement.classList.add('card');
    cardElement.style.color = card.color;
    cardElement.id = card.id;
    cardElement.addEventListener('click', flipCard);
    cardElement.firstChild.style.visibility = 'hidden';


    document.getElementById('card-holder').appendChild(cardElement);
}

//Testing layCard(function)
/*
layCard({
    id: '1',
    symbol: 'A',
    color: `hsl(${Math.floor(Math.random() * 360)} ${50 + Math.floor(Math.random() * 51)}% ${Math.floor(Math.random() * 101)}%)`,
});
*/



//'#201F2E'
/*
let testCard = document.createElement('div');
testCard.innerHTML = '<p>\u20AA</p>';
testCard.classList.add('card');

document.getElementById('card-holder').appendChild(testCard);
*/

game.deck = shuffle(createDeck(2));
game.deck.forEach(card => layCard(card));















