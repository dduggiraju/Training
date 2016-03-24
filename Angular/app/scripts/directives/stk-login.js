'use strict';

/**
 * @ngdoc directive
 * @name stockManApp.directive:stkLogin
 * @description
 * # stkLogin
 */
angular.module('stockManApp')
  .directive('stkLogin', function (LoginService) {
    return {
      templateUrl: 'views/Templates/login.html',
      restrict: 'E',
      controller: function ($scope, LoginService) {
          $scope.user = LoginService;
      },  
          link: function postLink($scope, $element, $attrs) {
      }
    };
  });
