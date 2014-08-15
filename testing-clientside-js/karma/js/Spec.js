describe("sandbox", function() {


	it('should pass', function() {
		var b = {a:3,};
		expect(myObj.method1()).toBe(2+2); 
	}); 
	
	it('should not do anything else', function() {
		expect(1+1).toBe(2);
	});
	
});
