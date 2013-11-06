'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
      // console.log(scope, 'appversion');
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
  		// console.log($rootScope, "rootscope");
  		// console.log(scope, 'scope');
  		// console.log(attrs, 'attrs');
  	};

  })
  .directive("dlBlock", function(){
  	return {
  		restrict: "E",
  		replace: true,
  		scope: {
        localName: "=myAttr"
      },
  		template: "<div>{{localName}}</div>",
      controller: function($scope, $element, $attrs){
        console.log($scope.localName, 'text in controller');
      },
  		link: function(scope, elem){
  			console.log(scope, 'scope in dlBlock');
  			console.log(elem, 'elem in dlBlock');
        console.log(scope.localName, "text in link function");
  		}
  	};
  })
  .directive('sampleZero', function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 0,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      // templateUrl: '',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      // link: function($scope, iElm, iAttrs, controller) {
      //   console.log('sample zero');
      // }
    };
  });