//TALKERS TEAM SPECIFIC DATA: player names and tenures

//player names. this is the initial order they will be on the graph, top to bottom. linebreaks are just for readability when coding it
//if you want to keep the "Season 1 roster, changes cascading" sorting option, then the players should be in that order here.
//to make another sorting the default one, reorder the options in the select above
const names = [ 'Kennedy Alstott', 'Lachlan Shelton', 'Antonio Wallace', 'Beans McBlase',
			   'Tyler Violet', 'Ziwa Mueller', 'Tiana Wheeler',
			   'Elijah Bates', 'Kiki Familia', 'Quack Enjoyable', 'Cedric Spliff', 'London Simmons',
			   'Trevino Merritt', 'Simon Haley',
			   'Joe Voorhees', 'Workman Gloom', 'Commissioner Vapor',
			   'Jesús Koch',
			   'Eugenia Garbage', 'Montgomery Bullock',
			   'Richmond Harrison', 'Fish Summer', 'Randy Dennis', 'Slosh Truk', 
			   'Hobbs Cain', 'Alston Cerveza', 
			   'York Silk', 'Carmelo Plums', 'Goobie Ballson', 'Cudi Di Batterino', 'Freemium Seraph', 'Lucien Patchwork',
			   'York Silk III',
			   'Chorby Soul VI',
			   'Liquid Friend XII',
			   'Oliver Notarobot', 'PolkaDot Patterson', 'Doc Anice', 'Bright Zimmerman', 'Sixpack Dogwalker', 'Augusto Reddick',
			   'Greer Lott', 'Jacoby Podcast', 'Premjeet Liu',
			   'Jenkins Good',
			   'Ortiz Morse', 'Jaylen Hotdogfingers', 'Beasley Gloom', 'Amos Melon', 'Nova Gesundheit',
			   'Mags Banananana', 'Spears Nolan',
			   'Mooney Doctor',
			   'Uncle Plasma XII',
			   'Alejandro Leaf'
];

