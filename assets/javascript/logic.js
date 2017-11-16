
// THIS NEEDS TO HAPPEN FIRST



// define starting value of total score
var totalScore = 0;

// define value of wins/losses; change values to 0
var wins = 0;
var losses = 0;

// 	generate random values for crystals MATH between 1 and 12
var crystal1 = Math.floor((Math.random() * 12) + 1); 
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);

// 	generate random number MATH between 19 and 120
var randomNumber = Math.floor((Math.random() * 120) + 19);
	// this sends the random number to the HTML to be displayed
    document.getElementById("computerPick").innerHTML = randomNumber;
    console.log(computerPick);

// THIS HAPPENS NEXT; NEED TO GO INTO INNER FUNCTION AND RUN FIRST

// 	player clicks crystal1
document.getElementById("crystal1").onclick = function() {myFunction1()};
// this adds crystal1's value to player's total score
function myFunction1() {
 	// this displays the crystal's value; NEEDS TO ADD VALUE TO ITSELF
 	totalScore = (totalScore + crystal1);
    document.getElementById("totalScore").innerHTML = totalScore;
	console.log(crystal1);
	// this function checks the score against the randomNumber
	scoreCheck();
}

// 	player clicks crystal2
document.getElementById("crystal2").onclick = function() {myFunction2()};
// this adds crystal1's value to player's total score
function myFunction2() {
	// this displays the crystal's value
	totalScore = (totalScore + crystal2);
    document.getElementById("totalScore").innerHTML = totalScore;
    console.log(crystal2);
    // this function checks the score against the randomNumber
    scoreCheck();
}

// 	player clicks crystal3
document.getElementById("crystal3").onclick = function() {myFunction3()};
// this adds crystal1's value to player's total score
function myFunction3() {
	// this displays the crystal's value
	totalScore = (totalScore + crystal3);
    document.getElementById("totalScore").innerHTML = totalScore;
    console.log(crystal3);
    // this function checks the score against the randomNumber
    scoreCheck();
}

// 	player clicks crystal4
document.getElementById("crystal4").onclick = function() {myFunction4()};
// this adds crystal1's value to player's total score
function myFunction4() {
	// this displays the crystal's value
	totalScore = (totalScore + crystal4);
    document.getElementById("totalScore").innerHTML = totalScore;
    console.log(crystal4);
    // this function checks the score against the randomNumber
    scoreCheck();
}

function gameReset() {
	totalScore = 0;
	document.getElementById("totalScore").innerHTML = totalScore;
	console.log("WE BE HERE");
	randomNumber = Math.floor((Math.random() * 120) + 19);
	document.getElementById("computerPick").innerHTML = randomNumber;
	crystal1 = Math.floor((Math.random() * 12) + 1); 
	crystal2 = Math.floor((Math.random() * 12) + 1);
	crystal3 = Math.floor((Math.random() * 12) + 1);
	crystal4 = Math.floor((Math.random() * 12) + 1);
	}

	

// this alerts the player to whether they win or lose and adds to the win/loss tally
function scoreCheck() {
	console.log("WE ARE HERE");

	if (totalScore >= randomNumber) {
	alert("You lose!");

	    // Then we will loss and we'll update the HTML to display the loss.
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        // Then we'll call the reset.
        gameReset();

	}
	else if (totalScore == randomNumber) {
	alert("You win!");

	    // If there is then we win and we'll update the HTML to display the win.
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        // Then we'll reset the game
        gameReset();

	}
};


