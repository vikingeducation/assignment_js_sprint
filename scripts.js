// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    var keeper = 0;
    for(var i = 0; i < array.length; i++){
      if(keeper > array[i]){
        continue;
      }else{
        keeper = array[i];
      }
    }
    return keeper;
  },

  reversed: function(string){
    // your code here
    var trader = [];
    for(var i = string.length; i > 0; i--){
      trader.push(string[i-1]);
    }
    return trader.join("");
  },

  loudSnakeCase: function(string){
    // your code here
    var newArray = [];
    for (var i = 0; i < string.length; i++){
      if (string[i].match(/^[A-Za-z _]+$/)){
        if(string[i] == " " && string[i-1] == " "){
          continue;
        }else if (i === 0 || string[i-1] == " "){
          newArray.push(string[i].toUpperCase());
        }else if(string[i] == " "){
          newArray.push("_");
        }else{
          newArray.push(string[i]);
        }
      }
    }
    return newArray.join("");
  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    var tester = true;
    var highCount;
    if(array1.length > array2.length){
      highCount = array1.length;
    }else{
      highCount = array2.length;
    }
    if(Array.isArray(array1) && Array.isArray(array2)){
      for(var i = 0; i < highCount; i++){
        if(array1[i] == array2[i]){
          continue;
        }else{
          return tester = false;
        }
      }
    }else{
      tester = false;
    }
    return tester;
  },

  fizzBuzz: function(num){
    // your code here
      var newArray = [];
    for(i = 1; i <= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        newArray.push("FIZZBUZZ");
      }else if(i % 3 === 0){
        newArray.push("FIZZ");
      }else if( i % 5 === 0){
        newArray.push("BUZZ");
      }else{
        newArray.push(i);
      }
    }
    return newArray;
  },

  myMap: function(array, callback){
    // your code here
    var newArray = [];
    for(var i = 0; i < array.length; i++){
      newArray.push(callback(array[i]));
    }
    return newArray;
  },

  primes: function(num){
    // your code here
    var primal = [];
    for(var i = 1; i < num; i++){
      if( i === 1){
        continue;
      }else{
        for(var j = 2; j <= i; j++){
          if( i === j ){
            primal.push(i);
          }else if( i % j !== 0){
            continue;
          }else{
            break;
          }
        }
      }
    }
    return primal;
  },
}


//Roulette Game

var rlet = {
  "newGame": function(starter){
    rlet.current = starter;
    console.log("Please note, all special bets must be placed withing quotations, including '00'.")
  },
  "current": 0,

  "funcs": {
    "odds": function(num){
      switch (num){
        case "0":
          return 35;
        case "00":
          return 35;
        case "Even":
          return 1;
        case "Odd":
          return 1;
        case "1 to 18":
          return 1;
        case "19 to 36":
          return 1;
        case "1st 12":
          return 2;
        case "2nd 12":
          return 2;
        case "3rd 12":
          return 2;
        default:
          return 35;
      }
    },
    "betCase": function(num, bet, result){
        switch (num){
          case "Even":
            if(result % 2 === 0 ){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "Odd":
            if(result % 2 !== 0){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "0":
            if(result == "0"){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "00":
            if(result == "00"){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "1 to 18":
            if(result > 0 && result <= 18){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "19 to 36":
            if(19 <= result){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "1st 12":
            if(result < 0 && result <= 12){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "2nd 12":
            if(result > 12 && result < 25){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          case "3rd 12":
            if(25 <= result){
              return rlet.funcs.win(num, bet, result);
            }else{
              return rlet.funcs.lose(result, bet);
            }
            break;
          default:
            console.log("Please place a valid bet");
        }
      },
    "lose": function(result, bet){
      console.log("Sorry. You Lose. Spin was " + result);
      rlet.current = rlet.current - bet;
      console.log("You now have " + rlet.current);
    },
    "win": function(num, bet, result){
      console.log("Roll was " + result + ". You Win $" + bet * rlet.funcs.odds(num));
      rlet.current += bet * rlet.funcs.odds(num);
      console.log("You now have " + rlet.current);
    },
    "equate": function(num, bet, result){
      if(result == num){
        return rlet.funcs.win(bet, result);
      }else{
        return rlet.funcs.lose(result, bet);
      }
    }
  },

  "spin": function(bet, num){
    var result = Math.floor((Math.random() * 38) + 1);
    var resultStr = result.toString();
    var theseOdds = rlet.funcs.odds(num);
    var numcheck;

    if(num === 0){
      num = '0';
    }

    if(result == 37){
      result = '0';
    }else if(result == 38){
      result = '00'
    }

    if(typeof(num) !== "number"){
      return rlet.funcs.betCase(num, bet, result);
    }else{
      return rlet.funcs.equate(num, bet, result);
    }


    if(result == 37){
      resultStr = '0';
    }else if(result == 38){
      resultStr = '00';
    }

  },
  "bankroll": function(){
      console.log(rlet.current);
      },
  "buyIn": function(amount){
    rlet.current += amount;
    console.log(rlet.current);
  },
};
