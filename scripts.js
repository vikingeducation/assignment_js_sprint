// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    return Math.max.apply(null, arr);
  },
  
  reversed: function(s){  
    var x = ""
    for (var i = s.length-1; i>=0; i-=1) {
      x += s[i];
    } return x
  },

  loudSnakeCase: function(s){  
    var x = '';
    for (i=0; i<s.length; i+=1) {
      if (s[i]===" ") {
        if (s[i-1]===" ") {
          continue;
        }
        x+="_";
      } else if (s[i].match(/[a-z]/i)) {
        if (i==0 || s[i-1]===" ") {
          x+=s[i].toUpperCase();
        } else {
          x+=s[i];
        }
      } else {
        continue;
      }
    } return x;
  },

  compareArrays: function(arr1, arr2){ 
    if (arr1.length != arr2.length) {
      return false;
    } else {
      for (i=0; i<arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
          return false;
        } else {
          continue;
        }
      }
    }
    return true; 
  },

  fizzBuzz: function(n){  
    var output = [];
    for (i=1; i<=n; i++) {
      if (i%15===0) {
        output.push("FIZZBUZZ");
      } else if (i%3===0) {
        output.push("FIZZ");
      } else if (i%5===0) {
        output.push("BUZZ");
      } else {
        output.push(i);
      }
    } return output;
  },

  myMap: function(arr, func){  
    return arr.map(func);
  },

  primes: function (n) {
    if (n<=2) {
      return [];
    } else {
      output = [2];
      var isPrime = function(y) {
        if(y<=2) {
          return false;
        } else {
          for (var x=2; x<y; x++) {
            if(y%x===0) {
              return false;
            }
          }
        } return true;
      }
      for (var i=3; i<n; i++) { 
        if (isPrime(i)) {
          output.push(i);
        }
      } 
    } return output;
  }
}

function Roulette(roll) {
  this.wallet = roll;
  this.bankroll = function(){
    console.log("You have $" + String(this.wallet) + " left");
  };
  this.buyin = function (amt) {
    this.wallet += amt;
  };
  this.spin = function(bet, slot) {
    if (bet>this.wallet) {
      console.log("You can't bet money you don't have.  Or shouldn't, anyway.");
      return;
    } else if (slot>37) {
      console.log("You can't bet on slots that aren't on the wheel.  Pick from 0 to 36, or 37 which is equivalent to 00.");
      return;
    }
    var result = Math.floor(Math.random()*38);
    if (!isNaN(slot) && slot===result) {
      this.wallet += bet*35;
      console.log("The spin was " + String(result) + ". You won $" + String(bet*35));
    } else if (!isNaN(slot) && slot!=result) {
      this.wallet -= bet;
      console.log("The spin was " + String(result) + ". You lost $" + String(bet));
    } else if (slot==="Even") {
      if (result%2===0) {
        this.wallet += bet;
        console.log("The spin was " + String(result) + ". You won $" + String(bet));
      } else {
        this.wallet -= bet;
        console.log("The spin was " + String(result) + ". You lost $" + String(bet));
      }
    } else if (slot = "Odd") {
      if (result%2===0) {
        this.wallet -= bet;
        console.log("The spin was " + String(result) + ". You lost $" + String(bet));
      } else {
        this.wallet += bet;
        console.log("The spin was " + String(result) + ". You won $" + String(bet));
      }
    } else if (slot==="1 to 18") {
      if (result < 19 && result>0) {
        this.wallet += bet;
        console.log("The spin was " + String(result) + ". You won $" + String(bet));
      } else {
        this.wallet -= bet;
        console.log("The spin was " + String(result) + ". You lost $" + String(bet));
      } 
    } else if (slot==="19 to 36") {
      if (result>18 && result<37) {
        this.wallet += bet;
        console.log("The spin was " + String(result) + ". You won $" + String(bet));
      } else {
        this.wallet -= bet;
        console.log("The spin was " + String(result) + ". You lost $" + String(bet));
      }
    } else if (slot==="1st 12") {
      if (result > 1 && result < 13) {
        this.wallet += bet*2;
        console.log("The spin was " + String(result) + ". You won $" + String(bet*2));
      } else {
        this.wallet -= bet*2;
        console.log("The spin was " + String(result) + ". You lost $" + String(bet*2));
      }
    } else if (slot==="2nd 12") {
      if (result > 12 && result < 25) {
        this.wallet += bet*2;
        console.log("The spin was " + String(result) + ". You won $" + String(bet*2));
      } else {
        this.wallet -= bet*2;
        console.log("The spin was " + String(result) + ". You lost $" + String(bet*2));
      }      
    } else if (slot==="3rd 12") {
      if (result > 24 && result < 37) {
        this.wallet += bet*2;
        console.log("The spin was " + String(result) + ". You won $" + String(bet*2));
      } else {
        this.wallet -= bet*2;
        console.log("The spin was " + String(result) + ". You lost $" + String(bet*2));
      }      
    }
  }
}