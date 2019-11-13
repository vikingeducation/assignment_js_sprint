var bankroll = prompt("How much would you like to start with as your bank?"); 

while (bankroll > 0) {
var wager = prompt("Enter your wager amount (dollars you'd like to bet) as an integer");
var betInteger = prompt("Place your bet. Type: odd or even, 1 to 18, 19 to 36, 1st 12, 2nd 12, 3rd 12, or whole numbers including 0, 00, or a single number from 1 - 36.");

    function roulette (wager, betInteger) {
        this.wager = parseInt(wager);
        this.bankroll = parseInt(bankroll);
      // this.betInteger = parseInt(betInteger);
        if (bankroll < wager) {
            alert("You do not have $" + wager + " to spend. Please select an amount less than or equal to " + bankroll + "."); 
         } else if ((betInteger > 36) || (betInteger < 0)) {
            alert("That is not an appropriate bet. Please place your bet by typing 'odd', 'even', '1 to 18', '19 to 36', '1st 12', '2nd 12', '3rd 12', or entering numbers including 0, 00, 1 - 36.");
        } else {
            var spin = Math.floor(Math.random() * 36);
            if ( ( betInteger == "00") && (spin == 0) )  {
                bankroll += ( +wager * 35 );
                alert ("You win $" + (wager * 35) + ". You bet on " + betInteger + " and the spin matched. You now have $" + bankroll + "."); 
            } else if (betInteger == spin) {
                bankroll += ( +wager * 35 );
                alert ("You win $" + (wager * 35) + " . You now have $" + bankroll + ". Your bet was " + betInteger + " and the spin was " + spin + "."); 
            } else if (betInteger == "even") {
                if (spin % 2 == 0) {
                    bankroll = (+bankroll + +wager); 
                    alert ("You win $" + wager + ". The spin was " + spin + " which is even. You now have $" + bankroll + "."); 
                } else {
                    bankroll = (bankroll - wager);
                    if (bankroll == 0) { 
                        alert("You lose, the spin was " + spin + " which is odd. You are all out of money. Thank you so much for playing!"); 
                    } else {
                        alert ("You lose $" + wager + ". The spin was " + spin + " which is odd. You now have $" + bankroll + "."); 
                    } 
                } 
            } else if (betInteger == "odd") {
                if (spin % 2 != 0) {
                    bankroll = (+bankroll + +wager); 
                    alert ("You win $" + wager + ". The spin was " + spin + " which is odd. You now have $" + bankroll + "."); 
                } else {
                    bankroll -= wager;
                    if (bankroll == 0) { 
                        alert("You lose, the spin was " + spin + " which is even. You are all out of money. Thank you so much for playing!"); 
                    } else {
                        alert ("You lose $" + wager + ". The spin was " + spin + " which is even. You now have $" + bankroll + "."); 
                    } 
                }
            } else if (betInteger == "1 to 18") {
                if (spin <= 18) {
                    bankroll = (+bankroll + +wager);
                    alert ("You win $" + wager + ". The spin was " + spin + " which is between 1-18. You now have $" + bankroll + "."); 
                } else if (spin > 18) {
                    bankroll -= wager;
                    if (bankroll == 0) { 
                        alert("You lose, the spin was " + spin + " which is not between 1-18. You are all out of money. Thank you so much for playing!"); 
                    } else {
                        alert ("You lose $" + wager + ". The spin was " + spin + " which is not between 1-18. You now have $" + bankroll + "."); 
                    } 
                }
            } else if (betInteger == "19 to 36") {
                if (spin > 18) {
                    bankroll = (+bankroll + +wager);
                    alert ("You win $" + wager + ". The spin was " + spin + " which is between 19-36. You now have $" + bankroll + "."); 
                } else if (spin <= 18) {
                    bankroll -= wager;
                    if (bankroll == 0) { 
                        alert("You lose, the spin was " + spin + " which is not between 19-36. You are all out of money. Thank you so much for playing!"); 
                    } else {
                        alert ("You lose $" + wager + ". The spin was " + spin + " which is not between 19-36. You now have $" + bankroll + "."); 
                    } 
                }
            } else if (betInteger == "1st 12") {
                if (spin <= 12) {
                    bankroll = (bankroll + (wager*2));
                    alert ("You win $" + (wager*2) + ". The spin was " + spin + " which is between 1-12. You now have $" + bankroll + "."); 
                } else if (spin > 12) {
                    bankroll -= wager;
                    if (bankroll == 0) { 
                        alert("You lose, the spin was " + spin + " which is not between 1-12. You are all out of money. Thank you so much for playing!"); 
                    } else {
                        alert ("You lose $" + wager + ". The spin was " + spin + " which is not between 1-12. You now have $" + bankroll + "."); 
                    } 
                }    
            } else if (betInteger == "2nd 12") {
                if (spin <= 24) {
                    bankroll = (bankroll + (wager*2));
                    alert ("You win $" + (wager*2) + ". The spin was " + spin + " which is between 13-24. You now have $" + bankroll + "."); 
                } else if ((spin >= 25) || (spin <= 12)) {
                    bankroll -= wager;
                    if (bankroll == 0) { 
                        alert("You lose, the spin was " + spin + " which is not between 13-24. You are all out of money. Thank you so much for playing!"); 
                    } else {
                        alert ("You lose $" + wager + ". The spin was " + spin + " which is not between 13-24. You now have $" + bankroll + "."); 
                    }  
                }    
            } else if (betInteger == "3rd 12") {
                if (spin > 25) {
                    bankroll = (bankroll + (wager*2));
                    alert ("You win $" + (wager*2) + ". The spin was " + spin + " which is between 25-36. You now have $" + bankroll + "."); 
                } else if (spin < 36) {
                    bankroll -= wager;
                    if (bankroll == 0) { 
                    alert("You lose, the spin was " + spin + " which is not between 25-36. You are all out of money. Thank you so much for playing!"); 
                    } else {
                    alert ("You lose $" + wager + ". The spin was " + spin + " which is not between 25-36. You now have $" + bankroll + "."); 
                    } 
                }
            } else {
                bankroll -= wager; 
                if (bankroll == 0) { 
                    alert("You lose. You bet " + betInteger + "; the spin was " + spin + ". You are all out of money. Thank you so much for playing!"); 
                } else {
                    alert ("You lose. You bet " + betInteger + "; the spin was " + spin + ". You now have $" + bankroll + ".");
                }
            }
        }   
        return bankroll;  
    } roulette(wager, betInteger);
}
       
 