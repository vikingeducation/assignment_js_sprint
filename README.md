# Practice with JavaScript

In this challenge I built JavaScript functions which solves each of the following problems (`scripts_spec.js` provided by VCS).
- largestEl takes an array and returns the largest element.
- reversed takes a string and reverses it.
- loudSnakeCase takes a full sentence and puts it into "Loud_Snake_Case" format
- fizzBuzz takes an input of a number and returns an array containing all the elements from 1 to that number.Eg. fizzBuzz(6) => [ 1, 2, "FIZZ", 4, "BUZZ", "FIZZ" ]
- compareArrays takes two arrays and checks to see if they are equal
- myMap takes an array and a function. It passes every element from the array into that function, in turn, running the function.
- primes takes a number and outputs an array containing all prime numbers that occur prior to that number, e.g. primes(8) => [2,3,5,7]

Also I built Roulette game using basic object-oriented programming principles in JavaScript. "The user should start with a bankroll and bet with each "spin" of the imaginary wheel. They can choose numbers 1-36. After each spin, the result is displayed and funds are distributed accordingly (payout is 35:1)." - vikingcodeschool

## Getting Started

Fllow this [Stack Overflow Thread](https://stackoverflow.com/questions/9731965/is-there-a-way-to-create-and-run-javascript-in-chrome) for instructions


```
r = new Roulette( 100 )  // starting bankroll $100
r.spin( 10, 24 )         // bet 10 on 24
r.spin( 50, 13 )
r.bankroll()
r.buyIn( 1000 )
```

## Author

* **Dariusz Biskupski** - *Initial work* - https://dariuszbiskupski.com


## Acknowledgments

This is an assignment created for [Viking Code School](https://www.vikingcodeschool.com/)
