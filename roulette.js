function Roulette (bankRoll) {
  this.value = bankRoll;
  // Getter method.
  this.bankRoll = function () {
    return this.value;
  };
  this.spin = function(bet, num) {
    var rouletteNum = Math.floor((Math.random() * 38)+1);
    switch (rouletteNum) {
      (num === rouletteNum) {
        this.value = this.value + (bet * 35);
      } else {
        this.value = this.value - bet;
      }
    return this.value;
  };
  this.buyIn = function(num) {
    this.value += num;
    return this.value;
  };
}

var r = new Roulette(1000);
r.spin(10,24);
console.log(r.value);
r.spin(10,24);
console.log(r.value);
console.log(r.buyIn(390));
