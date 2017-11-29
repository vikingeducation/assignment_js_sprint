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

// in addition to part 2, need to add comments, and re-beautify

var bankroll = 100;

while (bankroll > 0) {
  var betSize;
  var wagerTarget;

  function cleanInput(inputy) {
    inputy = Number(inputy.replace(/\D/g, ""));
    return inputy;
  }

  function getBetSize() {
    betSize = prompt(
      "Please enter how much you'd like to bet.\n(Note: that negatives and decimals will be stripped so -10.0 will become 100)\nCurrent bankroll is $" +
        bankroll +
        "."
    );
    betSize = cleanInput(betSize);
    if (betSize === 0) {
      alert("Please enter your bet in number form and or above zero.");
      getBetSize();
    } else if (bankroll < betSize) {
      betSize = bankroll;
      alert(
        "Since you can't bet above bankroll your bet has been set to $" +
          bankroll +
          "."
      );
    }
    return betSize;
  }

  function setWagerTarget() {
    wagerTarget = prompt(
      "Enter what number you'd like to bet on between 1 and 36."
    );
    wagerTarget = cleanInput(wagerTarget);
    if (wagerTarget === 0) {
      alert(
        "Please enter what to bet on above zero and or formatted as a number."
      );
      setWagerTarget();
    } else if (wagerTarget > 36) {
      alert("Please bet on a number equal to or between 36 and 1.");
      setWagerTarget();
    }
    return wagerTarget;
  }

  function spinning(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getBetSize();
  setWagerTarget();

  var spinResult = spinning(1, 36);
  if (wagerTarget === spinResult) {
    bankroll = bankroll - betSize + betSize * 35;
  } else {
    bankroll = bankroll - betSize;
  }

  alert(
    "You bet $" +
      betSize +
      ".\n" +
      "The bet was on " +
      wagerTarget +
      ".\n" +
      "The spin result was " +
      spinResult +
      ".\n" +
      "Your bankroll is now $" +
      bankroll +
      "."
  );

  var buyIn = prompt(
    "If you'd like to increase your bankroll enter by how much.\n(Note: that decimals and negatives will be stripped so -23.4 will become 234)"
  );
  buyIn = cleanInput(buyIn);
  bankroll = bankroll + buyIn;
}
