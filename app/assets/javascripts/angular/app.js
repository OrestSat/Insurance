var MyApp = angular.module("MyApp",['ngResource', 'ngRoute', 'Devise']);

MyApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
	$routeProvider.
		when("/home", {
			templateUrl: "assets/main/main.html",
			controller: "MainController"
		}).
		when("/login", {
			templateUrl: "assets/auth/login.html",
			controller: "AuthController"
		}).
		when("/register", {
			templateUrl: "assets/auth/registration.html",
			controller: "AuthController"
		}).
		otherwise({
			redirectTo: "/home"
		});
}]);
MyApp.constant("MY_CONST", {
	"TIMEOUT": 2000,
  "INTERVAL": 5000,
  "ACTION_UPDATE": "update",
});
