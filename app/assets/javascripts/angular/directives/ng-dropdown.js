var MyApp = angular.module("MyApp");

MyApp.directive('ngDropdown', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            items: '=dropdownData',
            doSelect: '&selectVal',
            selectedItem: '=preselectedItem',
            value: '=value'
        },
        link: function (scope, element, attrs) {
            var html = '';
            switch (attrs.menuType) {
                case "button":
                    html += '<div class="btn-group"><button id="dropdown" class="btn button-label btn-info">' + scope.value + '</button><button class="btn btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>';
                    break;
                default:
                    html += '<div class="dropdown"><a id="dropdown" class="dropdown-toggle" role="button" data-toggle="dropdown"  href="javascript:;">' + scope.value + '<b class="caret"></b></a>';
                    break;
            }
            html += '<ul class="dropdown-menu"><li ng-repeat="item in items"><a tabindex="-1" data-ng-click="selectVal(item, $index)">{{item.name}}</a></li></ul></div>';
            element.append($compile(html)(scope));
            for (var i = 0; i < scope.items.length; i++) {
                if (scope.items[i].id === scope.selectedItem) {
                    scope.bSelectedItem = scope.items[i];
                    break;
                }
            }
            scope.selectVal = function (item, index) {
                if (!$) { var $ = angular.element; }
                scope.role = item.name;
                alert(element.find('#dropdown')[0].innerHTML);
                document.querySelector('#dropdown', element)[index].innerHTML = item.name;
                if(item.func){
                    scope.$apply(item.func);
                }
                scope.doSelect({
                    selectedVal: item.id
                });
            };
            // scope.selectVal(scope.bSelectedItem);
        }
    };
});