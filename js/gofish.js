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
// //create Deck object
// var pool = new cardDeck();

// //create player array
// var players = [];

// //create players
// players.push(new Hand());
// players.push(new Hand());

// //initialize player turn
// var turn = Math.floor(Math.random()*players.length);

// //shuffle deck
// pool.shuffle();

// //deal out cards
// initHands();


// $("#player2").html("<p>I'm Player 2</p>");


// while(pool.cardsLeft()){
// 	//draw new hand if empty
// 	if(players[turn].cardsLeft() == 0)
// 		drawNewHand(players[turn], 7);


// }

//if hand is empty draw a new hand
//play picks play then card in their hand
//run fishing function
//if hook is size zero draw from deck and update turn
//else concat cards to hand and go again
//check if play has four of a kind
//if so discard to pile and add a point to player
//if hand is empty draw a new hand

//end loop








