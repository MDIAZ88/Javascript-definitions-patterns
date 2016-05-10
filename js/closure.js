/*
CLOSURES

Son funciones que se encuentran dentro de otra funcion y manejan Variables
independientes.

Se trata de una funcion declarada dentro de otra funcion y hace uso de las variables que se encuentran en su entorno de desarrollo
(En la funcion donde fue creada).

A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.

The closure has access to variables in three scopes:

--Variables declared in their own scope
--Variables declared in a parent function scope
--Variables declared in the global namespace

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


//EN FUNCIONES ANONIMAS

function whatAreYouWritingAbout()
{
    var subject = "About Closures";

    var message = function () {
      return subject;
    };

    return message;
}

var writingAbout = whatAreYouWritingAbout();
console.log(writingAbout());

/*
Pero evidentemente, en este contexto o ámbito del código, la variable subject no existe (o está fuera de ámbito) y además su valor supuestamente fue destruido al salir de la función whatAreYouWritingAbout(). Por lo tanto, cuando se ejecuta la función writingAbout() debería dar un error tipo Uncaught ReferenceError: subject is not defined. Sin embargo, el código muestra el mensaje correctamente...¿Por qué?.

Cuando JavaScript encuentra en el código un closure le indica al Garbage Collector que no destruya las variables (están quedan guardadas o encerradas) que la función "interna" necesita para su correcta ejecución. Por lo tanto, a pesar de que las variables que esta función utiliza se encuentran en otro ámbito en el momento de su ejecución, JavaScript guardó una referencia al valor de las mismas y por lo tanto siempre están accesibles para la función. Podríamos decir que este es el secreto o la magia de los closures.
Comportamiento

Para terminar de captar el concepto veamos ahora una serie de comportamientos o características que tienen los closures y que tendremos que tener siempre presentes cuando trabajamos con esta potente herramienta del lenguaje JavaScript.

Cómo se crean los closures

Cuando el intérprete de JavaScript encuentra un closure guarda las variables locales que las funciones internas van a necesitar. Esto ya lo hemos comentado, pero... ¿cómo acceden las funciones a estas variables? Veamos algunos apuntes sobre esto:

Cuando una variable local se almacena en memoria, si ésta cambia a lo largo de la función externa, en memoria se almacenará el último valor asignado al salir de la función externa.
Cada función interna guarda una referencia a la posición de memoria donde se almacena la variable, pudiendo acceder a su valor.

La idea principal es que el valor de la variable puede ser modificada a lo largo del código y que las funciones internas guardan una referencia a la memoria donde se encuentra el último valor de la variable que fue asignada al salir de la función externa.
*/


//Definir o modificar la variable después de la función interna
function personalizedGreet(name)
{
    var greet = function () { return hello + name; };
    var hello = "Hello ";
    return greet;
}

var greeting = personalizedGreet("Oscar");
alert(greeting());


function constIncrease(amount)
{
    var ten = 10;
    var codeFunc = function () { console.log(ten); };
    ten += amount;
    return codeFunc;
}

//En otra parte del código...
var execute = constIncrease(5);
execute();


//Cada llamada es un closure distinto

//Visto lo anterior podría pensarse que el closure es un elemento global que persiste entre llamadas. No es así, por cada llamada que hagamos a la función externa estaremos creando un nuevo e individual closure.

function personalizedGreet(name) {

    var hello = "Hello ";

    return function () { console.log(hello + name); };
}

//Creamos dos closures distintos

var greet1 = personalizedGreet("Pedro");
var greet2 = personalizedGreet("María");

greet1();
greet2();

//Cuando tenemos varias funciones internas

var gExecute1 = null;
var gExecute2 = null;
var gExecute3 = null;

function createClosure()
{
    var num = 10;
    gExecute1 = function () { alert(num); };

    gExecute2 = function () { alert(++num); };

    gClosure3 = function () { alert(num = "¡¡Toma ya!!!"); };
}

createClosure();
gExecute1();
gExecute2();
gExecute3();
gExecute1();

//MUL FUNCTION

function mul (x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        };
    };
}

/*
Here the mul function accepts the first argument and returns an anonymous function, which takes the second parameter and returns another anonymous function that will take the third parameter and return the multiplication of the arguments that have been passed.

In JavaScript, a function defined inside another one has access to the outer function's variables. Therefore, a function is a first-class object that can be returned by other functions as well and be passed as an argument in another function.

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
A function can be stored as a variable
A function can be pass as a parameter to another function
A function can be returned from another function
*/
