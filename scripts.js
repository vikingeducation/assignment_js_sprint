    // FILL IN THE FUNCTIONS BELOW

    var sprintFunctions = {
      largestEl: function(fred){ 


        fred.sort().reverse();
        return fred.splice(0,1); 
        // your code here
    },

    reversed: function(arg1){  
        // your code here
        return arg1.split("").reverse().join("");


    },



    loudSnakeCase: function(arg2){  
        // your code here


    var arg3=arg2.split(" "); //
    
    var res=[];
    var space=res.indexOf("");

    for(var i=0; i<arg3.length;i++){
        res.push(arg3[i].slice(0,1).toUpperCase()+arg3[i].slice(1,arg3[i].length));

        res[i].slice(space,space+1);
    } 
    //return res.join("_").replace(/!/g,'').replace(/\./g,'').replace(/\?/g,'');
    var snakecaze= res.join("_").replace(/!/g,'').replace(/\./g,'').replace(/\?/g,'').replace(/[_]{2,}/,"_");
    console.log(snakecaze);
    return snakecaze;


},



compareArrays: function(a,b){ 
        // your code here (replace the return)

        for(var i=0;i<a.length;i++){
         
         if(a[i]!==b[i]){

            return false;}
        }
        return true; 

    },




    fizzBuzz: function(num){  
        // your code here

        var arr=[];
        for(var i=1; i<=num; i++){
            arr.push(i);

        };


        for(var i=0;i<arr.length;i++){

            if(arr[i]%3==0&&arr[i]%5==0){

                arr.splice(i,1,"FIZZBUZZ")
            }

            else if (arr[i]%5==0){

                arr.splice(i,1,"BUZZ")
            }

            else if (arr[i]%3==0){

                arr.splice(i,1,"FIZZ")
            };

        };
        console.log(arr,"returning from fizzbuzz");
        return arr;


    },




    myMap: function(arr,func){  
        // your code here
console.log("in my map");

        var rtn=[];

        for(var i=0; i<arr.length; i++){
            rtn.push(func(arr[i])  )

        };
console.log(rtn);
            return rtn;

    },

    primes: function(num){  
        // your code here
       
  const isPrime = num => {
    const s = Math.sqrt(num);
    for (let i = 2; i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  const primeNums = [];
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      primeNums.push(i);
    }
  }
  return primeNums;

},
}




    




















