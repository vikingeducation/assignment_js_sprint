'use strict'

function Roulette(startCash) {
    // Private methods
    // Generate a random wheel spin
    let wheelSpin = function() {
        return Math.floor(Math.random() * (37 - 1)) + 1;
    }

    // Ensure that the cash given is a number
    let sanitize = function(inputCash) {
        if (isNaN(inputCash) || (inputCash < 0)) {
            return 0;
        } else {
            return inputCash;
        };
    };

    // Determine the winning numbers and payout ratio
    let getSpinParams = function(bet) {
        let allNums = []
        for (let i = 1; i < 37; i++) {
            allNums.push(i);
        }
        let winners = [];
        let ratio = 0;
        switch(bet) {
            // O and '00' bets arent in the list, but get a 1:35 ratio, so we
            // just pick a random number
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
                // If we have a number in the range
                if ( !(isNaN(bet) || (bet < 1) || (bet > 36)) ) {
                    winners = [bet];
                    ratio = 35;
                };
        }

        return [winners, ratio];
    }


    // Public attributes/methods
    // Initialize balance
    this.cashAvailable = sanitize(startCash);

    // Display balance
    this.bankroll = function() {
        console.log(`You have $${this.cashAvailable} available`);
    };

    // Add cash
    this.buyIn = function(newCash) {
        this.cashAvailable += sanitize(newCash);
        this.bankroll();
    }

    // Spin wheel
    this.spin = function(betAmount, betEntry) {
        if ( !(sanitize(betAmount)) ) {
            console.log(`Sorry, $${betAmount} is not a valid bet amount.`);
        } else if (betAmount > this.cashAvailable) {
            console.log(`Sorry, $${betAmount} is more than you can bet`);
        } else {
            let winners, ratio;
            [winners, ratio] = getSpinParams(betEntry);
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
            } else {
                console.log(`Sorry, ${betEntry} is not a valid bet`);
            }
        }
        this.bankroll();
    };

};
