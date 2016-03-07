var tester = {

  init: function(sprintObj){
    console.log("Initializing test...");
    this.sprintObj = sprintObj;
    this.testLargestEl();
    this.testReversed();
    this.testLoudSnakeCase();
    this.testCompareArrays();
    this.testFizzBuzz();
    this.testMyMap();
    this.testPrimes();
    this.testBubble();
    this.testMerge();
    this.testQuick();
    this.displayResults();
  },


  results: {},


  testLargestEl: function(){
    var input = [2,4,2,1,5,2,5];
    var exp = 5;
    var actual = this.sprintObj.largestEl(input);
    this.results.largestEl = (actual == exp);
  },


  testReversed: function(){
    var input = "I am a special string!";
    var exp = "!gnirts laiceps a ma I";
    var actual = this.sprintObj.reversed(input);
    this.results.reversed = (actual == exp);
  },


  testLoudSnakeCase: function(){
    var input = "I am a strange code.  I like it though!";
    var exp = "I_Am_A_Strange_Code_I_Like_It_Though";
    var actual = this.sprintObj.loudSnakeCase(input);
    this.results.loudSnakeCase = ( actual == exp);
  },


  testCompareArrays: function(){
    var startArr = [1,2,4,3];
    var diffArr = [1,2,3,4];

    // Happy path
    var actual1 = this.sprintObj.compareArrays(startArr, startArr);
    var test1 = ( actual1 == true);

    // Sad path
    var actual2 = this.sprintObj.compareArrays(startArr, diffArr);
    var test2 = ( actual2 == false);

    this.results.compareArrays = ( test1 && test2 );
  },


  testFizzBuzz: function(){
    var input = 16;
    var exp = [1,2,"FIZZ",4,"BUZZ","FIZZ",7,8,"FIZZ","BUZZ",11,"FIZZ",13,14,"FIZZBUZZ",16];
    var actual = this.sprintObj.fizzBuzz(16);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.fizzBuzz = ( this.sprintObj.compareArrays(exp,actual) );
  },


  testMyMap: function(){
    var inputArr = [1,2,3,4,5];
    var inputFunc = function(el){ return el*2; };
    var exp = [2,4,6,8,10];
    var actual = this.sprintObj.myMap(inputArr,inputFunc);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.myMap = ( this.sprintObj.compareArrays(exp, actual) );
  },


  testPrimes: function(){
    var input = 12;
    var exp = [2,3,5,7,11];
    var actual = this.sprintObj.primes(input);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.primes = ( this.sprintObj.compareArrays(exp, actual));
  },

  testBubble: function(){
    var input = [];
    var size = 10;
    var limit = 100;
    for (var i = 0; i < size; i++) input.push(Math.floor(Math.random() * limit));
    var copyInput = input.slice();
    var exp = input.slice().sort(function sortNumber(a,b) {
      return a - b;
    });
    var actual = this.sprintObj.bubble(input);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.bubble = ( this.sprintObj.compareArrays(exp, actual));
    this.results.bubble += "<p>INPUT:</p> [" + copyInput + "]";
    this.results.bubble += "<p>OUTPUT:</p> [" + actual + "]";
  },

  testMerge: function(){
    var input = [];
    var size = 10;
    var limit = 100;
    for (var i = 0; i < size; i++) input.push(Math.floor(Math.random() * limit));
    var copyInput = input.slice();
    var exp = input.slice().sort(function sortNumber(a,b) {
      return a - b;
    });
    var actual = this.sprintObj.merge(input);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.merge = ( this.sprintObj.compareArrays(exp, actual));
    this.results.merge += "<p>INPUT:</p> [" + copyInput + "]";
    this.results.merge += "<p>OUTPUT:</p> [" + actual + "]";
  },

  testQuick: function(){
    var input = [];
    var size = 10;
    var limit = 100;
    for (var i = 0; i < size; i++) input.push(Math.floor(Math.random() * limit));
    var copyInput = input.slice();
    var exp = input.slice().sort(function sortNumber(a,b) {
      return a - b;
    });
    var actual = this.sprintObj.quick(input);
    if (typeof actual === 'undefined') { actual = [] };
    this.results.quick = ( this.sprintObj.compareArrays(exp, actual));
    this.results.quick += "<p>INPUT:</p> [" + copyInput + "]";
    this.results.quick += "<p>OUTPUT:</p> [" + actual + "]";
  },


  displayResults: function(){
    console.log("Displaying results...");
    console.log(this.results)
    $("#largest-el").html(String(this.results.largestEl));
    $("#reversed").html(String(this.results.reversed));
    $("#loud-snake-case").html(String(this.results.loudSnakeCase));
    $("#compare-arrays").html(String(this.results.compareArrays));
    $("#fizz-buzz").html(String(this.results.fizzBuzz));
    $("#my-map").html(String(this.results.myMap));
    $("#primes").html(String(this.results.primes));
    $("#bubble").html(String(this.results.bubble));
    $("#merge").html(String(this.results.merge));
    $("#quick").html(String(this.results.quick));
  }

}


$(document).ready( function(){ tester.init( sprintFunctions )});
