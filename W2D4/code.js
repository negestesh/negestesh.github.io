/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-extend-native */
/* eslint-disable linebreak-style */

/* this is a filter function on the String object */
String.prototype.filter = function filter(string) {
  const word = `${string} `;
  if (this.indexOf(string) < 0) {
    return this;
  }

  return this.replace(word, '');
};

/* this is a bubble sort algorithm on the Array object */
Array.prototype.bubbleSort = function bubbleSort() {
  let swapp;
  let len = this.length - 1;
  const sortedArray = this;
  do {
    swapp = false;
    for (let i = 0; i < len; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;
        swapp = true;
      }
    }
    len--;
  } while (swapp);
  return sortedArray;
};

/* this is the code for the 3rd question: creating an object */
const Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return `${this.name}, ${this.age} years old. `;
};
const Teacher = function () {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};
const teacher = new Teacher();
teacher.initialize('Dylan', 30);
teacher.teach('Inheritance');
console.log(teacher.describe());
/* you can find the output of this part of the code in the console */