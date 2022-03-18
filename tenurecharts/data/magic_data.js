//batter and pitcher colors are selected from the Team Wiki page, shadowed is just a nice gray
const teamColors = {
	batter: "#bf0043",
	pitcher: "#fcb040",
	shadowed: "#cccccc"			
};

//player names. this is the initial order they will be on the graph, top to bottom. linebreaks are just for readability when coding it
//if you want to keep the "Season 1 roster, changes cascading" sorting option, then the players should be in that order here.
//to make another sorting the default one, reorder the options in the select above
const names = ['Washer Barajas',
			   'Sutton Picklestein', 'Kurt Crueller',
			   'Francisco Preston', 'Melton Telephone',
			   'Bevan Wise', 'Sexton Wheerer', 'Kirkland Sobremesa',
			   'Richardson Turquoise', 'Annie Roland', 'Bonk Jokes',
			   'Penelope Mathews', 'Alyssa Harrell', 'Terrell Bradley', 'Chorby Short',
			   'Sosa Elftower', 'Halexandrey Walton', 'Wyatt Glover', 'Tiana Wheeler', 'Ziwa Mueller', 'Bones Piazza', 'Rey Wooten',
			   'Goodwin Morin II',
			   'Eizabeth Elliott',
			   'Oscar Dollie',
			   'Evelton McBlase II',
			   'Jesús Koch',
			   'Yeong-Ho Garcia', 'Jaylen Hotdogfingers', 'James Mora',
			   'Logan Rodriguez', 'Wyatt Pothos', 'Alx Keming', 'Atlas Diaz',
			   'Inky Rutledge', 'Cravel Gesundheit',
			   'Curry Aliciakeyes',
			   'Famous Oconnor', 'Cory Twelve', 'King Weatherman',
];
			
