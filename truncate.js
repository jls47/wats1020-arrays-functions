//
// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

"use strict";
// First function!  This one cuts of the words.  Starts by taking the string and number suggested:
var truncateWords = function(longText, numWords){
	// First, we split the text into an array.
	var longArray = longText.split(" ");
	// Next, we take the length of the array for future use.
	var origLen = longArray.length;
	// Stretch goal time!  Want to set up a default amount of words to remove if numwWords doesn't exist?  Try division!
	if(!numWords){
		numWords = origLen / 2;	
	};	
	// Next, we define how many words to remove by setting the starting point of the splice/slice (depending on function).
	var lenRemove = origLen - numWords;
	// After that, we splice out the numWords # of words from the end.
	var newArray = longArray.splice(0, lenRemove); // to remove text from the end
	// newArray = longArray.splice(numWords, lenRemove);  to remove text from the start
	// Next, we add the ellipses on to the end of the array (push adds to the end)
	newArray.push("...");
	// And jam the array together into a string!  Don't forget to separate the words with spaces so that it's not a mess of commas.
	var newText = newArray.join(" ");
	// Finally, we return the new string.
	return newText;
};

var truncateCharacters = function(longText, numWords){
	// Now for the character function!  We don't bother with arrays, instead taking the removal point using the character numbers in
	// the string.  
	var textRem = longText.length - numWords;
	// Now we slice the string after the removal point textRem, keeping the text from character 0 to character # textRem.
	var newString = longText.slice(0, textRem);
	// Next, the ellipses on the end of the string:
	newString += "...";
	return newString;
};

var truncateObj = function(longText, numWords){
	// Now for the object method.  We start the same way as in the first function:
	var longArray = longText.split(" ");
	// Array length is the same:
	var origLen = longArray.length;
	// Same check on numWords:
	if(!numWords){
		numWords = origLen / 2;
	};
	// Same way of adjusting the array
	var lenRemove = origLen - numWords;
	// Still removing text from the end:
	var newArray = longArray.splice(0, lenRemove); // to remove text from the end
	// newArray = longArray.splice(numWords, lenRemove);  to remove text from the start
	newArray.push("...");
	var newText = newArray.join(" ");
	// Everything is the same up to here.  We create an object with the mentioned directories
	// with specifically mentioned keys that point to values in the form of variables that display their
	// values when called like so
	var newObj = {
		originalText: longText,
		wordCount: origLen,
		numWords: numWords,
		shortText: newText
	};
	// Then we return the object and call it at line 92 with console.dir() to see the contents!
	return newObj;
};
	    
// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);

var shortChar = truncateCharacters(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('charShort: ' + shortChar);

var shortObj = truncateObj(originalText, wordLimit);
console.dir(shortObj);
