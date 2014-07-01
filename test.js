


var find = 'abc';
var re = new RegExp(find, 'g');

str = str.replace(re, '');



a.map(function(item, index, inArray) {
	
	var searchVal = inArray.indexOf(item, index + 1);
	console.log('starting search...');
	var counter = 1;
	
	while (  (searchVal < inArray.length) && (searchVal !== -1) ) {
	
		var searchVal = inArray.indexOf(item, searchVal);
		console.log("Search value = " + searchVal);


		if (searchVal > -1) {
		
			counter += 1;
		
		}
		var searchVal = searchVal + 1;
		console.log("Search value = " + searchVal);
	
	}
	
	return counter;

});



var searchArray = function(item, index, inArray) {
	
	var searchVal = inArray.indexOf(item) + 1;
	var counter = 1;
	
	while (  (searchVal < inArray.length) && (searchVal !== -1) ) {
	
		searchVal = inArray.indexOf(item, searchVal + 1);
		if (searchVal > -1) {
		
			counter += 1;
		
		}
	
	}
	
	return counter;

});



var outArray = 

cA.map(function(item, index, inArray) {
		
	var searchVal = inArray.indexOf(item) + 1;
	var counter = 1;
	
	while (  (searchVal < inArray.length) && (searchVal !== -1) ) {
	
		searchVal = inArray.indexOf(item, searchVal);
		searchVal = searchVal + 1;
		
		if (searchVal > -1) {
		
			counter += 1;
		
		}
	
	}
	
	return counter;

});
	
var i = a.indexOf(Math.max.apply(Math, a));


a.filter(function(item, indexIn, a) {
	return item > 0;
});