// Roulette Testing

var rouletteTesting = {

  init: function() {
    // add tests as we build them
    console.log("Running tests...");
    this.testGetOdds();
    this.testPayout();
    this.testLoss();
    this.testBuyIn();
  },

  testGetOdds: function() {
    var test = new Roulette(1000);
    console.assert(test.getOdds(5) === 35, "getOdds did not return correct odds for getOdds(5)");
    console.assert(test.getOdds("Odd") === 1, "getOdds did not return correct odds for getOdds(\"Odd\")");
    console.assert(test.getOdds("2nd 12") === 2, "getOdds did not return correct odds for getOdds(\"2nd 12\")");
    console.assert(test.getOdds(0) === 35, "getOdds did not return correct odds for getOdds(0)");
    console.assert(test.getOdds("00") === 35, "getOdds did not return correct odds for getOdds(\"00\")");
    console.assert(test.getOdds("!!!") === false, "getOdds(\"!!!\") did not properly account for invalid input.");
  },

  testPayout: function() {
    var test = new Roulette(1000);
    test.payout(35, 1);
    console.assert(test.money === 1035, "testPayout did not run properly.");
  },

  testLoss: function() {
    var test = new Roulette(1000);
    test.loss(100);
    console.assert(test.money === 900, "testLoss did not run properly.");
  },

  testBuyIn: function() {
    var test = new Roulette(1000);
    test.buyIn(500);
    console.assert(test.money === 1400, "testBuyIn did not run properly.");
  }
}

// $(document).ready( function(){ rouletteTesting.init( sprintFunctions )});
