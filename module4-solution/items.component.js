(function () {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'path/to/items.template.html',
      controller: ItemsController,
      bindings: {
        itemsList: '<'
      }
    });

  function ItemsController() {
    // Controller logic here
  }
})();
