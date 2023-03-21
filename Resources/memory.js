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

function layCard(card){
    let cardElement = document.createElement('div');
    cardElement.innerHTML = `<p>${card.symbol}</p>`;
    cardElement.classList.add('card');
    cardElement.style.color = card.color;
    cardElement.id = card.id;


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

let deck = shuffle(createDeck(5));
deck.forEach(card => layCard(card));







