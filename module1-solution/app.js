(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.checkIfTooMuch = function () {
        if (!$scope.lunchItems || $scope.lunchItems.trim() === '') {
          $scope.message = 'Please enter data first';
          $scope.tooMuch = false;
        } else {
          var lunchItemsList = $scope.lunchItems.split(',').filter(item => item.trim() !== '');
          if (lunchItemsList.length <= 3) {
            $scope.message = 'Enjoy!';
            $scope.tooMuch = false;
          } else {
            $scope.message = 'Too much!';
            $scope.tooMuch = true;
          }
        }
      };
    }
  })();
  