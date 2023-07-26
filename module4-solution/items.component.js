(function () {
    'use strict';
  
    angular.module('MenuApp')
      .component('items', {
        templateUrl: 'items.html',
        controller: ItemsController,
        bindings: {
          categoryShortName: '<'
        }
      });
  
    ItemsController.$inject = ['MenuDataService'];
    function ItemsController(MenuDataService) {
      var $ctrl = this;
  
      $ctrl.items = [];
  
      $ctrl.$onInit = function () {
        MenuDataService.getItemsForCategory($ctrl.categoryShortName).then(function (items) {
          $ctrl.items = items;
        });
      };
    }
  })();
  