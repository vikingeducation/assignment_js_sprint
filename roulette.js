class Roulette {
  constructor(funds){
    this.funds = funds;
    this.odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
    this.evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
    this.first12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.second12 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    this.third12 = [25, 26, 27, 38, 29, 30, 31, 32, 33, 34, 35, 36];
  }

  randSpin(){
    return Math.floor(Math.random() * 38 - 1);
  }


  dispMoney(){
    console.log("\n You have $%d in your pockets!\n", this.funds);
  }


  tryMyLuck(rouletteArray, betMoney){
    if(betMoney > this.funds){
      console.log("\nSorry, Sir. You do not have the funds.\n");
      return;
    }
    var spin = this.randSpin();
    var winner = false;

    for(var i = 0; i < rouletteArray.length; i++){
      if(spin == rouletteArray[i]){
        winner = true;
        break;
      }
    }

    if(!winner){
      this.funds -= betMoney;
      console.log("\nGet rinsed, you lost! Your new sum is: $%d", this.funds);
    } else{
      var rLength = rouletteArray.length;
      var payout = 0;
      if(rLength == 1){
        payout = 35;
      } else if(rLength == 18) {
        payout = 1;
      } else if(rLength == 12){
        payout = 2;
      }
      this.funds += payout*betMoney;
      console.log("\nWinner winner sum is bigger! Your new sum is: $%d", this.funds);
    }
  }



}

var play = new Roulette(10000);

play.tryMyLuck(play.odds, 100);
play.tryMyLuck(play.evens, 500);
play.tryMyLuck(play.first12, 250);
play.tryMyLuck(play.second12, 100);
play.tryMyLuck(play.third12, 100);
play.tryMyLuck([-1], 500);
play.tryMyLuck(play.first12, 5000);
play.tryMyLuck(play.evens, 5000);
play.tryMyLuck([16], 100);
play.dispMoney();
