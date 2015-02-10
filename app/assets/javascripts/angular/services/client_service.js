var MyApp = angular.module("MyApp");

MyApp.factory("ClientsFactory", ["$resource", function($resource){
	return $resource("/clients.json", {}, {
		query: {method: "GET", isArray: true},
		create: {method: "POST"}
	});
}]);

MyApp.factory("ClientFactory", ["$resource", function($resource){
	return $resource("/clients/:id.json", {}, {
		get_client: {method: "GET", params: {id: "@id"}},
		update: {method: "PUT", params: {id: "@id"}},
		delete: {method: "DELETE", params: {id: "@id"}}
	});
}]);

MyApp.factory("MyClientFactory", ["$resource", function($resource){
	return $resource("/my_clients.json", {}, {
		query: {method: "GET", isArray: true}
	});
}]);