/*
El patron mixin es una clase que ofrece funcionalidades (funciones) que
facilmente pueden ser heredadas por una subclase con el proposito
de la reutilizacion.
*/

 /***MIXIN OBJECT***/

 var Social={
 	share:function(person){
 		console.log("Sharing"+" "+this.attributes['title']+" with"+" "+person);
 	},
 	like:function(){
        console.log("I like this movie. . . ");
    }
 };


 $.extend(true,Movie.prototype,Social);
