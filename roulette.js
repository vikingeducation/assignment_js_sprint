let index = 1,
  players = {},
  player = {
    betAmount: 0,
    betNumber: 1,
    betType: "",
    buyInAmount: 100,
    setBetAmount:function(betAmount){
      this.betAmount = parseInt(betAmount)
    },
    setBetNumber:function(betNumber){
      this.betNumber = parseInt(betNumber)
    },
    setBetType:function(betType){
      this.betType = parseInt(betType)
    },
    setBuyInAmount:function(buyInAmount){
      this.cash += parseInt(buyInAmount)
    },
    cash: 0
  }

player.__proto__.buyIn = function() {
  this.cash += this.buyInAmount
  this.showCash()
}
player.__proto__.roll = function() {
  var rolled = Math.round(Math.random() * 36)
  player.rolled = rolled
  var match = ""
  let type = document.getElementById("betType").value
  if (this.betNumber === "") {
    switch (type) {
      case "even":
        if (rolled % 2 === 0) {
          match = true
        }
        break;
      case "odd":
        if (rolled % 2 !== 0) {
          match = true;
        }
        break;
      case "1 to 18":
        if (rolled > 0 && rolled < 18) {
          match = true;
        }
        break;
      case "19 to 36":
        if (rolled > 18 && rolled < 37) {
          match = true;
        }
        break;
      case "1st 12":
        if (rolled > 0 && rolled < 13) {
          match = true;
        }
        break;
      case "2nd 12":
        if (rolled > 12 && rolled < 25) {
          match = true;
        }
        break;
      case "3rd 12":
        if (rolled > 24 && rolled < 37) {
          match = true;
        }
        break;
    }
    console.log(match, this.betNumber, rolled)
  } else {
    this.betNumber <= 36 ? console.log(match, this.betNumber, rolled) : console.log(`${this.betNumber} too large`)
    match = this.betNumber === rolled
  }
  if(match){
    this.cash += this.betAmount
    console.log( `you won ${this.betAmount}, ${this.cash} is your new total` )
  } else {
    this.cash -= this.betAmount;
    console.log( `you lost ${this.betAmount}, ${this.cash} is your new total` );
  }
}

player.__proto__.showCash = function() {
  console.log(this)
  console.log(this.cash)
}
while (index < 3) {
  players["player" + index] = Object.create(player)
  index++
}
let {
  player1,
  player2
} = players


let currentPlayer = player1
let currentIdmoney = "player1money"
let currentIdbet = "player1lastbet" 
let currentIdresult = "player1lastresult"

function changePlayer(){
  if(currentPlayer === player1){
    currentPlayer = player2
    currentIdmoney = "player2money"
    currentIdbet = "player2lastbet" 
    currentIdresult = "player2lastresult"
  } else  {
    currentPlayer = player1
    currentIdmoney = "player1money"
    currentIdbet = "player1lastbet" 
    currentIdresult = "player1lastresult" 
  } 
}

$("#setAll").click(function(){
    currentPlayer.setBetAmount(document.getElementById("betAmount").value)
    currentPlayer.setBetNumber(document.getElementById("betNumber").value)
    currentPlayer.setBetType( document.getElementById("betType").value)
    currentPlayer.setBuyInAmount(document.getElementById("buyInAmount").value)
})
    
$("#buyin").click(function(){
  currentPlayer.buyIn()
})
$("#roll").click(function(){
  currentPlayer.roll()  
  $(`#${currentIdmoney}`).html(currentPlayer.cash)
  $(`#${currentIdbet}`).html(currentPlayer.betNumber)
  $(`#${currentIdresult}`).html(currentPlayer.rolled)
  changePlayer()

})
$("#showcash").click(function(){
  currentPlayer.showCash()
})

