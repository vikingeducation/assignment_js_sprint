'use strict'

function Roulette(startCash) {
    this.cashAvailable = startCash;

    this.spin = function(betAmount, betNumber) {
        return null;
    };

    this.bankroll = function() {
        return null;
    };

    this.buyIn = function(newCash) {
        this.cashAvailable += newCash;
    }
}
