//John Hrabar
//I Pledge My Honor That I Have Abided By The Stevens Honor System








function simplify(text) {
	if(!text) throw Error("You must provide text");
	if(typeof text !== 'string') throw Error("Text given was not of type string");

	let lowerText = text.toLowerCase();

	for(let i = 0; i < lowerText.length; i++){
		if(lowerText[i] == "\n" || lowerText[i] == "\t" || lowerText[i] == " "){
			if(i == 0 || i == lowerText.length - 1){
				lowerText = lowerText.slice(0, i) + lowerText.slice(i + 1);
				i--;
			}
			else if(lowerText[i - 1] == " " || lowerText[i - 1] == "\n" || lowerText[i - 1] == "\t"){
				lowerText = lowerText.slice(0,i) + lowerText.slice(i + 1);
				i--;
			}
			else if(lowerText[i] != " "){
				lowerText = lowerText.slice(0,i) + " " + lowerText.slice(i+1);
			}
		}

		else if(!(lowerText[i] <= 'z' && lowerText[i] >= 'a')){
			lowerText = lowerText.slice(0,i) + lowerText.slice(i + 1);
			i--;
		}

	}
	return lowerText;
}


function createMetrics(text) {
	if(!text) throw Error("You must provide text");
	if(typeof text !== 'string') throw Error("Text given was not of type string");

	let Obj = {};
	let simple = simplify(text);
	let totalLetters = simple.length;
	let uniqueWords = 0;
	let totalWords = 0;
	let longWords = 0;
	let wordOccurences = {};
	let count = 0;
	let str = "";

	for(let i = 0; i < simple.length; i++){

		if(simple[i] == " "){
			totalWords++;
			str = simple.slice(i - count, i);
			if(wordOccurences.hasOwnProperty(str)){
				wordOccurences[str] = wordOccurences[str] + 1;
			}
			else {
				uniqueWords++;
				wordOccurences[str] = 1;
			}
			if(count >= 6){
				longWords++;
			}
			count = 0;
			totalLetters--;
		}
		else {
			count++;
		}

	}

	Obj['totalLetters'] = totalLetters;
	Obj['totalWords'] = totalWords;
	Obj['uniqueWords'] = uniqueWords;
	Obj['longWords'] = longWords;
	Obj['averageWordLength'] = totalLetters / totalWords;
	Obj['wordOccurences'] = wordOccurences;

	return Obj;


}


module.exports = {
	simplify,
	createMetrics
}