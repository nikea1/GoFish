# <a href='http://www.jrdevjobs.com' target='_blank'>Jr.DevJobs</a> Challenge: Go Fish

## Introduction
In this challenge you will create a webpage where you can play the card game Go Fish against a human or computer opponent. The rules of Go Fish are listed in the [user story](#userstory).

You are free to do this in any language or framework, however the sample is written in JavaScript.

## Getting Started
To begin, Fork this repository to your GitHub account by clicking the Fork icon in the upper-right section of this page.

![Forking Image](https://s3-us-west-2.amazonaws.com/jrdevsimages/repos/fork_button.jpg)

*If you're new to Forking, we suggest reading the <a href='https://help.github.com/articles/fork-a-repo' target='_blank'>GitHub documentation</a> before moving forward.*

## <a name='userstory'></a>User Story
As a user, I want to play Go Fish against other people or the computer.

#### Details
There are many variations of Go Fish. For our purposes, we'll be using the following rules:

* Use one deck of 52 cards (no Jokers)
* Players are dealt seven random cards
* Remaining cards make up the *pool* for users to *Go Fish* from
* A turn consists of the current player selecting a card from their hand and asking an opponent if they have any cards of the same rank
* If the opponent has a card(s) of that rank, the opponent must give the card(s) to the player who requested it and that player gets another turn
* If the opponent does not have any cards of that rank, the requesting player must *Go Fish* and draws a random card from the *pool*; ending that player's turn
* As soon as a player collects a *book* of four cards of the same rank (ex. four Jacks or four 3s), they must lay their *book* down; removing the cards from their hand
* If a player has no cards in their hand, they must draw from the *pool*; if the *pool* is empty, that player is out of the game
* The game is over when all 13 sets of four, *books*, have been matched
* The player with the most *books* is determined the winner

## Tests
We've included specs to test your code using Mochai and Chai.

* To run the tests, open `spec/spec-runner.html` in your browser
