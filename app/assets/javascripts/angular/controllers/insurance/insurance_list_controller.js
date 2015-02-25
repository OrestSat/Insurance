var MyApp = angular.module("MyApp");

MyApp.controller('InsurancelistController', [
    "$scope",
    "$rootScope",
    "$state",
    "$stateParams",
    "Insurance",
    function($scope, $rootScope, $state, $stateParams, Insurance) {

        $scope.selectedIndex = 0;

        $scope.showInsurance = function(insurance, $index) {
            $scope.selectedIndex = $index;
            $state.go('home.insurance', {
                "insurance_id": insurance.id
            });
        };

        $scope.menuOptions = [
            ['Додати страхову', function($itemScope) {
                $scope.selectedIndex = $itemScope.$index;
                $state.go('home.new_insurance');
            }]
        ];

        $scope.insuranceOptions = [
            ['Редагувати', function($itemScope) {
                console.log("Редагувати");
            }],
            null,
            ['Видалити страхову', function($itemScope) {
                $scope.selectedIndex = $itemScope.$index;
                $scope.deleteInsurance($itemScope.insur);
                console.log("Видалити страхову");
            }]
        ];

        $rootScope.$on("insurancesUpdated", function(){
            $scope.indexInsurances();
        });

        $scope.indexInsurances();
    }
]);
