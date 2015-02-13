var MyApp = angular.module("MyApp");

MyApp.controller('InsurancelistController', [
    "$scope",
    "$rootScope",
    "$state",
    "$stateParams",
    "InsurancesFactory",
    function($scope, $rootScope, $state, $stateParams, InsurancesFactory) {

        $scope.selectedIndex = 0;

        $scope.indexInsurances = function() {
            InsurancesFactory.query({}, function(data) {
                $scope.insurances = data;
            }, function(error) {
                console.log(error);
            });
        };

        $scope.showInsurance = function(insurance, $index) {
            console.log($index);
            $scope.selectedIndex = $index;
            $state.go('home.insurance', {
                "insurance_id": insurance.id
            });
        };

        $scope.getAllCategories

        $scope.menuOptions = [
            ['Додати страхову', function($itemScope) {
                $scope.selectedIndex = $itemScope.$index;
                console.log("Додати страхову");

            }],
            null, ['Видалити страхову', function($itemScope) {
                $scope.selectedIndex = $itemScope.$index;
                console.log("Видалити страхову");

            }]
        ];

        $scope.indexInsurances();
    }
]);
