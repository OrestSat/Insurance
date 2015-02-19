var MyApp = angular.module("MyApp");

MyApp.controller("InsuranceController", [
    "$scope",
    "$rootScope",
    "$state",
    "$http",
    "$stateParams",
    "InsuranceFactory",
    "InsurancesFactory",
    "AbilitiesFactory",
    function($scope, $rootScope, $state, $http, $stateParams,
     InsuranceFactory, InsurancesFactory, AbilitiesFactory) {

        $scope.indexInsurances = function() {
            InsurancesFactory.query({}, function(data) {
                $scope.insurances = data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.getInsurance = function(){
            InsuranceFactory.get_insurance({
                id: $stateParams.insurance_id
            }, function(data) {
                $scope.insurance = data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.createInsurance = function(){
            InsurancesFactory.create({insurance: $scope.newInsurance}, function(data){
                $rootScope.$broadcast("insurancesUpdated");
                $state.go('home');
            }, function(error){
                console.log(error);
            });
        };
        $scope.deleteInsurance = function(insurance){
            if (confirm("Ви впевнені?")){
                InsuranceFactory.delete({id: insurance.id}, function(){
                    $rootScope.$broadcast("insurancesUpdated");
                    $state.go('home');
                });
            }
        };   
    }
]);
