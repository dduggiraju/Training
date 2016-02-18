'use strict';

/**
 * @ngdoc directive
 * @name stockManApp.directive:stkSignFade
 * @description
 * # stkSignFade
 */
angular.module('stockManApp')
    .directive('stkSignFade', function ($animate) {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                var oldVal = null;
                //  Use $observe to be notified on the value change
                $attrs.$observe('stkSignFade', function (newVal) {
                    if (oldVal && oldVal == newVal) { return; }
                    var oldPrice = parseFloat(oldVal);
                    var newPrice = parseFloat(newVal);
                    oldVal = newVal;
                    
                    //Adding appropriate direction class and then removing it
                    if(oldPrice && newPrice) {
                        var direction = (newPrice - oldPrice) >= 0 ? 'up' : 'down';


                        $animate.setClass($element, 'change-' + direction);
                      }
                });
            }
        };
    });
