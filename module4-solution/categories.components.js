(function () {
    'use strict';
  
    angular.module('MenuApp')
      .component('categories', {
        templateUrl: 'categories.html',
        controller: CategoriesController
      });
  
    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
      var $ctrl = this;
  
      $ctrl.categories = [];
  
      $ctrl.$onInit = function () {
        MenuDataService.getAllCategories().then(function (categories) {
          $ctrl.categories = categories;
        });
      };
    }
  })();
  