var MyApp = angular.module("MyApp");

MyApp.controller("UserController", [
	"$scope",
	"$location",
	"UserFactory",
	"UsersFactory",
	function($scope, $location, UserFactory, UsersFactory){
		
		$scope.indexUsers = function(){
			UsersFactory.query({}, function(data){
				$scope.users = data;
			}, function(error){
				console.log(error);
			});
		};

		$scope.changeUserRole = function(user, newRole){
			user.role = newRole;
			UserFactory.update({id: user.id, role: user.role},function(data){
				console.log(data);
			}, function(error){
				console.log(error);
			});
		};

		$scope.changeUserStatus = function(user, status){
			user.status = status;
			UserFactory.update({id: user.id, status: user.status}, function(data){
				console.log(data);
			}, function(error){
				console.log(error);
			});
		};

		// $scope.myClients = function(){
		// 	MyClientFactory.query({}, function(data){
		// 		$scope.my_Clients = data;
		// 		console.log($scope.my_Clients[0].name);
		// 	}, function(error){
		// 		console.log(error);
		// 	});
		// }

		// $scope.deleteClient = function(client){
		// 	if (confirm("Ви впевнені?")){
		// 		ClientFactory.delete({id: client.id}, function(){
		// 			$scope.indexClients();
		// 		});
		// 	}
		// };

		// $scope.createClient = function(){
		// 	ClientsFactory.create({client: $scope.newClient}, function(data){
		// 		$location.path("/home");
		// 	}, function(error){
		// 		console.log(error);
		// 	});
		// };

		// $scope.showClient = function(client){
		// 	$location.path("clients/" + client.id);
		// };

		$scope.indexUsers();

}]);