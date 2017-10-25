function Roulette(amt){
                this.amt = amt;
                this.spin_no = 0;
                this.payout_ratio = 35;
                this.amt_won = 0;
                this.win_lose = function(won){
                                    if (won === true){
                                        console.log(`You Win $ ${this.amt_won}, the spin was ${this.spin_no}!!!`);
                                        console.log(`You now have $ ${this.amt}`);
                                    }else{
                                        console.log(`You Lose, the spin was ${this.spin_no} :(`);
                                        console.log(`You now have $ ${this.amt}`);
                                    }
                };
                this.spin = function(bet_amt, bet_num){
                                var won = false;
                                this.spin_no = Math.floor((Math.random())*36+1+2);
                                var amt_won = 0;
                                if(this.spin_no === 37){this.spin_no = "0"}
                                if(this.spin_no === 38){this.spin_no = "00"}
                                if(this.spin_no === bet_num){
                                  won = true;
                                  this.payout_ratio = 35;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.win_lose(won);
                                  this.amt = this.amt + amt_won;
                                }
                                else if ((bet_num === "Even") && ((this.spin_no%2 === 0))){
                                  won = true;
                                  this.payout_ratio = 1;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.amt = this.amt + this.amt_won;
                                  this.win_lose(won);
                                }else if ((bet_num === "Odd") && ((this.spin_no%2 === 1))){
                                  won = true;
                                  this.payout_ratio = 1;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.amt = this.amt + this.amt_won;
                                  this.win_lose(won);
                                }else if ((bet_num === "1 to 18") && (this.spin_no>= 1 && this.spin_no <=18)){
                                  won = true;
                                  this.payout_ratio = 1;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.amt = this.amt + this.amt_won;
                                  this.win_lose(won);
                                }else if ((bet_num === "19 to 36") && (this.spin_no >= 19 && this.spin_no <= 36)){
                                  won = true;
                                  this.payout_ratio = 1;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.amt = this.amt + this.amt_won;
                                  this.win_lose(won);
                                }else if ((bet_num === "1st 12") && (this.spin_no>=1 && this.spin_no<=12)){
                                  won = true;
                                  this.payout_ratio = 2;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.amt = this.amt + this.amt_won;
                                  this.win_lose(won);
                                }else if ((bet_num === "2nd 12") && (this.spin_no>=12 && this.spin_no <= 24)){
                                  won = true;
                                  this.payout_ratio = 2;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.amt = this.amt + this.amt_won;
                                  this.win_lose(won);
                                }else if ((bet_num === "3rd 12") && (this.spin_no>= 24 && this.spin_no <= 36)){
                                  won = true;
                                  this.payout_ratio = 2;
                                  this.amt_won = bet_amt*this.payout_ratio;
                                  this.amt = this.amt + this.amt_won;
                                  this.win_lose(won);
                                }else{
                                    won = false;
                                    this.amt = this.amt - bet_amt;
                                    this.win_lose(won);
                                }
                this.bankroll = function(){
                                    console.log(`You now have $ ${this.amt}`);
                };
                this.buyIn = function(money){
                    this.amt = this.amt + money;
                    console.log(`You now have $ ${this.amt}`);
               }
               }
}


//Testing the Roulette game
var roul = new Roulette(100);
roul.spin(10, "00");
roul.spin(50, "1st 12");//win = 200; lose = 50
roul.spin(10, "Even");
roul.spin(20, "Odd");
roul.spin(30, "1 to 18");
roul.spin(10, "2nd 12");
roul.bankroll();
roul.spin(20, "19 to 36");
roul.spin(10, "3rd 12");
roul.buyIn(1000);
roul.bankroll();
roul.spin(10, "0");
roul.spin(10, "00");