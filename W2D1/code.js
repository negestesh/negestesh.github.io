'use strict';

function sum(array) {
  let initialValue = 0;
  return array.reduce(((accumulator, currentValue) => accumulator = accumulator + currentValue), initialValue);
}

function multiply(array) {
  let initialValue = 1;
  return array.reduce(((accumulator, currentValue) => accumulator = accumulator * currentValue), initialValue);
}

function reverseString(string) {
  let reversedString = string => [...string].reverse().join('');
  return reversedString(string);
}

function filterLongWords(words, i) {
  return words.filter(words => words.length > i);

}
