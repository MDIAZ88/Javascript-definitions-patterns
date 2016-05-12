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
  function add(param){
    var arr = param.split(',').map(Number);
    var sum = 0;
    for( var i = 0; i < arr.length; i++ ){
        if(arr[i] < 1000){
         sum += parseInt( arr[i], 10 );
        }
    }
    console.log(sum);
  }

  add('14,2,1000');
})();
