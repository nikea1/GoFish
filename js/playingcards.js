//card object
function Card(suit, val){
  this.suit = suit;
  this.value = val;
}
//swap function
function swap(array,i,j){
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

// 1 8 3 2 9 6 4 7 5
// 7 {8} 3 2 9 6 4 1 [5]
// 7 5 {3} 2 9 6 4 [1] 8
// 7 5 3 {2} 9 6 4 [1] 8
// 7 5 3 2 {9} 6 4 [1] 8
// 7 5 3 2 1 {6} [4] 9 8
// 7 5 3 2 1 6 {[4]} 9 8
// 7 5 3 2 1 6 [4] {9} 8
// 4 5 3 2 1 6 |7| 9 8

//4 {5} 3 2 1 [6] |7| 9 8
//4 {5} 3 2 [1] 6 |7| 9 8
//4 1 {3} [2] 5 6 |7| 9 8
//4 1 3 {[2]} 5 6 |7| 9 8
//4 1 3 [2] {5} 6 |7| 9 8
//2 1 3 |4| 5 6 |7| 9 8

//2 {1} [3] |4| 5 6 |7| 9 8
//2 1 {[3]} |4| 5 6 |7| 9 8
//2 [1] {3} |4| 5 6 |7| 9 8
//1 |2| 3 |4| 5 6 |7| 9 8

//|1| |2| 3 |4| 5 6 |7| 9 8

//|1| |2| |3| |4| 5 6 |7| 9 8

//|1| |2| |3| |4| |5| |6| |7| 9 8

//|1| |2| |3| |4| |5| |6| |7| |8| |9|




function Deck(){
  this.deck = [];
  
  this.initDeck = function(){
    var suits = ["heart", "club", "spade", "diamond"];
  	var value = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  	//for each suit
  	for(i = 0; i < 4; i++){
  	  //for each value
  	  for(j = 0; j < 13; j++){
  	  	//push card object in deck array
  	    this.deck.push(new Card(suits[i], value[j]));
  	  }
  	}//end of deck
  }//end of initDeck
  
  //keeps track of number of cards in deck
  this.cardsLeft = function(){return this.deck.length}
  
  //shuffle deck
  this.shuffle = function(){
  	if(!this.cardsLeft())
      this.initDeck();

  	var n = this.cardsLeft();


  	while(n){
	  var rand = Math.floor(Math.random()*n--)
  	  swap(this.deck, rand, n);
  	
  	}
  }
  //deals out one card
  this.dealOne = function()
  {
  	return (this.cardsLeft()) ? this.deck.pop() : false;
  }

  
  

}//end of Deck 

// module.exports = Deck;
