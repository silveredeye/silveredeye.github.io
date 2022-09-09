//TIGERS TEAM SPECIFIC DATA: player names and tenures

//player names. this is the initial order they will be on the graph, top to bottom. linebreaks are just for readability when coding it
//if you want to keep the "Season 1 roster, changes cascading" sorting option, then the players should be in that order here.
//to make another sorting the default one, reorder the options in the select above
const names = ['Fish Summer', 'Richmond Harrison',
			   'Landry Violence', 'Paula Turnip', 'Paula Mason', 'Dudley Mueller', 'Beasley Day', 
			   'Nagomi Mcdaniel', 'Nolanestophia Patterson', 'Jessica Telephone', 'Spears Taylor', 'Aldon Cashmoney', 'Aldon Cashmoney II', 'Aldon Cashmoney III',
			   'Nerd Pacheco', 'Lachlan Shelton', 'Erin Jesaulenko',
			   'Alyssa Harrell', 'Mclaughlin Scorpler', 'Frasier Shmurmgle', 'Usurper Violet', 'Ayanna Dumpington',
			   'Peanutiel Duffy',
			   'Moody Cookbook', 'Carmelo Plums',
			   'Ren Morin', 'Matteo Triumphant',
			   'Hatfield Suzuki',
			   'Zion Aliciakeyes', 'Lottie Ceilingfan', 'Irnee Bluesky',
			   'Randy Castillo', 'Daniel Koch',
			   'Liquid Friend XVI', 'Uncle Plasma XVI',
			   'Parker MacMillan',
			   'Nagomi Meng',
			   'Nicholas Mora', 'Yazmin Mason', 'Mummy Melcon', 'Bartleby Zhivago', 'Sullivan Septemberish',
			   'Hiroto Wilcox', 'Lenny Marijuana', 'Siobhan Chark', 'Walton Sports',
			   'Dunlap Figueroa', 'NaN',
			   'Famous Owens',
			   'Baldwin Breadwinner',
			   'Chorby Short',
			   'Mags Banananana',
			   'Castillo Turner'
];
			
