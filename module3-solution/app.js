(function () {
    'use strict';
  
    angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService)
      .directive('foundItems', FoundItemsDirective);
  
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var narrow = this;
      narrow.searchTerm = '';
      narrow.foundItems = [];
  
      narrow.narrowItDown = function () {
        if (narrow.searchTerm.trim() === '') {
          narrow.foundItems = [];
        } else {
          MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
            .then(function (foundItems) {
              narrow.foundItems = foundItems;
            });
        }
      };
  
      narrow.removeItem = function (index) {
        narrow.foundItems.splice(index, 1);
      };
    }
  
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
      var service = this;
  
      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json'
        }).then(function (response) {
          var menuItems = response.data;
          var foundItems = [];
  
          for (var i in menuItems) {
            if (menuItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
              foundItems.push(menuItems[i]);
            }
          }
  
          return foundItems;
        });
      };
    }
  
    function FoundItemsDirective() {
      var ddo = {
        restrict: 'E',
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'found',
        bindToController: true
      };
  
      return ddo;
    }
  
    function FoundItemsDirectiveController() {
      var found = this;
    }
  
  })();
  