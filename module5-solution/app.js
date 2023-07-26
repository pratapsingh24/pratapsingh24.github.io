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
  .controller('SignUpController', ['$http', 'MenuDataService', function($http, MenuDataService) {
    var signUpCtrl = this;

    signUpCtrl.form = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      favoriteDish: ''
    };

    signUpCtrl.dishExists = true;

    signUpCtrl.submitForm = function() {
      // Form validation
      if (signUpCtrl.signupForm.$invalid) {
        return;
      }

      // Check if the favorite dish exists
      MenuDataService.getMenuItem(signUpCtrl.form.favoriteDish)
        .then(function(response) {
          if (response === null) {
            signUpCtrl.dishExists = false;
          } else {
            signUpCtrl.dishExists = true;
            // Save user's preference
            // Here you can use a service to save the data, but for simplicity, we'll just log the form data
            console.log(signUpCtrl.form);
          }
        });
    };
  }])
  .controller('MyInfoController', ['MenuDataService', function(MenuDataService) {
    var myInfoCtrl = this;

    myInfoCtrl.userInfo = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      favoriteDish: 'L1'
    };

    // Retrieve favorite dish using the MenuDataService
    MenuDataService.getMenuItem(myInfoCtrl.userInfo.favoriteDish)
      .then(function(response) {
        if (response !== null) {
          myInfoCtrl.favoriteDish = response;
        }
      });
  }])
  .service('MenuDataService', ['$http', function($http) {
    var service = this;

    service.getMenuItem = function(menuNumber) {
      return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + menuNumber + '.json')
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          // Handle error if necessary
          console.log('Error fetching menu item:', error);
          return null;
        });
    };
  }]);
