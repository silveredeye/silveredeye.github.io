//FIRST; SOME UTILITY STUFF

const firstDay = {'startSeason': 1, 'startDay': 1}
const boxHeight = 20; //how "high" the box marking a player's tenure on the team is
const boxSpace = 5; //the vertical space between two players
			
const reducer = (previousValue, currentValue) => previousValue + currentValue;
const mapTenureToLength = (tenure) => { return getWidth(tenure) };
const sortAscending = (a, b) => {  return a - b };
const sortDescending = (a, b) => {  return b - a };

const scaling = 0.5 //all x values are scaled by this

//GENERAL DATA
			
//a list of how many days there were in each season. 
//days X and Semi-Centennial get an extra day
const daysInSeasons = [111, 111, 113, 112, 113, 110,
					   113, 112, 117, 114, 120, 116,
					   116, 117, 114, 117, 114, 116,
					   117, 116, 115, 116, 118, 99];
const sumOfAllDays = daysInSeasons.reduce(reducer); //TODO: ...should I give every Election an extra day, too??

//this one gets filled later, by default by the exact contents of the 'names' array
//every time we change sorting, we put the newly sorted names here
//it is used for the order of tenure boxes on the graph
let sortedNames = [];