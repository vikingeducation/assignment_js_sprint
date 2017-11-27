/*
1. Build a Roulette game using basic object-oriented programming principles in
JavaScript. The user should start with a bankroll and bet with each "spin" of
the imaginary wheel. They can choose numbers 1-36. After each spin, the result
is displayed and funds are distributed accordingly (payout is 35:1). Gameplay
might look something like:

r = new Roulette( 100 )  // starting bankroll $100
r.spin( 10, 24 )         // bet 10 on 24
// You Win $350, the spin was 24!!!
// You now have $440.
r.spin( 50, 13 )
// You Lose, the spin was 11 :(
// You now have $390
r.bankroll()
// You now have $390
r.buyIn( 1000 )
// You bought in $1000
// You now have $1390

2. Add the ability for users of your Roulette game to bet on "0" (35:1),
"00" (35:1), "Even" (1:1), "Odd" (1:1), "1 to 18" (1:1), "19 to 36" (1:1),
"1st 12" (2:1), "2nd 12" (2:1), or "3rd 12" (2:1).
*/

var bankroll = 100;

var betSize = Number(prompt("Please enter how much you'd like to bet, current bankroll is $" + bankroll));
console.log("You bet $" + betSize);

var betTarget = Number(prompt("Now enter what number you'd like to bet on between 1 and 36"));
console.log("The bet was on " + betTarget);

function spinning(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var spinResult = spinning(1, 36);
console.log("The spin result was " + spinResult);

if (betTarget === spinResult) {
  bankroll = (bankroll - betSize) + (betSize * 35);
  console.log("You won!");
  } else {
    bankroll = bankroll - betSize
    console.log("You lost");
  };
console.log("Your bankroll is now $" + bankroll);

var buyIn = Number(prompt("If you'd like to increase your bankroll enter how much by now, enter 0 otherwise"));
bankroll = bankroll + buyIn;
console.log("You bought in $" + buyIn);
console.log("So your bankroll is now $" + bankroll)
