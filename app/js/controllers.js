'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	console.log($scope, 'scope in controller');
  	$scope.test = "test";
  }])
  .controller('MyCtrl2', [function() {
  }]);