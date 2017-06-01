//Roulette
//STATUS : non-operational

/*problem output:
You have $100.
Here's $1000 in chips.
Your total is now : 1100
You have $1100.
Taking bet on 13 for 1100
The winning_slot is undefined
You LOSE 1100, now you have undefined
*/



function Roulette(bankroll){
  //implementation note:
    //I could've went more Object-Oriented and made all the slots as objects that contained the win-conditions
      //but for a
  this.cash = bankroll
  this.winning_slot;
  //Allowed Bets:                   //Payouts:
    //0, 00, 1-36                   35:1
    //1st 2nd or 3rd 12             2:1
    //Red || Black                  1:1
    //Even || Odd                   1:1
    //High (19-36) || Low (1-18)    1:1
  this.bankroll = function() {
    console.log(`You have $${this.cash}.`)
  }
  this.buyIn = function(amount) {
    this.cash += amount;
    console.log(`Here's $${amount} in chips.\nYour total is now : ${this.cash}`)
  }
  //print out the results of the spin
    //TODO : make this function private
  var print_spin = function(win, payout){
    console.log(`The winning_slot is ${this.winning_slot}`)
    if (win) {
      this.cash += payout
      console.log(`You WIN ${payout}, now you have ${this.bankroll}`)
    }else{
      this.cash -= payout
      console.log(`You LOSE ${payout}, now you have ${this.bankroll} `)
    }

  }
  this.spin = function(amount, bet){
    //spin the wheel
    this.winning_slot = Math.floor(Math.random() * (38 + 1)) - 1  //output values : -1 . . . 36
    this.winning_slot = (this.winning_slot == -1) ? "00" : String(this.winning_slot)

    //announce the bet
    console.log(`Taking bet on ${bet} for ${amount}`)
    bet = String(bet).toLowerCase()
    //bet = bet.toLowerCase()
    if (+bet > 0){
      //if bet is a string of a num >= operator will convert and compare it
      //console.log(`Taking bet on ${bet} for ${amount}`)
      if(this.winning_slot == bet){
        //you win
        print_spin(true, amount * 36)
      }else{
        print_spin(false, amount)
      }
    }else if (bet.search("12") > -1) {
      if (bet.search("st") > -1){         //found the "st" in "1st 12"
          if (this.winning_slot > 0 && this.winning_slot < 13){
            //you win
            print_spin(true, amount * 2)
          }else{
            //you lose
            print_spin(false, amount)
          }
      }else if (bet.search("nd")){          //found the "nd" in "2nd 12"
        if (this.winning_slot > 12 && this.winning_slot < 25){
          //you win
          print_spin(true, amount * 2)
        }else{
          //you lose
          print_spin(false, amount)
        }
      }else{                              //must be "3rd 12"
        if (this.winning_slot > 24 && this.winning_slot < 37){
          //you win
          print_spin(true, amount * 2)
        }else{
          //you lose
          print_spin(false, amount)
        }
      }
    }else if (bet == "red" || bet == "black"){
      //not implemented yet
    }else if (bet == "even" || bet == "odd"){
      //you lose if slot == '0' or '00'
      if (+this.winning_slot == 0){
        //you lose
        print_spin(false, amount)
      }
      var is_even = (+this.winning_slot % 2 == 0) ? true : false
      if ((bet == "even" && is_even) || (bet == "odd" && !is_even)){
        //you win
        print_spin(true, amount * 1)
      }else {
        //you lose
        print_spin(false, amount)
      }
    }else if (bet == "high" || bet == "low"){
      if ((bet == "high" && +this.winning_slot > 18) ||  (bet == "low" && +this.winning_slot < 19)){
        //you win
        print_spin(true, amount * 1)
      }else{
        //you lose
        print_spin(true, amount)
      }
    }else{                                                                //if some problem with the input
      //print betting input instructions
      console.log("ERROR")
    }
  }

}
var a = new Roulette(100)
a.bankroll()
a.buyIn(1000)
a.bankroll()
a.cash
a.spin(1100, 13)
a.spin(2000, 13)
a.spin("1st 12", 200)
a.spin("2nd 12", 200)
a.spin("3rd 12", 200)
