/**
 * type assertion is a mechanism which tells the compiler about the type of a variable.
 *  When TypeScript determines that the assignment is invalid,
 *  then we have an option to override the type using a type assertion.
 */
var message;
message: 'abc';
var counts = "hello";
//first method of assertion
var endsWithC = message.endsWith('c');
///second method
var alternativeWay = message.endsWith('c');
//nb:endwith works directly because count is declared as a string
var Normalway = counts.endsWith('c');
