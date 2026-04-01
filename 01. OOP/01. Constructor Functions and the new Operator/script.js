'use strict';

// Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Method
  /* NOTE: never create a method inside a constructor function */
};

const eph = new Person('Ephraim', 1988);
console.log(eph);
const matilda = new Person('Matilda', 2017);
console.log(matilda);

console.log(eph instanceof Person)