//John Hrabar
//I Pledge My Honor That I Have Abided By The Stevens Honor System



const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

async function main() {
		console.log("chapter1\n");

		try {
			console.log(await fileData.getFileAsJSON("chapter1.result.json"));
		} catch (error) {
			console.log("chapter1.result.json does not exist.")
			
			console.log(`Loading chapter1.txt`);
			try{
				var t = await fileData.getFileAsString("chapter1.txt");
			} catch (error) {
				console.log(error);
			}

			console.log(`Saving chapter1.debug.txt`)
			try{
				t = textMetrics.simplify(t);
				await fileData.saveStringToFile(`chapter1.debug.txt`, t);
			} catch (error) {
				console.log(error);
			}
			
			
			console.log("Running text metrics");
			var m = textMetrics.createMetrics(t);
			console.log(m);

			console.log("saving text metrics");
			try {
				await fileData.saveJSONToFile(`chapter1.result.json`, m);
			} catch (error) {
				console.log(error);
			}
		}

		console.log('\n\n------\n\n');

		console.log("chapter2\n");

		try {
			console.log(await fileData.getFileAsJSON("chapter2.result.json"));
		} catch (error) {
			console.log("chapter2.result.json does not exist.")
			
			console.log(`Loading chapter2.txt`);
			try{
				var t2 = await fileData.getFileAsString("chapter2.txt");
			} catch (error) {
				console.log(error);
			}

			console.log(`Saving chapter2.debug.txt`)
			try{
				t2 = textMetrics.simplify(t2);
				await fileData.saveStringToFile(`chapter2.debug.txt`, t2);
			} catch (error) {
				console.log(error);
			}
			
			
			console.log("Running text metrics");
			var m2 = textMetrics.createMetrics(t2);
			console.log(m2);

			console.log("saving text metrics");
			try {
				await fileData.saveJSONToFile(`chapter2.result.json`, m2);
			} catch (error) {
				console.log(error);
			}
		}

		console.log('\n\n------\n\n');


		console.log("chapter3\n");

		try {
			console.log(await fileData.getFileAsJSON("chapter3.result.json"));
		} catch (error) {
			console.log("chapter3.result.json does not exist.")
			
			console.log(`Loading chapter3.txt`);
			try{
				var t3 = await fileData.getFileAsString("chapter3.txt");
			} catch (error) {
				console.log(error);
			}

			console.log(`Saving chapter3.debug.txt`)
			try{
				t3 = textMetrics.simplify(t3);
				await fileData.saveStringToFile(`chapter3.debug.txt`, t3);
			} catch (error) {
				console.log(error);
			}
			
			
			console.log("Running text metrics");
			var m3 = textMetrics.createMetrics(t3);
			console.log(m3);

			console.log("saving text metrics");
			try {
				await fileData.saveJSONToFile(`chapter3.result.json`, m3);
			} catch (error) {
				console.log(error);
			}
		}
}

main();
