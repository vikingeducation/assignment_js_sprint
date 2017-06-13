// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){  
    array.sort;
return array[array.length - 1]
  },
  
  reversed: function(word) {  
    return word.split('').reverse().join('');
  },

loudSnakeCase:  function(word){  
var newString = "";
word = word.toLowerCase();

    var wordsArray = word.split(/\W+/);
for (var i = 0; i < wordsArray.length; i++) {
 
  newString += wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
if (i != wordsArray.length - 1){newString += "_";}else{}

}
if(newString.charAt(newString.length - 1) === "_")
{newString = newString.slice(0,newString.length - 1);}
return  newString
  },

  compareArrays: function(arr1,arr2){ 
    for (var i = 0; i < arr1.length; i++) {
if(arr1[i] != arr2[i]){return false}}
return true 
  },

  fizzBuzz: function(num){  
var arr = []
for (var i = 0; i < num; i++) {
    
    if((i + 1) % 3 === 0){
        
        if((i + 1) % 5 === 0){
        
        arr[i] = "FIZZBUZZ";
    }else{arr[i] = "FIZZ";}
    }
    if((i + 1) % 3 != 0 && (i + 1) % 5 === 0){arr[i] = "BUZZ";}
    if((i + 1) % 3 != 0 && (i + 1) % 5 != 0){
    arr[i] = i + 1;}
    
}
return arr
  },

  myMap: function(arr,fun){
newArr = []  
 for (var i = 0; i < arr.length; i++){newArr[i] = fun(i);}
return newArr

  },
checkprime: function(num2){
var i = 2;
while(i < num2)   
{

if(num2 % i === 0){return false;
}
i++;
}
return true
},

 primes:  function (num){  
var i = 2;

var arr = [];

while(i < num)   
{
    if(this.checkprime(i) === true){arr.push(i);}

i++;
}return arr
  },
}