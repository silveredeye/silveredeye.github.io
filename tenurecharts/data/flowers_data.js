//FLOWERS TEAM SPECIFIC DATA: player names and tenures

//player names. this is the initial order they will be on the graph, top to bottom. linebreaks are just for readability when coding it
//if you want to keep the "Season 1 roster, changes cascading" sorting option, then the players should be in that order here.
//to make another sorting the default one, reorder the options in the select above
const names = [ 'Bryanayah Chang', 'Hotbox Sato', 'Morrow Doyle', 'Inez Owens',
			   'Margarito Nava', 'Silvaire Roadhouse', 'Adalberto Tosser', 'Ruffian Scrobbles',
			   'Hurley Pacheco', 'Nic Winkler',
			   'Castillo Turner', 'Chorby Short', 'Wade Howe',
			   'Jacob Haynes', 'Hierophantic Foible',
			   'Beck Whitney', 'Hahn Fox', 'Alaynabella Hollywood', 'Nagomi Mcdaniel', 'Parker Parra', 'Brock Forbes', 'Backpatch Rolsenthal', 'Zesty Yaboi', 'Jenkins Ingram',
			   'Jorge Ito', 'Caligula Lotus', 'Hiroto Cerna', 'Allan Kranch', 'Jaylen Hotdogfingers',
			   'Matheo Carpenter', 'Gloria Bugsnax',
			   'Isaac Rubberman', 'Vito Kravitz', 'Moses Mason', 'Salih Ultrabass',
			   'Jada Frederick',
			   'Dunn Keyes', 'Zeboriah Whiskey',
			   'Zeboriah Wilson',
			   'Owen Picklestein',
			   'King Weatherman', 'Cory Twelve',
			   'Chambers Simmons'
];

