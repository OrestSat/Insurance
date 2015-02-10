var MyApp = angular.module("MyApp");

MyApp.factory("InsurancesFactory", [ "$resource", function($resource){
	return $resource("/insurances.json", {}, {
		query: {method: "GET", isArray: true},
		create: {method: "POST"}
	});
}]);

MyApp.factory("InsuranceFactory", ["$resource", function($resource){
	return $resource("/insurances/:id.json", {}, {
		get_insurance: {method: "GET", params: {id: "@id"}},
		update: {method: "PUT", params: {id: "@id"}},
		delete: {method: "DELETE", params: {id: "@id"}}
	});
}]);

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

