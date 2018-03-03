// Roulette game

alert("In this game you will be able to place bets on a roulette wheel. We have taken the courtesy of giving you a starting bank roll of £100.")

// function roulette(num) {
var player = {
  balance: 100,
  buyIn: 0,
  bet: 0
}

while(true) {

  //Ask the player if they want to add to their bank roll and record these for later.
  if (confirm("Would you like to add to you bank roll?") === true) {
    while (true){

      var bought = parseInt(prompt("How much would you like to borrow to add to your bankroll?"));

      if(bought > 0) {
        player.balance += bought;
        player.buyIn += bought;
        break;
      }
      else{
        alert("Please enter an amount more than 0");
      }
    }
  }

  while(true){
    alert("You now have £" + player.balance);
    player.bet = parseInt(prompt("How much would you like to bet?"));

    if(player.bet > player.balance){
      alert("You haven't got enough funds to place that bet");
    }
    else if(player.bet > 0){
      player.balance -= player.bet
      break;
    }
    else{
      alert("Please input a valid amount to bet");
    }
    
  }

  // Spin
  var spin = Math.floor((Math.random() * 36)) + 1;
  var betMultiple = 0;

  while(true){
    var type = prompt("What type of bet do you want to place?");
      // 1: 0 - (35:1)
      // 2: 00 - (35:1)
      // 3: Even - (1:1)
      // 4: Odd - (1:1)
      // 5: 1 to 18 - (1:1)
      // 6: 19 to 36 - (1:1)
      // 7: 1 to 12 - (2:1)
      // 8: 13 to 24 - (2:1)
      // 9: 25 to 36 - (2:1)

   // 1: 0 -> (35:1)
    if(type === 1 && spin === 35){
      betMultiple = 35;
    }
    // 2: 00 -> (35:1)
    else if(type === 2 && spin === 37){
      betMultiple = 35;
    }
    // 3: Even -> (1:1)
    else if(type === 3 && spin % 2 === 0){
      betMultiple = 1;
    }
    // 4: Odd -> (1:1)
    else if(type === 4 && spin % 2 !== 0){
      betMultiple = 1;
    }
    // 5: 1 to 18 -> (1:1)
    else if(type === 5 && (spin >= 1 && spin <= 18)){
      betMultiple = 1;
    }
    // 6: 19 to 36 -> (1:1)
    else if(type === 6 && (spin >= 19 && spin <= 36)){
      betMultiple = 1;
    }
    // 7: 1 to 12 -> (2:1)
    else if(type === 7 && (spin >= 1 && spin <= 12)){
      betMultiple = 2;
    }
    // 8: 13 to 24 -> (2:1)
    else if(type === 8 && (spin >= 13 && spin <= 24)){
      betMultiple = 2;
    }
    // 9: 25 to 36 -> (2:1)
    else if(type === 9 && (spin >= 25 && spin <= 36)){
      betMultiple = 2;
    }

    var amount = (player.bet * betMultiple)

    if(betMultiple > 0) {
      player.balance += amount
      alert("You Win "+amount+" the spin was "+spin+"!");
      break;
    }
    else{
      // player.balance -= amount;
      alert("You Lose the spin was "+spin+"!");
      break;
    }
  }

  alert("You have "+player.balance+"!");

  if (confirm("Would you like to continue playing?") === false){
    break;
  }
}