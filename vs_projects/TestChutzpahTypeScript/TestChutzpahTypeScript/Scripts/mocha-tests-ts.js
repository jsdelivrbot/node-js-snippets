/// <reference path="typings/mocha/mocha.d.ts" />
/// <reference path="typings/chai/chai.d.ts" />
var expect = chai.expect;
describe('TypeScript Unit Tests:', function () {
    describe('2 + 4', function () {
        it('should be 6', function (done) {
            expect(2 + 4).to.equals(6);
            done();
        });
        it('should not be 7', function (done) {
            expect(2 + 4).to.not.equals(7);
            done();
        });
    });
});
//# sourceMappingURL=mocha-tests-ts.js.map