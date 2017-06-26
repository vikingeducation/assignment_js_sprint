'use strict'

function Roulette(startCash) {
    this.cashAvailable = sanitize(startCash);

    this.spin = function(betAmount, betNumber) {
        if ( !(sanitize(betAmount)) ) {
            console.log(`Sorry, $${betAmount} is not a valid bet amount.`);
        } else if (betAmount > this.cashAvailable) {
            console.log(`Sorry, $${betAmount} is more than you can bet`);
        } else if ( isNaN(betNumber) || (betNumber < 1) || (betNumber > 36) ) {
            console.log(`Sorry, ${betNumber} is not a valid bet (1-36)`);
        } else {
            let roll = Math.floor(Math.random() * (37 - 1)) + 1;
            if (roll === betNumber) {
                let winnings = 35 * betAmount;
                this.cashAvailable += winnings;
                console.log(`Congratulations! You win $${winnings}`);
            } else {
                this.cashAvailable -= betAmount;
                console.log(`Sorry! You spun ${roll}`);
            }
        }
        this.bankroll();
    };

    this.bankroll = function() {
        console.log(`You have $${this.cashAvailable} available`);
    };

    this.buyIn = function(newCash) {
        this.cashAvailable += sanitize(newCash);
        this.bankroll();
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
