describe('controllers', function() {
    it('should pass', function() {
        expect(1).toBe(1);
    });

    beforeEach(module('app'));

    it('should load controller1', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var controller1 = $controller('controller1', { $scope: scope });

        expect(controller1).toBeDefined();
        expect(scope.items.length).toBe(3);        
    }));


    it('should work with $modal', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();

        // mock result (promise)
        var result = {
            then: function (callback) {
                callback('item1');
            }
        };

        // mock $modal and $modal.open() then spy on it
        var modal = {
            open: function (options) {
                expect(options.templateUrl).toBe('myModalContent.html');
                expect(options.resolve.items().length).toBe(3);
                return {
                    result: result
                };
            }
        };
        spyOn(modal, "open")
            .and
            .callThrough();

        var controller1 = $controller('controller1',
           {
               $scope: scope,
               $modal: modal
           });

        scope.click();

        expect(controller1).toBeDefined();
        expect(scope.selected).toBe('item1');
        expect(modal.open).toHaveBeenCalled();
    }));

    it('should work with $window', inject(function($controller, $rootScope) {
        var scope = $rootScope.$new();
        var window = {
            location: {
                href: "http://vgt.net"
            }
        };

        var controller1 = $controller('controller1',
           {
               $scope: scope,
               $window: window
           });

        spyOn(scope, 'setUrl')
            .and
            .callThrough();

        expect(controller1).toBeDefined();
        expect(scope.getUrl()).toBe("http://vgt.net");

        scope.setUrl("http://news.vgt.net");
        console.log(scope.setUrl.calls.allArgs());
        expect(scope.getUrl()).toBe("http://news.vgt.net");
    }));
});