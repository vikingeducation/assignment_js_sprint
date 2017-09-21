assignment_js_sprint
====================



To play Roulette, set up with:

var r = new Roulette(x);  // Where x = Your starting money

r.spin(x,y) // Where x = how much to bet on and y = a number from 1-36 if you're betting on single number.

Select what to bet on by selecting one of the following:
	r.betOn('00');
	r.betOn('0');
	r.betOn('1 to 18');
	r.betOn('19 to 36');
	r.betOn('1st 12');
	r.betOn('2nd 12');
	r.betOn('3rd 12');
	r.betOn('Even');
	r.betOn('Odd');
	r.betOn('Single Number');


r.theBetOn; // To see what your current bet on is.

r.bankroll // To check how much money you currently have

r.buyin(x) // Where x is the amount of money to add to your bankroll

