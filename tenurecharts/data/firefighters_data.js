//TEAM SPECIFIC DATA STARTS HERE
			
//batter and pitcher colors are selected from the Team Wiki page, shadowed is just a nice gray
const teamColors = {
	batter: "#8c2a3e",
	pitcher: "#d13757",
	shadowed: "#cccccc"			
};
						
//player names. this is the initial order they will be on the graph, top to bottom. linebreaks are just for readability when coding it
//if you want to keep the "Season 1 roster, changes cascading" sorting option, then the players should be in that order here.
//to make another sorting the default one, reorder the options in the select above
const names = ['Tyreek Olive', 'Paula Mason', 'Thomas Kirby', 'Socks Maybe',
			   'Declan Suzanne', 'Mags Banananana',
			   'Joshua Butt', 'Gita Sparrow',
			   'Isaac Johnson', 'Rush Valenzuela', 'Stout Schmitt',
			   'Edric Tosser', 'Agan Harrison', 'Conrad Twelve',
			   'Rivers Rosa', 'NaN', 'Dunlap Figueroa', 'Gabriel Griffith', 'Alyssa Harrell',
			   'Baby Triumphant',
			   'Lou Roseheart',
			   'Wesley Poole',
			   'Peanutiel Duffy',
			   'Peanut Holloway', 'Wanda Schenn', 'Mcdowell Mason',
			   'Caleb Alvarado', 'Clare Mccall',
			   'Justice Spoon', 'Alx Keming',
			   'Atlas Guerra', 'Axel Trololol', 'Joshua Watson', 'José Haley', 'Goobie Ballson', 'Carmelo Plums', 'Geepa Beanpot',
			   'Swamuel Mora',
			   'Mullen Peterson', 'Kennedy Rodgers', 'Zi Sliders', 'Alston England',
			   'Gerund Pantheocide'
];
			