//this is the data that will make the boxes on the graph. order doesn't matter, they'll be ordered by sortedNames above, 
//but if two boxes *overlap* then later box will be drawn over earlier one
//the "player" value must match the player name above
//tenure start and end season and day are just numbers as they exist on the site. if either happened during elections, that's 'E'
//Days X are converted to "last day of the season", they don't get to be "X"
//if the player is a pitcher during the timespan in question, put "pitcher: true" there. if they are shadowed, then "shadowed: true". without either they'll be a batter
const tenures = [
	{'player': 'Washer Barajas', 'startSeason': 1, 'startDay': 1, 'endSeason': 14, 'endDay': 'E'},
	{'player': 'Washer Barajas', 'startSeason': 14, 'startDay': 'E', 'endSeason': 21, 'endDay': 81, shadowed: true},
	{'player': 'Washer Barajas', 'startSeason': 21, 'startDay': 81, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Sutton Picklestein', 'startSeason': 1, 'startDay': 1, 'endSeason': 13, 'endDay': 13},
	{'player': 'Kurt Crueller', 'startSeason': 13, 'startDay': 13, 'endSeason': 15, 'endDay': 78},
		
	{'player': 'Francisco Preston', 'startSeason': 1, 'startDay': 1, 'endSeason': 16, 'endDay': 30},
	{'player': 'Francisco Preston', 'startSeason': 16, 'startDay': 30, 'endSeason': 16, 'endDay': 'E', pitcher: true},
	{'player': 'Francisco Preston', 'startSeason': 16, 'startDay': 'E', 'endSeason': 17, 'endDay': 'E', shadowed: true},
	{'player': 'Francisco Preston', 'startSeason': 17, 'startDay': 'E', 'endSeason': 24, 'endDay': 99},
	{'player': 'Melton Telephone', 'startSeason': 1, 'startDay': 1, 'endSeason': 16, 'endDay': 'E', shadowed: true},
	{'player': 'Melton Telephone', 'startSeason': 16, 'startDay': 'E', 'endSeason': 18, 'endDay': 'E', pitcher: true},
	{'player': 'Melton Telephone', 'startSeason': 18, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Bevan Wise', 'startSeason': 1, 'startDay': 1, 'endSeason': 17, 'endDay': 'E'},
	{'player': 'Sexton Wheerer', 'startSeason': 17, 'startDay': 'E', 'endSeason': 18, 'endDay': 'E'},
	{'player': 'Bevan Wise', 'startSeason': 18, 'startDay': 'E', 'endSeason': 20, 'endDay': 32},
	{'player': 'Bevan Wise', 'startSeason': 20, 'startDay': 32, 'endSeason': 23, 'endDay': 80, pitcher: true},
	{'player': 'Bevan Wise', 'startSeason': 23, 'startDay': 80, 'endSeason': 23, 'endDay': 87, shadowed: true},
	{'player': 'Bevan Wise', 'startSeason': 23, 'startDay': 87, 'endSeason': 23, 'endDay': 104},
	{'player': 'Bevan Wise', 'startSeason': 23, 'startDay': 104, 'endSeason': 24, 'endDay': 33, shadowed: true},
	{'player': 'Bevan Wise', 'startSeason': 24, 'startDay': 33, 'endSeason': 24, 'endDay': 99},
	{'player': 'Kirkland Sobremesa', 'startSeason': 1, 'startDay': 1, 'endSeason': 23, 'endDay': 104, shadowed: true},
	{'player': 'Kirkland Sobremesa', 'startSeason': 23, 'startDay': 104, 'endSeason': 24, 'endDay': 33},
	{'player': 'Kirkland Sobremesa', 'startSeason': 24, 'startDay': 33, 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Richardson Turquoise', 'startSeason': 1, 'startDay': 1, 'endSeason': 5, 'endDay': 40},
	{'player': 'Annie Roland', 'startSeason': 5, 'startDay': 40, 'endSeason': 10, 'endDay': 39},
	{'player': 'Bonk Jokes', 'startSeason': 10, 'startDay': 39, 'endSeason': 21, 'endDay': 95},
	{'player': 'Bonk Jokes', 'startSeason': 21, 'startDay': 95, 'endSeason': 22, 'endDay': 49, shadowed: true},
	{'player': 'Bonk Jokes', 'startSeason': 22, 'startDay': 49, 'endSeason': 24, 'endDay': 99},

	{'player': 'Penelope Mathews', 'startSeason': 1, 'startDay': 1, 'endSeason': 4, 'endDay': 15},
	{'player': 'Alyssa Harrell', 'startSeason': 4, 'startDay': 15, 'endSeason': 7, 'endDay': 73},
	{'player': 'Terrell Bradley', 'startSeason': 7, 'startDay': 73, 'endSeason': 8, 'endDay': 'E'},
	{'player': 'Chorby Short', 'startSeason': 8, 'startDay': 'E', 'endSeason': 15, 'endDay': 33},

	{'player': 'Sosa Elftower', 'startSeason': 1, 'startDay': 1, 'endSeason': 2, 'endDay': 64},
	{'player': 'Halexandrey Walton', 'startSeason': 2, 'startDay': 64, 'endSeason': 5, 'endDay': 98},
	{'player': 'Halexandrey Walton', 'startSeason': 19, 'startDay': 'E', 'endSeason': 21, 'endDay': 86},
	{'player': 'Halexandrey Walton', 'startSeason': 21, 'startDay': 86, 'endSeason': 21, 'endDay': 95, shadowed: true},
	{'player': 'Halexandrey Walton', 'startSeason': 21, 'startDay': 95, 'endSeason': 21, 'endDay': 'E'},
	{'player': 'Halexandrey Walton', 'startSeason': 21, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Wyatt Glover', 'startSeason': 5, 'startDay': 98, 'endSeason': 13, 'endDay': 'E'},
	{'player': 'Wyatt Glover', 'startSeason': 13, 'startDay': 'E', 'endSeason': 14, 'endDay': 'E', shadowed: true},
	{'player': 'Wyatt Glover', 'startSeason': 14, 'startDay': 'E', 'endSeason': 15, 'endDay': 4},
	{'player': 'Wyatt Glover', 'startSeason': 20, 'startDay': 'E', 'endSeason': 21, 'endDay': 'E'},
	{'player': 'Wyatt Glover', 'startSeason': 21, 'startDay': 'E', 'endSeason': 22, 'endDay': 99, pitcher: true},
	{'player': 'Tiana Wheeler', 'startSeason': 1, 'startDay': 1, 'endSeason': 13, 'endDay': 'E', shadowed: true},
	{'player': 'Tiana Wheeler', 'startSeason': 13, 'startDay': 'E', 'endSeason': 16, 'endDay': 99},
	{'player': 'Tiana Wheeler', 'startSeason': 17, 'startDay': 'E', 'endSeason': 22, 'endDay': 'E'},
	{'player': 'Ziwa Mueller', 'startSeason': 22, 'startDay': 'E', 'endSeason': 24, 'endDay': 22},
	{'player': 'Bones Piazza', 'startSeason': 19, 'startDay': 99, 'endSeason': 21, 'endDay': 86, shadowed: true},
	{'player': 'Bones Piazza', 'startSeason': 21, 'startDay': 86, 'endSeason': 21, 'endDay': 93},
	{'player': 'Bones Piazza', 'startSeason': 21, 'startDay': 93, 'endSeason': 21, 'endDay': 'E', shadowed: true},
	{'player': 'Bones Piazza', 'startSeason': 21, 'startDay': 'E', 'endSeason': 22, 'endDay': 49},
	{'player': 'Bones Piazza', 'startSeason': 22, 'startDay': 49, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Rey Wooten', 'startSeason': 1, 'startDay': 1, 'endSeason': 21, 'endDay': 93, shadowed: true},
	{'player': 'Rey Wooten', 'startSeason': 21, 'startDay': 93, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Goodwin Morin II', 'startSeason': 19, 'startDay': 73, 'endSeason': 19, 'endDay': 'E'},

	{'player': 'Eizabeth Elliott', 'startSeason': 1, 'startDay': 1, 'endSeason': 16, 'endDay': 'E'},
	{'player': 'Eizabeth Elliott', 'startSeason': 16, 'startDay': 'E', 'endSeason': 18, 'endDay': 'E', shadowed: true},
	{'player': 'Eizabeth Elliott', 'startSeason': 18, 'startDay': 'E', 'endSeason': 20, 'endDay': 32},
	{'player': 'Eizabeth Elliott', 'startSeason': 20, 'startDay': 32, 'endSeason': 23, 'endDay': 87},
	{'player': 'Eizabeth Elliott', 'startSeason': 23, 'startDay': 87, 'endSeason': 23, 'endDay': 98, shadowed: true},
	{'player': 'Eizabeth Elliott', 'startSeason': 23, 'startDay': 98, 'endSeason': 24, 'endDay': 38, pitcher: true},
	{'player': 'Eizabeth Elliott', 'startSeason': 24, 'startDay': 38, 'endSeason': 24, 'endDay': 99, shadowed: true},
	
	{'player': 'Oscar Dollie', 'startSeason': 1, 'startDay': 1, 'endSeason': 16, 'endDay': 97},
	
	{'player': 'Evelton McBlase II', 'startSeason': 18, 'startDay': 'E', 'endSeason': 19, 'endDay': 'E'},
	
	{'player': 'Jesús Koch', 'startSeason': 20, 'startDay': 36, 'endSeason': 24, 'endDay': 'E'},
	
	{'player': 'Yeong-Ho Garcia', 'startSeason': 1, 'startDay': 1, 'endSeason': 12, 'endDay': 12, pitcher: true},
	{'player': 'Jaylen Hotdogfingers', 'startSeason': 12, 'startDay': 12, 'endSeason': 12, 'endDay': 56, pitcher: true},
	{'player': 'James Mora', 'startSeason': 12, 'startDay': 56, 'endSeason': 16, 'endDay': 'E', pitcher: true},
	{'player': 'James Mora', 'startSeason': 16, 'startDay': 'E', 'endSeason': 21, 'endDay': 99},
	
	{'player': 'Logan Rodriguez', 'startSeason': 1, 'startDay': 1, 'endSeason': 16, 'endDay': 30, pitcher: true},
	{'player': 'Logan Rodriguez', 'startSeason': 16, 'startDay': 30, 'endSeason': 18, 'endDay': 'E'},
	{'player': 'Wyatt Pothos', 'startSeason': 18, 'startDay': 'E', 'endSeason': 19, 'endDay': 'E'},
	{'player': 'Logan Rodriguez', 'startSeason': 19, 'startDay': 'E', 'endSeason': 21, 'endDay': 81},
	{'player': 'Logan Rodriguez', 'startSeason': 21, 'startDay': 81, 'endSeason': 22, 'endDay': 'E', shadowed: true},
	{'player': 'Logan Rodriguez', 'startSeason': 22, 'startDay': 'E', 'endSeason': 23, 'endDay': 48},
	{'player': 'Logan Rodriguez', 'startSeason': 23, 'startDay': 48, 'endSeason': 23, 'endDay': 73, shadowed: true},
	{'player': 'Logan Rodriguez', 'startSeason': 23, 'startDay': 73, 'endSeason': 24, 'endDay': 99, pitcher: true},
	{'player': 'Alx Keming', 'startSeason': 22, 'startDay': 'E', 'endSeason': 23, 'endDay': 48, shadowed: true},
	{'player': 'Alx Keming', 'startSeason': 23, 'startDay': 48, 'endSeason': 24, 'endDay': 91},
	{'player': 'Alx Keming', 'startSeason': 24, 'startDay': 91, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Atlas Diaz', 'startSeason': 1, 'startDay': 1, 'endSeason': 24, 'endDay': 91, shadowed: true},
	{'player': 'Atlas Diaz', 'startSeason': 24, 'startDay': 91, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Inky Rutledge', 'startSeason': 1, 'startDay': 1, 'endSeason': 17, 'endDay': 79, pitcher: true},
	{'player': 'Jaylen Hotdogfingers', 'startSeason': 17, 'startDay': 79, 'endSeason': 17, 'endDay': 90, pitcher: true},
	{'player': 'Cravel Gesundheit', 'startSeason': 17, 'startDay': 90, 'endSeason': 23, 'endDay': 98, pitcher: true}, 
	{'player': 'Cravel Gesundheit', 'startSeason': 23, 'startDay': 98, 'endSeason': 24, 'endDay': 38, shadowed: true}, 
	{'player': 'Cravel Gesundheit', 'startSeason': 24, 'startDay': 38, 'endSeason': 24, 'endDay': 99, pitcher: true},
	
	{'player': 'Curry Aliciakeyes', 'startSeason': 1, 'startDay': 1, 'endSeason': 24, 'endDay': 99, pitcher: true},
	
	{'player': 'Famous Oconnor', 'startSeason': 1, 'startDay': 1, 'endSeason': 2, 'endDay': 65, pitcher: true},
	{'player': 'Cory Twelve', 'startSeason': 2, 'startDay': 65, 'endSeason': 12, 'endDay': 'E', pitcher: true},
	{'player': 'King Weatherman', 'startSeason': 12, 'startDay': 'E', 'endSeason': 23, 'endDay': 73, pitcher: true},
	{'player': 'King Weatherman', 'startSeason': 23, 'startDay': 73, 'endSeason': 23, 'endDay': 80, shadowed: true},
	{'player': 'King Weatherman', 'startSeason': 23, 'startDay': 80, 'endSeason': 24, 'endDay': 99, pitcher: true},	
]
