// ALL THE GNARLY SORTING METHODS

//sort the names by the new sorting option given, return the sorted array
function getNamesSorted() {
	let sort = document.getElementById('sort').value;
	let includeShadows = document.getElementById('shadowed').checked;
	let isSecondarySortByOriginalRoster = sort.endsWith("ORIG");
				
	//if you know Javascript you may now ask me "isn't it kind of stupid to slice the names array every time?"
	//yes. but I want to be very sure that the original names stays the same, and this seemed the easiest way with pure JS
	let namesForSorting = names.slice(0, names.length);
	
	if ("ORIG_ROSTER" === sort) { //original roster, changes cascading
		return namesForSorting;
	} else if ("ALPHABETIC" === sort) { //alphabetic
		return namesForSorting.sort();
	} else if (sort.startsWith("FIRST")) { //first appearance
		if (includeShadows) {
			return namesForSorting.sort((a, b) =>{ return sortByFirstAppearance(a, b, isSecondarySortByOriginalRoster) })
		} else {
			return namesForSorting.sort((a, b) => { return sortByFirstAppearanceOnActiveRoster(a, b, isSecondarySortByOriginalRoster) })
		}
	} else if (sort.startsWith("LAST")) { //latest appearance
		if (includeShadows) {
			return namesForSorting.sort((a, b) => { return sortByLastAppearance(a, b, isSecondarySortByOriginalRoster) })
		} else {
			return namesForSorting.sort((a, b) => { return sortByLastAppearanceOnActiveRoster(a, b, isSecondarySortByOriginalRoster) })
		}
	} else if (sort.startsWith("LONGEST")) { //longest time
		if (includeShadows) {
			return namesForSorting.sort((a, b) => { return sortByTenure(a, b, isSecondarySortByOriginalRoster) })
		} else {
			return namesForSorting.sort((a, b) => { return sortByTenureOnActiveRoster(a, b, isSecondarySortByOriginalRoster) })
		}
	}
	
	return names; //if all else fails, let's return the default
}

//sorting method
//sorts by first appearance on the roster (earlier first)
function sortByFirstAppearance(one, other, secondarySortByOriginalRoster) {
	return sortUtilityMethod(one, other, "FIRST", true, secondarySortByOriginalRoster);
}

//sorting method
//sorts by first appearance on the ACTIVE roster (earlier first, shadows not included)
function sortByFirstAppearanceOnActiveRoster(one, other, secondarySortByOriginalRoster) {
	return sortUtilityMethod(one, other, "FIRST", false, secondarySortByOriginalRoster);
}
			
//sorting method
//sorts by latest appearance on the roster (latest first)
function sortByLastAppearance(one, other, secondarySortByOriginalRoster) {
	return sortUtilityMethod(one, other, "LAST", true, secondarySortByOriginalRoster);
}
			
//sorting method
//sorts by latest appearance on the ACTIVE roster (latest first, shadows not included)
function sortByLastAppearanceOnActiveRoster(one, other, secondarySortByOriginalRoster) {
	return sortUtilityMethod(one, other, "LAST", false, secondarySortByOriginalRoster);
}
			
//sorting method
//sorts by time on the roster (longest first)
function sortByTenure(one, other, secondarySortByOriginalRoster) {
	return sortUtilityMethod(one, other, "LONGEST", true, secondarySortByOriginalRoster);
}
			
//sorting method
//sorts by time on the ACTIVE roster (longest first, shadows not included)
function sortByTenureOnActiveRoster(one, other, secondarySortByOriginalRoster) {
				return sortUtilityMethod(one, other, "LONGEST", false, secondarySortByOriginalRoster);
}
			
