function Roulette(br) {
    this.br = br;
    var min = Math.ceil(0);
    var max = Math.floor(36);

    this.bankroll = function() {
        return br;
    }

    this.spin = function(bet, turn) {
        const s = Math.floor(Math.random() * (max - min + 1)) + min;
        let won = true;
        let winnings = 0;
        if(turn === "Even" && s % 2 === 0) {
            winnings = bet;
        } else if(turn === "Odd" && s % 2 !== 0) {
           winnings = bet;
        } else if(turn === "1 to 18" && s >= 1 && s <= 18) {
            winnings = bet;
        } else if(turn === "19 to 36" && s >= 19 && s <= 36) {
            winnings = bet;
        } else if (s === turn) {
           winnings = bet * 35;
        } else {
            won = false;
        }

        if(won) {
            br += winnings;
            console.log(`You win $${winnings}, the spin was ${s}!!!`);
            console.log(`You now have $${br}.`);
        } else {
            br -= bet;
            console.log(`You lose, the spin was ${s} :(`);
            console.log(`You now have $${br}.`);
        }
    }

    this.buyIn = function(amt) {
        br += amt;
        console.log(`You bought in $${amt}.`);
        console.log(`You now have $${br}.`);
    }
}