var MyApp = angular.module("MyApp");

MyApp.controller("CategoryController", [
	"$scope", 
	"CategoryFactory", 
	"CategoriesFactory", 
	function($scope, CategoryFactory, CategoriesFactory){

	$scope.allCategories = function(){
		CategoriesFactory.query({}, function(data){
			$scope.categories = data;
		}, function(error){
			console.log(error);
		});
	};

	$scope.ability = [];
	$scope.inputCounter = 0;

	$scope.allCategories();

}]);