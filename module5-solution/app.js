angular.module('RestaurantApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Welcome to our Restaurant</h1>'
      })
      .when('/signup', {
        templateUrl: 'signup.html',
        controller: 'SignUpController as signUpCtrl'
      })
      .when('/myinfo', {
        templateUrl: 'myinfo.html',
        controller: 'MyInfoController as myInfoCtrl'
      })
      .otherwise('/');
  }])
  .controller('MainController', ['$location', function($location) {
    var main = this;

    main.showSignUp = function() {
      $location.path('/signup');
    };

    main.showMyInfo = function() {
      $location.path('/myinfo');
    };
  }])
  .controller('SignUpController', ['$http', function($http) {
    var signUpCtrl = this;

    signUpCtrl.submitForm = function() {
      // Implement form submission and validation here
      // Save user's preference using a service
    };
  }])
  .controller('MyInfoController', ['$http', function($http) {
    var myInfoCtrl = this;

    myInfoCtrl.userInfo = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      favoriteDish: 'L1'
    };

    // Retrieve favorite dish using $http
  }]);
