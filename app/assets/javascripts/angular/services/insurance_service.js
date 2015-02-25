var MyApp = angular.module("MyApp");

MyApp.factory("Insurance", ["$resource", function($resource){

	return $resource("/insurances/:id.json", {}, {
		update: {method: "PUT", params: {id: "@id"}}
	});
	
}]);