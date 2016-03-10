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
