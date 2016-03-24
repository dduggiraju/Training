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
            loggedIn: localStorage.getItem('username') ? true: false ,
            name: localStorage.getItem('username')
        };
        // user.loadFromServer = function () {
        //     $timeout(function () {
        //        var uname = localStorage.getItem('username'); 
        //        if(uname)
        //        {
        //            user.name = uname;
        //        }
        //     }, 500);
        // };
        user.login = function (username, password) {
            $timeout(function () {
                // if(password === '')
                user.loggedIn = true;
                user.name = username;
               
                localStorage.setItem('username', username);
            }, 500)
        };
        user.logout = function () {
             user.loggedIn = false;
             user.name = undefined;
              user.password = undefined;
             localStorage.removeItem('username');
        };

        return user;
    });
