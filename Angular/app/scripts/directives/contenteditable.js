'use strict';
var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;

angular.module('stockManApp')
    .directive('contenteditable', function ($sce) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, $element, $attrs, ngModelCtrl) {
                if (!ngModelCtrl) { return; } // do nothing if no model
                // specify how UI is to be updated 
                ngModelCtrl.$render = function () {
                    $element.html($sce.getTrustedHTML(ngModelCtrl.$viewValue || ''));
                };
                
                //Read HTML value then write data to the model or reset the view 
                var read = function () {
                    var value = $element.html();
                    if ($attrs.type === 'number' && !NUMBER_REGEXP.test(value)) {
                        ngModelCtrl.$render();
                    } else {
                        ngModelCtrl.$setViewValue(value);
                    }
                };
                
                // Add custom parser based input type 
                //Applied to $modelValue
                
                if ($attrs.type === 'number') {
                   ngModelCtrl.$parse.push(function (value) {
                      return parseFloat(value); 
                   });
                }
            }
        };
    });
