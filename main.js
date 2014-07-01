
var firstReverse = function(inString) {
	var stringArray = inString.split('');
	var reversedArray = stringArray.reverse();
	return reversedArray.join('');
};

var swapCase = function(inString) {
	var stringArray = inString.split('');
	var outArray = stringArray.map(capitalizationReverse);
	return outString = outArray.join('');
};

var capitalizationReverse = function(inChar, indexIn, arrayIn) {
	var inCharCap = inChar.toUpperCase();
	var inCharLower = inChar.toLowerCase();
	if (inChar === inCharCap) {
		var outChar = inCharLower;
	}
	else {
		var outChar = inCharCap;
	}
	return outChar;
};

var elementCount = function(inArray) {
	var outArray = inArray.map(function(item, index, inArray) {
		var searchVal = inArray.indexOf(item, index);
		var counter = 1;
		while (  (searchVal < inArray.length) && (searchVal !== -1) ) {
			var searchTemp = searchVal + 1;
			var searchVal = inArray.indexOf(item, searchTemp);
			if (searchVal > -1) {
				counter += 1;
			}		
		}
		return counter;
	});
	return outArray;
};

var searchArray = function(item, index, inArray) {
	var searchVal = inArray.indexOf(item, index);
	var counter = 1;	
	while (  (searchVal < inArray.length) && (searchVal !== -1) ) {	
		var searchTemp = searchVal + 1;
		var searchVal = inArray.indexOf(item, searchTemp);
		if (searchVal > -1) {
			counter += 1;
		}
	}
	return counter;
};

var letterRepeatGet = function(characterArray, repeatArray) {
	var letterRepeatRateDict = {};
	for(var i = 0; i < characterArray.length; i++) {
		var key = characterArray[ i ];
		if ( !(key in letterRepeatRateDict) ){
			letterRepeatRateDict[ key ] = repeatArray[ i ];
		}
	}
	return letterRepeatRateDict;
};

var repeatTotal = function(inDict) {
	var totalRepeatWord = 0;
	for (var key in inDict) {
		var repeatValue = inDict[ key ];
		if ( repeatValue > 1 ) {
			totalRepeatWord = totalRepeatWord + repeatValue;
		}
	}
	return totalRepeatWord;
};

var wordRepeatSorter = function(repeatedValuesArray, inStringArray) {
	var greatestElIndex = repeatedValuesArray.indexOf(Math.max.apply(Math, repeatedValuesArray));
	var largestRepeatWord = repeatedValuesArray[ greatestElIndex ];
	var outputWordList = [];
	outputWordList.push(inStringArray[ greatestElIndex ] );
	for(var i = greatestElIndex + 1; i < repeatedValuesArray.length; i++) {
		if ( repeatedValuesArray[ i ] === largestRepeatWord ) {
			outputWordList.push(inStringArray[ i ] );
		}
	}
	return outputWordList;
};

var letterCount = function(inString) {
	var inStringArray = inString.split(' ');
	var repeatedValuesArray = [];
	for (var i=0; i < inStringArray.length; i++) {
		var testString = inStringArray[ i ];
		var characterArray = testString.split('');
		var elementCountArray = elementCount(characterArray);
		var letterRepeaterDict = letterRepeatGet(characterArray, elementCountArray);
		var totalRepeatedValues = repeatTotal(letterRepeaterDict);
		repeatedValuesArray.push(totalRepeatedValues);
	}	
	var noZeroRepeats = repeatedValuesArray.filter(function(item, indexIn, repeatedValuesArray) {
		return item > 0; 
	});
	if ( noZeroRepeats.length > 0 ) {
		var resultArray = wordRepeatSorter(repeatedValuesArray, inStringArray);
		return resultArray.join(" ");
		//return resultArray[ 0 ];
	}
	else {
		return -1;
	}
};

//   Today, is the greatest day ever!
//   abba bboo good river rreef



var checkString = 'abcdefghijk';
console.log(checkString + ', reversed: ' + firstReverse(checkString));

var checkString = "AbCdEfGhIjKlM";
console.log(checkString + ', case swaped: ' + swapCase(checkString));

var checkString = "Today, is the greatest day ever! mmmm";
console.log(checkString + '\nHighest repeating word(s): ' + letterCount(checkString));

window.foo2 = wordRepeatSorter;

/*

var checkArrayZero = a.filter(function(item, indexIn, a) {
	return item > 0;
});


window.f = firstReverse;
window.s = swapCase;
window.u = elementCount;
window.l = letterRepeatGet;
window.r = repeatTotal;
window.sA = searchArray;
window.cA = characterArray;
window.eA = elementCountArray;
window.lR = letterRepeaterDict;
window.tR = totalRepeatedValues;

*/