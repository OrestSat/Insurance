var MyApp = angular.module("MyApp");

MyApp.factory("CategoriesFactory", ["$resource", function($resource){
	return $resource("/categories.json", {}, {
		query: {method: "GET", isArray: true},
		create: {method: "POST"}
	});
}]);

MyApp.factory("CategoryFactory", ["$resource", function($resource){
	return $resource("/categories/:id.json", {}, {
		get_category: {method: "GET", params: {id: "@id"}},
		update: {method: "PUT", params: {id: "@id"}},
		delete: {method: "DELETE", params: {id: "@id"}}
	});
}]);