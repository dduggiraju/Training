'use strict';

/**
 * @ngdoc directive
 * @name stockManApp.directive:stkStockTable
 * @description
 * # stkStockTable
 */
angular.module('stockManApp')
  .directive('stkStockTable', function () {
    return {
      templateUrl: 'views/templates/stock-table.html',
      restrict: 'E',
      //[1] Isolate scope
      scope: {
          wlist: '='
      },
      //[2] create a controller which servves as an API for this directive
      controller: function ($scope) {
          var rows = [];
          $scope.$watch('showPercent', function (showPercent) {
              if (showPercent) {
                  _.each(rows, function(row) {
                      row.showPercent = showPercent;
                  });
              }
          });
          
          this.addRow = function (row) {
              rows.push(row);
          };
          this.removeRow = function(row){
            _.remove(rows, row);  
          };
      },
      // [3] Standard link function implementation
      link: function ($scope) {
         $scope.showPercent = false;
         $scope.removeStock = function (stock) {
             $scope.wlist.removeStock(stock);
         };
      }
    };
  });
