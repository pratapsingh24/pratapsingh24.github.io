(function () {
    'use strict';
  
    angular.module('MenuApp', ['data', 'ui.router'])
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
  
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
  
      // Set up UI states
      $stateProvider
  
        // Home page
        .state('home', {
          url: '/',
          template: '<h1>Welcome to our Restaurant</h1>'
        })
  
        // Categories list page
        .state('categories', {
          url: '/categories',
          template: '<categories></categories>'
        })
  
        // Items list page
        .state('items', {
          url: '/items/{categoryShortName}',
          template: '<items></items>'
        });
    }
  })();
  