'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
      console.log(scope, 'appversion');
    };
  }])
  .directive("clickMe", function($rootScope){
  	return function(scope, elem, attrs){
  		elem.bind("click", function(){
  			if (elem.hasClass("background-green"))
  				elem.removeClass("background-green");	
  			else 
  				elem.addClass("background-green");
  		});
  		console.log($rootScope, "rootscope");
  		console.log(scope, 'scope');
  		console.log(attrs, 'attrs');
  	};

  });
