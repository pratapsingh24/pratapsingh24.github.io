(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['favMenuItem'];
function MyInfoController(favMenuItem) {
  var $ctrl = this;
  this.favMenuItem = favMenuItem;
  console.log(favMenuItem);
}


})();
