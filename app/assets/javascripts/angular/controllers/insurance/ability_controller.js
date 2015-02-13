var MyApp = angular.module("MyApp");

MyApp.controller("AbilityController", [
	"$scope",
	"$stateParams",
	"AbilitiesFactory",
	"AbilityFactory",
	function($scope, $stateParams, AbilitiesFactory, AbilityFactory){

		$scope.showDetails = false;

		$scope.allAbilities = function(categoryId){
			$scope.showDetails = !$scope.showDetails
			if($scope.showDetails){
				AbilitiesFactory.query({insurance_id: $stateParams.insurance_id, category_id: categoryId}, function(data){
					$scope.abilities = data;
					console.log($scope.abilities);
				}, function(error){
					console.log(error);
				});
			}
		};

}]);