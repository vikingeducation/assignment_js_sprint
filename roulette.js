var bankroll = 100;

var bet = prompt(`Your bankroll is currently $${bankroll}. How much would you like to bet?`);
bet = Number(bet)+0;
//change bet to intgeger

while (isNaN(bet)) {
  bet = prompt(`That is not a valid bet. Please place a bet between $1 and your currrent bankroll of $${bankroll}.`);
  bet = Number(bet)+0;
}


var lucky_number = prompt(`$${bet} on which number?`);
while (isNaN(lucky_number) || lucky_number < 1 || lucky_number > 36) {
  lucky_number = prompt(`That is not a valid bet. Please place a bet on a number between 1 and 36.`);
  lucky_number = Number(lucky_number)+0;
}


console.log(typeof(Number(bet)));
