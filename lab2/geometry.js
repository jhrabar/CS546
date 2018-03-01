//John Hrabar
//10409311
//I Pledge My Honor That I Have Abided By The Stevens Honor System





module.exports = {

	volumeOfRectangularPrism: function volumeOfRectangularPrism(length, width, height){
	if(arguments.length != 3){
		throw Error("improper amount of arguments provided");
	}
	if(length === undefined){
		throw Error("length was not provided");
	}
	if(width === undefined){
		throw Error("width was not provided");
	}
	if(height === undefined){
		throw Error("height was not provided");
	}
	if(typeof length !== "number"){
		throw Error("length given is not a number");
	}
	if(typeof width !== "number"){
		throw Error("width given is not a number");
	}
	if(typeof height !== "number"){
		throw Error("height given is not a number");
	}
	if(length <= 0){
		throw Error("length is out of bounds");
	}
	if(width <= 0){
		throw Error("width is out of bounds");
	}
	if(height <= 0){
		throw Error("height is out of bounds");
	}
	else {
		return length * width * height;
	}
},

    surfaceAreaOfRectangularPrism: function surfaceAreaOfRectangularPrism(length, width, height){
	if(arguments.length != 3){
		throw Error("improper amount of arguments provided");
	}
	if(length === undefined){
		throw Error("length was not provided");
	}
	if(width === undefined){
		throw Error("width was not provided");
	}
	if(height === undefined){
		throw Error("height was not provided");
	}
	if(typeof length !== "number"){
		throw Error("length given is not a number");
	}
	if(typeof width !== "number"){
		throw Error("width given is not a number");
	}
	if(typeof height !== "number"){
		throw Error("height given is not a number");
	}
	if(length <= 0){
		throw Error("length is out of bounds");
	}
	if(width <= 0){
		throw Error("width is out of bounds");
	}
	if(height <= 0){
		throw Error("height is out of bounds");
	}
	else {
		return 2 * ((width * length) + (height*length) + (height * width));
	}
},


	volumeOfSphere: function volumeOfSphere(radius){
	if(arguments.length != 1){
		throw Error("improper amount of arguments provided");
	}
	if(radius === undefined){
		throw Error("radius was not provided");
	}
	if(typeof radius !== "number"){
		throw Error("radius given is not a number");
	}
	if(radius <= 0){
		throw Error("radius is out of bounds");
	}
	else {
		return (4 * Math.PI * radius * radius * radius) / 3;
	}
},

	surfaceAreaOfSphere: function surfaceAreaOfSphere(radius){
	if(arguments.length != 1){
		throw Error("improper amount of arguments provided");
	}
	if(radius === undefined){
		throw Error("radius was not provided");
	}
	if(typeof radius !== "number"){
		throw Error("radius given is not a number");
	}
	if(radius <= 0){
		throw Error("radius is out of bounds");
	}
	else {
		return (4 * Math.PI * radius * radius );
	}
}

};