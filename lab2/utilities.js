//John Hrabar
//10409311
//I Pledge My Honor That I Have Abided By The Stevens Honor System




module.exports = {

	deepEquality: function deepEquality(obj1, obj2) {
	if(arguments.length != 2){
		throw Error("improper amount of arguments provided");
	}
	if(obj1 === undefined){
			throw Error("obj1 was not provided");
	}
	if(obj2 === undefined){
			throw Error("obj2 was not provided");
	}
	if(typeof obj1 !== "object"){
			throw Error("obj1 is not an object");
	}
	if(typeof obj2 !== "object"){
			throw Error("obj2 is not an object");
	}
	if(obj1 === obj2){
		return true;
	}
	else {
		let arr1 = Object.keys(obj1);
		let arr2 = Object.keys(obj2);
		if(arr1.length !== arr2.length){
			return false;
		}
		for(let i = 0; i < arr1.length; i++){
			if(arr1[i] === arr2[i]){
				if(obj1[arr1[i]] !== obj2[arr2[i]]){
					if(typeof obj1[arr1[i]] === "object" && typeof obj2[arr2[i]] === "object"){
						if(deepEquality(obj1[arr1[i]], obj2[arr2[i]]) === false){
							return false;
						}
					}
					else {
						return false;
					}
				}
			}
			else {
				return false;
			}
		}
		return true;
	}
},

	uniqueElements: function uniqueElements(arr){
	if(arguments.length != 1){
		throw Error("improper amount of arguments provided");
	}
	if(arr === undefined){
		throw Error("arr was not provided");
	}
	if(Array.isArray(arr) === false){
		throw Error("arr is not an array");
	}
	let testArray = [];
	for(let i = 0; i < arr.length; i++){
		if(testArray.includes(arr[i]) === false){
			testArray.push(arr[i]);
		}
	}
	return testArray.length;
},

	countOfEachCharacterInString: function countOfEachCharacterInString(str){
	if(arguments.length != 1){
		throw Error("improper amount of arguments provided");
	}
	if(str === undefined){
		throw Error("str was not provided");
	}
	if(typeof str !== "string"){
		throw Error("str is not a string");
	}
	let charMap = {};
	for(let i = 0; i < str.length; i++){
		if(charMap.hasOwnProperty(str.charAt(i)) === true){
			charMap[str.charAt(i)] = charMap[str.charAt(i)] + 1;
		}
		else {
			charMap[str.charAt(i)] = 1;
		}
	}
	return charMap;


}
};