//this is the data that will make the boxes on the graph. order doesn't matter, they'll be ordered by sortedNames, 
//but if two boxes *overlap* then later box will be drawn over earlier one
//the "player" value must match the player name above
//tenure start and end season and day are just numbers as they exist on the site. if either happened during elections, that's 'E'
//Days X are converted to "last day of the season", they don't get to be "X"
//if the player is a pitcher during the timespan in question, put "pitcher: true" there. if they are shadowed, then "shadowed: true". without either they'll be a batter
const tenures = [
	{'player': 'Bryanayah Chang', 'startSeason': 1, 'startDay': 1, 'endSeason': 3, 'endDay': 5},
	{'player': 'Hotbox Sato', 'startSeason': 3, 'startDay': 5, 'endSeason': 4, 'endDay': 58},
	{'player': 'Morrow Doyle', 'startSeason': 4, 'startDay': 58, 'endSeason': 4, 'endDay': 98},
	{'player': 'Inez Owens', 'startSeason': 4, 'startDay': 98, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Margarito Nava', 'startSeason': 1, 'startDay': 1, 'endSeason': 16, 'endDay': 'E'},
	{'player': 'Margarito Nava', 'startSeason': 16, 'startDay': 'E', 'endSeason': 17, 'endDay': 'E', shadowed: true},
	{'player': 'Margarito Nava', 'startSeason': 17, 'startDay': 'E', 'endSeason': 24, 'endDay': 99},
	{'player': 'Silvaire Roadhouse', 'startSeason': 16, 'startDay': 'E', 'endSeason': 21, 'endDay': 'E'},
	{'player': 'Adalberto Tosser', 'startSeason': 21, 'startDay': 'E', 'endSeason': 24, 'endDay': 4},
	{'player': 'Ruffian Scrobbles', 'startSeason': 24, 'startDay': 4, 'endSeason': 24, 'endDay': 37},
	{'player': 'Ruffian Scrobbles', 'startSeason': 24, 'startDay': 37, 'endSeason': 24, 'endDay': 99, shadowed: true},
	
	{'player': 'Hurley Pacheco', 'startSeason': 1, 'startDay': 1, 'endSeason': 2, 'endDay': 76},
	{'player': 'Nic Winkler', 'startSeason': 2, 'startDay': 76, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Castillo Turner', 'startSeason': 1, 'startDay': 1, 'endSeason': 13, 'endDay': 'E'},
	{'player': 'Castillo Turner', 'startSeason': 13, 'startDay': 'E', 'endSeason': 14, 'endDay': 'E', shadowed: true},
	{'player': 'Castillo Turner', 'startSeason': 14, 'startDay': 'E', 'endSeason': 17, 'endDay': 'E', pitcher: true},
	{'player': 'Chorby Short', 'startSeason': 17, 'startDay': 'E', 'endSeason': 20, 'endDay': 'E', pitcher: true},
	{'player': 'Castillo Turner', 'startSeason': 20, 'startDay': 'E', 'endSeason': 21, 'endDay': 'E', pitcher: true},
	{'player': 'Chorby Short', 'startSeason': 21, 'startDay': 'E', 'endSeason': 22, 'endDay': 'E', pitcher: true},
	{'player': 'Chorby Short', 'startSeason': 22, 'startDay': 'E', 'endSeason': 23, 'endDay': 3, shadowed: true},
	{'player': 'Chorby Short', 'startSeason': 23, 'startDay': 3, 'endSeason': 23, 'endDay': 9, pitcher: true},
	{'player': 'Wade Howe', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 'E', shadowed: true},
	{'player': 'Wade Howe', 'startSeason': 22, 'startDay': 'E', 'endSeason': 23, 'endDay': 41, pitcher: true},
	{'player': 'Wade Howe', 'startSeason': 23, 'startDay': 41, 'endSeason': 24, 'endDay': 39, shadowed: true},
	{'player': 'Wade Howe', 'startSeason': 24, 'startDay': 39, 'endSeason': 24, 'endDay': 99},

	{'player': 'Jacob Haynes', 'startSeason': 1, 'startDay': 1, 'endSeason': 18, 'endDay': 'E'},
	{'player': 'Hierophantic Foible', 'startSeason': 18, 'startDay': 'E', 'endSeason': 19, 'endDay': 'E'},
	{'player': 'Jacob Haynes', 'startSeason': 19, 'startDay': 'E', 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Beck Whitney', 'startSeason': 1, 'startDay': 1, 'endSeason': 6, 'endDay': 80},
	{'player': 'Hahn Fox', 'startSeason': 6, 'startDay': 90, 'endSeason': 6, 'endDay': 'E'},
	{'player': 'Alaynabella Hollywood', 'startSeason': 6, 'startDay': 'E', 'endSeason': 12, 'endDay': 'E'},
	{'player': 'Nagomi Mcdaniel', 'startSeason': 12, 'startDay': 'E', 'endSeason': 13, 'endDay': 'E', shadowed: true},
	{'player': 'Nagomi Mcdaniel', 'startSeason': 13, 'startDay': 'E', 'endSeason': 14, 'endDay': 'E', pitcher: true},
	{'player': 'Parker Parra', 'startSeason': 14, 'startDay': 'E', 'endSeason': 15, 'endDay': 'E', pitcher: true},
	{'player': 'Brock Forbes', 'startSeason': 15, 'startDay': 'E', 'endSeason': 22, 'endDay': 19, pitcher: true},
	{'player': 'Backpatch Rolsenthal', 'startSeason': 22, 'startDay': 19, 'endSeason': 22, 'endDay': 88, pitcher: true},
	{'player': 'Backpatch Rolsenthal', 'startSeason': 22, 'startDay': 88, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Zesty Yaboi', 'startSeason': 11, 'startDay': 99, 'endSeason': 12, 'endDay': 'E', shadowed: true},
	{'player': 'Zesty Yaboi', 'startSeason': 12, 'startDay': 'E', 'endSeason': 22, 'endDay': 34},
	{'player': 'Zesty Yaboi', 'startSeason': 22, 'startDay': 34, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Jenkins Ingram', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 34, shadowed: true},
	{'player': 'Jenkins Ingram', 'startSeason': 22, 'startDay': 34, 'endSeason': 22, 'endDay': 89},
	{'player': 'Jenkins Ingram', 'startSeason': 22, 'startDay': 89, 'endSeason': 24, 'endDay': 99, shadowed: true},
	
	{'player': 'Jorge Ito', 'startSeason': 1, 'startDay': 1, 'endSeason': 3, 'endDay': 47},
	{'player': 'Caligula Lotus', 'startSeason': 3, 'startDay': 47, 'endSeason': 6, 'endDay': 31},
	{'player': 'Hiroto Cerna', 'startSeason': 6, 'startDay': 31, 'endSeason': 17, 'endDay': 36},
	{'player': 'Allan Kranch', 'startSeason': 17, 'startDay': 36, 'endSeason': 18, 'endDay': 'E'},
	{'player': 'Jaylen Hotdogfingers', 'startSeason': 18, 'startDay': 'E', 'endSeason': 22, 'endDay': 36},
	{'player': 'Jaylen Hotdogfingers', 'startSeason': 22, 'startDay': 36, 'endSeason': 22, 'endDay': 38, shadowed: true},
	{'player': 'Jaylen Hotdogfingers', 'startSeason': 22, 'startDay': 38, 'endSeason': 23, 'endDay': 118},
	
	{'player': 'Matheo Carpenter', 'startSeason': 1, 'startDay': 1, 'endSeason': 4, 'endDay': 59},
	{'player': 'Gloria Bugsnax', 'startSeason': 4, 'startDay': 59, 'endSeason': 17, 'endDay': 25},
	{'player': 'Gloria Bugsnax', 'startSeason': 17, 'startDay': 25, 'endSeason': 23, 'endDay': 90, pitcher: true},
	{'player': 'Gloria Bugsnax', 'startSeason': 23, 'startDay': 90, 'endSeason': 24, 'endDay': 99, shadowed: true}, //TODO: FMed thrice over S23
	
	{'player': 'Isaac Rubberman', 'startSeason': 1, 'startDay': 1, 'endSeason': 3, 'endDay': 82},
	{'player': 'Vito Kravitz', 'startSeason': 3, 'startDay': 82, 'endSeason': 4, 'endDay': 28},
	{'player': 'Moses Mason', 'startSeason': 4, 'startDay': 28, 'endSeason': 16, 'endDay': 2},
	{'player': 'Salih Ultrabass', 'startSeason': 16, 'startDay': 2, 'endSeason': 17, 'endDay': 'E'},
	{'player': 'Salih Ultrabass', 'startSeason': 17, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, shadowed: true},
	
	{'player': 'Jada Frederick', 'startSeason': 23, 'startDay': 118, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Dunn Keyes', 'startSeason': 1, 'startDay': 1, 'endSeason': 17, 'endDay': 25, pitcher: true},
	{'player': 'Dunn Keyes', 'startSeason': 17, 'startDay': 25, 'endSeason': 22, 'endDay': 17},
	{'player': 'Dunn Keyes', 'startSeason': 22, 'startDay': 17, 'endSeason': 22, 'endDay': 88, shadowed: true},
	{'player': 'Dunn Keyes', 'startSeason': 22, 'startDay': 88, 'endSeason': 24, 'endDay': 99, pitcher: true}, //TODO: FMed six times over S24?
	
	{'player': 'Zeboriah Whiskey', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 17, shadowed: true},
	{'player': 'Zeboriah Whiskey', 'startSeason': 22, 'startDay': 17, 'endSeason': 24, 'endDay': 99, pitcher: true},
	
	{'player': 'Zeboriah Wilson', 'startSeason': 1, 'startDay': 1, 'endSeason': 13, 'endDay': 'E', pitcher: true},
	{'player': 'Zeboriah Wilson', 'startSeason': 13, 'startDay': 'E', 'endSeason': 22, 'endDay': 1, shadowed: true},
	{'player': 'Zeboriah Wilson', 'startSeason': 22, 'startDay': 1, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Owen Picklestein', 'startSeason': 1, 'startDay': 1, 'endSeason': 14, 'endDay': 'E', pitcher: true},
	{'player': 'Owen Picklestein', 'startSeason': 14, 'startDay': 'E', 'endSeason': 20, 'endDay': 'E', shadowed: true},
	{'player': 'Owen Picklestein', 'startSeason': 20, 'startDay': 'E', 'endSeason': 22, 'endDay': 1},
	{'player': 'Owen Picklestein', 'startSeason': 22, 'startDay': 1, 'endSeason': 24, 'endDay': 99, pitcher: true},
	
	{'player': 'King Weatherman', 'startSeason': 1, 'startDay': 1, 'endSeason': 12, 'endDay': 'E', pitcher: true},
	{'player': 'Cory Twelve', 'startSeason': 12, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, pitcher: true}, //TODO: FMed 10x?
	
	{'player': 'Chambers Simmons', 'startSeason': 1, 'startDay': 1, 'endSeason': 17, 'endDay': 25, pitcher: true},
	{'player': 'Chambers Simmons', 'startSeason': 17, 'startDay': 25, 'endSeason': 24, 'endDay': 99},

	];

//batter and pitcher colors are selected from the Team Wiki page, shadowed is just a nice gray
const teamColors = {
	batter: "#D791E3",
	pitcher: "#9755A5",
	shadowed: "#cccccc"			
};