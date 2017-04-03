var cardDeck = require("./playingcards.js");

var deck = new cardDeck();
// deck.initDeck();
console.log(deck.deck);
deck.shuffle();
console.log(deck.deck);