//the very ugly main sorting method
//one and other are the things we're sorting
//metric is the sorting metric . "FIRST" for first appearance, "LAST" for latest appearance, "LONGEST" for longest tenure
//includeShadows is whether tenure in shadows should be considered when calculating the metric
//secondarySortByOriginalRoster handles the cases where two players are equal by our primary sorting method
// - if it is true, the two "equal" players are ordered by their order on the original roster. if not, they are ordered alphabetically
function sortUtilityMethod(one, other, metric, includeShadows, secondarySortByOriginalRoster) {
	let onesMetric = getCorrectValueForPlayerComparison(one, metric, includeShadows);
	let othersMetric = getCorrectValueForPlayerComparison(other, metric, includeShadows);
	
	
	let order = 0;
	if ("LAST" === metric || "LONGEST" === metric) { //if we're sorting by last appearance or longest time, we want big ones first
		order = othersMetric - onesMetric;
	} else {
		order = onesMetric - othersMetric;
	}
				
	if (order === 0) { //they were equal by our primary sorting metric, now we gotta sort them by the secondary method
		if (secondarySortByOriginalRoster) { //sort by orig roster
			order = names.indexOf(one) - names.indexOf(other);
		} else { //sort alphabetically
			return one > other ? 1 : -1;
		}
	}
	return order;

}

function getCorrectValueForPlayerComparison(player, metric, includeShadows) {
	let value = 0;

	if (includeShadows) {
		if ("FIRST" === metric) {
			value = getPlayersFirstDayOnRoster(player);
		} else if ("LAST" === metric) {
			value = getPlayersLastDayOnRoster(player);
		} else if ("LONGEST" === metric) {
			value = getPlayersTimeOnRoster(player);
		}
	} else {
		if ("FIRST" === metric) {
			value = getPlayersFirstDayOnActiveRoster(player);
		} else if ("LAST" === metric) {
			value = getPlayersLastDayOnActiveRoster(player);
		} else if ("LONGEST" === metric) {
			value = getPlayersTimeOnActiveRoster(player);
		}
	}
				
	return value;
}

//takes player's name and returns the first day they were on the roster - the numerical version
function getPlayersFirstDayOnRoster(playerName) {
	const firstDay = getTenuresOfPlayerSortedByOrder(playerName).map(tenure => {
		return convertSeasonDayToDaysSinceBeginning(tenure.startSeason, tenure.startDay)
	}).sort(sortAscending)[0];
	return firstDay;
}
			
//takes player's name and returns the first day they were on the ACTIVE roster - the numerical version
function getPlayersFirstDayOnActiveRoster(playerName) {
	const firstDay = getTenuresOfPlayerOnActiveRosterSortedByStart(playerName).map(tenure => {
		return convertSeasonDayToDaysSinceBeginning(tenure.startSeason, tenure.startDay)
	}).sort(sortAscending)[0];
	return firstDay;
}
			
//takes player's name and returns the final day they were on the roster - the numerical version
function getPlayersLastDayOnRoster(playerName) {
	return getTenuresOfPlayerSortedByOrder(playerName).map(tenure => {
		return convertSeasonDayToDaysSinceBeginning(tenure.endSeason, tenure.endDay)
	}).sort(sortDescending)[0];
}
			
//takes player's name and returns the last day they were on the ACTIVE roster - the numerical version
function getPlayersLastDayOnActiveRoster(playerName) {
	return getTenuresOfPlayerOnActiveRosterSortedByStart(playerName).map(tenure => {
		return convertSeasonDayToDaysSinceBeginning(tenure.endSeason, tenure.endDay)
	}).sort(sortDescending)[0];
}
			
//takes player's name and returns the number of days they were on roster
function getPlayersTimeOnRoster(playerName) {
	return getTenuresOfPlayerSortedByOrder(playerName)
		.map(mapTenureToLength).reduce(reducer);
}
			
//takes player's name and returns the number of days were on the ACTIVE roster
function getPlayersTimeOnActiveRoster(playerName) {
	return getTenuresOfPlayerOnActiveRosterSortedByStart(playerName)
		.map(mapTenureToLength).reduce(reducer);
}