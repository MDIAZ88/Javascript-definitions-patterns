//JavaScript Declarations are Hoisted
//En js una variable puede ser declarada despues de que fue usada.
//En otras palabras una variable puede ser usada antes de ser declarada.
//JavaScript solo hace el  hoist de las declaraciones, no de la inicializaciones.
//In JavaScript, every variable or function declaration you bring to the top of its current scope is called hoisting.
//JavaScript interpreter looks ahead to find all variable declarations and then hoists them to the top of the function where they're declared.
x = 5;

elem = document.getElementById("demo");
elem.innerHTML = x;

var x;
