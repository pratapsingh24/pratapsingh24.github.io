(function () {
    'use strict';
  
    angular.module('MenuApp.data')
      .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
      var service = this;
  
      service.getAllCategories = function () {
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
        });
      };
  
      service.getItemsForCategory = function (categoryShortName) {
        return $http({
          method: 'GET',
          url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
        });
      };
    }
  })();
  