var app = angular.module('angularRestfulAuth', ['ngRoute',
    'angularUtils.directives.dirPagination']);

app.config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider
			.when('/', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl'
			})
			.when('/signin', {
				templateUrl : 'partials/signin.html',
				controller : 'HomeCtrl'
			})
			.when('/signup', {
				templateUrl : 'partials/signup.html',
				controller : 'HomeCtrl'
			})
			.when('/questions', {
				templateUrl : 'partials/questions.html',
				controller : 'HomeCtrl'
			})
			.otherwise({
				redirectTo : '/'
			});
		}
	]);
