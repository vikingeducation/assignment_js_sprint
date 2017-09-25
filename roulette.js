var bankroll = 100,
    repeat = true,
    wheel = [];
      for (var i=0; i < 37; i++){
        wheel.push(`${i}`);
      }
    wheel.push('00');
var valid_bets = wheel.concat(["Even","Odd","1 to 18", "19 to 36", "1st 12", "2nd 12", "3rd 12"]);


while (bankroll > 0 && repeat === true){
  //placing bet amount
  var bet_amount = prompt(`Your bankroll is currently $${bankroll}. How much would you like to bet?`);
  bet_amount = Number(bet_amount)+0;

  while (isNaN(bet_amount)) {
    bet_amount = prompt(`That is not a valid bet. Please place a bet between $1 and your currrent bankroll of $${bankroll}.`);
    bet_amount = Number(bet_amount)+0;
  }

  //placing bet
  var lucky_number = prompt(`$${bet_amount} on which number(s)? [0-36, 00, Even, Odd, 1 to 18, 19 to 36, 1st 12, 2nd 12, 3rd 12]`);
  while (valid_bets.includes(lucky_number) === false) {
    lucky_number = prompt(`That is not a valid bet. Please place a valid bet. [0-36, 00, Even, Odd, 1 to 18, 19 to 36, 1st 12, 2nd 12, 3rd 12]`);
    lucky_number = Number(lucky_number)+0;
  }

  //spin
  var actual_number = wheel[Math.floor(Math.random()*wheel.length)];
  alert(`Roll lands on number ${actual_number} and you bet on ${lucky_number}.`);

  //settling up
  if (lucky_number === actual_number) {
      bankroll = bankroll + (bet_amount * 35);
      alert(`Congratulations! You won ${bet_amount*35} and your balance is now $${bankroll}.`);
  // 1:1 payouts
  } else if (lucky_number === "Even" && actual_number % 2 === 0 || lucky_number === "Odd" && actual_number % 2 !== 0 ||
             lucky_number === "1 to 18" && wheel.slice(1,19).includes(actual_number) ||
             lucky_number === "19 to 36" && wheel.slice(19,37).includes(actual_number) ) {
      bankroll = bankroll + bet_amount;
      alert(`Congratulations! You won ${bet_amount} and your balance is now $${bankroll}.`);
  // 2:1 payouts
  } else if (lucky_number === "1st 12" && wheel.slice(1,13).includes(actual_number) ||
             lucky_number === "2nd 12" && wheel.slice(12,25).includes(actual_number) ||
             lucky_number === "3rd 12" && wheel.slice(25,37).includes(actual_number) ){
      bankroll = bankroll + (bet_amount * 2);
      alert(`Congratulations! You won ${bet_amount} and your balance is now $${bankroll}.`);
  } else {
    bankroll = bankroll - bet_amount;
    alert(`I'm sorry, you lose! Your balance is now $${bankroll}.`)}


  //again?
  repeat = confirm("Would you like to continue?");
  if (repeat === false){
    alert("Thanks for playing!");}
  else if (repeat === true && bankroll < 1) {
    bankroll = prompt(`I'm sorry, your bankroll is currently $${bankroll}. How much would you like to buy in?`);
  }
}
