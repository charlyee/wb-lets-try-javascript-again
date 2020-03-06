/**
 * Let's try JavaScript, again!
 * Multi-line comment.
 */

// Single line, comment!

// Basic assignment:
var myVariable = '38.9587'; // Variable set as a string.

myVariable =  myVariable + 5;
console.log( myVariable ); // Oop, one of these is a string so plus is concatenating!

// Type-handling:
myVariable = parseFloat( myVariable ); // Floating point number, decimal maintained.
console.log( myVariable ); // Is now a numeric value.

myVariable = parseInt( myVariable ); // Converted to integer, decimal removed.
console.log( myVariable ); // 38

myVariable = Number( myVariable ); // Converted to any number type it can.
console.log( myVariable ); // No change here.

myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
console.log( myVariable );

myVariable = myVariable.toString(); // Convert back to a string.
console.log( myVariable );

/**
 * Other types?
 */
