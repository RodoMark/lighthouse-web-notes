"use strict";

// This class represents all that is common between people, like the Student and the Mentor
class Person {
  // refactored into here since it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = `${this.name.toLowerCase()}@$lighthouselabs.com`;
  }

  // also identical between people
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

// By using the "extends" keyword we allow a class to inherit from another class.
// The syntax is class Child extends Parent {}

class Student extends Person {
  bio() {
    return `I'm a programming student at Lighthouse Labs. ${super.bio()}`;
  }

  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }

  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

const student1 = new Student("Bob", "My full name is Bobert");
const mentor1 = new Mentor("Bill", "My full name is Billiam");

student1.enroll("Improbable Names Crew");
student1.bio();
mentor1.goOnShift();
student1.bio();

console.log(student1, mentor1);
console.log(student1.bio(), "\n", mentor1.bio());
