var MyApp = angular.module("MyApp");

MyApp.controller("InsuranceController", [
    "$scope",
    "$state",
    "$http",
    "$stateParams",
    "InsuranceFactory",
    "InsurancesFactory",
    "AbilitiesFactory",
    function($scope, $state, $http, $stateParams, InsuranceFactory, InsurancesFactory, AbilitiesFactory) {

        $scope.selectedCategoryIndex = 0;

         $scope.menuOptions = [
            ['Додати категорію', null, [ ]],
            null, 
            ['Нова категорія', function($itemScope) {
                $state.go('home.new_category', { "insurance_id": $stateParams.insurance_id });
            }]
        ];

        $scope.getInsurance = function() {
            InsuranceFactory.get_insurance({
                id: $stateParams.insurance_id
            }, function(data) {
                $scope.insurance = data;
                console.log(data);
            }, function(error) {
                console.log(error);
            });
        };

        $scope.addCategory = function(category){
            AbilitiesFactory.create({ insurance_id: $stateParams.insurance_id, category_name: category }, function(data){
                $scope.getInsurance();
                console.log(data);
            });
        }

        $scope.setSelected = function(index){
            $scope.selectedCategoryIndex = index;
        };

        $scope.initCategories = function(data){
            angular.forEach(data, function(value) {
                $scope.menuOptions[0][2].push([value.name, function(){
                    $scope.addCategory(value.name);
                }]);
            });
        };

        $scope.getAllCategories = function(){
            $scope.options = [];
            $http.get("/categories.json").
                success(function(data){
                    $scope.initCategories(data);
                });
        };

        $scope.getAllCategories();       
    }
]);
