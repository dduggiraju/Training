'use strict';

/**
 * @ngdoc service
 * @name stockManApp.CompanyService
 * @description
 * # CompanyService
 * Service in the stockManApp.
 */
angular.module('stockManApp')
  .service('CompanyService', function CompanyService($resource) {
    return $resource('companies.json');
  });
