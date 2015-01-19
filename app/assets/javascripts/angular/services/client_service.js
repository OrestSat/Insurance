var MyApp = angular.module("MyApp");

MyApp.factory("ClientsFactory", [ "$resource", function($resource){
	return $resource("/clients.json", {}, {
		query: {method: "GET", isArray: true},
		create: {method: "POST"}
	});
}]);

MyApp.factory("ClientFactory", ["$resource", function($resource){
	return $resource("/client/:id.json", {}, {
		show: {method: "GET", params: {id: "@id"}},
		update: {method: "PUT", params: {id: "@id"}},
		delete: {method: "DELETE", params: {id: "@id"}}
	});
}]);