'use strict'

function Roulette(startCash) {
    this.cashAvailable = sanitize(startCash);

    this.spin = function(betAmount, betEntry) {
        if ( !(sanitize(betAmount)) ) {
            console.log(`Sorry, $${betAmount} is not a valid bet amount.`);
        } else if (betAmount > this.cashAvailable) {
            console.log(`Sorry, $${betAmount} is more than you can bet`);
        } else {
            let allNums = []
            for (let i = 1; i < 37; i++) {
                allNums.push(i);
            }
            let winners = [];
            let ratio = 0;
            switch(betEntry) {
                case 0:
                    winners = [wheelSpin()];
                    ratio = 35;
                    break;
                case '00':
                    winners = [wheelSpin()];
                    ratio = 35;
                    break;
                case 'Even':
                    winners = allNums.filter(i => i % 2 === 0);
                    ratio = 1;
                    break;
                case 'Odd':
                    winners = allNums.filter(i => i % 2 === 1);
                    ratio = 1;
                    break;
                case '1 to 18':
                    winners = allNums.filter(i => i < 19);
                    ratio = 1;
                    break;
                case '19 to 36':
                    winners = allNums.filter(i => i > 18);
                    ratio = 1;
                    break;
                case '1st 12':
                    winners = allNums.filter(i => i < 13);
                    ratio = 2;
                    break;
                case '2nd 12':
                    winners = allNums.filter(i => (i > 12) && (i < 25));
                    ratio = 2;
                    break;
                case '3rd 12':
                    winners = allNums.filter(i => i > 24);
                    ratio = 2;
                    break;
                default:
                    if (isNaN(betEntry) || (betEntry < 1) || (betEntry > 36)) {
                        console.log(`Sorry, ${betEntry} is not a valid bet`);
                    } else {
                        winners = [betEntry];
                        ratio = 35;
                    };
            }
            if (ratio) {
                let actualSpin = wheelSpin();
                if (winners.indexOf(actualSpin) === -1){
                    this.cashAvailable -= betAmount;
                    console.log(`Sorry! You spun ${actualSpin}`)
                } else {
                    if ((betEntry === 0) || (betEntry === '00')) {
                        actualSpin = betEntry
                    }
                    let winnings = betAmount * ratio;
                    this.cashAvailable += winnings;
                    console.log(`Congratulations! You rolled ${actualSpin} and win $${winnings}`);
                }
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

// Generate a random wheel spin
var wheelSpin = function() {
    return Math.floor(Math.random() * (37 - 1)) + 1;
}

// Ensure that the cash given is a number
var sanitize = function(inputCash) {
    if (isNaN(inputCash) || (inputCash < 0)) {
        return 0;
    } else {
        return inputCash;
    };
};
