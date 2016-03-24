'use strict';

/**
 * @ngdoc service
 * @name stockManApp.loginService
 * @description
 * # loginService
 * Service in the stockManApp.
 */
angular.module('stockManApp')
    .service('LoginService', function ($timeout) {
        var user = {
            loggedIn: false
        };
        // user.loadFromServer = function () {
        //     $timeout(function () {
        //         user.loggedIn = true;
        //         user.name = 'Username';
        //     }, 500);
        // };
        user.login = function (username, password) {
            $timeout(function () {
                // if(password === '')
                user.loggedIn = true;
                user.name = username;
            }, 500)
        };
        user.logout = function () {
             user.loggedIn = false;
             user.name = undefined;
        };
        return user;
    });
