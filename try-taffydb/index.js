var cities = TAFFY([{name:"New York",state:"WA"},{name:"Las Vegas",state:"NV"},{name:"Boston",state:"MA"}]);

cities.insert({name:"Portland",state:"OR"});

cities().limit(2).each(function (r) {alert(r.name)});
