/*
DEFINICION DE PATRON:

UN PATRON ES UNA SOLUCION REUSABLE QUE PUEDE SER APLICADA A PROBLEMAS
DE DISEÑO DE SOFTWARE,(EN ESTE CASO EN ESCRIBIR APLICACIONES EN JS),
QUE OCURREN COMUNMENTE.
OTRA FORMA DE MIRAR A LOS PATRONES ES COMO TEMPLATES PARA
NUESTRA FORMA DE RESOLVER PROBLEMAS.
PUEDEN SER USADOS EN DIFERENTES SITUACIONES.

BENEFITS:

	1) LOS PATRONES SON SOLUCIONES PROVADAS
	2) LOS PATRONES PUEDEN SER REUSADOS FACILMENTE
	3) LOS PATRONES SON EXPRESIVOS

LOS PATRONES NO SON SOLUCIONES EXACTAS. ES IMPORTANTE RECORDAR
QUE LOS PATRONES SOLO NOS PROVEEN DE UN ESQUEMA DE SOLUCION.
LOS PATRONES NO RESUELVEN TODOS LOS PROBLEMAS DE DISEÑO.

LOS ANTI-PATRONES:

	1) DESCRIBEN UNA MALA SOLUCION A UN PROBLEMA EN PARTICULAR
	2) DESCRIBEN COMO SALIR DE UNA MALA SITUACION E IR HACIA UNA
	   BUENA SOLUCION.
*/


/*
Hay tres formas de crear un objeto

el objeto Object nos facilita metodos para manipular objetos
como por ejemplo Object.defineProperty();
*/
var newObject={};

var newObject=Object.create(Object.prototype);

var newObject=new Object();

//EJEMPLO DE CREACION DE OBJETOS

var pintura1={};

Object.defineProperty(pintura1,'autor',{value:'marcos',writable:true, enumerable:true, configurable:true});

console.log("el autor de la pintura 2 es:"+pintura1.autor);

//FORMAS DE ASIGNAR PROPIEDADES Y VALORES A LOS OBJETOS

//forma numero 1 - DOT SYNTAX
newObject.autor="marcos";
var value=newObject.autor;

//forma numero 2 - SQUARE BRACKET SYNTAX
newObject["autor"]="marcos";
var value=newObject["autor"];

//forma numero 3 - DEFINE PROPERTY

Object.defineProperty(newObject,'autor',{value:'marcos',writable:true, enumerable:true, configurable:true});

//forma numero 4 - DEFINE PROPERTIES

Object.defineProperties(newObject,{
	"someKey":{
		value:"marcos",
		writable:true
	},
	"anotherKey":{
		value:"test",
		writable:false
	}
});
/*
los CONSTRUCTORES se usan para crear tipos especificos de objetos

en javascript no se considera el concepto de clase,
pero soportan funciones especiales que realizan la funcion de constructor

con el solo hecho de usar la palabra new podemos indicar en js
que la funcion se comportara como un constructor.

LA PALABRA CLAVE THIS HACE REFERENCIA AL NUEVO OBJETO QUE A SIDO CREADO
*/

function Car(model,year,kms){
	this.model=model;
	this.year=year;
	this.kms=kms;

	this.toString=function(){
		return this.modelo+" ha realizado "+this.kms+" Kilometros";
	};
}


var ford=new Car("fiesta",2015,35000);
var fiat=new Car("palio",2013,5236);

/*
PROTOTIPO.

se recomienda usar la propiedad llamada prototype

cuando llamamos a un constructor javascript para crear un objeto, todas las
propiedades del prototipo del constructor estan disponibles
para el nuevo objeto

de esta forma multiples objetos pueden ser creados y acceder
al mismo prototipo

un prototipo es un objeto del cual otros objetos heredan propiedades

todos los objetos tienen un prototipo por defecto
*/

function Car(model,year,kms){
	this.model=model;
	this.year=year;
	this.kms=kms;
}

Car.prototype.toString=function(){
		return this.modelo+" ha realizado "+this.kms+" Kilometros";
};

var ford=new Car("fiesta",2015,35000);
var fiat=new Car("palio",2013,5236);


/*lo que me permite el prototipo tb es que las propiedades
no ocupen un lugar en memoria cada ves que se crea un nuevo objeto*/

/*
HERENCIA BASADA EN PROTOTIPOS

La idea de la herencia basada en prototipos JavaScript es definir un objeto
(el objeto “padre” o prototipo) donde se aloja toda la información común que
comparten todos los objetos de ese tipo (los objetos “hijos”).
De esta manera se evita que cada objeto repita las propiedades y métodos comunes,
lo cual ahorra memoria y agiliza la ejecución.

DEFINIR PROTOTIPOS

En JavaScript el prototipo de un objeto está definido de forma predeterminada
como una “propiedad oculta” de todo objeto, a la que podemos acceder
con la sintaxis: nombreObjeto.prototype. El prototipo es a su vez un objeto
(recuerda que una propiedad puede ser tanto un tipo primitivo como un objeto)
y por tanto a dicho objeto se le pueden añadir propiedades y métodos.

Dado que JavaScript ofrece numerosas alternativas para trabajar con objetos,
propiedades y métodos, existen numerosas alternativas para definir el prototipo
de un objeto.

Alternativa 1: definir propiedades y métodos con la notación de punto:*/

function nombreObjeto (par1, par2, parN) {
	this.propiedad1 = valorPropiedad1;
	this.propiedad2 = valorPropiedad2;
}
nombreObjeto.prototype.propiedadComún1 = valorPropieadadComún1;
nombreObjeto.prototype.propiedadComún2 = valorPropieadadComún2;
nombreObjeto.prototype.métodoComún1 	 = function (par1, par2) { };
nombreObjeto.prototype.métodoComún2 	 = function (par1, par2) { };

/*
Alternativa 2: definir un objeto y convertir una instancia
de dicho objeto en prototipo:*/

function nombreObjeto (par1, par2, parN) {
	this.propiedad1 = valorPropiedad1;
	this.propiedad2 = valorPropiedad2;
}
function objetoDestinadoASerPrototipo (par1, par2) {

}
nombreObjeto.prototype = new objetoDestinadoASerPrototipo();

/*
Alternativa 3: definir un objeto y asignarle contenido a su propiedad prototype
creando un objeto único con la sintaxis de literal
(propiedades enumeradas con dos puntos y separadas por comas):
*/
function nombreObjeto (par1, par2, parN) {
	this.propiedad1 = valorPropiedad1;
	this.propiedad2 = valorPropiedad2;
}
nombreObjeto.prototype = {
	propiedadComún1: valorPropiedadComún1,
	propiedadComún2: valorPropiedadComún2,
	métodoComún1: function (par1, par2, parN) {

	},
	métodoComún2: function (par1, par2, parN) {

	}
};
