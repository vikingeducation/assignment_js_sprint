//Roulette

function Roulette(bankroll){
  //implementation note:
    //I could've went more Object-Oriented and made all the slots as objects that contained the win-conditions
      //but for a short exercise I decided this approach was sufficient.

  //remember if they don't supply a bankroll parameter then this.cash would be set to undefined
    //and that'll mess everything up, so if bankroll is undefined set cash to 0
  this.cash = (typeof(bankroll) == "undefined") ? 0 : bankroll
  this.red_slots = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
  this.black_slots = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
  this.winning_slot;    //note that this is a string so that "0" and "00" are different
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
  this.print_spin = function(win, payout){
    console.log(`The winning_slot is ${this.winning_slot}`)
    /*WHO'S PASSING ME A STRING!!????!!!!*/
    payout = Number(payout)
    if (win) {
      this.cash += payout
      this.win = true
      console.log(`You WIN $${payout}, now you have ${this.cash}`)
    }else{
      this.cash -= payout
      this.win = false
      console.log(`You LOSE $${payout}, now you have ${this.cash} `)
    }

  }
  this.instructions = function() {
    console.log(
                "Please use format .spin([Amount you're betting], [a string of your bet])\n"+
                "Possible bets:\n"+
                "A slot number (1-36)\n"+
                "A range of slots ('1st 12', '2nd 12', '3rd 12', 'low' (the first 1-18 slots), or high (the last 19-36 slots))\n"+
                "Whether the winning slot is even or odd"
               )
  }
  //run this so the player knows how to play the game
  this.instructions()

  this.spin = function(amount, bet){
    //check that you can bet that much and announce the bet
    if (amount > this.cash){
      console.log("Sorry you don't have that much.")
      return
    }else if (typeof(amount) == "string" || typeof(bet) == "number"){
      //the user possibly switched the inputs, print out an error and instructions
      console.log("I believe you may have switched the inputs there\n");
      this.instructions()
      return
    }
    console.log(`Taking bet on ${bet} for ${amount}`)
    bet = String(bet).toLowerCase()


    //spin the wheel
    this.winning_slot = Math.floor(Math.random() * (38 + 1)) - 1  //output values : -1 . . . 36
    this.winning_slot = (this.winning_slot == -1) ? "00" : String(this.winning_slot)

    //for test code
    this.win = false;

    //the winning conditions logics
    if (+bet > 0){
      //if bet is a string of a num >= operator will convert and compare it
      //console.log(`Taking bet on ${bet} for ${amount}`)
      if(this.winning_slot == bet){
        //you win
        this.print_spin(true, amount * 36)
      }else{
        this.print_spin(false, amount)
      }
    }else if (bet.search("12") > -1) {
      if (bet.search("st") > -1){         //found the "st" in "1st 12"
          if (this.winning_slot > 0 && this.winning_slot < 13){
            //you win
            this.print_spin(true, amount * 2)
          }else{
            //you lose
            this.print_spin(false, amount)
          }
      }else if (bet.search("nd")){          //found the "nd" in "2nd 12"
        if (this.winning_slot > 12 && this.winning_slot < 25){
          //you win
          this.print_spin(true, amount * 2)
        }else{
          //you lose
          this.print_spin(false, amount)
        }
      }else{                              //must be "3rd 12"
        if (this.winning_slot > 24 && this.winning_slot < 37){
          //you win
          this.print_spin(true, amount * 2)
        }else{
          //you lose
          this.print_spin(false, amount)
        }
      }
    }else if (bet == "red" || bet == "black"){

      if (bet == "red"){       //bet is "red"
        if (this.red_slots.includes(+this.winning_slot) ){
          this.print_spin(true, amount * 1)
        }else {
          this.print_spin(false, amount)
        }
      }else {                  //bet is "black"
        if (this.black_slots.includes(+this.winning_slot)){
          this.print_spin(true, amount * 1)
        }else{
          this.print_spin(false, amount)
        }
      }

    }else if (bet == "even" || bet == "odd"){
      //you lose if slot == '0' or '00'
      if (+this.winning_slot == 0){
        //you lose
        this.print_spin(false, amount)
      }
      var is_even = (+this.winning_slot % 2 == 0) ? true : false
      if ((bet == "even" && is_even) || (bet == "odd" && !is_even)){
        //you win
        this.print_spin(true, amount * 1)
      }else {
        //you lose
        this.print_spin(false, amount)
      }
    }else if (bet == "high" || bet == "low"){
      if ((bet == "high" && +this.winning_slot > 18) ||  (bet == "low" && +this.winning_slot < 19)){
        //you win
        this.print_spin(true, amount * 1)
      }else{
        //you lose
        this.print_spin(false, amount)
      }
    }else{                                                                //if some problem with the input
      //print betting input instructions
      console.log("ERROR")
      this.instructions();
    }
    return this.win
  }

}
