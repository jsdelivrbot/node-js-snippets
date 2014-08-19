
describe('Outer Describe', function() {

	before(function() {
		console.log('before');
	});
	
	after(function() {
		console.log('after');
	});
	
	beforeEach(function() {
		console.log('beforeEach');
	});
	
	afterEach(function() {
		console.log('afterEach');
	});
	
    it('should be my first test', function() {
        console.log('first');
        expect(1).to.equal(1);
    });
	
	describe('inner describe', function() {
	
		beforeEach(function() {
			console.log('beforeEach');
		});		
		
		afterEach(function() {
			console.log('afterEach');
		});
		
        it('should be my second test', function() {
            console.log('second');
            expect(1).to.equal(1);
        });
		
	});

});

describe('controllers', function () {
    beforeEach(function () {
        module('app');        
    });

    it('should pass', function() {
        expect(1).to.equal(1);
    });

    

    it('should load controller1', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var controller1 = $controller('controller1', { $scope: scope });

        expect(controller1).not.to.equal(null);
        expect(scope.one).to.equal(1);
        expect(scope.two).to.equal(2);
    }));

    // use $injector
    it('should load controller2', inject(function ($injector) {
        var $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');

        var scope = $rootScope.$new();
        var controller2 = $controller('controller2', { $scope: scope });

        expect(controller2).not.to.equal(null);
        expect(scope.one).to.equal(1);
        expect(scope.two).to.equal(2);
    }));

    it('should load controller3', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var controller3 = $controller('controller3', { $scope: scope });

        expect(controller3).not.to.equal(null);
        expect(controller3.one).to.equal(1);
        expect(controller3.two).to.equal(2);
    }));


    it('should load httpController', inject(function ($controller, $rootScope, $httpBackend, $http) {
        var httpBackend = $httpBackend;
        httpBackend.when("GET", "api/Test").respond(200, 2);
        var http = $http;
        var scope = $rootScope.$new();
        var httpController = $controller('httpController', {
            $scope: scope,
            $http: http
        });
        httpBackend.flush();

        expect(httpController).not.to.equal(null);
        expect(scope.one).to.equal(1);
        expect(scope.two).to.equal(2);
    }));
});