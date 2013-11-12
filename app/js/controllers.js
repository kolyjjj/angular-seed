'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	console.log($scope, 'scope in controller');
  	$scope.test = function(a){
  		return "Hello" + a;
  	};
  	$scope.inputModel = "hello world.";
  }])
  .controller('MyCtrl2', [function() {
  }]);