//this is the data that will make the boxes on the graph. order doesn't matter, they'll be ordered by sortedNames above, 
//but if two boxes *overlap* then later box will be drawn over earlier one
//the "player" value must match the player name above
//tenure start and end season and day are just numbers as they exist on the site. if either happened during elections, that's 'E'
//Days X are converted to "last day of the season", they don't get to be "X"
//if the player is a pitcher during the timespan in question, put "pitcher: true" there. if they are shadowed, then "shadowed: true". without either they'll be a batter
const tenures = [
	{'player': 'Tyreek Olive', 'startSeason': 1, 'startDay': 1, 'endSeason': 2, 'endDay': 24},
	{'player': 'Paula Mason', 'startSeason': 2, 'startDay': 24, 'endSeason': 4, 'endDay': 4},
	{'player': 'Thomas Kirby', 'startSeason': 4, 'startDay': 4, 'endSeason': 9, 'endDay': 'E'},
	{'player': 'Socks Maybe', 'startSeason': 9, 'startDay': 'E', 'endSeason': 24, 'endDay': 23},
	{'player': 'Socks Maybe', 'startSeason': 24, 'startDay': 23, 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Declan Suzanne', 'startSeason': 1, 'startDay': 1, 'endSeason': 12, 'endDay': 'E'},
	{'player': 'Declan Suzanne', 'startSeason': 12, 'startDay': 'E', 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Mags Banananana', 'startSeason': 9, 'startDay': 99, 'endSeason': 12, 'endDay': 'E', shadowed: true},
	{'player': 'Mags Banananana', 'startSeason': 12, 'startDay': 'E', 'endSeason': 13, 'endDay': 'E'},

	{'player': 'Joshua Butt', 'startSeason': 1, 'startDay': 1, 'endSeason': 12, 'endDay': 79},
	{'player': 'Gita Sparrow', 'startSeason': 12, 'startDay': 79, 'endSeason': 24, 'endDay': 99},

	{'player': 'Isaac Johnson', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 63},
	{'player': 'Isaac Johnson', 'startSeason': 22, 'startDay': 63, 'endSeason': 22, 'endDay': 96, shadowed: true},
	{'player': 'Isaac Johnson', 'startSeason': 22, 'startDay': 96, 'endSeason': 23, 'endDay': 13},				
	{'player': 'Rush Valenzuela', 'startSeason': 1, 'startDay': 1, 'endSeason': 22, 'endDay': 63, shadowed: true},
	{'player': 'Rush Valenzuela', 'startSeason': 22, 'startDay': 63, 'endSeason': 22, 'endDay': 96},
	{'player': 'Rush Valenzuela', 'startSeason': 22, 'startDay': 96, 'endSeason': 24, 'endDay': 23, shadowed: true},
	{'player': 'Rush Valenzuela', 'startSeason': 24, 'startDay': 23, 'endSeason': 24, 'endDay': 99},
	{'player': 'Stout Schmitt', 'startSeason': 23, 'startDay': 13, 'endSeason': 24, 'endDay': 99},

	{'player': 'Edric Tosser', 'startSeason': 1, 'startDay': 1, 'endSeason': 5, 'endDay': 30},
	{'player': 'Edric Tosser', 'startSeason': 5, 'startDay': 30, 'endSeason': 12, 'endDay': 61, pitcher: true},
	{'player': 'Agan Harrison', 'startSeason': 12, 'startDay': 61, 'endSeason': 17, 'endDay': 'E', pitcher: true},
	{'player': 'Agan Harrison', 'startSeason': 17, 'startDay': 'E', 'endSeason': 18, 'endDay': 'E', shadowed: true},

	{'player': 'Conrad Twelve', 'startSeason': 1, 'startDay': 1, 'endSeason': 17, 'endDay': 'E', shadowed: true},
	{'player': 'Conrad Twelve', 'startSeason': 17, 'startDay': 'E', 'endSeason': 22, 'endDay': 35, pitcher: true},
	{'player': 'Conrad Twelve', 'startSeason': 22, 'startDay': 35, 'endSeason': 22, 'endDay': 37, shadowed: true},
	{'player': 'Conrad Twelve', 'startSeason': 22, 'startDay': 37, 'endSeason': 22, 'endDay': 57, pitcher: true},
	{'player': 'Conrad Twelve', 'startSeason': 22, 'startDay': 57, 'endSeason': 22, 'endDay': 'E', shadowed: true},

	{'player': 'Rivers Rosa', 'startSeason': 1, 'startDay': 1, 'endSeason': 5, 'endDay': 30},
	{'player': 'Rivers Rosa', 'startSeason': 5, 'startDay': 30, 'endSeason': 14, 'endDay': 67, pitcher: true},
	{'player': 'NaN', 'startSeason': 14, 'startDay': 67, 'endSeason': 14, 'endDay': 79, pitcher: true},
	{'player': 'Dunlap Figueroa', 'startSeason': 14, 'startDay': 79, 'endSeason': 14, 'endDay': 'E', pitcher: true},
	{'player': 'Gabriel Griffith', 'startSeason': 14, 'startDay': 'E', 'endSeason': 19, 'endDay':'E', pitcher: true},
	{'player': 'Gabriel Griffith', 'startSeason': 20, 'startDay': 'E', 'endSeason': 22, 'endDay': 21, pitcher: true},
	{'player': 'Gabriel Griffith', 'startSeason': 22, 'startDay': 21, 'endSeason': 22, 'endDay': 24, shadowed: true},
	{'player': 'Gabriel Griffith', 'startSeason': 22, 'startDay': 24, 'endSeason': 24, 'endDay': 99},
	{'player': 'Alyssa Harrell', 'startSeason': 19, 'startDay': 'E', 'endSeason': 20, 'endDay': 'E', pitcher: true},

	{'player': 'Baby Triumphant', 'startSeason': 1, 'startDay': 1, 'endSeason': 24, 'endDay': 99},

	{'player': 'Lou Roseheart', 'startSeason': 1, 'startDay': 1, 'endSeason': 15, 'endDay': 'E'},
	{'player': 'Lou Roseheart', 'startSeason': 15, 'startDay': 'E', 'endSeason': 20, 'endDay': 23, pitcher: true},
	{'player': 'Lou Roseheart', 'startSeason': 20, 'startDay': 23, 'endSeason': 24, 'endDay': 99},

	{'player': 'Wesley Poole', 'startSeason': 1, 'startDay': 1, 'endSeason': 5, 'endDay': 30},
	{'player': 'Wesley Poole', 'startSeason': 5, 'startDay': 30, 'endSeason': 15, 'endDay': 'E', pitcher: true},
	{'player': 'Wesley Poole', 'startSeason': 15, 'startDay': 'E', 'endSeason': 20, 'endDay': 23},
	{'player': 'Wesley Poole', 'startSeason': 20, 'startDay': 23, 'endSeason': 23, 'endDay': 74, pitcher: true},
	{'player': 'Wesley Poole', 'startSeason': 23, 'startDay': 74, 'endSeason': 23, 'endDay': 79, shadowed: true},
	{'player': 'Wesley Poole', 'startSeason': 23, 'startDay': 79, 'endSeason': 24, 'endDay': 99, pitcher: true},

	{'player': 'Peanutiel Duffy', 'startSeason': 10, 'startDay': 114, 'endSeason': 24, 'endDay': 99},

	{'player': 'Peanut Holloway', 'startSeason': 10, 'startDay': 114, 'endSeason': 13, 'endDay': 'E'},
	{'player': 'Wanda Schenn', 'startSeason': 13, 'startDay': 'E', 'endSeason': 20, 'endDay': 23},
	{'player': 'Wanda Schenn', 'startSeason': 20, 'startDay': 23, 'endSeason': 22, 'endDay': 'E', pitcher: true},
	{'player': 'Mcdowell Mason', 'startSeason': 22, 'startDay': 'E', 'endSeason': 24, 'endDay': 43, pitcher: true},
	{'player': 'Mcdowell Mason', 'startSeason': 24, 'startDay': 43, 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Caleb Alvarado', 'startSeason': 1, 'startDay': 1, 'endSeason': 19, 'endDay': 'E', pitcher: true},
	{'player': 'Caleb Alvarado', 'startSeason': 19, 'startDay': 'E', 'endSeason': 24, 'endDay': 2, shadowed: true},
	{'player': 'Caleb Alvarado', 'startSeason': 24, 'startDay': 2, 'endSeason': 24, 'endDay': 50, pitcher: true},
	{'player': 'Caleb Alvarado', 'startSeason': 24, 'startDay': 50, 'endSeason': 24, 'endDay': 99, shadowed: true},

	{'player': 'Justice Spoon', 'startSeason': 1, 'startDay': 1, 'endSeason': 5, 'endDay': 30, pitcher: true},
	{'player': 'Justice Spoon', 'startSeason': 5, 'startDay': 30, 'endSeason': 22, 'endDay': 58},
	{'player': 'Justice Spoon', 'startSeason': 22, 'startDay': 58, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Alx Keming', 'startSeason': 18, 'startDay': 1, 'endSeason': 22, 'endDay': 58, shadowed: true},
	{'player': 'Alx Keming', 'startSeason': 22, 'startDay': 58, 'endSeason': 22, 'endDay': 'E'},

	{'player': 'Atlas Guerra', 'startSeason': 1, 'startDay': 1, 'endSeason': 3, 'endDay': 'E', pitcher: true},
	{'player': 'Axel Trololol', 'startSeason': 3, 'startDay': 'E', 'endSeason': 5, 'endDay': 30, pitcher: true},
	{'player': 'Axel Trololol', 'startSeason': 5, 'startDay': 30, 'endSeason': 5, 'endDay': 'E'},
	{'player': 'Joshua Watson', 'startSeason': 5, 'startDay': 'E', 'endSeason': 7, 'endDay': 'E'},
	{'player': 'José Haley', 'startSeason': 7, 'startDay': 'E', 'endSeason': 8, 'endDay': 36},
	{'player': 'Goobie Ballson', 'startSeason': 8, 'startDay': 36, 'endSeason': 17, 'endDay': 'E'},
	{'player': 'Carmelo Plums', 'startSeason': 17, 'startDay': 'E', 'endSeason': 19, 'endDay': 42},
	{'player': 'Geepa Beanpot', 'startSeason': 19, 'startDay': 42, 'endSeason': 21, 'endDay': 'E'},
	{'player': 'Geepa Beanpot', 'startSeason': 21, 'startDay': 'E', 'endSeason': 23, 'endDay': 31, shadowed: true},
	{'player': 'Geepa Beanpot', 'startSeason': 23, 'startDay': 31, 'endSeason': 24, 'endDay': 2, pitcher: true},
	{'player': 'Geepa Beanpot', 'startSeason': 24, 'startDay': 2, 'endSeason': 24, 'endDay': 50, shadowed: true},
	{'player': 'Geepa Beanpot', 'startSeason': 24, 'startDay': 50, 'endSeason': 24, 'endDay': 99, pitcher: true},

	{'player': 'Swamuel Mora', 'startSeason': 1, 'startDay': 1, 'endSeason': 5, 'endDay': 30, pitcher: true},
	{'player': 'Swamuel Mora', 'startSeason': 5, 'startDay': 30, 'endSeason': 24, 'endDay': 99},

	{'player': 'Mullen Peterson', 'startSeason': 1, 'startDay': 1, 'endSeason': 7, 'endDay': 'E', pitcher: true},
	{'player': 'Kennedy Rodgers', 'startSeason': 7, 'startDay': 'E', 'endSeason': 21, 'endDay': 52, pitcher: true},
	{'player': 'Kennedy Rodgers', 'startSeason': 21, 'startDay': 52, 'endSeason': 24, 'endDay': 99, shadowed: true},
	{'player': 'Zi Sliders', 'startSeason': 1, 'startDay': 1, 'endSeason': 21, 'endDay': 52, shadowed: true},
	{'player': 'Zi Sliders', 'startSeason': 21, 'startDay': 52, 'endSeason': 21, 'endDay': 77, pitcher: true},
	{'player': 'Zi Sliders', 'startSeason': 21, 'startDay': 77, 'endSeason': 22, 'endDay': 2, shadowed: true},
	{'player': 'Zi Sliders', 'startSeason': 22, 'startDay': 2, 'endSeason': 22, 'endDay': 12, pitcher: true},
	{'player': 'Zi Sliders', 'startSeason': 22, 'startDay': 12, 'endSeason': 22, 'endDay': 21, shadowed: true},
	{'player': 'Zi Sliders', 'startSeason': 22, 'startDay': 21, 'endSeason': 22, 'endDay': 26, pitcher: true},
	{'player': 'Zi Sliders', 'startSeason': 22, 'startDay': 26, 'endSeason': 22, 'endDay': 32, shadowed: true},
	{'player': 'Zi Sliders', 'startSeason': 22, 'startDay': 32, 'endSeason': 22, 'endDay': 37, pitcher: true},
	{'player': 'Zi Sliders', 'startSeason': 22, 'startDay': 37, 'endSeason': 22, 'endDay': 57, shadowed: true},
	{'player': 'Zi Sliders', 'startSeason': 22, 'startDay': 57, 'endSeason': 24, 'endDay': 39, pitcher: true},
	{'player': 'Zi Sliders', 'startSeason': 24, 'startDay': 39, 'endSeason': 24, 'endDay': 42, pitcher: true}, 
	{'player': 'Zi Sliders', 'startSeason': 24, 'startDay': 42, 'endSeason': 24, 'endDay': 99, pitcher: true}, 

	{'player': 'Alston England', 'startSeason': 1, 'startDay': 1, 'endSeason': 21, 'endDay': 77, shadowed: true},
	{'player': 'Alston England', 'startSeason': 21, 'startDay': 77, 'endSeason': 22, 'endDay': 2, pitcher: true},
	{'player': 'Alston England', 'startSeason': 22, 'startDay': 2, 'endSeason': 22, 'endDay': 12, shadowed: true},
	{'player': 'Alston England', 'startSeason': 22, 'startDay': 12, 'endSeason': 22, 'endDay': 32, pitcher: true},
	{'player': 'Alston England', 'startSeason': 22, 'startDay': 32, 'endSeason': 22, 'endDay': 35, shadowed: true},
	{'player': 'Alston England', 'startSeason': 22, 'startDay': 35, 'endSeason': 23, 'endDay': 65, pitcher: true},
	{'player': 'Alston England', 'startSeason': 23, 'startDay': 65, 'endSeason': 23, 'endDay': 70, shadowed: true},
	{'player': 'Alston England', 'startSeason': 23, 'startDay': 70, 'endSeason': 24, 'endDay': 42, pitcher: true},
	{'player': 'Alston England', 'startSeason': 24, 'startDay': 42, 'endSeason': 24, 'endDay': 43, shadowed: true},
	{'player': 'Alston England', 'startSeason': 24, 'startDay': 43, 'endSeason': 24, 'endDay': 99, pitcher: true},

	{'player': 'Clare Mccall', 'startSeason': 1, 'startDay': 1, 'endSeason': 19, 'endDay': 'E', shadowed: true},
	{'player': 'Clare Mccall', 'startSeason': 19, 'startDay': 'E', 'endSeason': 20, 'endDay': 23, pitcher: true},
	{'player': 'Clare Mccall', 'startSeason': 20, 'startDay': 23, 'endSeason': 22, 'endDay': 24},
	{'player': 'Clare Mccall', 'startSeason': 22, 'startDay': 24, 'endSeason': 22, 'endDay': 26, shadowed: true},
	{'player': 'Clare Mccall', 'startSeason': 22, 'startDay': 26, 'endSeason': 23, 'endDay': 31, pitcher: true},
	{'player': 'Clare Mccall', 'startSeason': 23, 'startDay': 31, 'endSeason': 23, 'endDay': 65, shadowed: true},
	{'player': 'Clare Mccall', 'startSeason': 23, 'startDay': 65, 'endSeason': 23, 'endDay': 70, pitcher: true},
	{'player': 'Clare Mccall', 'startSeason': 23, 'startDay': 70, 'endSeason': 23, 'endDay': 74, shadowed: true},
	{'player': 'Clare Mccall', 'startSeason': 23, 'startDay': 74, 'endSeason': 23, 'endDay': 79, pitcher: true},
	{'player': 'Clare Mccall', 'startSeason': 23, 'startDay': 79, 'endSeason': 24, 'endDay': 39, shadowed: true},
	{'player': 'Clare Mccall', 'startSeason': 24, 'startDay': 39, 'endSeason': 24, 'endDay': 99, pitcher: true},

	{'player': 'Gerund Pantheocide', 'startSeason': 23, 'startDay': 118, 'endSeason': 24, 'endDay': 99, pitcher: true},
]
