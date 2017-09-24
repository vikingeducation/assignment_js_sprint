var bankroll = 100,
    repeat = true;

while (bankroll > 0 && repeat === true){
  //placing bet
  var bet = prompt(`Your bankroll is currently $${bankroll}. How much would you like to bet?`);
  bet = Number(bet)+0;


  while (isNaN(bet)) {
    bet = prompt(`That is not a valid bet. Please place a bet between $1 and your currrent bankroll of $${bankroll}.`);
    bet = Number(bet)+0;
  }

  //spin
  var lucky_number = prompt(`$${bet} on which number?`);
  while (isNaN(lucky_number) || lucky_number < 1 || lucky_number > 36) {
    lucky_number = prompt(`That is not a valid bet. Please place a bet on a number between 1 and 36.`);
    lucky_number = Number(lucky_number)+0;
  }

  var actual_number = Math.floor(Math.random() * (Math.floor(36) - Math.ceil(1) + 1)) + Math.ceil(1);


  //settling up
  if (lucky_number === actual_number) {
    bankroll = bankroll + (bet * 35);
    alert(`Congratulations! You won ${bet*35} and your balance is now $${bankroll}.`);
  } else
    bankroll = bankroll - bet;
    alert(`I'm sorry, you lose! Your balance is now $${bankroll}.`);

  repeat = confirm("Would you like to continue?");
  if (repeat === false){
    alert("Thanks for playing!");}
  else if (repeat === true && bankroll < 1) {
    bankroll = prompt(`I'm sorry, your bankroll is currently $${bankroll}. How much would you like to buy in?`);
  }
}




console.log(actual_number);
