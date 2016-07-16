var app = angular.module('angularRestfulAuth', ['ngRoute']);

app.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider
			.when('/', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl'
			})
      .when('/questions',{
        templateUtrl:'partials/questions.html',
        controller : 'HomeCtrl'
        })
			.otherwise({
				redirectTo : '/'
			});
		}
	]);
