var expect = chai.expect;
describe('JavaScript Tests', function () {
    describe('1 + 2 ', function () {
        beforeEach(function () {
        });
        afterEach(function () {
        });

        it('should be 3', function () {
            expect(1 + 2).to.equals(3);
        });

        it('should not be 4', function () {
            expect(1 + 2).to.not.equals(4);
        });
    });
});
