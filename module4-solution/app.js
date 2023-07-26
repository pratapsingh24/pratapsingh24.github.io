(function () {
    'use strict';
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      // Redirect to home if no other URL matches
      $urlRouterProvider.otherwise('/');
  
      // Set up the UI states
      $stateProvider
        .state('home', {
          url: '/',
          template: '<h1>Welcome to our Restaurant</h1>'
        })
        .state('categories', {
          url: '/categories',
          templateUrl: 'path/to/categories.template.html',
          controller: 'CategoriesController as categoriesCtrl',
          resolve: {
            categoriesList: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories()
                .then(function (response) {
                  return response.data;
                });
            }]
          }
        })
        .state('items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'path/to/items.template.html',
          controller: 'ItemsController as itemsCtrl',
          resolve: {
            itemsList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                .then(function (response) {
                  return response.data.menu_items;
                });
            }]
          }
        });
    }
  })();
  