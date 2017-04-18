function Hand(){
	this.hand = [];

	this.add = function(card){
		this.hand.push(card);
	}

	this.discard = function(cardIndex){
		return this.hand.splice(cardIndex, 1)[0]
	}

	this.cardsLeft = function(){
		return this.hand.length;
	}
}

// module.exports = Hand;