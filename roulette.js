class Roulette {
  constructor(currentBankroll) {
    this.wheel = ['00', '0'];
    
    for (let i = 1; i <= 36; i++) {
      this.wheel.push(i);
    }
    
    this.currentBankroll = currentBankroll;
    
    this.bankroll = function() {
       console.log(`You now have $${this.currentBankroll}`);
    };
    
    this.buyIn = function(amount) {
      this.currentBankroll += amount;
      this.bankroll();
    };
    
    this.spin = function(bet, type) {
      if (this.currentBankroll < bet) {
        console.log('You have no more money to bet!');
        return;
      }

      console.log(`Type of bet is "${type}", spinning the wheel...`);
      
      let spinResult = Math.floor(Math.random() * 38);
      
      if (this.wheel.indexOf(type) > -1) {
        if (this.wheel[spinResult] === type) {
          let payout = (bet * 35) - bet;
          this.currentBankroll += payout;
          this._winMessage(this.wheel[spinResult]);
          
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(this.wheel[spinResult]);
        }
      } 
      
      if (type === 'even') {
        if (spinResult % 2 === 0) {
        	this._winMessage(spinResult);
          console.log('You hit an even number!', spinResult);
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(spinResult);
        }
        
      }
      
      if (type === 'odd') {
        if (spinResult % 2 !== 0) {
          this._winMessage(spinResult);
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(spinResult);
        }
      }
      
      if (type === '1 to 18') {
        if (spinResult >= 1 && spinResult <= 18) {
          this._winMessage(spinResult);
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(spinResult);
        }
      }
      
      if (type === '19 to 36') {
        if (spinResult >= 19 && spinResult <= 36) {
         this._winMessage(spinResult);
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(spinResult);
        }
      }
      
      if (type === '1st 12') {
        const firstColumn = [];
        for (let i = 1; i <= 36; i+=3) {
          firstColumn.push(i);
        }
        
        const result = spinResult - 2;
        
        if (firstColumn.indexOf(result) > -1) {
          let payout = (bet * 2) - bet;
          this.currentBankroll += payout;
          this._winMessage(result);
        
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(result);
        }
      }
      
      if (type === '2nd 12') {
        const secondColumn = [];
        for (let i = 2; i <= 36; i+=3) {
          secondColumn.push(i);
        }
        
        const result = spinResult - 2;
        
        if (secondColumn.indexOf(result) > -1) {
          let payout = (bet * 2) - bet;
          this.currentBankroll += payout;
          this._winMessage(result);
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(result);
        }
      }
      
      if (type === '3rd 12') {
        const thirdColumn = [];
        for (let i = 3; i <= 36; i+=3) {
          thirdColumn.push(i);       
        }
        
        const result = spinResult - 2;
        
        if (thirdColumn.indexOf(result) > -1) {
          let payout = (bet * 2) - bet;
          this.currentBankroll += payout; 
          this._winMessage(result);                   
        } else {
          this.currentBankroll -= bet;
          this._loseMessage(result);
        }
        
      }
      
    };

    this._loseMessage = function(result) {
    	console.log(`You lose, the spin was ${result}...your current bankroll is now ${this.currentBankroll}`);
    };

    this._winMessage = function(result) {
    	console.log(`You won at ${result}!!! Your bankroll is now ${this.currentBankroll}`);
    };
  }
}


// play 15 times same bet
let r = new Roulette(100);

console.log('----------------------simulating 15 games same bet-------------------------');
for (let i = 0; i < 15; i++) {
  r.spin(15, '3rd 12');
}
console.log('-------------------finished simulating 15 games same bet-------------------');

// play various bets
let rr = new Roulette(100);

console.log('----------------------simulating various bet-------------------------------');
rr.spin(15, '0');
rr.spin(15, '00');
rr.spin(15, 25);
rr.spin(15, 'even');
rr.spin(15, 'odd');
rr.spin(15, '1 to 18');
rr.spin(15, '19 to 36');
rr.spin(15, '1st 12');
rr.spin(15, '2nd 12');
rr.spin(15, '3rd 12');
console.log('----------------------finished simulating various bet----------------------');




