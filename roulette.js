function Roulette(initialCash) {
  this.bank = initialCash,

    this.bankroll = () => {
      console.log(`You now have ${this.bank}`);
    },

    this.buyIn = (cash) => {
      if ((typeof cash == 'number') && cash >= 0) {
        this.bank += cash
        console.log(`You bought in ${cash}`);
        this.bankroll();
      } else {
        console.log("Invalid input");
      }
    },

    this.normalSpin = (bet, place) => {
      this.bank -= bet;
      chickenDinner = Math.floor(Math.random() * 38)
      if (place === chickenDinner) {
        let winnings = bet * 35
        this.bank += (winnings)
        console.log(`The spin was ${this.specialChar(chickenDinner)}! You Win ${winnings}`);
        this.bankroll();
      } else {
        console.log(`You Lose, the spin was ${this.specialChar(chickenDinner)}`);
        this.bankroll();
      }
    }

  this.specialChar = (chickenDinner) => {
    return chickenDinner === 37 ? '00' : chickenDinner
  }

  this.specialBetSpin = (bet, place) => {
    this.bank -= bet;
    chickenDinner = Math.floor(Math.random() * 38)
    if (place === 'even' && (chickenDinner % 2 === 0)) {
      this.calculateWinnings(bet, chickenDinner, 1)
    } else if (place === 'odd' && (chickenDinner % 2 !== 0)) {
      this.calculateWinnings(bet, chickenDinner, 1)
    } else if (place === '00' && (chickenDinner === 37)) {
      this.calculateWinnings(bet, chickenDinner, 35)
    } else if ((place === '0' || place === 0) && (chickenDinner === 0)) {
      this.calculateWinnings(bet, chickenDinner, 35)
    } else if (place === '1 to 18' && (chickenDinner > 0 && chickenDinner < 19)) {
      this.calculateWinnings(bet, chickenDinner, 1)
    } else if (place === '19 to 36' && (chickenDinner > 18 && chickenDinner < 37)) {
      this.calculateWinnings(bet, chickenDinner, 1)
    } else if (place === '1st 12' && (chickenDinner >= 1 && chickenDinner <= 12)) {
      this.calculateWinnings(bet, chickenDinner, 2)
    } else if (place === '2nd 12' && (chickenDinner >= 13 && chickenDinner <= 24)) {
      this.calculateWinnings(bet, chickenDinner, 2)
    } else if (place === '3rd 12' && (chickenDinner >= 25 && chickenDinner <= 36)) {
      this.calculateWinnings(bet, chickenDinner, 2)
    } else {
      console.log(`You Lose, the spin was ${this.specialChar(chickenDinner)}`);
      this.bankroll();
    }
  }

  this.calculateWinnings = (bet, chickenDinner, ratio) => {
    let winnings = bet * ratio
    this.bank += (winnings)
    console.log(`The spin was ${this.specialChar(chickenDinner)}! You Win ${winnings}`);
    this.bankroll();
  }

  this.spin = (bet, place) => {

    const specialBets = [0, '0', '00', 'even', 'odd', '1 to 18', '19 to 36', '1st 12', '2nd 12', '3rd 12']

    if (specialBets.includes(place)) {
      this.specialBetSpin(bet, place)
    } else if (place !== 0 && [...Array(38).keys()].includes(place)) {
      this.normalSpin(bet, place)
    } else {
      console.log("Invalid bet. Please enter a special bet or between 1 and 36.")
    }
  }
}