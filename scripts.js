// FILL IN THE FUNCTIONS BELOW

var isPrime = function(val, arr){
  ret = true;
    for( var i = 0; i<arr.length;i++){
      if (!(val % arr[i])){
        ret = false;
        }
      }
  return(ret);
}

var sprintFunctions = {
  largestEl: function(inp){
    var temp = 0;
     inp.forEach((element)=>{
       if (element > temp) {
         temp = element;
       }
     })
     return(temp);
  },

  reversed: function(aStr){
  var temp = [];
  var i = 0;
  for(x=aStr.length;x > 0; x--) {
    temp[i] = aStr[x-1];
    i++;
  }
  return(temp.join(""));
},

  loudSnakeCase: function(aStr){
  aStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  var temp = aStr.split(/\s|\.\s+|\!/);
  console.log(temp);
  temp.forEach((el,ind) =>{
    aLet = el.slice(0,1).toUpperCase();
    temp[ind] = aLet + el.slice(1,el.length);
  })
  temp.pop();
  return(temp.join("_"));
},

  compareArrays: function(firstArr,secArr){
    if (firstArr.length != secArr.length){
      return(false);
    }
    var ret = true;
    for(var i=0; i<firstArr.length; i++){
      if(firstArr[i] != secArr[i]) {
        ret = false;
        break;
        }
      }
    return(ret);
  },

  fizzBuzz: function(inp){
  out = [];
  for(var i = 1; i <= inp; i++){
    out.push(i);
    if (!(i % 15)){
      out.pop();
      out.push("FIZZBUZZ");
    }else if (!(i % 3)){
      out.pop();
      out.push("FIZZ");
    } else if (!(i % 5)){
      out.pop();
      out.push("BUZZ");
    }

  }
  return(out);
},

  myMap: function(arr, func){
  retArr = [];
  arr.forEach((el)=>{
    retArr.push(func(el));
  })
  return retArr;
},

  primes: function(num){
  arr = [];
  for(var i = 2; i<num;i++) {
    if(isPrime(i,arr)){
      arr.push(i);
    }
  }
  return(arr);
},
}
