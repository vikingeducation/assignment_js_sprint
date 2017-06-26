// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(submission){  
    let largest;

    submission.forEach( function(element) {
      if ((largest === undefined) || (element > largest)) {
        largest = element;
      };
    });

    return largest;
  },
  
  reversed: function(submission){  
    return submission.split("").reverse().join("");
  },

  loudSnakeCase: function(submission){  
    let response = [];
    prepped = submission.replace(/[^\w\ ]/gi, '');
    prepped.split(' ').forEach( function(element) {
      if (element.length > 0) {
        response.push(element[0].toUpperCase() + element.substring(1));
      };
    });

    return response.join('_');
  },

  compareArrays: function(first, second){ 
    if (first.length === second.length) {
      for (i = 0; i < first.length; i++) {
        if (first[i] != second[i]) {
          return false;
        };
      };
      return true;
    };
    return false;
  },

  fizzBuzz: function(submission){  
    let response = [];
    for (i = 1; i <= submission; i++) {
      if (!(i % 5) && !(i % 3)) {
        response.push('FIZZBUZZ');
      } else if (!(i % 3)) {
        response.push('FIZZ');
      } else if (!(i % 5)) {
        response.push('BUZZ');
      } else {
        response.push(i);
      }
    }
    return response;
  },

  myMap: function(list, toCall){  
    let response = [];
    list.forEach(function(element) {
      response.push(toCall(element));
    });
    return response;
  },

  primes: function(submission){  
    let candidates = [];
    let results = [];

    for (i = 0; i < submission; i++) {
      if (i < 2) {
        candidates[i] = false;
      } else {
        candidates[i] = true;
      }
    }

    for (interval = 2; interval < submission * submission; interval++) {
      for (sieve = interval * 2; sieve < submission; sieve += interval) {
        candidates[sieve] = false;
      }
    }

    candidates.forEach(function(isPrime, number) {
      if (isPrime) {
        results.push(number);
      }
    })

    return results;
  },
}
