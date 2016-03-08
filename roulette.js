function UserConstructor(){
  this.name = prompt('What is your name?'),
  this.bankroll = prompt('What is your bankroll?'),
  this.selection = function(){
    return prompt('Pick a number from 1-36');
  }
  this.bet = function(){
    return prompt('How much are you betting?');
  }
}

var player = new UserConstructor();

var game = {
  player: player,
  spin: function(){
    return Math.floor((Math.random() * 2) + 1);
  },
  spin_value: 0,
  win: function(){
    console.log(game.spin_value)
    if(parseInt(player.selection()) === game.spin_value){
      alert('You win!');
      return true;
    }
    else{
      alert('You Lose :(, the number was ' + game.spin_value);
      return false;
    }
  },
  continue: function(){
    var play = window.confirm('Play?');
    while(play === true){
      game.spin_value = game.spin();
      game.win();
      play = window.confirm('Play again?')
    }
  }
}

game.continue()
