/*
CLOSURES

Son funciones que se encuentran dentro de otra funcion y manejan Variables
independientes.

Se trata de una funcion declarada dentro de otra funcion y hace uso de las variables que se encuentran en su entorno de desarrollo
(En la funcion donde fue creada).

*/

var operacion = function(){

  var valor = 0;

  var incrementar = function(){
    return valor += 4;
  };

  return incrementar;
};

console.log(operacion());
console.log(operacion());
console.log(operacion());
