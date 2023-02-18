let count = 5;
//String is not assignable to type number so it gives an error
count = 'a';

//Assigning types without knowing values to accept
let a: number;
let b: boolean;
let c: string;
let d: any;
//Number array
let e: number[] = [1,2,3];
//array with any type
let f:any[] = [1,'a',true]


//Enums
//putting related constants in a container
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red=0, Green=1, Blue=2}
let BackgroundColor = Color.Red;