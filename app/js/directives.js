'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive("clickMe", function(){
  	return function(scope, elem, attrs){
  		elem.bind("click", function(){
  			if (elem.hasClass("background-green"))
  				elem.removeClass("background-green");	
  			else 
  				elem.addClass("background-green");
  		})
  	};
  });
