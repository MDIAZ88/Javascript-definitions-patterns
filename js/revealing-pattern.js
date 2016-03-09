/*
tiene el mismo significado y uso que el patron modulo comun

fue diseñado para asegurarse de que todos los metodos y las variables
se mantengan privadas.

*/

var MyModule = (function() {
  
  function myMethod() {
    console.log('my method');
  }
  
  function myOtherMethod() {
    console.log('my other method');
  }
  
  return {
    someMethod : myMethod,
    someOtherMethod : myOtherMethod
  };
  
} )();

//the result is undefined
MyModule.myMethod();
MyModule.myOtherMethod();
//the public methods 
MyModule.someMethod(); 
MyModule.someOtherMethod(); 