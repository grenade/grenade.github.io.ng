/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name grenadegithubiongApp
 * @description
 * # grenadegithubiongApp
 *
 * Main module of the application.
 */
var app = angular.module('grenadegithubiongApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.constant('GITHUB_API', 'https://api.github.com');

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
