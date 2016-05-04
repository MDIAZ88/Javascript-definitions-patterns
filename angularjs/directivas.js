/*
En un nivel alto, las directivas son markups de elementos del DOM (como atributos, nombre de elementos, comentarios o clases CSS)
que le dicen al compiler del HTML de angular ($compiler) que agregue un comportamiento especifico a los elementos del DOM o tb transformar los elementos del DOM y sus hijos.
*/
angular
   .module('myApp')
   .directive('myDirective', myDirective);

myDirective.$inject = ['$scope'];

function myDirective($scope) {
   return {
     restrict: 'E',
     scope: { name: '@' },
     templateUrl: 'template.html'
   };
}
