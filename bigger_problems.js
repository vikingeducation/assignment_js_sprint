var bubbleSort = function(array) {
  unsortedLength = array.length
    while (unsortedLength > 1) {
      for (var i = 0; i < unsortedLength - 1; i++) {
        if (array[i] > array[i + 1]) {
          lower = array[i + 1]
          higher = array[i]
          array[i] = lower
          array[i + 1] = higher
        }
      }
      unsortedLength -= 1
    }

  console.log(`Ran bubble sort on [${array}]. Got: `)
  console.log(array)
}

bubbleSort([5,2,7,9,4,0,-7])