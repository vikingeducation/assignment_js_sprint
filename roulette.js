'use strict'

function Roulette(startCash) {
    this.cashAvailable = sanitze(startCash);

    this.spin = function(betAmount, betNumber) {
        return null;
    };

    this.bankroll = function() {
        return null;
    };

    this.buyIn = function(newCash) {
        this.cashAvailable += sanitize(newCash);
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
