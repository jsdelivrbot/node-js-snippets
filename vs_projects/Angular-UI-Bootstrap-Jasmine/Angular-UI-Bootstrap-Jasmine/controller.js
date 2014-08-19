(function () {
    'use strict';

    var app = angular.module('app');
    app.controller('controller1', ['$scope', '$modal', '$window', function ($scope, $modal, $window) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.click = function (size) {
            $modal.open({
                templateUrl: 'myModalContent.html',
                controller: modalInstanceCtrl,
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            }).result
                .then(function (selectedItem) {
                    $scope.selected = selectedItem;
                });
        };

        $scope.getUrl = function() {
            return $window.location.href;
        };

        $scope.setUrl = function(url) {
            $window.location.href = url;
            $scope.currentUrl = url;
        };
    }]);

    var modalInstanceCtrl = function ($scope, $modalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

   
}());