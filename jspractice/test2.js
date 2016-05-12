/*1) Write a program that prints the numbers from 1 to x. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
*/

//IIFE - Immediately invoked function expression

(function(){
  function test(param){
    for (var x=1; x <= param; x++) {
      var band = 0;
      if (x % 3 === 0) {
        console.log('“Fizz”');
        band = 1;
      }
      if (x % 5 === 0) {
        console.log('“Buzz”');
        band = 1;
      }
      if ((x % 3 === 0) && (x % 5 === 0) ) {
        console.log('“Fizz“Buzz””');
      }
      if (!band) {
        console.log(x);
      }
    }
  }
  test(20);
})();

/*
2) Write a method that given any single number it will return an array that contains all their prime factors... Refer to https://www.mathsisfun.com/definitions/prime-factor.html... For example: prime factors of 12 = 2 * 2 * 3 For 100 = 2 * 2 * 5 * 5
*/

(function(){

  function factor(param) {
      var arr = [], i;

      for (i = 2; i <= param; i++) {
          while ((param % i) === 0) {
              arr.push(i);
              param /= i;
          }
      }

      console.log(arr);
  }

  factor(12);

})();
