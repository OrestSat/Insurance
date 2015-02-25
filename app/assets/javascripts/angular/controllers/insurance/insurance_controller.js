var MyApp = angular.module("MyApp");

MyApp.controller("InsuranceController", [
    "$scope",
    "$rootScope",
    "$state",
    "$http",
    "$stateParams",
    "Insurance",
    "AbilitiesFactory",
    function($scope, $rootScope, $state, $http, $stateParams,
     Insurance, AbilitiesFactory) {

        $scope.indexInsurances = function() {
            Insurance.query({}, function(data) {
                $scope.insurances = data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.getInsurance = function(){
            Insurance.get({
                id: $stateParams.insurance_id
            }, function(data) {
                $scope.insurance = data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.createInsurance = function(){
            var insur = new Insurance($scope.newInsurance);
            insur.$save(function(){
                $rootScope.$broadcast("insurancesUpdated");
                $state.go('home');
            }, function(error){
                console.log(error);
            });
        };
        $scope.deleteInsurance = function(insurance){
            if (confirm("Ви впевнені?")){
                Insurance.delete({id: insurance.id}, function(){
                    $rootScope.$broadcast("insurancesUpdated");
                    $state.go('home');
                });
            }
        };   
    }
]);
