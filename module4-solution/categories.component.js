(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'path/to/categories.template.html',
      controller: CategoriesController,
      bindings: {
        categoriesList: '<'
      }
    });

  function CategoriesController() {
    // Controller logic here
  }
})();