//this is the data that will make the boxes on the graph. order doesn't matter, they'll be ordered by sortedNames, 
//but if two boxes *overlap* then later box will be drawn over earlier one
//the "player" value must match the player name above
//tenure start and end season and day are just numbers as they exist on the site. if either happened during elections, that's 'E'
//Days X are converted to "last day of the season", they don't get to be "X"
//if the player is a pitcher during the timespan in question, put "pitcher: true" there. if they are shadowed, then "shadowed: true". without either they'll be a batter
const tenures = [
	{'player':'Kennedy Alstott', 'startSeason':1, 'startDay':1, 'endSeason':3, 'endDay':19, },
	{'player':'Lachlan Shelton', 'startSeason':3, 'startDay':19, 'endSeason':6, 'endDay':23, },
	{'player':'Lachlan Shelton', 'startSeason':8, 'startDay':44, 'endSeason':21, 'endDay':"E", },
	{'player':'Antonio Wallace', 'startSeason':6, 'startDay':23, 'endSeason':7, 'endDay':33, },
	{'player':'Beans McBlase', 'startSeason':7, 'startDay':33, 'endSeason':20, 'endDay':"E", },
	
	{'player':'Tyler Violet', 'startSeason':1, 'startDay':1, 'endSeason':3, 'endDay':44, },
	{'player':'Ziwa Mueller', 'startSeason':3, 'startDay':44, 'endSeason':19, 'endDay':33, },
	{'player':'Ziwa Mueller', 'startSeason':19, 'startDay':33, 'endSeason':22, 'endDay':"E", 'pitcher':true, },
	{'player':'Tiana Wheeler', 'startSeason':22, 'startDay':"E", 'endSeason':23, 'endDay':30, 'pitcher':true, },
	{'player':'Tiana Wheeler', 'startSeason':23, 'startDay':30, 'endSeason':24, 'endDay':45, 'shadowed':true},
	{'player':'Tiana Wheeler', 'startSeason':24, 'startDay':45, 'endSeason':24, 'endDay':99, },
	
	{'player':'Elijah Bates', 'startSeason':1, 'startDay':1, 'endSeason':7, 'endDay':32, },
	{'player':'Kiki Familia', 'startSeason':7, 'startDay':32, 'endSeason':7, 'endDay':33, },
	{'player':'Quack Enjoyable', 'startSeason':7, 'startDay':33, 'endSeason':8, 'endDay':42, },
	{'player':'Cedric Spliff', 'startSeason':8, 'startDay':42, 'endSeason':22, 'endDay':15, },
	{'player':'Cedric Spliff', 'startSeason':22, 'startDay':15, 'endSeason':24, 'endDay':99, 'shadowed':true},
	{'player':'London Simmons', 'startSeason':2, 'startDay':28, 'endSeason':22, 'endDay':15, 'shadowed':true},
	{'player':'London Simmons', 'startSeason':22, 'startDay':15, 'endSeason':24, 'endDay':99, },
	
	{'player':'Trevino Merritt', 'startSeason':1, 'startDay':1, 'endSeason':2, 'endDay':63, },
	{'player':'Simon Haley', 'startSeason':2, 'startDay':63, 'endSeason':8, 'endDay':44, },
	
	{'player':'Joe Voorhees', 'startSeason':1, 'startDay':1, 'endSeason':4, 'endDay':28, },
	{'player':'Workman Gloom', 'startSeason':4, 'startDay':28, 'endSeason':7, 'endDay':81, },
	{'player':'Commissioner Vapor', 'startSeason':7, 'startDay':81, 'endSeason':20, 'endDay':"E", },
	
	{'player':'Jesús Koch', 'startSeason':1, 'startDay':1, 'endSeason':20, 'endDay':9, },
	{'player':'Jesús Koch', 'startSeason':20, 'startDay':27, 'endSeason':20, 'endDay':36, },
	
	{'player':'Eugenia Garbage', 'startSeason':1, 'startDay':1, 'endSeason':23, 'endDay':117, },
	{'player':'Eugenia Garbage', 'startSeason':23, 'startDay':"E", 'endSeason':24, 'endDay':16, 'pitcher':true, },
	{'player':'Eugenia Garbage', 'startSeason':24, 'startDay':16, 'endSeason':24, 'endDay':37, 'shadowed':true},
	{'player':'Eugenia Garbage', 'startSeason':24, 'startDay':37, 'endSeason':24, 'endDay':53, 'pitcher':true, },
	{'player':'Eugenia Garbage', 'startSeason':24, 'startDay':53, 'endSeason':24, 'endDay':99, 'shadowed':true},
	{'player':'Montgomery Bullock', 'startSeason':24, 'startDay':15, 'endSeason':24, 'endDay':16, 'shadowed':true},
	{'player':'Montgomery Bullock', 'startSeason':24, 'startDay':16, 'endSeason':24, 'endDay':99, 'pitcher':true, },
	
	{'player':'Richmond Harrison', 'startSeason':1, 'startDay':1, 'endSeason':6, 'endDay':19, },
	{'player':'Richmond Harrison', 'startSeason':16, 'startDay':"E", 'endSeason':18, 'endDay':"E", },
	{'player':'Fish Summer', 'startSeason':6, 'startDay':19, 'endSeason':15, 'endDay':"E", },
	{'player':'York Silk', 'startSeason':10, 'startDay':"E", 'endSeason':14, 'endDay':87, },
	{'player':'York Silk', 'startSeason':15, 'startDay':"E", 'endSeason':16, 'endDay':"E", },
	{'player':'Carmelo Plums', 'startSeason':16, 'startDay':"E", 'endSeason':17, 'endDay':"E", },
	{'player':'Goobie Ballson', 'startSeason':17, 'startDay':"E", 'endSeason':18, 'endDay':72, 'pitcher':true, },
	{'player':'Goobie Ballson', 'startSeason':18, 'startDay':72, 'endSeason':19, 'endDay':94, 'shadowed':true},
	{'player':'Goobie Ballson', 'startSeason':19, 'startDay':94, 'endSeason':19, 'endDay':"E", 'pitcher':true, },
	{'player':'Augusto Reddick', 'startSeason':2, 'startDay':28, 'endSeason':16, 'endDay':"E", 'shadowed':true}, 
	{'player':'Augusto Reddick', 'startSeason':16, 'startDay':"E", 'endSeason':18, 'endDay':20, 'pitcher':true, }, 
	{'player':'Augusto Reddick', 'startSeason':18, 'startDay':20, 'endSeason':18, 'endDay':72, 'shadowed':true}, 
	{'player':'Augusto Reddick', 'startSeason':18, 'startDay':72, 'endSeason':19, 'endDay':33, 'pitcher':true, }, 
	{'player':'Augusto Reddick', 'startSeason':19, 'startDay':33, 'endSeason':21, 'endDay':"E", },
	{'player':'Lucien Patchwork', 'startSeason':14, 'startDay':87, 'endSeason':24, 'endDay':99, },
	{'player':'Randy Dennis', 'startSeason':18, 'startDay':"E", 'endSeason':22, 'endDay':"E", },
	{'player':'Slosh Truk', 'startSeason':22, 'startDay':"E", 'endSeason':23, 'endDay':117, },
	{'player':'Slosh Truk', 'startSeason': 23, 'startDay':117, 'endSeason':24, 'endDay':99, 'pitcher':true, },
	{'player':'Cudi Di Batterino', 'startSeason':19, 'startDay':"E", 'endSeason':20, 'endDay':79, 'pitcher':true, },
	{'player':'Cudi Di Batterino', 'startSeason':20, 'startDay':79, 'endSeason':21, 'endDay':45, 'shadowed':true},
	{'player':'Cudi Di Batterino', 'startSeason':21, 'startDay':45, 'endSeason':21, 'endDay':"E", 'pitcher':true, },
	{'player':'Freemium Seraph', 'startSeason':21, 'startDay':"E", 'endSeason':22, 'endDay':25, 'pitcher':true, },
	{'player':'Freemium Seraph', 'startSeason': 22, 'startDay':25, 'endSeason':24, 'endDay':99, 'shadowed':true},
	
	{'player':'Hobbs Cain', 'startSeason':1, 'startDay':1, 'endSeason':6, 'endDay':82, },
	{'player':'Alston Cerveza', 'startSeason':6, 'startDay':82, 'endSeason':16, 'endDay':"E", },
	
	{'player':'York Silk III', 'startSeason':18, 'startDay':73, 'endSeason':18, 'endDay':"E", },
	
	{'player':'Chorby Soul VI', 'startSeason':20, 'startDay':73, 'endSeason':20, 'endDay':"E", },
	
	{'player':'Liquid Friend XII', 'startSeason':22, 'startDay':73, 'endSeason':22, 'endDay':"E", },
	
	
	{'player':'Oliver Notarobot', 'startSeason':1, 'startDay':1, 'endSeason':2, 'endDay':"E", 'pitcher':true, },
	{'player':'PolkaDot Patterson', 'startSeason':2, 'startDay':"E", 'endSeason':12, 'endDay':"E", 'pitcher':true, },
	{'player':'PolkaDot Patterson', 'startSeason':13, 'startDay':"E", 'endSeason':15, 'endDay':"E", 'pitcher':true, }, 
	{'player':'PolkaDot Patterson', 'startSeason':21, 'startDay':"E", 'endSeason':24, 'endDay':45, },
	{'player':'PolkaDot Patterson', 'startSeason':24, 'startDay':45, 'endSeason':24, 'endDay':99, 'shadowed':true},
	{'player':'Doc Anice', 'startSeason':12, 'startDay':"E", 'endSeason':13, 'endDay':41, 'pitcher':true, },
	{'player':'Bright Zimmerman', 'startSeason':13, 'startDay':41, 'endSeason':14, 'endDay':"E", 'pitcher':true, },
	{'player':'Sixpack Dogwalker', 'startSeason':15, 'startDay':"E", 'endSeason':16, 'endDay':"E", 'pitcher':true, },
	{'player':'Sixpack Dogwalker', 'startSeason':16, 'startDay':"E", 'endSeason':24, 'endDay':99, 'shadowed':true},
	
	{'player':'Greer Lott', 'startSeason':1, 'startDay':1, 'endSeason':20, 'endDay':92, 'pitcher':true, }, 
	{'player':'Greer Lott', 'startSeason':20, 'startDay':"E", 'endSeason':22, 'endDay':88, }, 
	{'player':'Greer Lott', 'startSeason':22, 'startDay':88, 'endSeason':22, 'endDay':90, 'shadowed':true}, 
	{'player':'Greer Lott', 'startSeason':22, 'startDay':90, 'endSeason':22, 'endDay':"E", }, 
	{'player':'Greer Lott', 'startSeason':22, 'startDay':"E", 'endSeason':24, 'endDay':99, 'pitcher':true, },
	{'player':'Jacoby Podcast', 'startSeason':20, 'startDay':92, 'endSeason':24, 'endDay':43, 'pitcher':true, }, 
	{'player':'Jacoby Podcast', 'startSeason':24, 'startDay':43, 'endSeason':24, 'endDay':44, 'shadowed':true}, 
	{'player':'Jacoby Podcast', 'startSeason':24, 'startDay':44, 'endSeason':24, 'endDay':99, 'pitcher':true, },
	{'player':'Mags Banananana', 'startSeason':22, 'startDay':"E", 'endSeason':23, 'endDay':35, 'pitcher':true, }, 
	{'player':'Mags Banananana', 'startSeason':23, 'startDay':35, 'endSeason':23, 'endDay':49, 'shadowed':true}, 
	{'player':'Mags Banananana', 'startSeason': 23, 'startDay':49, 'endSeason':23, 'endDay':"E", 'pitcher':true, },
	{'player':'Premjeet Liu', 'startSeason':13, 'startDay':99, 'endSeason':22, 'endDay':88, 'shadowed':true}, 
	{'player':'Premjeet Liu', 'startSeason':22, 'startDay':88, 'endSeason':22, 'endDay':90, }, 
	{'player':'Premjeet Liu', 'startSeason':22, 'startDay':90, 'endSeason':24, 'endDay':99, 'shadowed':true},
	{'player':'Spears Nolan', 'startSeason':2, 'startDay':28, 'endSeason':23, 'endDay':35, 'shadowed':true},
	{'player':'Spears Nolan', 'startSeason': 23, 'startDay':35, 'endSeason':24, 'endDay':15, 'pitcher':true, },
	{'player':'Spears Nolan', 'startSeason':24, 'startDay':15, 'endSeason':24, 'endDay':99, 'shadowed':true},
	
	{'player':'Jenkins Good', 'startSeason':1, 'startDay':1, 'endSeason':23, 'endDay':49, 'pitcher':true, }, 
	{'player':'Jenkins Good', 'startSeason':23, 'startDay':49, 'endSeason':23, 'endDay':53, 'shadowed':true}, 
	{'player':'Jenkins Good', 'startSeason':23, 'startDay':53, 'endSeason':23, 'endDay':54, 'pitcher':true, }, 
	{'player':'Jenkins Good', 'startSeason':23, 'startDay':54, 'endSeason':23, 'endDay':97, 'shadowed':true}, 
	{'player':'Jenkins Good', 'startSeason': 23, 'startDay':97, 'endSeason':24, 'endDay':99, 'pitcher':true, },
	
	{'player':'Ortiz Morse', 'startSeason':1, 'startDay':1, 'endSeason':9, 'endDay':53, 'pitcher':true, },
	{'player':'Jaylen Hotdogfingers', 'startSeason':9, 'startDay':53, 'endSeason':9, 'endDay':64, 'pitcher':true, },
	{'player':'Beasley Gloom', 'startSeason':9, 'startDay':64, 'endSeason':17, 'endDay':91, 'pitcher':true, },
	{'player':'Beasley Gloom', 'startSeason':17, 'startDay':91, 'endSeason':18, 'endDay':20, 'shadowed':true},
	{'player':'Beasley Gloom', 'startSeason':18, 'startDay':20, 'endSeason':20, 'endDay':70, 'pitcher':true, },
	{'player':'Beasley Gloom', 'startSeason':20, 'startDay':70, 'endSeason':20, 'endDay':79, 'shadowed':true},
	{'player':'Beasley Gloom', 'startSeason':20, 'startDay':79, 'endSeason':22, 'endDay':4, 'pitcher':true, },
	{'player':'Beasley Gloom', 'startSeason':22, 'startDay':4, 'endSeason':22, 'endDay':25, 'shadowed':true},
	{'player':'Beasley Gloom', 'startSeason':22, 'startDay':25, 'endSeason':22, 'endDay':78, 'pitcher':true, },
	{'player':'Beasley Gloom', 'startSeason':22, 'startDay':78, 'endSeason':22, 'endDay':95, 'shadowed':true},
	{'player':'Beasley Gloom', 'startSeason':22, 'startDay':95, 'endSeason':24, 'endDay':37, 'pitcher':true, },
	{'player':'Beasley Gloom', 'startSeason':24, 'startDay':37, 'endSeason':24, 'endDay':43, 'shadowed':true},
	{'player':'Beasley Gloom', 'startSeason':24, 'startDay':43, 'endSeason':24, 'endDay':99, 'pitcher':true, },
	{'player':'Amos Melon', 'startSeason':2, 'startDay':28, 'endSeason':17, 'endDay':91, 'shadowed':true},
	{'player':'Amos Melon', 'startSeason':17, 'startDay':91, 'endSeason':19, 'endDay':94, 'pitcher':true, },
	{'player':'Amos Melon', 'startSeason':19, 'startDay':94, 'endSeason':20, 'endDay':70, 'shadowed':true},
	{'player':'Amos Melon', 'startSeason':20, 'startDay':70, 'endSeason':21, 'endDay':45, 'pitcher':true, },
	{'player':'Amos Melon', 'startSeason':21, 'startDay':45, 'endSeason':22, 'endDay':4, 'shadowed':true},
	{'player':'Amos Melon', 'startSeason':22, 'startDay':4, 'endSeason':24, 'endDay':44, 'pitcher':true, },
	{'player':'Amos Melon', 'startSeason':24, 'startDay':44, 'endSeason':24, 'endDay':53, 'shadowed':true},
	{'player':'Amos Melon', 'startSeason':24, 'startDay':53, 'endSeason':24, 'endDay':99, 'pitcher':true, },
	{'player':'Nova Gesundheit', 'startSeason':21, 'startDay':99, 'endSeason':22, 'endDay':78, 'shadowed':true},
	{'player':'Nova Gesundheit', 'startSeason':22, 'startDay':78, 'endSeason':23, 'endDay':97, 'pitcher':true, },
	{'player':'Nova Gesundheit', 'startSeason': 23, 'startDay':97, 'endSeason':24, 'endDay':15, 'shadowed':true},
	{'player':'Nova Gesundheit', 'startSeason':24, 'startDay':15, 'endSeason':24, 'endDay':99, 'pitcher':true, },
	
	{'player':'Mooney Doctor', 'startSeason':1, 'startDay':1, 'endSeason':13, 'endDay':"E", 'pitcher':true, },
	{'player':'Mooney Doctor', 'startSeason':13, 'startDay':"E", 'endSeason':24, 'endDay':99, 'shadowed':true},
	
	{'player':'Uncle Plasma XII', 'startSeason':22, 'startDay':73, 'endSeason':22, 'endDay':95, 'pitcher':true, },
	{'player':'Uncle Plasma XII', 'startSeason':22, 'startDay':95, 'endSeason':23, 'endDay':30, 'shadowed':true},
	{'player':'Uncle Plasma XII', 'startSeason': 23, 'startDay':30, 'endSeason':23, 'endDay':"E", 'pitcher':true, },
	
	{'player':'Alejandro Leaf', 'startSeason':22, 'startDay':"E", 'endSeason':23, 'endDay':53, 'pitcher':true, },
	{'player':'Alejandro Leaf', 'startSeason':23, 'startDay':53, 'endSeason':23, 'endDay':54, 'shadowed':true},
	{'player':'Alejandro Leaf', 'startSeason': 23, 'startDay':54, 'endSeason':23, 'endDay':"E", 'pitcher':true, }

	];

//batter and pitcher colors are selected from the Team Wiki page, shadowed is just a nice gray
const teamColors = {
	batter: "#035597",
	//pitcher: "#96cedf",
	//pitcher: '#e5f4f5', 
	pitcher: '#3B97D3',
	shadowed: "#cccccc"			
};