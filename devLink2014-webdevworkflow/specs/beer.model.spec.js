QUnit.test("window.beerApp.Beer is defined", function(assert) {

    assert.ok(window.beerApp.Beer, "beer model is ok");
});

QUnit.test("default beer model test", function(assert){

    var beer = new window.beerApp.Beer();
    assert.equal(beer.name, "Beer", "default beer name is 'Beer'");
});

QUnit.test("beer model with options test", function(assert) {
    var beer = new window.beerApp.Beer({
        name: "test",
        brewery: "Nashville",
        description: "good beer"
    });

    assert.equal(beer.name, "test", "options are utilized");
    assert.equal(beer.toString(), "test(good beer) by Nashville (abv ?%)", "beer.toString() works!");

});