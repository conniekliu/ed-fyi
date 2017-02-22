var noodle = function(id) {
	/* implementation heavily influenced by http://bl.ocks.org/1166403 */
	var svg = d3.select("svg");
		width = +svg.attr("width"); //+ converts to int
		height = +svg.attr("height");
		g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var color = d3.scaleOrdinal(d3.schemeCategory20c);
	//sets available color set, 20 colors

	var simulation = d3.forceSimulation()
		.force("link", d3.forceLink().id(function(d) { return d.id}).distance(width/6))
		.force("charge", d3.forceManyBody().strength(-200))
		.force("center", d3.forceCenter(width / 2, height / 2));

	d3.json("js/miserables.json", function(error, graph) {
		if (error) throw error;

		var link = svg.append("g")
			.attr('class', 'links')
			.selectAll('line')
			.data(graph.links)
			.enter().append('line')
				.attr("stroke-width", 1);

		var node = svg.append('g')
			.attr('class', 'nodes')
			.selectAll('circle')
			.data(graph.nodes);

		var block = node.enter()
			.append('g')
			.attr('class', 'blocks');

		var circle = block.append('circle')
			.attr("r", 30) //vary radius size by what is effected (and vary color?)
			.attr("fill", function(d) {return color(d.color)});

		var text = block.append('text')
			// .selectAll("tspan")
			// .data(function(d) {return d.id.split(" ")})
			// .enter().append("tspan")
			// .attr("x", 0)
			// .attr("y", 0)
			.text(function(d) { return d.id });
				

		simulation.nodes(graph.nodes).on('tick', ticked);
  		simulation.force('link').links(graph.links);


  		function ticked() {
			link
				.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			circle
				.attr("cx", function(d) { return d.x; })
				.attr("cy", function(d) { return d.y; });
			text
				.attr("x", function(d) { return d.x; })
				.attr("y", function(d) { return d.y; });
		}
	});
}
