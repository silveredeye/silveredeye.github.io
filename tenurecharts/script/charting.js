//this is where stuff related to d3js-ing the graph goes

//constants: margin is space around the boxes area (player names and season numbers are inside the margin), width and height are those of the boxes area
const margin = {top: 40, right: 30, bottom: 50, left: 200},
	  width = scaleX(sumOfAllDays),
	  height = names.length * (boxHeight + boxSpace) + boxSpace //boxheight + boxSpace for every player, and then one more boxSpace at the top

function makeSVG() {
	var svg = d3.select("#tenureGraph")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", 
			  "translate(" + margin.left + "," + margin.top + ")");
	return svg;
}

//draws the color legend, x-axis, "Season" labels and the season lines (which don't change)
function drawStaticPartsOfTheGraph() {
	//let's make the color legend
	d3.select("#colorLegend")
		.append("p")
		.attr("style", "margin-left: 20px;")
		.text("Hover over the bars on the graph for more detailed info.")
	d3.select("#colorLegend")
		.append("p")
		.attr("style", "margin-left: 20px;")
		.text("Color legend:")
	d3.select("#colorLegend")
		.append("div")
		.attr("class", "legendBox")
		.attr("style", "background-color:"+ teamColors.batter +"; color: #fff;") //color: #fff makes the text white, because this background color is dark
		.text("Batter")
	d3.select("#colorLegend")
		.append("div")
		.attr("class", "legendBox")
		.attr("style", "background-color:" + teamColors.pitcher + "; color: #fff;") 
		.text("Pitcher")
	d3.select("#colorLegend")
		.append("div")
		.attr("class", "legendBox")
		.attr("style", "background-color:" + teamColors.shadowed)
		.text("Shadowed")

	//... x range (which does not change during sorting)...
	const tickRange = d3.range(1, daysInSeasons.length +1, 1);
	var x = d3.scaleBand()
		.range([ 0, width ])
		.domain(tickRange)
		.padding(0.01);
	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.attr("class", "axis")
		.call(d3.axisBottom(x)
			  .tickValues(tickRange)
			  .tickSize(0)
			 );
	svg.append("text")
		.attr("class", "axis")
		.attr("x", width /2)
		.attr("y", height + margin.top)
		.text("Season");
				
	svg.append("g")
		.attr("class", "axis")
		.call(d3.axisTop(x)
			  .tickValues(tickRange)
			  .tickSize(0)
			 );
	svg.append("text")
		.attr("class", "axis")
		.attr("x", width/2)
		.attr("y", -(margin.top -15))
		.text("Season");

	//...season lines...
	for(idx=0; idx<daysInSeasons.length; idx++) {
		let xplace = daysInSeasons.slice(0, idx+1).reduce(reducer);
		svg.append('line')
			.attr('x1', scaleX(xplace)).attr('x2', scaleX(xplace))
			.attr('y1', 0).attr('y2', height)
			.attr('stroke', '#bbb')
		};
}

function drawTenuresWithSorting() {
	//remove the Y axis with names, and all the tenure bars
	d3.selectAll(".players").remove();
	d3.selectAll(".tenure").remove();
	
	sortedNames = getNamesSorted(); //re-sort the names
	
	//draw the Y axis - this must have all the names in the sorted order
	var y = d3.scaleBand()
		.range([ 0, height ])
		.domain(sortedNames)
		.padding(0.01);
	svg.append("g")
		.attr("class", "axis")
		.attr("class", "players")
		.call(d3.axisLeft(y));
	
	//draw boxes!
	svg.selectAll()
		.data(tenures, function(d) {return d.startSeason+':'+d.startDay;})
		.enter()
		.append("rect")
		.attr("class", "tenure")
		.attr("x", function(d) { return scaleX(getX(d)) })
		.attr("y", function(d) { return getY(d) })
		.attr("width", function(d) { return scaleX(getWidth(d)) } )
		.attr("height", boxHeight )
		.style("fill", function(d) { return getColor(d)} )
		.append("svg:title").text(function(d) { return getTooltip(d) })
	
	//add the data as a simple table, too
	document.getElementById("dataTable").innerHTML = getTableHtml();
}

//this and the following method kludge together the data for the table. I don't think I can make it much prettier than that
function getTableHtml() {
	let tableHtml = "<table><tr><th>Player</th><th>Time on the roster</th></tr>";
	for (idx=0; idx<sortedNames.length; idx++) {
		let tenuresOfPlayer = getTenuresOfPlayerSortedByOrder(sortedNames[idx]);
		
		tableHtml += "<tr><td>" + sortedNames[idx] + "</td><td>" + formatTenuresOfPlayerForTable(tenuresOfPlayer) + "</td></tr>"
	}
	tableHtml +="</table>";
	//console.log(tableHtml);
	return tableHtml;
}
			
function formatTenuresOfPlayerForTable(tenuresOfPlayer) {
	let tenureString = "";
	for(i=0; i<tenuresOfPlayer.length; i++) {
		tenureString += formatTenureTimespan(tenuresOfPlayer[i]) + " (" + getRole(tenuresOfPlayer[i]) + ")<br>";
	}
	return tenureString;
}
