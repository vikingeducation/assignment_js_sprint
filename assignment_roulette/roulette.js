

let roulette = {

	init: function(roulette){
		this.form = roulette;
		this.bankRoll = 100;
		this.bet;
		this.number;
		this.userNum;
		this.timer;
		this.playNowBtn = document.getElementById('playNow');
		this.timerDOM = document.getElementById('timer');
		this.selectNum = document.getElementById('selectNum');
		this.enterNum = document.getElementById('enterNum');
		this.enterBet = document.getElementById('enterBet');

		this.selectNum.disabled = true;
		this.enterNum.disabled = true;
		this.enterBet.disabled = true;

		this.playNowBtn.onclick = (event) => {
			event.preventDefault();
			this.startTimer();
			this.selectNum.disabled = false;
			this.enterNum.disabled = false;
			this.enterBet.disabled = false;
			this.addEventListeners(this.form);
		}
	},

	startTimer: function(){
		let seconds = 00,
			minutes = 2;
			that = this;

		this.timerDOM.style.display = 'block';
		this.playNowBtn.style.display = 'none';

		add = function(){
			seconds--;
			if(seconds < 0){
				seconds = 59;
				minutes--;
			}
			that.timerDOM.innerHTML = `${minutes} : ${seconds}`;
			tiker();

			(minutes == 0 && seconds == 0) ? that.cashOut(): false; 
		};

		function tiker(){
			that.timer = setTimeout(add, 1000,);
		};
		tiker();
	},

	stopTimer: function(){
		clearTimeout(this.timer);
		this.timerDOM.innerHTML = '0 : 00';
	},

	validateNums: function(el, num){
		//change value to a number
			let value = num;
			// check if enterNum is a number
			if(!isNaN(value)) {
				// remove any unessary characters
				el.value = parseInt(value);

				if(el == this.enterNum && el.value > 36 ){
					alert('Duuuude, that number doesn\'t even exist on a roulette wheel. Try entering a number between 1 - 36');
					el.value = '';
					value = false;
				} else if(el == that.enterBet && el.value > this.bankRoll) {
					alert('Woah your betting more than you can chew braaa! You might have gambling issues and should seek help, OR try placing a bet you can afford to pay');
					el.value = '';
					value = false;
				} 
			} else {
				alert('Budddddyyyy thats not even a number! Try entering a valid number');
				// reset input value
				el.value = '';
				value = false;
			}
		return value;
	},

	validateInputs: function(userNum, betNum){
		let inputs = false;
		if(!userNum){
			alert('You forgot to pick a number to spin for!');
		} else if(!betNum) {
			alert('Hey cman, are we playing for free here? Place your bet.');
		} else {
			inputs = true;
		}
		return inputs;
	},

	validateFunds: function(){
		if(this.bankRoll != 0){
			return true
		} else {		
			this.stopTimer();	
			alert('Sorry mate your bank is empty! Lucky for you this game is FREE to play, so just give yer browser a good ol refresh and well drop another hundo in your bank!');
			this.form.reset();
			return false;
		}
	},

	selectNums: function(val){
		let nums = [],
			condish = false;
		if(val){
			for(let i = 1; i <= 36; i++){
				switch(val) {
					case 'evens':
						(i % 2 == 0) ? nums.push(i) : false;
					break;

					case 'odds':
						(i % 2 != 0) ? nums.push(i) : false;
					break;

					case 'first_half':
						(i <= 18) ? nums.push(i) : false;
					break;

					case 'second_half':
						(i >= 19 && i <= 36) ? nums.push(i) : false;
					break;

					case 'first_third':
						(i <= 12) ? nums.push(i) : false;
					break;

					case 'second_third':
						(i >= 13 && i <= 24) ? nums.push(i) : false;
					break;

					case 'last_third':
						(i >= 25 && i <= 36) ? nums.push(i) : false;
					break;
				}
			}
		}
		return nums;
	},

	spinWheel: function(userNum, betNum){
		let win = false,
			spin = this.validateInputs(userNum, betNum);

		if(spin && this.validateNums(this.enterBet, betNum)){
			let randoNum = Math.floor(Math.random() * 36),
				userOutput = document.getElementById('userNum'),
				userNumHead = document.getElementById('userNumHead'),
				rouletteOutput = document.getElementById('rouletteNum'),
				betOutput = document.getElementById('betOutput');

			if(Array.isArray(userNum)){	
				userNumHead.innerHTML = 'Your Numbers';
				userNum.includes(randoNum) ? win = true : false;
				userNum = userNum.join(', ');
			} else {
				userNumHead.innerHTML = 'Your Number';
				randoNum === userNum ? win = true : false;
			}
			userOutput.innerHTML = userNum;
			rouletteOutput.innerHTML = randoNum;

			if(win){
				betOutput.style.color = 'green';
				betOutput.innerHTML = `+ £${betNum}`;
				this.bankRoll += betNum;
			} else {
				betOutput.style.color = 'red';
				betOutput.innerHTML = `- £${betNum}`;
				this.bankRoll -= betNum;
			}
			bank.innerHTML = `£ ${this.bankRoll}`;
		} else {
			return false
		}
		return win;
	},

	cashOut: function(){
		if(this.validateFunds()){
			this.stopTimer();
			
			alert(`Your cashing out with £${this.bankRoll}.`);
			this.bankRoll = 0;
			bank.innerHTML = `£ ${this.bankRoll}`;
		} 
	},

	addEventListeners: function(el){
		let spin = document.getElementById('spin'),
			cashOut = document.getElementById('cashOut'),
			bank = document.getElementById('bank'),
			that = this;

		that.enterNum.onchange = () => {
			if(this.validateFunds()){
				// check if number is valid
				this.userNum = this.validateNums(this.enterNum, parseInt(this.enterNum.value));
				this.selectNum.value = 'null';
			}
		};

		that.selectNum.onchange = () => { 
			if(this.validateFunds()){
				this.userNum = this.selectNums(this.selectNum.value);
				that.enterNum.value = '';
			}
		};

		this.enterBet.onchange = () => {
			if(this.validateFunds()){
				// check if number is valid
				this.bet = this.validateNums(this.enterBet, parseInt(this.enterBet.value));
			}
		};

		spin.onclick = (event) => {
			event.preventDefault();
			if(this.validateFunds()){
				this.spinWheel(this.userNum, this.bet);
			}
		};

		cashOut.onclick = (event) => {
			event.preventDefault();
			this.cashOut();
		};
	},
}


$(document).ready(function(){
	let form = document.getElementById('roulette');
	roulette.init(form);
});



