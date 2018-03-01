//John Hrabar
//10409311
//I Pledge My Honor That I Have Abided By The Stevens Honor System





const utilities = require("./utilities");
const geometry = require("./geometry");


console.log("Volume of Rectangular Prism tests");
try {
	console.log(geometry.volumeOfRectangularPrism(3,4, 5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output 60

try {
	console.log(geometry.volumeOfRectangularPrism(3,5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "improper amount of arguments provided"

try {
	console.log(geometry.volumeOfRectangularPrism(undefined, 4, 5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "length was not provided"

try {
	console.log(geometry.volumeOfRectangularPrism(3,4, -5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "height is out of bounds"

try {
	console.log(geometry.volumeOfRectangularPrism(3,0, 5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "width is out of bounds"

console.log("\nSurface Area of Rectangular Prism tests");

try {
	console.log(geometry.surfaceAreaOfRectangularPrism(3,4, 5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output 94

try {
	console.log(geometry.surfaceAreaOfRectangularPrism(3,5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "improper amount of arguments provided"

try {
	console.log(geometry.surfaceAreaOfRectangularPrism(3, "string", 5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "width given is not a number"

try {
	console.log(geometry.surfaceAreaOfRectangularPrism(-3,4, 5));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "length is out of bounds"

try {
	console.log(geometry.surfaceAreaOfRectangularPrism(3,0, 5, 0));
} catch(e) {
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output "improper amount of arguments"

console.log("\nVolume Of Sphere tests");
try {
	console.log(geometry.volumeOfSphere(4));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output 268.082573106329

try {
	console.log(geometry.volumeOfSphere("bingo"));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output radius given is not a number

try {
	console.log(geometry.volumeOfSphere(undefined));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output radius was not provided

try {
	console.log(geometry.volumeOfSphere(-1));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output radius was out of bounds

try {
	console.log(geometry.volumeOfSphere(4, 25));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output improper amount of arguments provided


console.log("\nSurface Area Of Sphere tests");
try {
	console.log(geometry.surfaceAreaOfSphere(4));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output 201.06192982974676

try {
	console.log(geometry.volumeOfSphere(undefined));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output radius was not provided

try {
	console.log(geometry.surfaceAreaOfSphere("Hello World"));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output radius given is not a number



try {
	console.log(geometry.volumeOfSphere(0));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output radius was out of bounds

try {
	console.log(geometry.volumeOfSphere(4, 25));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output improper amount of arguments

console.log("\nDeep Equality tests");

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};

try {
	console.log(utilities.deepEquality(first, third))
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output true

try {
	console.log(utilities.deepEquality(first, second))
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output false

try {
	console.log(utilities.deepEquality(first, second, third))
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output improper amount of arguments provided

try {
	console.log(utilities.deepEquality(undefined, third))
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output obj1 was not provided

try {
	console.log(utilities.deepEquality(first, true))
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output obj2 is not an object

console.log("\nUnique Elements tests");

const testArr = ["a", "a", "b", "a", "b", "c"];

try {
	console.log(utilities.uniqueElements(testArr));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output 3

try {
	console.log(utilities.uniqueElements("pasta"));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output arr is not an array

try {
	console.log(utilities.uniqueElements());
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output improper amount of arguments provided

try {
	console.log(utilities.uniqueElements(undefined));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output arr was not provided

try {
	console.log(utilities.uniqueElements(true));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output arr is not an array

console.log("\nCount Of Each Character In String tests");
const test = "Hello, the pie is in the oven";

try {
	console.log(utilities.countOfEachCharacterInString(test));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output { H: 1,
  // e: 5,
  // l: 2,
  // o: 2,
  // ',': 1,
  // ' ': 6,
  // t: 2,
  // h: 2,
  // p: 1,
  // i: 3,
  // s: 1,
  // n: 2,
  // v: 1 }


try {
	console.log(utilities.countOfEachCharacterInString(""));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output {}

try {
	console.log(utilities.countOfEachCharacterInString());
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output improper amount of arguments provided

try {
	console.log(utilities.countOfEachCharacterInString(undefined));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output str was not provided

try {
	console.log(utilities.countOfEachCharacterInString(35));
} catch(e){
	if(e instanceof Error){
		console.log(e.message);
	}
} // should output str is not a string








