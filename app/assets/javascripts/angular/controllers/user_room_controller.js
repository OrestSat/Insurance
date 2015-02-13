var MyApp = angular.module("MyApp");

MyApp.controller("UserRoomController", ["$scope", "$location", "UserFactory", "UsersFactory", function($scope, $location, UserFactory, UsersFactory) {
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;
	};

	this.isSelected = function(checkTab){
		return (this.tab === checkTab);
	};
}]);
