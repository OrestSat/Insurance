var MyApp = angular.module("MyApp",['ngResource', 'ngRoute', 'Devise', 'ui.router']);

// MyApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
// 	$routeProvider.
// 		when("/home", {
// 			templateUrl: "assets/main/main.html",
// 			controller: "UserController"
// 		}).
// 		when("/login", {
// 			templateUrl: "assets/auth/login.html",
// 			controller: "AuthController"
// 		}).
// 		when("/register", {
// 			templateUrl: "assets/auth/registration.html",
// 			controller: "AuthController"
// 		}).
// 		when("/new_client", {
// 			templateUrl: "assets/client/new_client.html",
// 			controller: "ClientController"
// 		}).
// 		otherwise({
// 			redirectTo: "/home"
// 		});
// }]);

MyApp.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){
	
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	  .state('home', {
	      url: "/home",
	      views: {
	      	"": {templateUrl: "assets/main/main.html"},
	      	"insuranceList@home": {
	      		templateUrl: "assets/insurance/insurances_list.html",
	      		controller: "InsuranceController"
	      	},
          "mainContent@home": {
          	templateUrl: "assets/client/clients_list.html",
          	controller: "ClientController"
          }
        }
	  })
	  .state('home.insurance', {
	  	url: "/insurance/:insurance_id",
	  	views: {
	  		"mainContent": {
	  			templateUrl: "assets/insurance/show_insurance.html",
	  			controller: "InsuranceController"
	  		}
	  	}
	  })
	    
	  .state('login', {
	      url: "/login",
	      templateUrl: "assets/auth/login.html",
	      controller: "AuthController"
	  })

	  .state('register', {
	        url: "/register",
	        templateUrl: "assets/auth/registration.html",
	        controller: "AuthController"
	    })

	  .state('new_client', {
	        url: "/new_client",
	        templateUrl: "assets/client/new_client.html",
	        controller: "ClientController"
	    });

}]);
MyApp.run(['$state', function ($state) {
	console.log("RUN");
   $state.go('home')
}])