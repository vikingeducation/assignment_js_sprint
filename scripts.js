// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    var highest_element = array[0];
    for(var i = 1; i < array.length; i++){
      if (array[i] > highest_element){
        highest_element = array[i];
      }
    }
    return highest_element;
  },

  reversed: function(string){
    var reversed = '';
    for(var i = string.length - 1; i >= 0; i-- ){
      reversed += string[i]
    }
    return reversed
  },

  loudSnakeCase: function(string){
    // your code here

    var words = string.replace(/([^a-zA-Z\s\d]+)/g, "").replace(/[ ]+/g, " ").split(" ");
    for(var i = 0; i < words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
    }
    return words.join("_")
  },

  compareArrays: function(arr1, arr2){
    // your code here (replace the return)
    if(arr1.length !== arr2.length)
      return false
    else{
      for(i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i])
          return false
      }
      return true
    }
  },

  fizzBuzz: function(num){
    // your code here
    var arr = []
    var fizz = function(num){
      return num % 3 == 0
    }
    var buzz = function(num){
      return num % 5 == 0
    }
    for(i = 1; i <= num; i++){
      if(fizz(i)){
        if(buzz(i))
          arr.push("FIZZBUZZ");
        else {
          arr.push("FIZZ");
        }
      }else if(buzz(i)){
        arr.push("BUZZ");
      }else{
        arr.push(i);
      }
    }
    return arr
  },

  myMap: function(arr, func){
    // your code here
    var newArr = []
    arr.forEach(function(elem){
      newArr.push(func(elem));
    });
    return newArr;
  },

  primes: function(num){
    var primes = [null, null]
    var final = [];
    for(i = 2; i < num; i++){
      primes.push(i);
    }
    for(i=2; i <= Math.sqrt(num); i++){
      if(primes[i]){
        for(m = i*i;  m < num; m += i){
          primes[m] = null
        }
      }
    }
    primes.forEach(function(elem){
      if(elem){
        final.push(elem);
      }
    });
    return final
  },
}

sprintFunctions.bubbleSort = function(arr){
  /*

def bubble_sort(input)

  begin

    idx = 1
    swapped = false

    begin

      if arr[idx] < arr[idx-1]

        arr[idx - 1], arr[idx] = arr[idx], arr[idx - 1]
        swapped = true

      end

      idx += 1

    end until idx == arr.length

  end until !swapped

  arr
end

  */
  var swapped = false;
  do {
    var s, s2;
    for(i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i-1]){
        swapped = true;
        s = arr[i];
        s2 = arr[i-1];
        arr[i] = s2;
        arr[i-1] = s;
      }
    }
  } while (swapped);
  return arr;
}


/*
def insertion_sort(arr)
  arr = arr.dup
  sorted = 0
  begin

    idx = sorted

    until idx == 0

      if arr[idx] < arr[idx - 1]

        arr[idx - 1], arr[idx] = arr[idx], arr[idx - 1]
        idx -= 1

      else
        break
      end

    end

    sorted += 1

  end until sorted == arr.length
  arr
end

def bubble_sort(input)
  arr = input.dup

  begin

    idx = 1
    swapped = false

    begin

      if arr[idx] < arr[idx-1]

        arr[idx - 1], arr[idx] = arr[idx], arr[idx - 1]
        swapped = true

      end

      idx += 1

    end until idx == arr.length

  end until !swapped

  arr
end

def merge_sort(arr)

  return arr if arr.length <= 1

  half = arr.length/2
  left_half = arr[0...half]
  right_half = arr[half..-1]

  merge(merge_sort(left_half), merge_sort(right_half))

end

def merge(left_arr, right_arr)

  left, right = left_arr.dup, right_arr.dup
  merged = []

  while !left.empty? && !right.empty?
    if left[0] <= right[0]
      merged << left.shift
    else
      merged << right.shift
    end
  end

  merged << left << right
  merged.flatten

end

def quick_sort(arr)

  return arr if arr.length <= 1

  arr = arr.dup

  pivot = arr.length-1
  compare = 0

  begin

    if arr[pivot] < arr[compare]
      arr[compare], arr[pivot-1], arr[pivot] = arr[pivot-1], arr[pivot], arr[compare]
      pivot -= 1
    else
      compare += 1
    end

  end until pivot == compare

  arr[0...pivot] = quick_sort(arr[0...pivot])
  arr[pivot+1..-1] = quick_sort(arr[pivot+1..-1])

  arr

end
*/
