var toString26 = function(num) {
  var digit, result = [];
  while (num > 0) {
    digit = num % 26;
    //convert
    result.unshift(digit)
    num = Math.floor(num / 26);
  }

  return result;
}


// num % 26
// convert that to a letter
// num = Math.floor(num / 26)
// add to left of array
// join array



// toInt26
// 