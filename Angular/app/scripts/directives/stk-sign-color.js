'use strict';

/**
 * @ngdoc directive
 * @name stockManApp.directive:stkSignColor
 * @description
 * # stkSignColor
 */
angular.module('stockManApp')
  .directive('stkSignColor', function () {
    return {
      restrict: 'A',
      link: function postLink($scope, $element, $attrs) {
       //use$observe to watch expression for changes 
       $attrs.$observe('stkSignColor', function (newVal) {
           var newSign = parseFloat(newVal);
           // Set eleemnt's style.color value depending on a sign 
           if(newSign > 0 ){
               $element[0].style.color = 'Green';
           }else{
               $element[0].style.color = 'Red';
           }
       });
      }
    };
  });