//this is the data that will make the boxes on the graph. order doesn't matter, they'll be ordered by sortedNames, 
//but if two boxes *overlap* then later box will be drawn over earlier one
//the "player" value must match the player name above
//tenure start and end season and day are just numbers as they exist on the site. if either happened during elections, that's 'E'
//Days X are converted to "last day of the season", they don't get to be "X"
//if the player is a pitcher during the timespan in question, put "pitcher: true" there. if they are shadowed, then "shadowed: true". without either they'll be a batter
const tenures = [
	{'player': 'Fish Summer', 'startSeason': 1, 'startDay': 1, 'endSeason': 6, 'endDay': 19},
	{'player': 'Richmond Harrison', 'startSeason': 6, 'startDay': 19, 'endSeason': 13, 'endDay': 'E'},
	{'player': 'Landry Violence', 'startSeason': 1, 'startDay': 1, 'endSeason': 3, 'endDay': 110},
	{'player': 'Paula Turnip', 'startSeason': 3, 'startDay': 110, 'endSeason': 8, 'endDay': 71},
	{'player': 'Paula Mason', 'startSeason': 8, 'startDay': 71, 'endSeason': 20, 'endDay': 'E'},
	{'player': 'Dudley Mueller', 'startSeason': 20, 'startDay': 'E', 'endSeason': 21, 'endDay': 'E'},
	{'player': 'Beasley Day', 'startSeason': 21, 'startDay': 'E', 'endSeason': 24, 'endDay': 99},

	{'player': 'Nagomi Mcdaniel', 'startSeason': 1, 'startDay': 1, 'endSeason': 1, 'endDay': 'E'},
	{'player': 'Nolanestophia Patterson', 'startSeason': 1, 'startDay': 'E', 'endSeason': 2, 'endDay': 'E'},
	{'player': 'Jessica Telephone', 'startSeason': 2, 'startDay': 'E', 'endSeason': 4, 'endDay': 43},
	{'player': 'Spears Taylor', 'startSeason': 4, 'startDay': 43, 'endSeason': 8, 'endDay': 'E'},
	{'player': 'Aldon Cashmoney', 'startSeason': 8, 'startDay': 'E', 'endSeason': 12, 'endDay': 'E'},
	{'player': 'Aldon Cashmoney', 'startSeason': 13, 'startDay': 'E', 'endSeason': 18, 'endDay': 99},
	{'player': 'Nerd Pacheco', 'startSeason': 12, 'startDay': 'E', 'endSeason': 13, 'endDay': 'E'},
	{'player': 'Nicholas Mora', 'startSeason': 13, 'startDay': 'E', 'endSeason': 21, 'endDay': 'E'},
	{'player': 'Lachlan Shelton', 'startSeason': 21, 'startDay': 'E', 'endSeason': 22, 'endDay': 79},
	{'player': 'Lachlan Shelton', 'startSeason': 22, 'startDay': 79, 'endSeason': 22, 'endDay': 89, shadowed: true},
	{'player': 'Lachlan Shelton', 'startSeason': 22, 'startDay': 89, 'endSeason': 22, 'endDay': 'E'},
	{'player': 'Erin Jesaulenko', 'startSeason': 22, 'startDay': 'E', 'endSeason': 24, 'endDay': 5},
	{'player': 'Erin Jesaulenko', 'startSeason': 24, 'startDay': 5, 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Aldon Cashmoney II', 'startSeason': 18, 'startDay': 'E', 'endSeason': 19, 'endDay': 'E'},
	{'player': 'Aldon Cashmoney III', 'startSeason': 19, 'startDay': 73, 'endSeason': 19, 'endDay': 'E'},

	{'player': 'Alyssa Harrell', 'startSeason': 1, 'startDay': 1, 'endSeason': 3, 'endDay': 'E'},
	{'player': 'Mclaughlin Scorpler', 'startSeason': 3, 'startDay': 'E', 'endSeason': 7, 'endDay': 32},
	{'player': 'Frasier Shmurmgle', 'startSeason': 7, 'startDay': 32, 'endSeason': 7, 'endDay': 71},
	{'player': 'Usurper Violet', 'startSeason': 7, 'startDay': 71, 'endSeason': 15, 'endDay': 'E'},
	{'player': 'Jessica Telephone', 'startSeason': 15, 'startDay': 'E', 'endSeason': 16, 'endDay': 'E'},
	{'player': 'Ayanna Dumpington', 'startSeason': 16, 'startDay': 'E', 'endSeason': 24, 'endDay': 99},

	{'player': 'Peanutiel Duffy', 'startSeason': 1, 'startDay': 1, 'endSeason': 9, 'endDay': 117},

	{'player': 'Moody Cookbook', 'startSeason': 1, 'startDay': 1, 'endSeason': 7, 'endDay': 32},
	{'player': 'Carmelo Plums', 'startSeason': 7, 'startDay': 32, 'endSeason': 13, 'endDay': 'E'},
	{'player': 'Paula Turnip', 'startSeason': 13, 'startDay': 'E', 'endSeason': 21, 'endDay': 'E'},
	{'player': 'Paula Turnip', 'startSeason': 21, 'startDay': 'E', 'endSeason': 22, 'endDay': 'E', pitcher: true},
	{'player': 'Paula Turnip', 'startSeason': 22, 'startDay': 'E', 'endSeason': 23, 'endDay': 99, shadowed: true},
							 
	{'player': 'Ren Morin', 'startSeason': 1, 'startDay': 1, 'endSeason': 12, 'endDay': 'E'},
	{'player': 'Ren Morin', 'startSeason': 12, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Matteo Triumphant', 'startSeason': 1, 'startDay': 1, 'endSeason': 12, 'endDay': 'E', shadowed: true},
	{'player': 'Matteo Triumphant', 'startSeason': 12, 'startDay': 'E', 'endSeason': 21, 'endDay': 114},
	{'player': 'Matteo Triumphant', 'startSeason': 21, 'startDay': 114, 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Hatfield Suzuki', 'startSeason': 21, 'startDay': 'E', 'endSeason': 24, 'endDay': 99},

	{'player': 'Zion Aliciakeyes', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 4},
	{'player': 'Zion Aliciakeyes', 'startSeason': 22, 'startDay': 4, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Lottie Ceilingfan', 'startSeason': 21, 'startDay': 99, 'endSeason': 22, 'endDay': 4, shadowed: true},
	{'player': 'Lottie Ceilingfan', 'startSeason': 22, 'startDay': 4, 'endSeason': 22, 'endDay': 58},
	{'player': 'Lottie Ceilingfan', 'startSeason': 22, 'startDay': 58, 'endSeason': 22, 'endDay': 79, shadowed: true},
	{'player': 'Lottie Ceilingfan', 'startSeason': 22, 'startDay': 79, 'endSeason': 24, 'endDay': 99},

	{'player': 'Irnee Bluesky', 'startSeason': 18, 'startDay': 99, 'endSeason': 22, 'endDay': 37, shadowed: true},
	{'player': 'Irnee Bluesky', 'startSeason': 22, 'startDay': 37, 'endSeason': 22, 'endDay': 38},
	{'player': 'Irnee Bluesky', 'startSeason': 22, 'startDay': 38, 'endSeason': 22, 'endDay': 58, shadowed: true},
	{'player': 'Irnee Bluesky', 'startSeason': 22, 'startDay': 58, 'endSeason': 22, 'endDay': 89},
	{'player': 'Irnee Bluesky', 'startSeason': 22, 'startDay': 89, 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Randy Castillo', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 35},
	{'player': 'Randy Castillo', 'startSeason': 22, 'startDay': 35, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Daniel Koch', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 35, shadowed: true},
	{'player': 'Daniel Koch', 'startSeason': 22, 'startDay': 35, 'endSeason': 22, 'endDay': 37},
	{'player': 'Daniel Koch', 'startSeason': 22, 'startDay': 37, 'endSeason': 22, 'endDay': 38, shadowed: true},
	{'player': 'Daniel Koch', 'startSeason': 22, 'startDay': 35, 'endSeason': 24, 'endDay': 99},

	{'player': 'Liquid Friend XVI', 'startSeason': 22, 'startDay': 73, 'endSeason': 22, 'endDay': 'E'},
	{'player': 'Uncle Plasma XVI', 'startSeason': 22, 'startDay': 73, 'endSeason': 22, 'endDay': 'E'},

	{'player': 'Parker MacMillan', 'startSeason': 24, 'startDay': 45, 'endSeason': 24, 'endDay': 54},
	{'player': 'Parker MacMillan', 'startSeason': 24, 'startDay': 72, 'endSeason': 24, 'endDay': 81},
	{'player': 'Parker MacMillan', 'startSeason': 24, 'startDay': 90, 'endSeason': 24, 'endDay': 99},

	{'player': 'Nagomi Meng', 'startSeason': 1, 'startDay': 1, 'endSeason': 8, 'endDay': 'E', pitcher: true},
	{'player': 'Nagomi Meng', 'startSeason': 8, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Nicholas Mora', 'startSeason': 1, 'startDay': 1, 'endSeason': 1, 'endDay': 'E', pitcher: true},
	{'player': 'Yazmin Mason', 'startSeason': 1, 'startDay': 'E', 'endSeason': 7, 'endDay': 71, pitcher: true},
	{'player': 'Mummy Melcon', 'startSeason': 7, 'startDay': 71, 'endSeason': 15, 'endDay': 'E', pitcher: true},
	{'player': 'Mummy Melcon', 'startSeason': 15, 'startDay': 'E', 'endSeason': 19, 'endDay': 'E', shadowed: true},
	{'player': 'Mummy Melcon', 'startSeason': 19, 'startDay': 'E', 'endSeason': 23, 'endDay': 88, pitcher: true},
	{'player': 'Mummy Melcon', 'startSeason': 23, 'startDay': 88, 'endSeason': 24, 'endDay': 5, shadowed: true},
	{'player': 'Mummy Melcon', 'startSeason': 24, 'startDay': 5, 'endSeason': 24, 'endDay': 99},
	{'player': 'Bartleby Zhivago', 'startSeason': 23, 'startDay': 12, 'endSeason': 23, 'endDay': 88, shadowed: true},
	{'player': 'Bartleby Zhivago', 'startSeason': 23, 'startDay': 88, 'endSeason': 24, 'endDay': 68, pitcher: true},
	{'player': 'Bartleby Zhivago', 'startSeason': 24, 'startDay': 68, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Sullivan Septemberish', 'startSeason': 1, 'startDay': 1, 'endSeason': 24, 'endDay': 68, shadowed: true},
	{'player': 'Sullivan Septemberish', 'startSeason': 24, 'startDay': 68, 'endSeason': 24, 'endDay': 99, pitcher: true},

	{'player': 'Lenny Marijuana', 'startSeason': 16, 'startDay': 'E', 'endSeason': 17, 'endDay': 'E', pitcher: true},
	{'player': 'Hiroto Wilcox', 'startSeason': 1, 'startDay': 1, 'endSeason': 16, 'endDay': 'E', pitcher: true},
	{'player': 'Hiroto Wilcox', 'startSeason': 17, 'startDay': 'E', 'endSeason': 23, 'endDay': 83, pitcher: true},
	{'player': 'Siobhan Chark', 'startSeason': 23, 'startDay': 83, 'endSeason': 23, 'endDay': 95, pitcher: true},
	{'player': 'Walton Sports', 'startSeason': 23, 'startDay': 95, 'endSeason': 24, 'endDay': 99, pitcher: true},
							 
	{'player': 'Dunlap Figueroa', 'startSeason': 1, 'startDay': 1, 'endSeason': 14, 'endDay': 79, pitcher: true},
	{'player': 'NaN', 'startSeason': 14, 'startDay': 79, 'endSeason': 14, 'endDay': 'E', pitcher: true},
	{'player': 'Dunlap Figueroa', 'startSeason': 14, 'startDay': 'E', 'endSeason': 23, 'endDay': 43, pitcher: true},

	{'player': 'Famous Owens', 'startSeason': 1, 'startDay': 1, 'endSeason': 19, 'endDay': 'E', pitcher: true},
	{'player': 'Famous Owens', 'startSeason': 19, 'startDay': 'E', 'endSeason': 21, 'endDay': 114, shadowed: true},
	{'player': 'Famous Owens', 'startSeason': 21, 'startDay': 114, 'endSeason': 24, 'endDay': 99},
	
	{'player': 'Baldwin Breadwinner', 'startSeason': 22, 'startDay': 99, 'endSeason': 22, 'endDay': 108, pitcher: true},

	{'player': 'Chorby Short', 'startSeason': 23, 'startDay': 18, 'endSeason': 23, 'endDay': 27, pitcher: true},
	
	{'player': 'Mags Banananana', 'startSeason': 23, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, pitcher: true},
	
	{'player': 'Castillo Turner', 'startSeason': 24, 'startDay': 27, 'endSeason': 24, 'endDay': 36, pitcher: true},
]

//batter and pitcher colors are selected from the Team Wiki page, shadowed is just a nice gray
const teamColors = {
	batter: "#5c1c1c",
	pitcher: "#c32229",
	shadowed: "#cccccc"			
};
