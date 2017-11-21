

var bal = 100;

function spin() {
	return Math.floor(
		Math.random() * 36 + 1
		)
};

function ponyUp(x){

	bal=bal+x;

};

function betNorm(money, num) {
	let result;

	if (num == spin()) {
		result = money * 35;
	} else {
		result = -money;
	}
	bal+=result;
	return result;
	

};


function betZero(money, num) {

	if (num == 00&&spin()==1) {
		result = money * 35;
	} 
	else if (num == 0&&spin()==2) {
		result = money * 35;
	} 
	else {result = -money;
	}
	bal+=result;
	return result;
};

//I didn't do them all. I'm ok with that. :-)
