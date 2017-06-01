//Roulette

function Roulette(bankroll){
  this.cash = bankroll
  this.winning_slot;
  //the way I've chosen to implement this is by having an array of slot objects
    //the slots will be generated when you make a roulette wheel
    //they'll contain booleans representing all the bet outcomes if that slot is the winning_slot
  //Allowed Bets:                   //Payouts:
    //0, 00, 1-36                   35:1
    //1st 2nd or 3rd 12             2:1
    //Red || Black                  1:1
    //Even || Odd                   1:1
    //High (19-36) || Low (1-18)    1:1
  this.slots = ["00", "0"]
  function generate_slots() {
      //gen 0, 00, 1 - 36

  }
  generate_slots();
  for (i = 1; i <= 36; i++){
    this.slots.push(i)
  }
  this.bankroll = function() {
    console.log(`You have $${bankroll}.`)
  }
  this.buyIn = function(amount) {
    this.cash += amount;
    console.log(`Here's $${amount} in chips.\nYour total is now : ${this.cash}`)
  }
  this.print_spin = function(win, payout){
    if (win) {
      this.cash *= payout
      console.log(`You WIN ${}, `)
    }else{
      console.log(`You LOSE `)
    }

  }
  this.spin = function(amount, bet){
    //spin the wheel
    this.winning_slot = Math.floor(Math.random() * (38 + 1)) - 1  //output values : -1 . . . 36
    this.winning_slot = (this.winning_slot == -1) ? "00" : String(this.winning_slot)
    console.log(`The winning_slot is ${this.winning_slot}`)
    switch (bet) {
      case (bet >= 0):
        //if bet is a string of a num >= operator will convert and compare it
        console.log(`Taking bet on ${bet} for ${amount}`)
        break;
      case (bet.search("12") > -1):
        if (bet.search("st") > -1){         //found the "st" in "1st 12"
            if (this.winning_slot > 0 && this.winning_slot < 13){
              //you win
            }else{
              //you lose
            }
        }else if (bet.search("nd")){          //found the "nd" in "2nd 12"
          if (this.winning_slot > 12 && this.winning_slot < 25){
            //you win
          }else{
            //you lose
          }
        }else{                              //must be "3rd 12"
          if (this.winning_slot > 24 && this.winning_slot < 37){
            //you win
          }else{
            //you lose
          }
        }
        break;
      case (bet.toLowerCase() == "red" || bet.toLowerCase() == "black"):
        //not yet implemented
        break;
      case (bet.toLowerCase() == "even" || bet.toLowerCase() == "odd"):
        //you lose if slot == '0' or '00'
        if (+this.winning_slot == 0){
          //you lose

        }
        var is_even = (+this.winning_slot % 2 == 0) ? true : false
        if ((bet == "even" && is_even) || (bet == "odd" && !is_even)){
          //you win
        }else {
          //you lose
        }
        break;
      case (bet == "high" || bet == "low"):
        if ((bet == "high" && +this.winning_slot > 18) ||  (bet == "low" && +this.winning_slot < 19)){
          //you win
        }else{
          //you lose
        }
        break;
      default:
        //print betting input instructions

    }
  }

}
