/**
 * type assertion is a mechanism which tells the compiler about the type of a variable.
 *  When TypeScript determines that the assignment is invalid,
 *  then we have an option to override the type using a type assertion.
 */

let message;
message:'abc';
let counts="hello";
//first method of assertion
let endsWithC = (<string>message).endsWith('c');
///second method
let alternativeWay =(message as string).endsWith('c')

//nb:endwith works directly because count is declared as a string
let Normalway = counts.endsWith('c');
