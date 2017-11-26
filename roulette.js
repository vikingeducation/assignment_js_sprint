// Create roulette class
class Roulette {
  // constructor
  constructor(buyin){
    this._roll = buyin;
    this._wheel = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1,
      parseInt('00'), 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];
  }
  // bankroll
  bankroll(){
    console.log(`You know have $${this._roll}`);
  } 
  // buyin
  buyIn(amount){
    this._roll += amount;
    console.log(`You bought in $${amount}`);
    console.log(`You now have $${this._roll}`);
  }
  // spin
  spin(wager, bet){
    // Check for valid bet
    if(typeof bet !== 'number'){
      if(bet.search(/Even|Odd|1 to 18|19 to 36|1st 12|2nd 12|3rd 12/g) === -1){
        console.log(`Please enter a valid bet. Eg. 0, 00, 1-36, 'Even', 'Odd', '1 to 18', '19 to 36', '1st 12', '2nd 12', '3rd 12'`);
        return null;
      } 
    } else if((bet<0) || (bet > 36)){
      console.log(`Please enter a valid bet. Eg. 0, 00, 1-36, 'Even', 'Odd', '1 to 18', '19 to 36', '1st 12', '2nd 12', '3rd 12'`);
      return null;
    }

    // subtract wager
    this._roll -= wager;
    // generate random index
    let randomIdx  = Math.floor(Math.random() * 38); 
    // get wheel outcome
    let outcome = this._wheel[randomIdx];

    // payouts
    if(bet === outcome){
      let win = wager * 35;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else if((bet === 'Even') && (outcome%2 === 0)){
      let win = wager;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else if((bet === 'Odd') && (outcome%2 !== 0)){
      let win = wager;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else if((bet === '1 to 18') && (outcome >= 1 && outcome <= 18)){
      let win = wager;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else if((bet === '19 to 36') && (outcome >= 19 && outcome <= 36)){
      let win = wager;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else if((bet === '1st 12') && (outcome <= 12)){
      let win = wager * 2;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else if((bet === '2nd 12') && (outcome >12 && outcome <= 24)){
      let win = wager * 2;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else if((bet === '3rd 12') && (outcome >24 && outcome <= 36)){
      let win = wager * 2;
      this._roll += win;
      console.log(`You win $${win}, the spin was ${outcome}!!!`);
      console.log(`You now have $${this._roll}`);
    } else {
      console.log(`You Lose, the spin was ${outcome}`);
      console.log(`You now have $${this._roll}`);
    }
  }
}
