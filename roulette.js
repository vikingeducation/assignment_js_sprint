function UserConstructor(){
  this.name = prompt('What is your name?'),
  this.bankroll = parseInt(prompt('What is your bankroll?')),
  this.selection = function(){
    return prompt('Pick a number from 1-36, evens, or odds.');
  }
  this.bet = function(){
    var user_bet = prompt('How much are you betting?');
    if(user_bet <= this.bankroll){
      return user_bet;
    }
    else{
      alert('You do not have enough to make this bet. Try again.');
      return false;
    }
  }
}

var player = new UserConstructor();

var game = {
  player: player,
  spin: function(){
    return Math.floor((Math.random() * 36) + 1);
  },
  spin_value: 0,
  win: function(){
    console.log(game.spin_value)
    if(isNaN(parseInt(player.selection()) == false && parseInt(player.selection())) === game.spin_value){
      player.bankroll += parseInt(game.bet)*35;
      alert('You win! Your new bankroll is ' + player.bankroll);
      return true;
    }
    else if(player.selection == 'evens' && game.spin_value % 2 === 0){
      player.bankroll += parseInt(game.bet)*2;
      alert('You win! Your new bankroll is ' + player.bankroll);
      return true;
    }
    else if (player.selection == 'odds' && game.spin_value % 2 !== 0){
      player.bankroll += parseInt(game.bet)*2;
      alert('You win! Your new bankroll is ' + player.bankroll);
      return true;
    }
    else{
      player.bankroll -= parseInt(game.bet);
      alert('You Lose :(, the number was ' + game.spin_value + '. Your new bankroll is ' + player.bankroll);
      return false;
    }
  },
  continue: function(){
    var play = window.confirm('Play?');
    while(play === true && player.bankroll > 0){
      console.log(player.bankroll);
     
      game.bet = player.bet();
      while (game.bet === false){
         game.bet = player.bet();
      }

      game.spin_value = game.spin();
      game.win();
      play = window.confirm('Play again?')
    }
    if (player.bankroll <= 0){
      var play = window.confirm('Would you like to buy back in for $500?');
      if (play == true){
        player.bankroll = 500;
        game.continue();
      }
      else{
        alert('Thanks for playing!');
      }
    }
  }
}

game.continue();
