window.beerApp = (window.beerApp || {});
window.beerApp.Beer = (function() {
    "use strict";

    var nextId = 0;

	var Beer = function( options ) {
		var now = (new Date()).getTime();
        var default_abv = 0;

        _.extend(this, {
            name: "Beer",
            brewery: null,
            description: null,
            abv: default_abv
        }, options);

        this.id = ++nextId;
        this.created_at = now;
        this.updated_at = now;
	};

    _.extend(Beer.prototype, {
        toString: function() {
            return this.name + "(" + (this.description || "?") + ") by " + 
                (this.brewery || "Unknown") + 
                " (abv " + (this.abv || "?") + "%)";
        }
    });

	return Beer;

})();;window.beerApp = (window.beerApp || {});
window.beerApp.beerViewModel = (function($, Beer) {
    "use strict";
    
    var BeerViewModel = function(beer) {
        this.beer = (beer instanceof Beer) || null;
    };

    _.extend(BeerViewModel.prototype, {
        initialize: function() {

        },

        render: function() {

        }
    });

    return BeerViewModel;

})( window.jQuery, window.beerApp.Beer );;window.beerApp = (window.beerApp || {});
window.beerApp.IndexViewModel = (function($, Beer) {
    "use strict";

    var IndexViewModel = function() {
        this.beers = [];
        this.favorites = [];

        _.bindAll( this, "addToFavorites", "removeFromFavorites" );
    };

    _.extend(IndexViewModel.prototype, {
        initialize: function(cb) {
            this.doSearch((function(beers) {
                this.beers = this.parse(beers);
                cb();
            }).bind(this));
        },

        render: function(node) {
            var beerContent = [];
            
            node = $(node);
            if (!node.length) {
                return;
            }

            beerContent = _.map(this.beers, function(beer) {
                var text = beer.toString();
                return text.replace(/\(([^\)]+)\)/g, "<span class='note'>($1)</span>");
            });

            node.append("<li>" + beerContent.join("</li><li>") + "</li>");
        },

        filterBeers: function(filter) {
            filter = (filter && filter.toLowerCase());

            if ( !filter ) {
                return this.beers;
            } else {
                return _.filter( this.beers, function( item ) {
                    return item.name().toLowerCase().indexOf( filter ) > -1;
                });
            }
        },

        parse: function( beers ) {
            return _.map( beers, function( beer ) {
                return new Beer( beer );
            });
        },

        addToFavorites: function( beer ) {
            this.favorites.push( beer );
        },

        removeFromFavorites: function( beer ) {
            this.favorites = _.without(this.favorites, beer);
        },

        doSearch: function(cb) {
            // Let's pretend we do an ajax call here for the beers
            window.setTimeout(function() {
                cb([
                    {
                        name: "Monkey King",
                        brewery: "New Holland",
                        description: "Saison",
                        abv: 6.6
                    },
                    {
                        name: "Lily Flagg",
                        brewery: "Straight to Ale",
                        description: "Milk Stout",
                        abv: 5
                    },
                    {
                        name: "Black Bavarian",
                        brewery: "Sprecher",
                        description: "Schwarzbier",
                        abv: 6
                    },
                    {
                        name: "Rye Stout",
                        brewery: "Flat 12",
                        description: "Stout",
                        abv: null
                    }
                ]);
            }, 300);
        }
    });

    return IndexViewModel;

})( window.jQuery, window.beerApp.Beer );