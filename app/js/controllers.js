'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  	console.log($scope, 'scope in controller');
  }])
  .controller('MyCtrl2', [function() {
  }]);