/* function to test the other functions */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
/*returns the max of two numbers*/
function max(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return firstNumber;
    }
    else {
        return secondNumber;
    }
}

/* returns the max of the three input parameters */
function maxOfThree(firstNumber, secondNumber, thirdNumber) {
    return max(max(firstNumber, secondNumber), thirdNumber);
}
/* validates if a character is a vowel or not*/
function isVowel(character) {
    if (character.length > 1) {
        return false;
    }
    else if (character.toUpperCase() === "A" || character.toUpperCase() === "E" || charactertoUpperCase() === "I"
        || charactertoUpperCase() === "O" || character.toUpperCase() === "U") {
        return true;
    }
    else {
        return false;
    }
}
/* sums the values found in the array */
function sum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}
/* multiplies the values found in the array */
function multiply(array) {
    let sum = 1;
    for (let index = 0; index < array.length; index++) {
        sum *= array[index];
    }
    return sum;
}
/* reverses the values of a string */
function reverse(string) {
    let reversed = "";
    for (let index = string.length - 1; index >= 0; index--) {
        reversed += string[index];
    }
    return reversed;
}



/* finds the longest word from an array of words and returns the lengths of the longest one*/
function findLongestWord(words) {
    let lengthOfWord = 0;
    for (let index = 0; index < words.length; index++) {
        if (words[index].length > lengthOfWord) {
            lengthOfWord = words[index].length;
        }

    }
    return lengthOfWord;
}
/* returns an array of words whose length is greater than the input parameter */
function filterLongestWords(words, i) {
    let filteredWords = [];
    for (let index = 0; index < words.length; index++) {
        if (words[index].length > i) {
            filteredWords.push(words[index]);
        }
    }
    return filteredWords;
}

/* modifies the jsfiddle examples as per the requirements */
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 3;
})

document.writeln("Values: [" + b.toString() + "]<br/>");
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
document.writeln("Values: ["+c.toString() + "]<br/>");
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
document.writeln("Value: ["+d.toString() + "]<br/>");

console.log(myFunctionTest(["procrastinate", "admit", "constitution"], filterLongestWords(["procrastinate", "and", "for", "admit", "turn","constitution"],4)));
console.log(myFunctionTest(5, findLongestWord(["abcd", "abcde"])));
console.log(myFunctionTest("abd", reverse("dba")));
console.assert("abd"===reverse("dba"));
console.assert(6===sum([1, 2, 3]));
console.log(myFunctionTest(6, sum([1, 2, 3])));
console.log(myFunctionTest(6, sum([1, 2, 3])));
console.log(myFunctionTest(true, isVowel("e")));