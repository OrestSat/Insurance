var MyApp = angular.module("MyApp");

MyApp.controller("UserController", [
	"$scope",
	"$location",
	"User",
	function($scope, $location, User){
		
		$scope.indexUsers = function(){
			User.query(function(data){
				$scope.users = data;
			}, function(error){
				console.log(error);
			});
		};

		$scope.changeUserRole = function(user, newRole){
			user.role = newRole;
			User.update({id: user.id, role: user.role}, function(data){
				console.log(data);
			}, function(error){
				console.log(error);
			});
		};

		$scope.changeUserStatus = function(user, status){
			user.status = status;
			User.update({id: user.id, status: user.status}, function(data){
				console.log(data);
			}, function(error){
				console.log(error);
			});
		};

		$scope.roles = [{
			id: 0,
        	name: "client"    
    	}, {
        	id: 1,
        	name: "user"        
    	}, {
        	id: 2,
        	name: "admin"        
    	}];
    	$scope.selected_status = 3;

		$scope.indexUsers();
}]);