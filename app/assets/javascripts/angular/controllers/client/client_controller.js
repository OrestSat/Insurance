var MyApp = angular.module("MyApp");

MyApp.controller("ClientController", ["$scope",	"$location", "$http","ClientFactory",	"ClientsFactory",	"MyClientFactory", function($scope, $location, $http, ClientFactory, ClientsFactory, MyClientFactory){

		$scope.indexClients = function(){
			ClientsFactory.query({}, function(data){
				$scope.allClients = data;
				console.log("ANGULAR INDEX");
				console.log($scope.allClients);
			}, function(error){
				console.log(error);
			});
		};

		$scope.myClients = function(){
			MyClientFactory.query({}, function(data){
				$scope.myClients = data;
				console.log("ANGULAR MYCLIENTS");
				console.log($scope.myClients);
			}, function(error){
				console.log(error);
			});
		};

		$scope.deleteClient = function(client){
			if (confirm("Ви впевнені?")){
				ClientFactory.delete({id: client.id}, function(){
					$scope.indexClients();
					$scope.myClients();
				});
			}
		};

		$scope.createClient = function(){
			ClientsFactory.create({client: $scope.newClient}, function(data){
				$location.path("/home");
			}, function(error){
				console.log(error);
			});
		};

		$scope.showClient = function(client){
			$location.path("clients/" + client.id);
		};

		$scope.getClientsOwner = function(id)
		{
			$http.get('/user/' + id + '.json').
			success(function(data, status, headers, config) {
				console.log(data);
			}).
			error(function(data, status, headers, config) {
				console.log(data);
			});
		}

		$scope.myClients();
		$scope.indexClients();
		$scope.showAllClients = "1";
}]);