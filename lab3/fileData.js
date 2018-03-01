//John Hrabar
//I Pledge My Honor That I Have Abided By The Stevens Honor System



const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));



async function getFileAsString(path){
	if(!path) throw Error("You must provide a file path.");
	if(typeof path !== 'string') throw Error("Path given was not of type string");
	let fileData = await fs.readFileAsync(path, "utf-8");
	return fileData;
	
}

async function getFileAsJSON(path) {
	if(!path) throw Error("You must provide a file path.");
	if(typeof path !== 'string') throw Error("Path given was not of type string");
	let fileData = await getFileAsString(path);
	let JSONData = await JSON.parse(fileData);
	return JSONData;
}

async function saveStringToFile(path, text) {
	if(!path) throw Error("You must provide a file path.");
	if(typeof path !== 'string') throw Error("Path given was not of type string");
	if(!text) throw Error("You must provide text.");
	if(typeof text !== 'string') throw Error("Text given was not of type string");
	await fs.writeFileAsync(path, text);
	return true;
}

async function saveJSONToFile(path, obj) {
	if(!path) throw Error("You must provide a file path.");
	if(typeof path !== 'string') throw Error("Path given was not of type string");
	if(!obj) throw Error("You must provide an object.");
	if(typeof obj!== 'object') throw Error("Object given was not of type object");
	let textOfObj = JSON.stringify(obj);
	await saveStringToFile(path, textOfObj);
	return true;
}



module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
};