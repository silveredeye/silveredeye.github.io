//takes (2, 2) and returns 113 (because Season 2 Day 2 is the 113st day since the beginning of blaseball)
function convertSeasonDayToDaysSinceBeginning(season, day) {
	//elections are the last day of the season, let's convert these
	let convertedDay = day;
	if (day === 'E') {
		convertedDay = daysInSeasons[season -1];
	}
				
	//all days in the preceding seasons + days in this season up to current
	let daysSinceBeginning = 0;
	if (season > 1) {
		daysSinceBeginning += daysInSeasons.slice(0, season - 1).reduce(reducer);
	}
	daysSinceBeginning += convertedDay;

	return daysSinceBeginning;
}

//calculates where the left side of a box should start
function getX(tenure) {
	return convertSeasonDayToDaysSinceBeginning(tenure.startSeason, tenure.startDay)
}
			
//calculates where the top of the box should start
function getY(tenure) {
	const idxInNames = sortedNames.indexOf(tenure.player);
	if (idxInNames > -1) {
		return idxInNames * (boxHeight + boxSpace) + boxSpace;
	}
}
			
//calculates the width of the box, aka number of days between beginning and end
function getWidth(tenure) {
	let tenureBegin = convertSeasonDayToDaysSinceBeginning(tenure.startSeason, tenure.startDay);
	let tenureEnd = convertSeasonDayToDaysSinceBeginning(tenure.endSeason, tenure.endDay);

	return tenureEnd - tenureBegin;
}

//returns the correct role for this tenure as a string
function getRole(tenure) {
	if (tenure.shadowed) {
		return "shadowed";
	} else if (tenure.pitcher){
		return "pitcher";				
	} else {
		return "batter";
	}
}
			
//creates the tooltip for the boxes
function getTooltip(tenure) {
	let tip = tenure.player;
	tip += " (" + getRole(tenure) + "), ";
	tip += formatTenureTimespan(tenure);

	return tip;
}
			
//takes in the tenure object and returns smth like "Season 13 Elections - Season 20 Day 4"
function formatTenureTimespan(tenure) {
	return makeDate(tenure.startSeason, tenure.startDay) + " - " + makeDate(tenure.endSeason, tenure.endDay);
}
			
//takes in (23, 5) and returns "Season 23 Day 5"
function makeDate(season, day) {
	//Days X, because otherwise we just don't know
	if (season === 9 && day === 117) {
		return "Season 9 Day X";
	} else if (season ===10 && day === 114) {
		return "Season 10 Day X";
	} else if (season === 23 && day === 118) {
		return "Season 23, Semi-Centennial";
	}

	let date = "Season " + season;
	if (day === "E") {
		return date += " Elections";
	} else {
		return date + " Day " + day;
	}
}

//returns all the tenures of given player, sorted by the start day
function getTenuresOfPlayerSortedByOrder(playerName) {
	let tenuresOfPlayer = tenures.filter((tenure => {
		return tenure.player === playerName
	})).sort((a, b) => {
		if (a.startSeason === b.startSeason) {
			if (a.startDay === 'E') return 1
			if (b.startDay === 'E') return -1
			return a.startDay - b.startDay
		}
		return a.startSeason - b.startSeason
	});
	return tenuresOfPlayer;
}
			
//returnes the tenures of the player, not including the shadowed ones, sorted by start day
function getTenuresOfPlayerOnActiveRosterSortedByStart(playerName) {
	return getTenuresOfPlayerSortedByOrder(playerName).filter(tenure => {
		return tenure.shadowed !== true
	});
}

//my x axis was so long I had to scroll right for ages, so I scaled all x values by a constant
function scaleX(value) {
	return value * scaling
}

//returns the correct color for the box
function getColor(tenure) {
	if (tenure.shadowed) {
		return teamColors.shadowed;
	} else if (tenure.pitcher) {
		return teamColors.pitcher;
	} else {
		return teamColors.batter;
	}
}
