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

while (bankroll > 0) {
  var bet;
  var target;
  var wheel = [
    "00",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36
  ];

  // this function asks users to input how much they'd like to bet, processes that input to make sure its valid and returns the result in the bet variable
  function betting() {
    bet = prompt(
      "Please enter how much you'd like to bet.\nCurrent bankroll is $" +
        bankroll +
        "."
    );
    if (Number(bet.replace(/\D/g, "")) === 0) {
      alert("Please enter your bet in number form and or above zero.");
      betting();
    } else if (bet.replace(/\-/, "") !== bet || bet.replace(/\./, "") !== bet) {
      alert("Please enter a positive number without a decimal.");
      betting();
    } else if (bankroll < Number(bet.replace(/\D/g, ""))) {
      bet = bankroll;
      alert(
        "Since you can't bet above bankroll your bet has been set to $" +
          bankroll +
          "."
      );
    } else {
      bet = Number(bet.replace(/\D/g, ""));
    }
    return bet;
  }

  // this function requests what the user wants to bet on, again makes some input checks to ensure validity, and returns the result in the target variable
  function targetting() {
    target = prompt(
      "Enter what number you'd like to bet on between 0 and 36, winners get 35 times their bet.\nAlternatively you can bet on the following options to potentially double your bet.\n00\nEven\nOdd\n1 to 18\n19 to 36\n1st 12\n2nd 12\n3rd 12"
    );
    target = target.toLowerCase();
    EnableBreak: if (
      target === "00" ||
      target === "even" ||
      target === "odd" ||
      target === "1 to 18" ||
      target === "19 to 36" ||
      target === "1st 12" ||
      target === "2nd 12" ||
      target === "3rd 12"
    ) {
      break EnableBreak;
    } else if (target.replace(/\D/g, "") === "") {
      alert(
        "Please enter what you'd like to bet on as a number such as 10 or use one of the special bet types like even."
      );
      targetting();
    } else if (
      target.replace(/\-/, "") !== target ||
      target.replace(/\./, "") !== target
    ) {
      alert("Please enter a whole number equal to or above 0 and below 37.");
      targetting();
    } else if (36 < Number(target.replace(/\D/g, ""))) {
      alert("Please enter a number below 37.");
      targetting();
    } else {
      target = Number(target.replace(/\D/g, ""));
    }
    return target;
  }

  /* this function processes the actual bet's result so it generates a random value to compare against their bet target,
modifies their bankroll based on the result, and provides a summary of the entire bet cycle*/
  function spinning() {
    var spin = wheel[Math.floor(Math.random() * wheel.length)];

    if (target === spin) {
      bankroll = bankroll - bet + bet * 35;
    } else if (target === "even" && spin % 2 === 0) {
      bankroll = bankroll - bet + bet * 2;
    } else if (target === "odd" && spin % 2 !== 0) {
      bankroll = bankroll - bet + bet * 2;
    } else if (target === "1 to 18" && spin < 19) {
      bankroll = bankroll - bet + bet * 2;
    } else if (target === "19 to 36" && spin > 18) {
      bankroll = bankroll - bet + bet * 2;
    } else if (target === "1st 12" && spin < 13) {
      bankroll = bankroll - bet + bet * 2;
    } else if (target === "3rd 12" && spin > 23) {
      bankroll = bankroll - bet + bet * 2;
    } else if (target === "2nd 12" && spin > 11 && spin < 25) {
      bankroll = bankroll - bet + bet * 2;
    } else {
      bankroll = bankroll - bet;
    }

    alert(
      "You bet $" +
        bet +
        ".\n" +
        "The bet was on " +
        target +
        ".\n" +
        "The spin result was " +
        spin +
        ".\n" +
        "Your bankroll is now $" +
        bankroll +
        "."
    );
    return bankroll;
  }

  // this function simply asks a user if they'd like to raise their bankroll, does some checks to confirm their input is good, and processes the result on their bankroll
  function buyingIn() {
    var buyIn = prompt(
      "If you'd like to increase your bankroll enter by how much.\nOtherwise enter 0."
    );
    if (buyIn.replace(/\D/g, "") === "") {
      alert(
        "Please enter how much you'd like to increase your bankroll by as a number such as 500."
      );
      buyingIn();
    } else if (
      buyIn.replace(/\-/, "") !== buyIn ||
      buyIn.replace(/\./, "") !== buyIn
    ) {
      alert("Please enter a positive number without a decimal.");
      buyingIn();
    } else {
      buyIn = Number(buyIn.replace(/\D/g, ""));
      bankroll = bankroll + buyIn;
    }
    return bankroll;
  }

  betting();
  targetting();
  spinning();
  buyingIn();
}
