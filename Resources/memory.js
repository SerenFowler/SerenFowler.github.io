function createDeck(numPairs){
    let cardArr = [];
    //let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let symbols = ['\u20AA', '\u20B4', '\u20B8', '\u2126', '\u2180', '\u2181', '\u2182', '\u21B9', '\u21EA', '\u222D', '\u222E', '\u221E', '\u22C8', '', ''];
    for(i = 0; i < numPairs; i++){
        const card = {
            id: i,
            symbol: symbols[Math.floor(Math.random * symbols.length)],
            color: `hsl(${Math.floor(Math.random() * 360)} ${50 + Math.floor(Math.random() * 51)}% ${Math.floor(Math.random() * 101)}%)`
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
        console.log(nextCard);
        shuffledDeck.push(deck[nextCard]);
        deck.splice(nextCard, 1)
    }
    return shuffledDeck
}

console.log(shuffle(createDeck(2)))



//'#201F2E'
let testCard = document.createElement('div');
//testCard.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)} ${50 + Math.floor(Math.random() * 51)}% ${Math.floor(Math.random() * 101)}%)`;
testCard.innerHTML = '<p>\u20AA</p>';
testCard.classList.add('card');

document.getElementById('card-holder').appendChild(testCard);
