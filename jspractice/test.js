//FIRST EXERCISE
(function(){
  function add(x){
    return function(y){
      console.log(x + y);
    };
  }

  add(4)(5);
})();

//SECOND EXERCISE

(function(){
  var arr2 = [{name: 'Chevrolet', value: ['Camaro','Corvette']}, {name: 'Ford', value: ['Mustang','F100']}];

  function transformar( arr ) {
    var obj = [];
    for( var i in arr ) { // recorre el array arr2;
      for( var j in arr[i].value ) { //recorre el array de la propiedad value;
          obj.push(arr[ i ].name + ':' + arr[i].value[j]);
      }
    }
    console.log(obj);
  }
  transformar(arr2);

})();
