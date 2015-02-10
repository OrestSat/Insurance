var MyApp = angular.module("MyApp");

MyApp.controller("InsuranceController", ["$scope", "$state", "$stateParams", "InsuranceFactory", "InsurancesFactory", function($scope, $state, $stateParams, InsuranceFactory, InsurancesFactory){
	
	$scope.indexInsurances = function(){
		InsurancesFactory.query({}, function(data){
			$scope.insurances = data;
		}, function(error){
			console.log(error);
		});
	};
	$scope.getInsurance = function(){
		InsuranceFactory.get_insurance({id: $stateParams.insurance_id}, function(data){
			$scope.insurance = data;
			console.log(data);
		}, function(error){
			console.log(error);
		});
	}
	$scope.showInsurance = function(insurance){
		$state.go('home.insurance',{"insurance_id": insurance.id});
	};
	
	$scope.indexInsurances();
}]);