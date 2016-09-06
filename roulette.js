function Roulette (bankRoll) {
  this.value = bankRoll;
  // Getter method.
  this.bankRoll = function () {
    return this.value;
  };
  this.spin = function(bet, input) {
    var rouletteNum = Math.floor(Math.random() * 38);
    switch (input) {
      case '00':
        if (rouletteNum === 37) {
          this.value = this.value + (bet * 35);
        } else {
          this.value = this.value - bet;
        }
        break;
      case 'Even':
        if (rouletteNum % 2 === 0) {
          this.value = this.value + bet;
        }
        else {
          this.value = this.value - bet;
        }
        break;
      case 'Odd':
        if (rouletteNum % 2 !== 0) {
          this.value = this.value + bet;
        }
        else {
          this.value = this.value - bet;
        }
        break;
      case '1 to 18':
        if (rouletteNum <= 18 && rouletteNum !== 0) {
          this.value = this.value + bet;
        }
        else {
          this.value = this.value - bet;
        }
        break;
      case '19 to 36':
        if (rouletteNum > 18 && rouletteNum !== 37) {
          this.value = this.value + bet;
        }
        else {
          this.value = this.value - bet;
        }
        break;
      case '1st 12':
        if (rouletteNum <= 12 && rouletteNum !== 0) {
          this.value = this.value + (bet * 2);
        }
        else {
          this.value = this.value - bet;
        }
        break;
      case '2nd 12':
        if (rouletteNum > 12 && rouletteNum < 25) {
          this.value = this.value + (bet * 2);
        }
        else {
          this.value = this.value - bet;
        }
        break;
      case '3rd 12':
        if (rouletteNum > 24 && rouletteNum < 37) {
          this.value = this.value + (bet * 2);
        }
        else {
          this.value = this.value - bet;
        }
        break;
      default:
        if (input === rouletteNum) {
          this.value = this.value + (bet * 35);
        } else {
          this.value = this.value - bet;
        }
      }
    return this.value;
  };
  this.buyIn = function(num) {
    this.value += num;
    return this.value;
  };
}

var r = new Roulette(1000);
r.spin(10,'3rd 12');
console.log(r.value);
r.spin(10,'Odd');
console.log(r.value);
console.log(r.buyIn(390));
