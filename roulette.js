function Roulette(startingBankroll){
    console.log("Starting bankroll = " + startingBankroll);
	this.bankroll = startingBankroll;
	this.spin = function(bet, number){
        if(this.bankroll <= 0){
          console.log("You don't have enough money");
          return;
        }
        var theSpin = Math.floor(Math.random() * 38);
      
        if(this.betOn === "00"){
          number = 37;
          if(theSpin === 37){
              theSpin = "00";
          }
        if (theSpin === number){
            this.bankroll += bet*35;
			console.log("You win " + bet*35 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
		}
		else{
            this.bankroll -= bet;
			console.log("You lose " + bet + ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
        } 
        }
      
      
        else if(this.betOn === "0"){
          number = 0;
          if (theSpin === number){
              this.bankroll += bet*35;
              console.log("You win " + bet*35 +  ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          } 
        }
      
      
        else if(this.betOn === "1 to 18"){
          if(1 <= theSpin <= 18){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          } 
        }
      
      
      else if(this.betOn === "19 to 36"){
          if(19 <= theSpin <= 36){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "1st 12"){
          if(1 <= theSpin <= 12){
            this.bankroll += bet*2;
			console.log("You win " + bet*2 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "2nd 12"){
          if(13 <= theSpin <= 24){
            this.bankroll += bet*2;
			console.log("You win " + bet*2 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }  
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }    
      
      
      else if(this.betOn === "3rd 12"){
          if(25 <= theSpin <= 36){
            this.bankroll += bet*2;
			console.log("You win " + bet*2 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }   
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "Even"){
          if(theSpin !== 0 && theSpin % 2 === 0){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }  
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else if(this.betOn === "Odd"){
          if(theSpin !== 37 && theSpin % 2 === 1){
            this.bankroll += bet*1;
			console.log("You win " + bet*1 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
          }   
          else{
              this.bankroll -= bet;
              console.log("You lose " + bet + ". The spin was " + theSpin);
              console.log("You now have " + this.bankroll);
          }         
      }
      
      
      else{
        if (theSpin === number){
            this.bankroll += bet*35;
			console.log("You win " + bet*35 +  ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
		}
		else{
            this.bankroll -= bet;
			console.log("You lose " + bet + ". The spin was " + theSpin);
            console.log("You now have " + this.bankroll);
		}
      }
      console.log("You are currently betting on: " + this.betOn.toUpperCase());
	}
	this.buyin = function(money){
      this.bankroll += money;
      console.log("You now have " + this.bankroll);
	}
    
    this.betOn = function(str){
      switch(str){
        case "00":
          console.log("You are now betting on 00.");
          break;
        case "0":
          console.log("You are now betting on 0.");
          break;
        case "1 to 18":
          console.log("You are now betting on 1 to 18.");
          break;
        case "19 to 36":
          console.log("You are now betting on 19 to 36.");
          break;
        case "1st 12":
          console.log("You are now betting on 1st 12.");
          break;
        case "2nd 12":
          console.log("You are now betting on 2nd 12.");
          break;
        case "3rd 12":
          console.log("You are now betting on 3rd 12.");
          break;
        case "Even":
          console.log("You are now betting on Even.");
          break;
        case "Odd":
          console.log("You are now betting on Odd.");
          break;
        default:
          console.log("You are now betting on a Single Number.")
      return str;
          
      }
    };
}