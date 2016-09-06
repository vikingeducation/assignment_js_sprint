// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){
    var ans = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > ans) {
        ans = arr[i];
      }
    }
    return ans;
  },

  reversed: function(str){
    var ans = [];
    str = str.split('');
    for (var i = str.length; i >= 0; i--) {
      ans.push(str[i]);
    }
    return ans.join('');
  },

  loudSnakeCase: function(str){
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = toTitleCase(str);
    str = str.replace(/\s+/g, '_')

    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    return str;
  },

  compareArrays: function(arr1, arr2){
    if(arr1.length !== arr2.length) { return false; }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) { return false; }
    }
    return true;
  },

  fizzBuzz: function(num){
    ans = [];
    for (var i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        ans.push('FIZZBUZZ');
      }
      else if (i % 3 === 0) {
        ans.push('FIZZ');
      }
      else if (i % 5 === 0) {
        ans.push('BUZZ');
      }
      else {
        ans.push(i);
      }
    }
    return ans;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
