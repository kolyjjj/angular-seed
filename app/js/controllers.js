'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	console.log($scope, 'scope in controller');
  	$scope.test = function(){
  		return "Hello";
  	};
  }])
  .controller('MyCtrl2', [function() {
  }]);