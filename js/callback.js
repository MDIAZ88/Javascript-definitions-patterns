/*
FUNCION CALLBACK

es una funcion que se pasa como parametro a otra funcion donde es ejecutada.
*/

var showMessage = function(value, callback){
  callbkac(value);
};

showMessage("Marcos", function(value){
  console.log("Hola "+value);
});

/*
TIPOS DE DATOS EN JAVASCRIPT

1) Strings.
2) Numericos.
3) Booleanos.
4) objetos.
5) Arreglos.
6) Null.
8) Undefined.
*/
