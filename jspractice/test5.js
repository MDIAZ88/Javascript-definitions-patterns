/* Complete the add function to make it work like this add(x)(y) that return x + y; Example add(5)(4) and return 9.*/

(function(){

  function add(x){
    return function(y){
      console.log(x+y);
    };
  }

  add(4)(5);

})();


/* Make the test function return an array of strings with the following pattern [“Chevrolet: Camaro”, “Chevrolet: Corvette”, “Ford: Mustang”,...] given the following input var CAR_DATA = [{ manufacturer: ‘Chevrolet’, models: [‘Camaro’, ‘Corvette’, ... ], manufacturer: ‘Ford’, models: [‘Mustang’, ‘Lobo’, ... ]...  }].*/

(function(){

  var array = [{ manufacturer: 'Chevrolet', models: ['Camaro', 'Corvette']},{manufacturer: 'Audi', models: ['A1', 'A5']}];

  function convert(array){
    var obj = [];
    for(var i in array){
      for(var j in array[i].models){
        obj.push(array[i].manufacturer + ':' + array[i].models[j]);
      }
    }
    console.log(obj);
  }

})();


/* Clone a repository from bitbucket and execute npm install, then execute npm start. Then solve the problem in angularjs. Angular Excercise*/


/*1) Write a program that prints the numbers from 1 to x. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
*/

(function(){

 function change(param){
   for(var i=1;i<=param;i++){
     var band = 0;
     if(i % 3 === 0){
       console.log('Fizz');
       band = 1;
     }
     if(i % 5 === 0){
       console.log('Buzz');
       band = 1;
     }
     if((i % 3 === 0) && (i % 5 === 0)){
       console.log('FizzBuzz');
     }
     if(!band){
       console.log(i);
     }
   }
 }

 change(20);

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

/*
String calculator

Rules
create a method that will accept string of numbers and return the sum value

add('2,3,4')

if we don't pass anything add('') the result would be 0

Number bigger or equal than 1000 should be ignored so, for example:

add('1,2,3,1000') => 6
*/

(function(){
  function sum(param){
    var array = param.split(',').map(Number);
    var s = 0;
    var i;

    for(i = 0; i < array.length; i++){
      if(array[i] < 1000){
        s += parseInt(array[i], 10);
      }
    }
    
    console.log(s);
  }

  sum('14,20,6,1000');
})();
