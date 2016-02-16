'use strict';

/**
 * @ngdoc directive
 * @name stockManApp.directive:stkStockRow
 * @description
 * # stkStockRow
 */
angular.module('stockManApp')
  .directive('stkStockRow', function ($timeout, QuoteService) {
    return {
      //[1] Use as element attribute 
      restrict: 'A',
      require: '^stkStockTable',
      scope:{
        stock: '=',
        isLast: '='  
      },
      link: function ($scope, $element, $attrs, stockTableCtrl) {
       //[3] create tooltip for stock-row
       $element.tooltip ({
           placement: 'left',
           title: $scope.stock.company.name
       });
       //[4] Add this row ro TableCtrl
       stockTableCtrl.addRow($scope);
       //[5] Register this stock with the QuoteService 
       QuoteService.register($scope.stock);
       //[6] Deregister company with QS on $destroy
       $scope.$on('$destroy', function () {
           stockTableCtrl.removeRow($scope);
           QuoteService.deregister($scope.stock);
       });
       //If this is the last stock row , fetch quotes immediatly
       if($scope.isLast){
           $timeout(QuoteService.fetch);
       }
       //Watch for changes in shares and recalc fields
       $scope.$watch('stock.shares', function () {
           $scope.stock.marketValue = $scope.stock.shares * $scope.stock.lastPrice;
           $scope.stock.dayChange = $scope.stock.shares * parseFloat($scope.stock.change);
           $scope.stock.save();
       });
      }
    };
  });
