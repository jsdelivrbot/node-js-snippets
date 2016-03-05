QUnit.test("window.beerApp.IndexViewModel is defined", function(assert) {

    assert.ok(window.beerApp.IndexViewModel, "IndexViewModel is ok");
});

QUnit.test("window.beerApp.IndexViewModel has a beers array of length 0 and a favorites array of length 0", function(assert) {

    var idxVm = new window.beerApp.IndexViewModel();
    assert.equal(idxVm.beers.length, 0, "beers length is 0");
    assert.equal(idxVm.favorites.length, 0, "favorites length is 0");

});

QUnit.test("window.beerApp.IndexViewModel.addToFavorites works", function(assert) {

    var idxVm = new window.beerApp.IndexViewModel();

    var beer = new window.beerApp.Beer({
        name: "test",
        brewery: "Nashville",
        description: "good beer"
    });

    idxVm.addToFavorites(beer);
    assert.equal(idxVm.favorites.length, 1, "favorites length is 1");

});

QUnit.test("window.beerApp.IndexViewModel.removeFromFavorites works", function(assert) {

    var idxVm = new window.beerApp.IndexViewModel();

    var beer = new window.beerApp.Beer({
        name: "test",
        brewery: "Nashville",
        description: "good beer"
    });

    var beer2 = new window.beerApp.Beer({
        name: "test2",
        brewery: "Nashville",
        description: "good beer"
    });

    idxVm.addToFavorites(beer);
    idxVm.addToFavorites(beer2);
    assert.equal(idxVm.favorites.length, 2, "favorites length is 2");

    idxVm.removeFromFavorites(beer);
    assert.deepEqual(idxVm.favorites, [beer2], "favorites contains only 'beer2'");

});
