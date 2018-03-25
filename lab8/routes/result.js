

//John Hrabar


const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	if (req.body['palindromeText']) {
		const isPalindrome = palindrome(req.body['palindromeText']);
		let c = "";
		if(isPalindrome == true){
			c = "success";
		}
		else {
			c = "failure";
		}


		let data = {
			title: "The Palindrome Results!",
			text: req.body['palindromeText'],
			isPalindrome: isPalindrome,
			class: c
		};

		res.render("result", data);
	} else {
		let data = {
			title: "Error: 400",
			description: "Text must be entered."
		}
		res.status(400).render("error", data);
	}
});

router.get("/", (req, res) => {
	let data = {
		title: "Error: 400",
		description: "Text must be entered."
	}
	res.status(400).render("error", data);
});

function palindrome(text) {
	text = simplify(text);
	
	for (let x = 0, y = text.length - 1; x < y; x++, y--) {
		if (text[x] != text[y])
			return false;
	}

	return true;
}

function simplify(text) {
	let lowerText = text.toLowerCase();

	for(let i = 0; i < lowerText.length; i++){
		if(!(lowerText[i] <= 'z' && lowerText[i] >= 'a') && !(lowerText[i] <= '9' && lowerText[i] >= '0')){
			lowerText = lowerText.slice(0,i) + lowerText.slice(i + 1);
			i--;
		}

	}
	return lowerText;
}

module.exports = router;