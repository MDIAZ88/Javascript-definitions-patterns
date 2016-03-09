/*
Es el patron mas usado y elegante a la hora de usar codigo

es tomado como punto de partida de grandes arquitecturas

es muy util para conseguir codigo reusable, y sobre todo modular

SE TRATA DE UNA FUNCION QUE
ACTUA COMO CONTENEDOR PARA UN CONTEXTO EN EJECUCION

esto quiere decir que dentro de el se declaran una serie
de variables(propiedades) y funciones(metodos) que son visibles desde
dentro del mismo.


el patron modulo esta basado en parte en los objetos
literales

el patron modulo es usado para emular el concepto de clases
de una manera que sea posible incluir  variables y metodos
publicos y privados dentro de un solo objeto
*/

//REPASO DE OBJETOS literales
/*
los objetos literales no necesitan ser instanciados con la palabra new
*/
var myObjectLiteral={
	variableKey1: variableValue,
	functionKey: function(){
		console.log("I´m an object literal");
	}
};

//MODULO USANDO OBJETOS LITERALES

var myModuleOL={

	myPropertie:"someValue",

	myConfig:{
		useCaching:true,
		language:"en"
	},

	saySomething: function(){
		console.log("hello");
	},

	reportMyConfig:function(){
		console.log("caching is"+( this.myConfig.useCaching ? "enabled" : "disabled"));
	},

	updateMyConfig:function(newConfig){
		if(typeof newConfig==="object"){
			this.myConfig=newConfig;
			console.log(this.myConfig.language);
		}
	}

};

myModuleOL.saySomething();
myModuleOL.reportMyConfig();
myModuleOL.updateMyConfig({useCaching:false,language:"fr"});
myModuleOL.reportMyConfig();

// MODULO USANDO NAMESPACE
/*
lo que tenemos que e ntender primero

FUNCIONES AUTOEJECUTABLES:
Estas funciones tiene la cualidad de que una vez declaradas, se llaman a sí
mismas para inicializarse pasando desde ese momento a estar disponibles para
otras partes de la aplicación.
Los paréntesis exteriores, como en una operación matématica, ‘encierran’ el
contenido. El segundo juego de paréntesis asume que el interior de los
anteriores es una función y la ejecuta inmediatamente.
Sin embargo, para flexibilizar la estructura, en lugar de hacer referencia a una
función existente, construímos una anónima.
Con esto conseguimos crear una función, ejecutarla y
luego desecharla: realmente lo interesante es que enlazamos el objeto devuelto
al contexto global, no la función en sí misma. Con esto, sus propiedades
y métodos tienen acceso al resto de variables globales dándole una gran
flexibilidad y alcance al esquema.
*/

(function () {
  console.log(" Immediately-Invoked-Function-Expressions's");
})();

/*
PARAMETROS
Un aspecto interesante de esta estructura es que admite parámetros a través de
su segundo juego de paréntesis. Esta cualidad, por ejemplo, ha sido explotada
por librerías como jQuery para un mantener un control preciso del contexto en el
que se ejecutan.
*/
(function( param1, param2 ){
  console.log( param1 ); // Hello World
})( 'Hello World' );

/*
PATRONES DE DISEÑO QUE LA UTILIZAN

*MODULO.
*SINGLETON.
*FABRICA (Factory).

Se busca que la función invocada devuelva un objeto que represente la interfaz
pública para un determinado bloque de código. Básicamente la idea es distinguir
entre métodos públicos y privados buscando un comportamiento similar a las
clases de aquellos lenguajes orientados a objetos más tradicionales.
*/

/***MOVIE CLASS AS MODULE***/
var MovieClassModule={};//namespace

MovieClassModule= (function(){

	//private attributes and methods
	var attributes={
		'title':'',
		'director':'',
		'actors':''
	};

	/*los modulos usan el return para retornar un objeto al modelo, cuyos metodos
	asociados al objeto seran accesibles desde el namespace del modulo.*/

	return{
		setTitle:function(attr,value){
			attributes[attr]=value;
		},
		getTitle:function(attr){
			return attributes[attr];
		},
		playMovie:function(){
			console.log(attributes['title']+" "+"is playing. . . ");
		},

		stopMovie:function(){
			console.log(attributes['title']+" "+"Stopped. . . ");
		}
	};
}());

MovieClassModule.setTitle('title','the advengers');
MovieClassModule.getTitle('title');
