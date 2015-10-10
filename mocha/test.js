var assert = require("assert");
var hello = require("./hello.js");
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
describe('My Test', function() {
  describe('1 + 1 = 2', function () {
    it('1 + 1 = 2', function () {
      assert.equal(1 + 1, 2);
    });

    it('1 + 0 = 1', function () {
      assert.equal(0 + 1, 1);
    });

    it('hello returns hello', function(){
      assert.equal("hello", hello());
    });
  });
});
