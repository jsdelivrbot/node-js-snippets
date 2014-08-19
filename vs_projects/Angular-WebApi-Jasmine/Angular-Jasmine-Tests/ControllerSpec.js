describe('controllers', function() {
    it('should pass', function() {
        expect(1).toBe(1);
    });

    beforeEach(module('app'));

    it('should load controller1', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var controller1 = $controller('controller1', { $scope: scope });
        
        expect(controller1).not.toBeNull();
        expect(scope.one).toBe(1);
        expect(scope.two).toBe(2);
    }));

    // use $injector
    it('should load controller2', inject(function ($injector) {
        var $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');

        var scope = $rootScope.$new();
        var controller2 = $controller('controller2', { $scope: scope });

        expect(controller2).not.toBeNull();
        expect(scope.one).toBe(1);
        expect(scope.two).toBe(2);
    }));

    it('should load controller3', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var controller3 = $controller('controller3', { $scope: scope });

        expect(controller3).not.toBeNull();
        expect(controller3.one).toBe(1);
        expect(controller3.two).toBe(2);
    }));

    
    it('should load httpController', inject(function ($controller, $rootScope, $httpBackend, $http) {
        var httpBackend = $httpBackend;
        httpBackend.when("GET", "api/Test").respond(200,2);
        var http = $http;
        var scope = $rootScope.$new();
        var httpController = $controller('httpController', {
            $scope: scope,
            $http: http
        });
        httpBackend.flush();

        expect(httpController).not.toBeNull();
        expect(scope.one).toBe(1);
        expect(scope.two).toBe(2);
    }));
});