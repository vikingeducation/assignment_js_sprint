// This is a simple Roulette game using basic object-oriented programming principles in JavaScript. The user should start with a bankroll and bet with each "spin" of the imaginary wheel. They can choose choices 1-36. After each spin, the result is displayed and funds are distributed accordingly (payout is 35:1). Gameplay might look something like:

// ======= some examples: =======================
// r = new Roulette( 100 )  // starting bankroll $100
// r.spin( 10, 24 )         // bet 10 on 24
// r.spin( 50, 13 )
// r.bankroll()
// r.buyIn( 1000 )

function Roulette(init_bankroll) {
	var deposit = init_bankroll;
  console.log("Hello and Welcome in Rouette! You can bet with following potential payouts for Any Number = 30:1, '0' = 35:1, 'Even' = 1:1, 'Odd' = 1:1. Please type a number or other two options as string ie. 14, 0, 'Even' or 'Odd' ");
  this.bankroll = function() {
	   console.log("You now have $" + deposit);
   };
  this.spin = function (bet, choice) {
    turned_wheel = Math.floor(Math.random()*35 + 1);
    if (typeof choice === 'number') {
      if (choice !== turned_wheel) {
        deposit -= bet;
        console.log("You Lose, the spin was " + turned_wheel + " :( ");
        console.log("You now have $" + deposit);
      } else {
        if (choice === 0) {
          deposit += bet * 34;
          console.log("You Win zero bet" + bet * 35 +", the spin was " + turned_wheel + "!!!");
          console.log("You now have $" + deposit);
        } else {
          deposit += bet * 29;
          console.log("You Win " + bet * 30 +", the spin was " + turned_wheel + "!!!");
          console.log("You now have $" + deposit);
        };
      };
    } else if (typeof choice === 'string') {
      if ( (turned_wheel%2 === 0 && choice.toUpperCase() === "EVEN") ||
            (turned_wheel%2 !== 0 && choice.toUpperCase() === "ODD") ) {
        deposit += bet;
        console.log("You Win " + choice + " bet" + bet * 2 +", the spin was " + turned_wheel + "!!!");
        console.log("You now have $" + deposit);
      } else {
        deposit -= bet;
        console.log("You Lost your" + choice + bet +", the spin was " + turned_wheel + " :( )");
        console.log("You now have $" + deposit);
      };
    };
  };
  this.buyIn = function(value) {
	   deposit += value;
     console.log("You bought in $" + value);
     console.log("You now have $" + deposit);
   };
 };
