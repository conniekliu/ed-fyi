var timeline = function(id) {

//date, name, descrip, color
	var nonDatedata = [
 {"date": "1845", "name": "Horace Mann", "descrip": "schools transition from oral exams to written tests" },
 {"date": "1900", "name": "Thorndike" },
 {"date": "1905", "name": "Alfred Binet" },
 {"date": "1916", "name": "Terman" },
 {"date": "1926", "name": "Collegeboard" },
 {"date": "1937", "name": "Collegeboard" }
];
TimeKnots.draw("#timetest", nonDatedata, {dateDimension: true, dateFormat: "%Y", color: "teal", width:500, showLabels: false, labelFormat: "%Y"});

}