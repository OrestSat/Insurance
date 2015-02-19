var MyApp = angular.module("MyApp");

MyApp.controller("CategoryController", [
	"$scope",
    "$state",
	"$stateParams",
	"CategoryFactory",
	"CategoriesFactory",
	"AbilitiesFactory",
	function($scope, $state, $stateParams, CategoryFactory, CategoriesFactory, AbilitiesFactory){

		$scope.selectedCategoryIndex = 0;

		$scope.menuOptions = [
            ['Додати категорію', null, [ ]],
            null, 
            ['Нова категорія', function($itemScope) {
                $state.go('home.new_category', { insurance_id: $stateParams.insurance_id });
            }]
        ];

		$scope.getAllCategories = function(){
			CategoriesFactory.query({}, function(data){
				$scope.initCategories(data);
			}, function(error){
				console.log(error);
			});
		};

		$scope.setSelected = function(index){
       		$scope.selectedCategoryIndex = index;
    	};

    	$scope.initCategories = function(data){
    		if(data){
        		angular.forEach(data, function(value) {
            		$scope.menuOptions[0][2].push([value.name, function(){
                		$scope.addCategory(value.name);
            		}]);
        		});
        	}
    	};

    	$scope.createCategory = function(){
    		CategoriesFactory.create({category: $scope.newCategory}, function(data){
    			$scope.getAllCategories();
    			$state.go('home.insurance', {
           	    	insurance_id: $stateParams.insurance_id
         	   	});
    		}, function(error){
    			console.log(error);
    		});
    	};

    	$scope.addCategory = function(category){
            AbilitiesFactory.create({ insurance_id: $stateParams.insurance_id, category_name: category }, function(data){
                $scope.getInsurance();
            });
        }; 

    // $scope.getAllCategories = function(){
    //     $scope.options = [];
    //     $http.get("/categories.json").
    //         success(function(data){
    //             $scope.initCategories(data);
    //         });
    // };

    	$scope.getAllCategories(); 
    }
]);