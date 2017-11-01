class roulette{

	constructor(number){
		this.bank = number
	}

	spin(bet, number){
		let result = Math.floor(Math.random() * 38)
		let payout = 35
		let winning = [number]
		let display = [result]

		if(result === 37){
			display = "00"
		}

		//handle special cases
		switch(number){
			case "0":
				winning = [0]
				break
			case "00":
				winning = [37]
				break
			case "Even":
				payout = 1
				winning = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]
				break
			case "Odd":
				payout = 1
				winning = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]
				break
			case "1 to 18":
				payout = 1
				winning = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
				break
			case "19 to 36":
				payout = 1
				winning = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
				break
			case "1st 12":
				payout = 2
				winning = [1,2,3,4,5,6,7,8,9,10,11,12]
				break
			case "2nd 12":
				payout = 2
				winning = [13,14,15,16,17,18,19,20,21,22,23,24]
				break
			case "3rd 12":
				payout = 2
				winning = [25,26,27,28,29,30,31,32,33,34,35,36]
				break
			}	
				
		if(this.bank < bet){
			console.log(`You don't have enough of money!`)
		}else if(winning.includes(result)){
			console.log(`You Win ${bet * payout}, the spin was ${display}`)
			this.bank += (bet * payout)
			console.log(`You now have \$${this.bank}`)
		} else {
			this.bank -= bet
			console.log(`You lose, the spin was ${display}.`)
			console.log(`You now have \$${this.bank}`)
		}
		

	}
	bankroll(){
		console.log(`You now have \$${this.bank}`)
	}
	buyIn(number){
		this.bankroll += number
		console.log(`You bought in \$${number}`)
		console.log(`You now have \$${this.bank}`)
	}


	startRoulette(){

		r.bank = prompt("How much would you like to start with?")
		document.getElementById("play").classList.add('noDisplay');
		document.getElementById("buttonBlock").classList.remove('noDisplay');
		document.getElementById("betBlock").classList.remove('noDisplay');
		document.getElementById("buy").innerHTML = `\$${this.bank}`
	}

	placeBet(){
		r.amount = prompt("How much would you like to bet?")
		document.getElementById("bet").innerHTML = `Current: \$${this.amount}`
	}

	buy(){
		this.buyIn(prompt("How much would you like to buy in?"))
	}

	spinFromWeb(amount, bet){
		if(isNaN(parseInt(this.amount))){
			this.bet = prompt("What would you like to bet?")
			document.getElementById("bet").innerHTML = `Current: \$${this.bet}`

		}else if(typeof this.bet === "undefined"){
			alert("Please chose a type of bet.")
		}else{
			r.spin(amount, bet)
			document.getElementById("buy").innerHTML = `\$${this.bank}`
		}
	}
}
