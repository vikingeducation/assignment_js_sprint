//Roulette
//STATUS : seems-operational, needs a little more testing
          //red-black not complete 



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
  this.print_spin = function(win, payout){
    console.log(`The winning_slot is ${this.winning_slot}`)
    this.bankroll()
    console.log("typeof payout = " + (typeof(payout)))
    /*WHO'S PASSING ME A STRING!!????!!!!*/
    payout = Number(payout)
    if (win) {
      this.cash += payout
      this.win = true
      console.log(`You WIN ${payout}, now you have ${this.cash}`)
    }else{
      this.cash -= payout
      this.win = false
      console.log(`You LOSE ${payout}, now you have ${this.cash} `)
    }

  }

  this.spin = function(amount, bet){
    //check that you can bet that much and announce the bet
    if (amount > this.cash){
      console.log("Sorry you don't have that much.")
      return
    }else if (typeof(amount) == "string" || typeof(bet) == "number"){
      //the user possibly switched the inputs, print out an error and instructions
      //TODO: code this later
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
      //not implemented yet
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
    }
    return this.win
  }

}
//TEST CODE
var a = new Roulette(100)
/*a.bankroll()
a.buyIn(1000)
a.bankroll()
a.cash
a.spin(1100, 13)
a.spin(100, 13)
a.buyIn(1500)
a.spin(2000, 13)
*/
//a.spin( 200, "Even")
var test = function(test_func, param1, param2){
  var we_won = false
  var total_spins = 0
  var net_profit = 0
  var starting_cash = a.cash
  do {
    if (a.cash < 200){
      a.buyIn(2000)
      net_profit -= 2000
    }
    //we_won = test_func(param1, param2)
    we_won = test_func.call(a, param1, param2)
    //we_won = a.test_func(param1, param2)    //?
    total_spins++
  }while(!we_won)
  net_profit += a.cash - starting_cash
  console.log("We just spun " + total_spins + " times and 'won/lost' " + net_profit)
}
test(a.spin, 200, "Even")
test(a.spin, 200, "odd")
test(a.spin, 200, "high")
for(i = 1; i < 35; i++) {
  test(a.spin, 200, String(i))
}
a.spin("1st 12", 200)
a.spin("2nd 12", 200)
a.spin("3rd 12", 200)
a.spin("Even", 200)
a.spin("odd", 200)
a.spin("high", 200)
a.spin("low", 200)


//can any object call a function residing on another object and have it run on itself??
  //testing


//error, unexpected this in this.speak
var obj1 = {
  name: "obj1",
  this.speak = function() {
    console.log("My name is " + this.name)
  }
}
//error, unexpected . in this.name
var obj2 = {
  this.name = "obj2",
  this.speak = function() {
    console.log("My name is " + this.name)
  }
}
//correct way to specify an individual object's code
var obj3 = {
  name: "Karlito",
  speak: function() {
    console.log("My name is " + this.name)
  }
}
var ghost_of_karlito = obj3.speak
var obj4 = {
  name: "MochaL",
  speak: function() {
    console.log("My name is " + this.name)
  },
  multiple_personalities: function() {
    ghost_of_karlito()
  }
}
//the test, can we pass obj3's speak function to obj4? And if so, will it call itself Karlito
      //?
//yep, got it, the 'this' definitely refers to the caller of the function.
