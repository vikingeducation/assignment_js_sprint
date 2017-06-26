'use strict'

function Roulette(startCash) {
    this.cashAvailable = sanitize(startCash);

    this.spin = function(betAmount, betNumber) {
        return null;
    };

    this.bankroll = function() {
        console.log(`You have $${this.cashAvailable} available`);
    };

    this.buyIn = function(newCash) {
        this.cashAvailable += sanitize(newCash);
        this.bankroll()
    }
};

// Ensure that the cash given is a number
var sanitize = function(inputCash) {
    if (isNaN(inputCash) || (inputCash < 0)) {
        return 0;
    } else {
        return inputCash;
    };
};
