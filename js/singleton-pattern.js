/*
El patron SINGLETON restringe la instancia de una clase a un solo objeto

se puede retrasar su inicializacion

Su intención consiste en garantizar que una clase sólo tenga una
instancia y proporcionar un punto de acceso global a ella.
*/


var mySingleton = (function () {

  var instance; //guarda una referencia al singleton

  function init() {
    // Singleton
    function privateMethod(){
        console.log( "I am private" );
    }
    var privateVariable = "Im also private";
    var privateRandomNumber = Math.random();
    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
      publicProperty: "I am also public",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
     /*Toma la instancia del singleton si es que existe una o crea una nueva
     si es que no existe*/
    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();

// Usage:

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
