var MyApp = angular.module("MyApp");

MyApp.factory("UsersFactory", [ "$resource", function($resource){
	return $resource("/users", {}, {
		query: {method: "GET", isArray: true},
		create: {method: "POST"}
	});
}]);

MyApp.factory("UserFactory", ["$resource", function($resource){
	return $resource("/users/:id.json", {}, {
		get_user: {method: "GET", params: {id: "@id"}},
		update: {method: "PUT", params: {id: "@id"}},
		delete: {method: "DELETE", params: {id: "@id"}}
	});
}]);