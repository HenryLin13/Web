function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["betting"].elements.length; 
        loopCounter++) {
        if (document.forms["betting"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["betting"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}
function resetForm() {
    clearErrors();
    document.forms["betting"]["startingBet"].value = "";
    document.getElementById("results").style.display = "none";
   	document.getElementById("playButton").style.display = "block";
   	document.getElementById("playAgainButton").style.display = "none";
    document.forms["betting"]["startingBet"].focus();
}
function validateItems() {
    clearErrors();
    //initialize all variables used to track results
    var startingBet = document.forms["betting"]["startingBet"].value;
    var timesPlayed = 0;
    //the highest amount of money and when it is obtained will usually be the initial bet as the odds of winning are very low
	var highestRoll = timesPlayed;
	var current = startingBet;
	var highest = current;
	//check if there is anything entered, if it is a number, and if it is negative
    if (startingBet == "" || isNaN(startingBet) || startingBet < 0) {
        alert("Your bet must be filled in with a value greater than 0.");
        document.forms["betting"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["betting"]["startingBet"].focus();
        return false;
    }
	while(current>=1){
		if(rollDice(6)+rollDice(6) != 7){
			current--;
		}
		else{
			current+4;
		}
		timesPlayed++;
		if(current>highest){
			highest = current;
			highestRoll = timesPlayed;
		}
	}
   document.getElementById("results").style.display = "block";
   document.getElementById("playButton").style.display = "none";
   document.getElementById("playAgainButton").style.display = "block";
   document.getElementById("bet").innerText = "$"+startingBet+".00";
   document.getElementById("timesPlayed").innerText = timesPlayed;
   document.getElementById("highest").innerText = "$"+highest+".00";
   document.getElementById("highestRoll").innerText = highestRoll;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}

function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < 100; i++) {
  console.log(rollDice());
}
/*Function testing */
function luckySeven(bet){
	var timesPlayed = 0;
	var highestRoll = timesPlayed;
	var current = bet;
	var highest = current;
	while(current>=1){
		if(rollDice(6)+rollDice(6) != 7){
			current--;
		}
		else{
			current+4;
		}
		timesPlayed++;
		if(current>highest){
			highest = current;
			highestRoll = timesPlayed;
		}
	}
	var results = [timesPlayed, highest, highestRoll];
	return results;
}