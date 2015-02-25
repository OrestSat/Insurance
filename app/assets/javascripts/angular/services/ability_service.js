var MyApp = angular.module("MyApp");

MyApp.factory("AbilitiesFactory", ["$resource", function($resource){
	return $resource("insurances/:insurance_id/abilities.json", {insurance_id: "@insurance_id"}, {
		query: {method: "GET", isArray: true},
		create: {method: "POST"}
	});
}]);

MyApp.factory("AbilityFactory", ["$resource", function($resource){
	return $resource("insurances/:insurance_id/abilities/:id.json", {insurance_id: "@insurance_id"}, {
		get_ability: {method: "GET", params: {id: "@id"}},
		update: {method: "PUT", params: {id: "@id"}},
		delete: {method: "DELETE", params: {id: "@id"}}
	});
}]);