(function() {
    'use strict';

    var app = angular.module('app');
    app.controller('controller1', ['$scope', function ($scope) {
            $scope.one = 1;
            $scope.two = 2;
        }]);

    // uglify breaks the code below
    app.controller('controller2',function ($scope) {
            $scope.one = 1;
            $scope.two = 2;
        });

    // another style
    app.controller('controller3', [function () {
            var vm = this;
            vm.one = 1;
            vm.two = 2;
        }]);

    app.controller('httpController', [
        '$http', '$scope', function($http, $scope) {
            $scope.one = 1;

            $http({
                method: 'GET',
                url: 'api/Test'
            }).then(function(data) {
                $scope.two = data.data;
            });

        }
    ]);
}());