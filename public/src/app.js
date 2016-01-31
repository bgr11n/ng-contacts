angular.module('ContactsApp', [
    'ngRoute'
  ]).
  config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/contacts', {
      controller: 'ListCtrl',
      templateUrl: 'views/list.html'
    });
    $locationProvider.html5Mode(true);
  });
