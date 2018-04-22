// var cardDeck = require("./playingcards.js");
// var Hand = require("./hand.js");

//deal out starting hands
function initHands(players, pool){

	//deal out 7 cards for each player alternate
	for(i = 0; i < players.length*7; i++){
		if(pool.cardsLeft())
			players[i%players.length].add(pool.dealOne())
		else
			break;
	}
}

//ask player for card and dicards
function fishing(player ,value){
	var hand = player.hand;
	var hook = []
	for(i=0;i<hand.length; i++){
		if(hand[i].value == value){
			hook.push(player.discard(i));
			i--;
		}
	}
	return hook;
}

function drawNewHand(player, num){
	var n = (num <= pool.cardsLeft()) ? num : pool.cardsLeft();
	for(i=0;i<n;i++){
		player.add(pool.dealOne())
	}
}
