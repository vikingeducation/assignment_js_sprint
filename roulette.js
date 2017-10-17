// Roulette Game Prototype
function Roulette (funds) {
    this.funds = funds;
}

Roulette.prototype = {
    bankroll: function() {
        console.log(`You now have $${this.funds}`);
        console.log("\n");
    },
    buyIn: function(moreFunds) {
        this.funds += moreFunds;
        console.log(`You bought in $${moreFunds}`);
        this.bankroll();
    },
    spin: function(wager, bet) {
        var spinNumber = Math.floor(Math.random() * 37);

        console.log(`You bet $${wager} on ${bet}`);
        
        if (spinNumber === 0) {
            var firstDigit = Math.round(Math.random() * 1);
            if (firstDigit === 0) {
                spinNumber = "00";
            } else {
                spinNumber = "0";
            }
        }
        if (bet === spinNumber) {
            this.funds += (wager * 35) - wager;
            console.log(`You Win $${wager * 35}, the spin was ${spinNumber}!!!`);
            this.bankroll();
        } else if (bet === 'Odd' && spinNumber % 2 !== 0) {
            this.funds +=  wager * 2;
            console.log(`You Win $${wager * 2}, the spin ${spinNumber} was Odd!!!`);
            this.bankroll();
        } else if (bet === 'Even' && spinNumber % 2 === 0) {
            this.funds +=  wager * 2;
            console.log(`You Win $${wager * 2}, the spin ${spinNumber} was Even!!!`);
            this.bankroll();
        } else if (bet === '1 to 18' && (1 <= spinNumber && spinNumber <= 18)) {
            this.funds +=  wager * 2;
            console.log(`You Win $${wager * 2}, the spin ${spinNumber} was between 1-18!!!`);
            this.bankroll();
        } else if (bet === '19 to 36' && (19 <= spinNumber && spinNumber <= 36)) {
            this.funds +=  wager * 2;
            console.log(`You Win $${wager * 2}, the spin ${spinNumber} was between 19-36!!!`);
            this.bankroll();
        } else if (bet === '1st 12' && (1 <= spinNumber && spinNumber <= 12)) {
            this.funds +=  wager * 3;
            console.log(`You Win $${wager * 3}, the spin ${spinNumber} was in the 1st 12!!!`);
            this.bankroll();
        } else if (bet === '2nd 12' && (13 <= spinNumber && spinNumber <= 24)) {
            this.funds +=  wager * 3;
            console.log(`You Win $${wager * 3}, the spin ${spinNumber} was in the 2nd 12!!!`);
            this.bankroll();
        } else if (bet === '3rd 12' && (25 <= spinNumber && spinNumber <= 36)) {
            this.funds +=  wager * 3;
            console.log(`You Win $${wager * 3}, the spin ${spinNumber} was in the 3rd 12!!!`);
            this.bankroll();
        } else {
            this.funds -= wager;
            console.log(`You Lose, the spin was ${spinNumber} :(`);
            this.bankroll();
        }
    }
};

var r = new Roulette(100);
r.spin(10, 24);
r.spin(50, 13);
r.bankroll();
r.buyIn(1000);
r.spin(30, "0");
r.spin(30, "00");
r.spin(70, "Odd");
r.spin(100, "Even");
r.spin(20, "1 to 18");
r.spin(200, "19 to 36");
r.spin(40, "1st 12");
r.spin(80, "2nd 12");
r.spin(140, "3rd 12");