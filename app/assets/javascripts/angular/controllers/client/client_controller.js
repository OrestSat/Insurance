var MyApp = angular.module("MyApp");

MyApp.controller("ClientController", ["$scope",	"$location", "ClientFactory",	"ClientsFactory",	function($scope, $location, ClientFactory, ClientsFactory){
		
		$scope.indexClients = function(){
			ClientsFactory.query({}, function(data){
				$scope.clients = data;
			}, function(error){
				console.log(error);
			});
		};

		$scope.deleteClient = function(client){
			if (confirm("Ви впевнені?")){
				ClientFactory.delete({id: client.id}, function(){
					$scope.indexClients();
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

		$scope.indexClients();

}]);