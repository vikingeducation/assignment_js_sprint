var Roulette = function(startAmount) {
	var cash = startAmount

	this.bankroll = function(){
		console.log("you have: " + cash);
	}

	this.spin = function spin(betAmount,boardNumber){
		switch(boardNumber) {
		case 0:
		case 00:
		console.log(winnings = betAmount * 35);
		break;
		case "Odd":
		case "Even":
		case "1 to 18":
		case "19 to 36":
		console.log(winnings = betAmount);
		break;
		case "1st 12":
		case "2nd 12":
		case "3rd 12":
		console.log(winnings = betAmount * 2);
		break;
		

	   var result = Math.floor( Math.random() * 36 ) 
	   if (boardNumber == result) {
	   		winnings = betAmount * 35;
	   		cash += winnings
	   		console.log("you win! Your winnings are: " + winnings);
	   } else {
	   	cash -= betAmount;
	   	return "you lose!"
	   }
	}
  }
}

var r = new Roulette(100)
r.bankroll() 
r.spin(20, 25)
r.bankroll()

var r2  = new Roulette(350)
r2.bankroll() 

