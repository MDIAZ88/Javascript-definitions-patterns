//JavaScript Declarations are Hoisted
//En js una variable puede ser declarada despues de que fue usada.
//En otras palabras una variable puede ser usada antes de ser declarada.
//JavaScript solo hace el  hoist de las declaraciones, no de la inicializaciones.

x = 5;

elem = document.getElementById("demo");
elem.innerHTML = x;

var x; 
