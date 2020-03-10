/**
 * Day 6!
 */

/**
 * Let's See How Scope Works.
 */

var myVariable = 3; // Declared in GLOBAL scope.

function myFunction () {
    console.log( myVariable ); // Can we see myVariable in the function!? Yes! We can see GLOBALLY scoped variables inside of a function!

    var myFunctionScopeVariable = 64; // Declared in a local (function) scope.
    console.log( myFunctionScopeVariable ); // We can see it in the function :D

    // Function inside of a function!? Is this even possible!?
    function myNestedFunction () { // (Yes.)
        var myNestedFunctionVariable = 'I\'m very nested!';
        console.log( myNestedFunctionVariable ); // Local access works!

        console.log( 'Accessing function scope variable in nested function: '+myFunctionScopeVariable ); // We can access variables from a PARENT function. But not the reverse. 

        console.log( myVariable ); // Global variables / functions are accessible even all the way in here! NICE!
    }

    myNestedFunction(); // Let's run and try it.

    // console.log( myNestedFunctionVariable ); // Can we see it out here? Nope! The variable is scoped to its origin function, not here...
}

myFunction(); // Let's run it and see.
// console.log( myFunctionScopeVariable ); // Can we access it outside of the function!? No! Locally scoped variables will live and die in their function :(

// myNestedFunction(); // Can we run the nested function!? Nope! It is not available globally if it was defined in a localized scope!