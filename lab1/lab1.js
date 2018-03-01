//John Hrabar
//Lab 1
//I Pledge My Honor That I Have Abided By The Stevens Honor System


const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let squaredArray = arr.map((x) => {
        return x * x;
    });
    let result = squaredArray.reduce((total, nextNum) => {
        return total + nextNum;
    }, 0);
    return result;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num <= 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    else {
        return questionTwo(num - 1) + questionTwo(num - 2);
    }

}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    let count = 0;
    let lowerText = text.toLowerCase();
    for(let i = 0; i < text.length; i++) {
        if(lowerText.charAt(i) == 'a' || lowerText.charAt(i) == 'e' || lowerText.charAt(i) == 'i' || lowerText.charAt(i) == 'o' || lowerText.charAt(i) == 'u'){
            count = count + 1;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num < 0){
        return "NaN";
    }
    else if(num == 0) {
        return 1;
    }
    else if(num == 1){
        return 1;
    }
    else {
        return num * questionFour(num - 1);
    }
}

module.exports = {
    firstName: "John", 
    lastName: "Hrabar", 
    studentId: "10409311",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
